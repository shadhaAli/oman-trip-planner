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
      name: { en: "Qurum Beach", ar: "شاطئ القرم" },
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
      name: { en: "Wahiba Sands", ar: "رمال الوهيبة" },
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
      name: { en: "Jabal Akhdar", ar: "الجبل الأخضر" },
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
      region: { en: "buraimi", ar: "البريمي" },
      categories: ["culture","food"],
      company: { en: "Oman Tourism", ar: "سياحة عمان" },
      avg_visit_duration_minutes: 90,
      ticket_cost_omr: 0,
      recommended_months: [10,11,12,1,2,3,4],
      crowd_level: 3
    },

    {
      id: "sharqiya3",
      name: { en: "Wadi Shab", ar: "وادي شاب" },
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
      name: { en: "Falaj Daris", ar: "فلج دارس" },
      lat: 22.8333,
      lng: 57.55,
      region: { en: "dakhiliya", ar: "الداخلية" },
      categories: ["nature","culture"],
      company: { en: "Oman Tourism", ar: "سياحة عمان" },
      avg_visit_duration_minutes: 60,
      ticket_cost_omr: 3,
      recommended_months: [10,11,12,1,2,3,4],
      crowd_level: 2
    },

    {
      id: "muscat6",
      name: { en: "Al Riyam Park", ar: "حديقة الريام" },
      lat: 23.61,
      lng: 58.58,
      region: { en: "muscat", ar: "مسقط" },
      categories: ["nature"],
      company: { en: "Oman Tourism", ar: "سياحة عمان" },
      avg_visit_duration_minutes: 45,
      ticket_cost_omr: 0,
      recommended_months: [10,11,12,1,2,3,4],
      crowd_level: 3
    },

    {
      id: "muscat7",
      name: { en: "Bait Al Zubair", ar: "بيت الزبير" },
      lat: 23.615,
      lng: 58.592,
      region: { en: "muscat", ar: "مسقط" },
      categories: ["culture"],
      company: { en: "Oman Tourism", ar: "سياحة عمان" },
      avg_visit_duration_minutes: 60,
      ticket_cost_omr: 2,
      recommended_months: [10,11,12,1,2,3,4],
      crowd_level: 2
    },

    {
      id: "dakhiliya5",
      name: { en: "Izki", ar: "إزكي" },
      lat: 22.9333,
      lng: 57.7667,
      region: { en: "dakhiliya", ar: "الداخلية" },
      categories: ["culture","nature"],
      company: { en: "Oman Tourism", ar: "سياحة عمان" },
      avg_visit_duration_minutes: 60,
      ticket_cost_omr: 0,
      recommended_months: [10,11,12,1,2,3,4],
      crowd_level: 1
    },

    
    {
      id: "sharqiya4",
      name: { en: "Wadi Tiwi", ar: "وادي طيوي" },
      lat: 23.0833,
      lng: 58.5667,
      region: { en: "sharqiya", ar: "الشرقية" },
      categories: ["nature","mountain"],
      company: { en: "Oman Tourism", ar: "سياحة عمان" },
      avg_visit_duration_minutes: 90,
      ticket_cost_omr: 2,
      recommended_months: [10,11,12,1,2,3,4],
      crowd_level: 2
    },

    {
      id: "sharqiya5",
      name: { en: "Sur", ar: "صور" },
      lat: 22.5667,
      lng: 59.2833,
      region: { en: "sharqiya", ar: "الشرقية" },
      categories: ["culture","beach"],
      company: { en: "Oman Tourism", ar: "سياحة عمان" },
      avg_visit_duration_minutes: 120,
      ticket_cost_omr: 0,
      recommended_months: [10,11,12,1,2,3,4],
      crowd_level: 2
    },

    {
      id: "sharqiya6",
      name: { en: "Ras Al Jinz", ar: "رأس الجنز" },
      lat: 21.5167,
      lng: 59.0667,
      region: { en: "sharqiya", ar: "الشرقية" },
      categories: ["nature","beach"],
      company: { en: "Oman Tourism", ar: "سياحة عمان" },
      avg_visit_duration_minutes: 90,
      ticket_cost_omr: 5,
      recommended_months: [10,11,12,1,2,3,4],
      crowd_level: 2
    },

    {
      id: "batinah3",
      name: { en: "Sohar", ar: "صحار" },
      lat: 24.35,
      lng: 56.7,
      region: { en: "batinah", ar: "الباطنة" },
      categories: ["culture","beach"],
      company: { en: "Oman Tourism", ar: "سياحة عمان" },
      avg_visit_duration_minutes: 90,
      ticket_cost_omr: 0,
      recommended_months: [10,11,12,1,2,3,4],
      crowd_level: 2
    },

    {
      id: "batinah4",
      name: { en: "Sohar Fort", ar: "قلعة صحار" },
      lat: 24.3444,
      lng: 56.7075,
      region: { en: "batinah", ar: "الباطنة" },
      categories: ["culture"],
      company: { en: "Oman Tourism", ar: "سياحة عمان" },
      avg_visit_duration_minutes: 60,
      ticket_cost_omr: 3,
      recommended_months: [10,11,12,1,2,3,4],
      crowd_level: 2
    },

    {
      id: "musandam3",
      name: { en: "Telegraph Island", ar: "جزيرة التلغراف" },
      lat: 26.0833,
      lng: 56.0667,
      region: { en: "musandam", ar: "مسندم" },
      categories: ["nature","beach"],
      company: { en: "Oman Tourism", ar: "سياحة عمان" },
      avg_visit_duration_minutes: 60,
      ticket_cost_omr: 0,
      recommended_months: [10,11,12,1,2,3,4],
      crowd_level: 1
    },

    {
      id: "musandam4",
      name: { en: "Bander Al Khiran", ar: "بندر الخيران" },
      lat: 26.2,
      lng: 56.4,
      region: { en: "musandam", ar: "مسندم" },
      categories: ["beach","nature"],
      company: { en: "Oman Tourism", ar: "سياحة عمان" },
      avg_visit_duration_minutes: 90,
      ticket_cost_omr: 0,
      recommended_months: [10,11,12,1,2,3,4],
      crowd_level: 2
    },

    {
      id: "dhofar3",
      name: { en: "Al Hafa", ar: "الحافة" },
      lat: 17.0,
      lng: 54.1,
      region: { en: "dhofar", ar: "ظفار" },
      categories: ["culture","nature"],
      company: { en: "Oman Tourism", ar: "سياحة عمان" },
      avg_visit_duration_minutes: 60,
      ticket_cost_omr: 0,
      recommended_months: [6,7,8,9],
      crowd_level: 1
    },

    {
      id: "dhofar4",
      name: { en: "Ayn Razat", ar: "عين رزات" },
      lat: 17.0833,
      lng: 54.1333,
      region: { en: "dhofar", ar: "ظفار" },
      categories: ["nature"],
      company: { en: "Oman Tourism", ar: "سياحة عمان" },
      avg_visit_duration_minutes: 90,
      ticket_cost_omr: 0,
      recommended_months: [6,7,8,9],
      crowd_level: 1
    },

    {
      id: "dhofar5",
      name: { en: "Wadi Darbat", ar: "وادي دربات" },
      lat: 17.0833,
      lng: 54.1667,
      region: { en: "dhofar", ar: "ظفار" },
      categories: ["nature","mountain"],
      company: { en: "Oman Tourism", ar: "سياحة عمان" },
      avg_visit_duration_minutes: 120,
      ticket_cost_omr: 0,
      recommended_months: [6,7,8,9],
      crowd_level: 2
    },

    {
      id: "dhofar6",
      name: { en: "Taqa", ar: "طاقة" },
      lat: 16.8333,
      lng: 53.8333,
      region: { en: "dhofar", ar: "ظفار" },
      categories: ["culture","beach"],
      company: { en: "Oman Tourism", ar: "سياحة عمان" },
      avg_visit_duration_minutes: 60,
      ticket_cost_omr: 0,
      recommended_months: [6,7,8,9],
      crowd_level: 1
    },

    {
      id: "buraimi2",
      name: { en: "Al Sunaysilah", ar: "السنيسلة" },
      lat: 24.3167,
      lng: 55.85,
      region: { en: "buraimi", ar: "البريمي" },
      categories: ["nature"],
      company: { en: "Oman Tourism", ar: "سياحة عمان" },
      avg_visit_duration_minutes: 45,
      ticket_cost_omr: 0,
      recommended_months: [10,11,12,1,2,3,4],
      crowd_level: 1
    },

    {
      id: "sharqiya7",
      name: { en: "Ibra", ar: "عبري" },
      lat: 22.6833,
      lng: 58.55,
      region: { en: "sharqiya", ar: "الشرقية" },
      categories: ["culture"],
      company: { en: "Oman Tourism", ar: "سياحة عمان" },
      avg_visit_duration_minutes: 60,
      ticket_cost_omr: 0,
      recommended_months: [10,11,12,1,2,3,4],
      crowd_level: 2
    },

    {
      id: "sharqiya8",
      name: { en: "Al Mudhaby", ar: "المضيبي" },
      lat: 22.45,
      lng: 58.7,
      region: { en: "sharqiya", ar: "الشرقية" },
      categories: ["culture","desert"],
      company: { en: "Oman Tourism", ar: "سياحة عمان" },
      avg_visit_duration_minutes: 90,
      ticket_cost_omr: 0,
      recommended_months: [10,11,12,1,2,3,4],
      crowd_level: 1
    },

    {
      id: "dakhiliya7",
      name: { en: "Al Hamra", ar: "الحمراء" },
      lat: 23.0833,
      lng: 57.3167,
      region: { en: "dakhiliya", ar: "الداخلية" },
      categories: ["culture","mountain"],
      company: { en: "Oman Tourism", ar: "سياحة عمان" },
      avg_visit_duration_minutes: 60,
      ticket_cost_omr: 0,
      recommended_months: [10,11,12,1,2,3,4],
      crowd_level: 2
    },

    {
      id: "dakhiliya8",
      name: { en: "Misfat Al Abriyyin", ar: "مسفاة العبريين" },
      lat: 23.1167,
      lng: 57.2833,
      region: { en: "dakhiliya", ar: "الداخلية" },
      categories: ["culture","nature"],
      company: { en: "Oman Tourism", ar: "سياحة عمان" },
      avg_visit_duration_minutes: 60,
      ticket_cost_omr: 0,
      recommended_months: [10,11,12,1,2,3,4],
      crowd_level: 2
    },

    {
      id: "batinah5",
      name: { en: "Liwa", ar: "لوى" },
      lat: 23.95,
      lng: 57.55,
      region: { en: "batinah", ar: "الباطنة" },
      categories: ["nature","desert"],
      company: { en: "Oman Tourism", ar: "سياحة عمان" },
      avg_visit_duration_minutes: 90,
      ticket_cost_omr: 0,
      recommended_months: [10,11,12,1,2,3,4],
      crowd_level: 1
    },

    {
      id: "muscat9",
      name: { en: "Markaz Al Bahja", ar: "مركز بهجة" },
      lat: 23.65,
      lng: 58.62,
      region: { en: "muscat", ar: "مسقط" },
      categories: ["culture","food"],
      company: { en: "Oman Tourism", ar: "سياحة عمان" },
      avg_visit_duration_minutes: 90,
      ticket_cost_omr: 0,
      recommended_months: [10,11,12,1,2,3,4],
      crowd_level: 3
    },

    {
      id: "muscat10",
      name: { en: "Shangri-La Barr Al Jissah", ar: " بر الجصة" },
      lat: 23.55,
      lng: 58.48,
      region: { en: "muscat", ar: "مسقط" },
      categories: ["beach","nature"],
      company: { en: "Shangri-La", ar: "الشرقية" },
      avg_visit_duration_minutes: 180,
      ticket_cost_omr: 20,
      recommended_months: [10,11,12,1,2,3,4],
      crowd_level: 2
    },

    {
      id: "sharqiya9",
      name: { en: "Fins Beach", ar: "شاطئ فنس" },
      lat: 22.2333,
      lng: 59.3833,
      region: { en: "sharqiya", ar: "الشرقية" },
      categories: ["beach"],
      company: { en: "Oman Tourism", ar: "سياحة عمان" },
      avg_visit_duration_minutes: 60,
      ticket_cost_omr: 0,
      recommended_months: [10,11,12,1,2,3,4],
      crowd_level: 2
    },

    {
      id: "dakhiliya9",
      name: { en: "Birkat Al Mauz", ar: "بركة الموز" },
      lat: 23.1333,
      lng: 57.2667,
      region: { en: "dakhiliya", ar: "الداخلية" },
      categories: ["nature","culture"],
      company: { en: "Oman Tourism", ar: "سياحة عمان" },
      avg_visit_duration_minutes: 45,
      ticket_cost_omr: 0,
      recommended_months: [10,11,12,1,2,3,4],
      crowd_level: 2
    }
  ];
}
