import { Destination } from "../types/destination";

export function getDestinations(): Destination[] {
  return [
    {
      id: "muscat1",
      name: { en: "Sultan Qaboos Grand Mosque", ar: "جامع السلطان قابوس الأكبر" },
      lat: 23.6146,
      lng: 58.5932,
      region: { en: "muscat", ar: "مسقط" },
      categories: ["culture"],
      company: { en: "Oman Tourism", ar: "سياحة عمان" },
      avg_visit_duration_minutes: 90,
      ticket_cost_omr: 0,
      recommended_months: [10,11,12,1,2,3],
      crowd_level: 4
    },

    {
      id: "muscat2",
      name: { en: "Mutrah Corniche", ar: "كورنيش مطرح" },
      lat: 23.6167,
      lng: 58.5833,
      region: { en: "muscat", ar: "مسقط" },
      categories: ["beach","nature"],
      company: { en: "Oman Tourism", ar: "سياحة عمان" },
      avg_visit_duration_minutes: 60,
      ticket_cost_omr: 0,
      recommended_months: [10,11,12,1,2,3,4],
      crowd_level: 3
    },

    {
      id: "sharqiya1",
      name: { en: "Wadi Bani Khalid", ar: "وادي بني خالد" },
      lat: 22.865,
      lng: 58.21,
      region: { en: "sharqiya", ar: "الشرقية" },
      categories: ["nature"],
      company: { en: "Oman Tourism", ar: "سياحة عمان" },
      avg_visit_duration_minutes: 120,
      ticket_cost_omr: 2,
      recommended_months: [10,11,12,1,2,3,4],
      crowd_level: 2
    },

    {
      id: "dakhiliya1",
      name: { en: "Nizwa Fort", ar: "قلعة نزوى" },
      lat: 22.9333,
      lng: 57.5333,
      region: { en: "dakhiliya", ar: "الداخلية" },
      categories: ["culture","mountain"],
      company: { en: "Oman Tourism", ar: "سياحة عمان" },
      avg_visit_duration_minutes: 90,
      ticket_cost_omr: 5,
      recommended_months: [10,11,12,1,2,3],
      crowd_level: 3
    },

    {
      id: "muscat3",
      name: { en: "Royal Opera House", ar: "دار الأوبرا السلطانية" },
      lat: 23.5929,
      lng: 58.5451,
      region: { en: "muscat", ar: "مسقط" },
      categories: ["culture"],
      company: { en: "Oman Tourism", ar: "سياحة عمان" },
      avg_visit_duration_minutes: 120,
      ticket_cost_omr: 15,
      recommended_months: [10,11,12,1,2,3,4],
      crowd_level: 3
    },

    {
      id: "muscat4",
      name: { en: "National Museum", ar: "المتحف الوطني" },
      lat: 23.6135,
      lng: 58.5918,
      region: { en: "muscat", ar: "مسقط" },
      categories: ["culture"],
      company: { en: "Oman Tourism", ar: "سياحة عمان" },
      avg_visit_duration_minutes: 120,
      ticket_cost_omr: 5,
      recommended_months: [10,11,12,1,2,3],
      crowd_level: 2
    },

    {
      id: "muscat5",
      name: { en: "Qurum Beach", ar: "شاطئ قرم" },
      lat: 23.5932,
      lng: 58.5418,
      region: { en: "muscat", ar: "مسقط" },
      categories: ["beach"],
      company: { en: "Oman Tourism", ar: "سياحة عمان" },
      avg_visit_duration_minutes: 60,
      ticket_cost_omr: 0,
      recommended_months: [3,4,5,6,7,8,9],
      crowd_level: 3
    },

    {
      id: "sharqiya2",
      name: { en: "Wahiba Sands", ar: "رمال الوهيب" },
      lat: 22.4167,
      lng: 58.9667,
      region: { en: "sharqiya", ar: "الشرقية" },
      categories: ["desert","nature"],
      company: { en: "Oman Tourism", ar: "سياحة عمان" },
      avg_visit_duration_minutes: 180,
      ticket_cost_omr: 10,
      recommended_months: [10,11,12,1,2,3],
      crowd_level: 2
    },

    {
      id: "dakhiliya2",
      name: { en: "Bahla Fort", ar: "قلعة بهلاء" },
      lat: 22.9833,
      lng: 57.3,
      region: { en: "dakhiliya", ar: "الداخلية" },
      categories: ["culture","mountain"],
      company: { en: "Oman Tourism", ar: "سياحة عمان" },
      avg_visit_duration_minutes: 90,
      ticket_cost_omr: 5,
      recommended_months: [10,11,12,1,2,3],
      crowd_level: 2
    },

    {
      id: "dakhiliya3",
      name: { en: "Jabal Akhdar", ar: "جبل الأخضر" },
      lat: 23.0833,
      lng: 57.2333,
      region: { en: "dakhiliya", ar: "الداخلية" },
      categories: ["mountain","nature"],
      company: { en: "Oman Tourism", ar: "سياحة عمان" },
      avg_visit_duration_minutes: 240,
      ticket_cost_omr: 5,
      recommended_months: [10,11,12,1,2,3,4],
      crowd_level: 2
    },

    {
      id: "batinah1",
      name: { en: "Nakhl Fort", ar: "قلعة نخل" },
      lat: 23.4,
      lng: 57.8667,
      region: { en: "batinah", ar: "الباطنة" },
      categories: ["culture"],
      company: { en: "Oman Tourism", ar: "سياحة عمان" },
      avg_visit_duration_minutes: 60,
      ticket_cost_omr: 3,
      recommended_months: [10,11,12,1,2,3,4],
      crowd_level: 2
    },

    {
      id: "batinah2",
      name: { en: "Barka Castle", ar: "قلعة بركاء" },
      lat: 23.7683,
      lng: 57.8988,
      region: { en: "batinah", ar: "الباطنة" },
      categories: ["culture","beach"],
      company: { en: "Oman Tourism", ar: "سياحة عمان" },
      avg_visit_duration_minutes: 45,
      ticket_cost_omr: 2,
      recommended_months: [10,11,12,1,2,3,4],
      crowd_level: 1
    },

    {
      id: "musandam1",
      name: { en: "Khasab", ar: "خصب" },
      lat: 26.1789,
      lng: 56.2478,
      region: { en: "musandam", ar: "مسندم" },
      categories: ["nature","mountain","beach"],
      company: { en: "Oman Tourism", ar: "سياحة عمان" },
      avg_visit_duration_minutes: 180,
      ticket_cost_omr: 0,
      recommended_months: [10,11,12,1,2,3,4],
      crowd_level: 2
    },

    {
      id: "musandam2",
      name: { en: "Dibba", ar: "دبا" },
      lat: 26.5556,
      lng: 56.2639,
      region: { en: "musandam", ar: "مسندم" },
      categories: ["beach","nature"],
      company: { en: "Oman Tourism", ar: "سياحة عمان" },
      avg_visit_duration_minutes: 120,
      ticket_cost_omr: 0,
      recommended_months: [10,11,12,1,2,3,4],
      crowd_level: 2
    },

    {
      id: "dhofar1",
      name: { en: "Al Mughsail Beach", ar: "شاطئ المغسيل" },
      lat: 16.9833,
      lng: 54.0333,
      region: { en: "dhofar", ar: "ظفار" },
      categories: ["beach","nature"],
      company: { en: "Oman Tourism", ar: "سياحة عمان" },
      avg_visit_duration_minutes: 60,
      ticket_cost_omr: 0,
      recommended_months: [6,7,8,9],
      crowd_level: 1
    },

    {
      id: "dhofar2",
      name: { en: "Salalah", ar: "صلالة" },
      lat: 17.0151,
      lng: 54.0922,
      region: { en: "dhofar", ar: "ظفار" },
      categories: ["beach","nature","culture"],
      company: { en: "Oman Tourism", ar: "سياحة عمان" },
      avg_visit_duration_minutes: 120,
      ticket_cost_omr: 0,
      recommended_months: [6,7,8,9],
      crowd_level: 2
    },

    {
      id: "buraimi1",
      name: { en: "Al Buraimi Souq", ar: "سوق البريمي" },
      lat: 24.2508,
      lng: 55.7931,
      region: { en: "buraimi", ar: "بريمي" },
      categories: ["culture","food"],
      company: { en: "Oman Tourism", ar: "سياحة عمان" },
      avg_visit_duration_minutes: 90,
      ticket_cost_omr: 0,
      recommended_months: [10,11,12,1,2,3,4],
      crowd_level: 3
    },

    {
      id: "sharqiya3",
      name: { en: "Wadi Shab", ar: "وادي شعب" },
      lat: 23.15,
      lng: 58.0667,
      region: { en: "sharqiya", ar: "الشرقية" },
      categories: ["nature","mountain"],
      company: { en: "Oman Tourism", ar: "سياحة عمان" },
      avg_visit_duration_minutes: 150,
      ticket_cost_omr: 3,
      recommended_months: [10,11,12,1,2,3,4],
      crowd_level: 3
    },

    {
      id: "dakhiliya4",
      name: { en: "Falaj Daris", ar: "فلج داريس" },
      lat: 22.8333,
      lng: 57.55,
      region: { en: "dakhiliya", ar: "الداخلية" },
      categories: ["nature","culture"],
      company: { en: "Oman Tourism", ar: "سياحة عمان" },
      avg_visit_duration_minutes: 60,
      ticket_cost_omr: 3,
      recommended_months: [10,11,12,1,2,3,4],
      crowd_level: 2
    }
  ];
}
