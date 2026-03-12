"use client";

import { useState } from "react";
import { getDestinations } from "../lib/get-destinations";
import TripMap from "../components/TripMap";
import DestinationCard from "../components/DestinationCard";
import { LanguageProvider, useLanguage } from "../context/LanguageContext";
import CategoryIcon from "../components/CategoryIcon";
import { Destination } from "../types/destination";

const ITEMS_PER_PAGE = 10;

function HomeContent() {
  const allPlaces = getDestinations();
  const { language, setLanguage, t } = useLanguage();

  const [filter, setFilter] = useState("all");
  const [monthFilter, setMonthFilter] = useState<number | null>(null);
  const [currentPage, setCurrentPage] = useState(1);
  const [selectedPlaces, setSelectedPlaces] = useState<string[]>([]);
  const [tripMode, setTripMode] = useState(false);
  const [tripPlaces, setTripPlaces] = useState<Destination[]>([]);

  let filtered = allPlaces;

  if (filter !== "all") {
    filtered = filtered.filter(p => p.categories.includes(filter));
  }

  if (monthFilter !== null) {
    filtered = filtered.filter(p => p.recommended_months.includes(monthFilter));
  }

  // Calculate pagination
  const totalPages = Math.ceil(filtered.length / ITEMS_PER_PAGE);
  const startIndex = (currentPage - 1) * ITEMS_PER_PAGE;
  const endIndex = startIndex + ITEMS_PER_PAGE;
  const currentPlaces = filtered.slice(startIndex, endIndex);

  const toggleLanguage = () => {
    const newLang = language === "en" ? "ar" : "en";
    setLanguage(newLang);
    document.documentElement.dir = newLang === "ar" ? "rtl" : "ltr";
    document.documentElement.lang = newLang;
  };

  const handleFilterChange = (newFilter: string) => {
    setFilter(newFilter);
    setCurrentPage(1);
  };

  const togglePlaceSelection = (placeId: string) => {
    if (tripMode) return; // Don't allow changes in trip mode
    
    setSelectedPlaces(prev => {
      if (prev.includes(placeId)) {
        return prev.filter(id => id !== placeId);
      }
      return [...prev, placeId];
    });
  };

  const generateTrip = () => {
    if (selectedPlaces.length === 0) {
      alert(language === "en" ? "Please select at least one place" : "يرجى اختيار مكان واحد على الأقل");
      return;
    }
    // Filter places based on selection
    const trip = allPlaces.filter(p => selectedPlaces.includes(p.id));
    setTripPlaces(trip);
    setTripMode(true);
    setFilter("all");
    setCurrentPage(1);
    alert(language === "en" ? `Trip generated with ${selectedPlaces.length} places!` : `تم إنشاء رحلة بـ ${selectedPlaces.length} أماكن!`);
  };

  const clearSelection = () => {
    setSelectedPlaces([]);
    setTripMode(false);
    setTripPlaces([]);
  };

  const editTrip = () => {
    setTripMode(false);
    setTripPlaces([]);
  };

  const categories = [
    { key: "all", labelEn: "All", labelAr: "الكل" },
    { key: "nature", labelEn: "Nature", labelAr: "طبيعة" },
    { key: "beach", labelEn: "Beach", labelAr: "شاطئ" },
    { key: "mountain", labelEn: "Mountain", labelAr: "جبل" },
    { key: "culture", labelEn: "Culture", labelAr: "ثقافة" },
    { key: "desert", labelEn: "Desert", labelAr: "صحراء" },
  ];

  // Display places - either trip places or filtered places
  const displayPlaces = tripMode ? tripPlaces : currentPlaces;

  return (
    <div className="container">

      <div className="header">
        <h1>{t("Oman Smart Trip Planner", "مخطط رحلات عُمان الذكي")}</h1>
        <button className="lang-toggle" onClick={toggleLanguage}>
          {language === "en" ? "العربية" : "English"}
        </button>
      </div>

      {/* Trip Mode Banner */}
      {tripMode && (
        <div className="trip-banner" style={{
          background: "linear-gradient(135deg, #667eea 0%, #764ba2 100%)",
          color: "white",
          padding: "15px 20px",
          borderRadius: "12px",
          marginBottom: "20px",
          display: "flex",
          justifyContent: "space-between",
          alignItems: "center",
          flexWrap: "wrap",
          gap: "10px"
        }}>
          <div>
            <h2 style={{ margin: 0, fontSize: "18px" }}>🗺️ {t("Your Trip", "رحلتك")}</h2>
            <p style={{ margin: "5px 0 0", opacity: 0.9, fontSize: "14px" }}>
              {tripPlaces.length} {t("destinations", "وجهات")} • {t("View route on map below", "شاهد المسار على الخريطة أدناه")}
            </p>
          </div>
          <button 
            onClick={editTrip}
            style={{
              background: "rgba(255,255,255,0.2)",
              border: "1px solid rgba(255,255,255,0.3)",
              color: "white",
              padding: "8px 16px",
              borderRadius: "6px",
              cursor: "pointer",
              fontSize: "14px"
            }}
          >
            {t("Edit Trip", "تعديل الرحلة")}
          </button>
        </div>
      )}

      {/* Destination List in Trip Order */}
      {tripMode && tripPlaces.length > 0 && (
        <div className="trip-order" style={{ marginBottom: "20px" }}>
          <h3 style={{ marginBottom: "10px" }}>📍 {t("Trip Itinerary", "خط الرحلة")}</h3>
          <div style={{ display: "flex", gap: "10px", flexWrap: "wrap" }}>
            {tripPlaces.map((place, index) => (
              <div key={place.id} style={{
                display: "flex",
                alignItems: "center",
                gap: "8px",
                background: index === 0 ? "#22c55e" : index === tripPlaces.length - 1 ? "#ef4444" : "#f0f0f0",
                color: index === 0 || index === tripPlaces.length - 1 ? "white" : "#333",
                padding: "8px 12px",
                borderRadius: "20px",
                fontSize: "13px"
              }}>
                <span style={{ fontWeight: "bold" }}>{index + 1}</span>
                <span>{place.name.en}</span>
                {index === 0 && "🚩"}
                {index === tripPlaces.length - 1 && "🏁"}
              </div>
            ))}
          </div>
        </div>
      )}

      {!tripMode && (
        <>
          <div className="filters" style={{ display: "flex", gap: "10px", justifyContent: "center", marginBottom: "20px", flexWrap: "wrap" }}>
            {categories.map(cat => (
              <button 
                key={cat.key} 
                onClick={() => handleFilterChange(cat.key)}
                className={filter === cat.key ? "active" : ""}
              >
                {cat.key !== "all" && <CategoryIcon category={cat.key} size="small" />}
                {language === "en" ? cat.labelEn : cat.labelAr}
              </button>
            ))}

            {/* Month Filter Dropdown */}
            <select 
              value={monthFilter || ''}
              onChange={(e) => {
                const val = e.target.value ? Number(e.target.value) : null;
                setMonthFilter(val);
              }}
              style={{ 
                padding: "8px 12px", 
                fontSize: "14px", 
                borderRadius: "6px", 
                border: "2px solid #3b82f6",
                backgroundColor: "#eff6ff",
                color: "#1e40af",
                cursor: "pointer"
              }}
            >
              <option value="">{t("All Months", "كل الشهور")}</option>
              {[1,2,3,4,5,6,7,8,9,10,11,12].map(m => {
                const monthNames = language === 'en' 
                  ? ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec']
                  : ['يناير', 'فبراير', 'مارس', 'أبريل', 'مايو', 'يونيو', 'يوليو', 'أغسطس', 'سبتمبر', 'أكتوبر', 'نوفمبر', 'ديسمبر'];
                return (
                  <option key={m} value={m}>
                    {monthNames[m-1]}
                  </option>
                );
              })}
            </select>
          </div>

          <div className="selection-bar">
            <span className="selection-count">
              {t("Selected:", "المحدد:")} {selectedPlaces.length} {t("places", "أماكن")}
            </span>
            <div className="selection-buttons">
              <button className="generate-btn" onClick={generateTrip}>
                {t("Generate My Trip", "إنشاء رحلتي")}
              </button>
              {selectedPlaces.length > 0 && (
                <button className="clear-btn" onClick={clearSelection}>
                  {t("Clear", "مسح")}
                </button>
              )}
            </div>
          </div>

          <div className="grid">
            {currentPlaces.map(p => (
              <div 
                key={p.id} 
                className={`card-wrapper ${selectedPlaces.includes(p.id) ? 'selected' : ''}`}
                onClick={() => togglePlaceSelection(p.id)}
              >
                <DestinationCard place={p} />
                <div className="select-indicator">
                  {selectedPlaces.includes(p.id) ? "✓" : "+"}
                </div>
              </div>
            ))}
          </div>

          <div className="results-info">
            {t("Showing", "عرض")} {startIndex + 1}-{Math.min(endIndex, filtered.length)} {t("of", "من")} {filtered.length} {t("places", "مكان")}
          </div>

          {totalPages > 1 && (
            <div className="pagination">
              <button 
                onClick={() => setCurrentPage(1)}
                disabled={currentPage === 1}
                className="page-btn"
              >
                ⟪
              </button>
              <button 
                onClick={() => setCurrentPage(currentPage - 1)}
                disabled={currentPage === 1}
                className="page-btn"
              >
                ←
              </button>
              
              {Array.from({ length: totalPages }, (_, i) => i + 1).map(page => (
                <button
                  key={page}
                  onClick={() => setCurrentPage(page)}
                  className={currentPage === page ? "page-btn active" : "page-btn"}
                >
                  {page}
                </button>
              ))}
              
              <button 
                onClick={() => setCurrentPage(currentPage + 1)}
                disabled={currentPage === totalPages}
                className="page-btn"
              >
                →
              </button>
              <button 
                onClick={() => setCurrentPage(totalPages)}
                disabled={currentPage === totalPages}
                className="page-btn"
              >
                ⟫
              </button>
            </div>
          )}
        </>
      )}

      <h2>{tripMode ? t(" Trip Route on Map", "مسار الرحلة على الخريطة") : t(" Trip Route", "مسار الرحلة")}</h2>

      {/* Always show the map with route calculation enabled when in trip mode */}
      <TripMap places={displayPlaces} showRoute={tripMode || displayPlaces.length >= 2} />

    </div>
  );
}

export default function Home() {
  return (
    <LanguageProvider>
      <HomeContent />
    </LanguageProvider>
  );
}

