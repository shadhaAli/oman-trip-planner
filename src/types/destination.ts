export interface Destination {
  id: string;
  name: {
    en: string;
    ar: string;
  };
  lat: number;
  lng: number;
  region: {
    en: string;
    ar: string;
  };
  categories: string[];
  company: {
    en: string;
    ar: string;
  };
  avg_visit_duration_minutes: number;
  ticket_cost_omr: number;
  recommended_months: number[];
  crowd_level: number;
}
