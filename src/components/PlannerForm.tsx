import { useState } from 'react';
import { useLanguage } from '../context/LanguageContext';
import { Destination } from '../types/destination';
import { generateItinerary } from '../lib/itinerary-planner';
import { getDestinations } from '../lib/get-destinations';

interface PlannerInputs {
  durationDays: number;
  budgetTier: 'low' | 'medium' | 'luxury';
  travelMonth: number;
  intensity: 'relaxed' | 'balanced' | 'packed';
  preferredCategories: string[];
}

interface DayPlan {
  day: number;
  region: { en: string; ar: string };
  stops: Destination[];
  totalDistanceKm: number;
  totalVisitHours: number;
}

export default function PlannerForm({ savedInterests }: { savedInterests: string[] }) {
  const { t, language } = useLanguage();
  const [inputs, setInputs] = useState<PlannerInputs>({
    durationDays: 3,
    budgetTier: 'medium' as const,
    travelMonth: new Date().getMonth() + 1,
    intensity: 'balanced' as const,
    preferredCategories: savedInterests.length > 0 ? savedInterests : ['culture', 'nature'],
  });
  const [itinerary, setItinerary] = useState<null | any>(null);
  const [loading, setLoading] = useState(false);

  const handleGenerate = async () => {
    setLoading(true);
    const destinations = getDestinations();
    const selectedDests = destinations.filter(d => savedInterests.includes(d.id));
    
    // Extract categories from saved interests
    const cats = [...new Set(selectedDests.flatMap(d => d.categories))];
    
    const result = generateItinerary(destinations, {
      ...inputs,
      preferredCategories: cats.length > 0 ? cats : inputs.preferredCategories,
    });
    
    setItinerary(result);
    setLoading(false);
  };

  const months = Array.from({ length: 12 }, (_, i) => i + 1);

  return (
    <div className="planner-container" style={{ maxWidth: '800px', margin: '0 auto', padding: '20px' }}>
      <h2>{t('Smart Itinerary Planner', 'مخطط الرحلات الذكي')}</h2>
      
      {/* Inputs */}
      <div className="inputs-grid" style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(200px, 1fr))', gap: '15px', marginBottom: '20px' }}>
        <div>
          <label>{t('Trip Duration', 'مدة الرحلة')} (1-7 {t('days', 'أيام')})</label>
          <input 
            type="range" 
            min="1" max="7" 
            value={inputs.durationDays}
            onChange={(e) => setInputs({...inputs, durationDays: Number(e.target.value)})}
          />
          <span>{inputs.durationDays} {t('days', 'أيام')}</span>
        </div>

        <div>
          <label>{t('Travel Month', 'شهر السفر')}</label>
          <select 
            value={inputs.travelMonth}
            onChange={(e) => setInputs({...inputs, travelMonth: Number(e.target.value)})}
          >
            {months.map(m => (
              <option key={m} value={m}>{t(`Month ${m}`, `الشهر ${m}`)}</option>
            ))}
          </select>
        </div>

        <div>
          <label>{t('Budget', 'الميزانية')}</label>
          <select 
            value={inputs.budgetTier}
            onChange={(e) => setInputs({...inputs, budgetTier: e.target.value as any})}
          >
            <option value="low">{t('Low', 'اقتصادي')}</option>
            <option value="medium">{t('Medium', 'متوسط')}</option>
            <option value="luxury">{t('Luxury', 'فاخر')}</option>
          </select>
        </div>

        <div>
          <label>{t('Intensity', 'الكثافة')}</label>
          <select 
            value={inputs.intensity}
            onChange={(e) => setInputs({...inputs, intensity: e.target.value as any})}
          >
            <option value="relaxed">{t('Relaxed', 'مريح')}</option>
            <option value="balanced">{t('Balanced', 'متوازن')}</option>
            <option value="packed">{t('Packed', 'مكثف')}</option>
          </select>
        </div>
      </div>

      <button 
        onClick={handleGenerate} 
        disabled={loading || savedInterests.length === 0}
        className="generate-itinerary-btn"
        style={{
          background: 'linear-gradient(45deg, #667eea, #764ba2)',
          color: 'white',
          border: 'none',
          padding: '15px 30px',
          borderRadius: '10px',
          fontSize: '16px',
          cursor: savedInterests.length === 0 ? 'not-allowed' : 'pointer',
          width: '100%',
          marginBottom: '20px'
        }}
      >
        {loading ? t('Generating...', 'جاري الإنشاء...') : t('Generate My Perfect Itinerary', 'إنشاء رحلتي المثالية')}
      </button>

      {savedInterests.length === 0 && (
        <p style={{ color: '#666', textAlign: 'center', fontStyle: 'italic' }}>
          {t('Save some destinations first from the discovery page', 'احفظ بعض الوجهات أولاً من صفحة الاستكشاف')}
        </p>
      )}

      {/* Results */}
      {itinerary && (
        <div className="itinerary-results">
          <div className="summary" style={{ background: '#f8f9fa', padding: '20px', borderRadius: '10px', marginBottom: '20px' }}>
            <h3>{t('Trip Summary', 'ملخص الرحلة')}</h3>
            <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(150px, 1fr))', gap: '10px' }}>
              <div><strong>{t('Total Distance', 'المسافة الإجمالية')}: {itinerary.totalDistanceKm.toFixed(0)} km</strong></div>
              <div><strong>{t('Total Cost', 'التكلفة الإجمالية')}: {itinerary.totalCostOMR.toFixed(1)} OMR</strong></div>
              <div><strong>{t('Days', 'الأيام')}: {inputs.durationDays}</strong></div>
            </div>
          </div>

          <h4>{t('Day-by-Day Plan', 'الخطة اليومية')}</h4>
          {itinerary.dayPlans.map((day: DayPlan) => (
            <div key={day.day} className="day-plan" style={{ 
              background: 'white', 
              border: '1px solid #e0e0e0', 
              borderRadius: '8px', 
              padding: '15px', 
              marginBottom: '15px' 
            }}>
              <h5>Day {day.day} - {day.region.en.toUpperCase()}</h5>
              <div>{day.stops.map((stop, i) => (
                <div key={stop.id} style={{ display: 'flex', alignItems: 'center', gap: '10px', padding: '8px 0' }}>
                  <span style={{ fontWeight: 'bold', minWidth: '20px' }}>{i + 1}.</span>
                  <img src={stop.image} alt={stop.name.en} style={{ width: '50px', height: '30px', objectFit: 'cover', borderRadius: '4px' }} />
                  <div>
                    <strong>{stop.name[language as keyof typeof stop.name]}</strong>
                    <div style={{ fontSize: '12px', color: '#666' }}>
                      {Math.round(stop.avg_visit_duration_minutes / 60)}h • {stop.ticket_cost_omr} OMR
                    </div>
                  </div>
                </div>
              ))}</div>
              <div style={{ fontSize: '14px', color: '#888', marginTop: '10px' }}>
                <strong>{t('Distance', 'المسافة')}: {day.totalDistanceKm.toFixed(0)} km • {t('Time', 'الوقت')}: {day.totalVisitHours.toFixed(1)}h
              </strong>
              </div>
            </div>
          ))}

          <div className="explanation" style={{ background: '#e8f5e8', padding: '15px', borderRadius: '8px', marginTop: '20px' }}>
            <h5>{t('Why this plan?', 'لماذا هذه الخطة؟')}</h5>
            <ul>
              {itinerary.scoreExplanation.map((reason, i) => (
                <li key={i}>{reason}</li>
              ))}
            </ul>
          </div>
        </div>
      )}
    </div>
  );
}

