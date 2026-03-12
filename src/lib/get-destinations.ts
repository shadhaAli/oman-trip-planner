import { Destination } from "../types/destination";

export function getDestinations(): Destination[] {
  return [
    {
      id: "muscat1",
      name: { en: "Sultan Qaboos Grand Mosque", ar: "جامع السلطان قابوس الأكبر" },
      image: "https://img.freepik.com/premium-photo/sultan-qaboos-grand-mosque-muscat-oman_723123-72.jpg",
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
      image: "https://trueomantours.com/wp-content/uploads/2025/03/Sunset-in-Mutrah-Corniche.jpg",
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
      image: "https://peregrinetreks.com/wp-content/uploads/2024/01/Wadi-Bani-Khalid-Oman.webp",
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
      image: "https://i.pinimg.com/originals/14/8a/29/148a29fd16af5c06fa5cdf1a3bab35fe.png",
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
      image: "https://dynamic-media-cdn.tripadvisor.com/media/photo-o/0d/d7/03/44/amazing-royal-opera-house.jpg?w=1200&h=-1&s=1",
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
      image: "https://www.tripsavvy.com/thmb/lcTiRq5p9ZHPT9c4tZ-1ql0KRnI=/2048x1023/filters:no_upscale():max_bytes(150000):strip_icc()/National_Museum_Oman-470750aaaf6a41f38055f6fd233a5318.jpg",
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
      image: "https://tse2.mm.bing.net/th/id/OIP.YDB5i3k6pHAReRMX875WFwHaFJ",
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
      image: "https://i.pinimg.com/originals/b5/9d/03/b59d036bb86fca5e141d0d6b6ec5f70e.png",
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
      image: "https://tse4.mm.bing.net/th/id/OIP.12aoMQM1d8THTTJf7OthngHaFj",
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
      image: "https://tse1.mm.bing.net/th/id/OIP.jDaGsFYoZrVzAABmSpfs_AHaF7",
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
      image: "https://tse2.mm.bing.net/th/id/OIP.FuF15DoSkR_TE3ZrReWkrAHaE8",
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
      image: "https://th.bing.com/th/id/OIP.0lsFnVSgxy69mdGLFkjqfgHaE8",
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
      image: "https://tse3.mm.bing.net/th/id/OIP.FGeuteo08S7o80JqZcd9hQHaEL",
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
      image: "https://tse4.mm.bing.net/th/id/OIP.ug5Xu-C6bLAiDTL4ZWeTMQHaEo",
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
      image: "https://th.bing.com/th/id/R.f60cf45184cc6c90834ca57959976a5f",
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
      image: "https://www.gokite.travel/wp-content/uploads/2025/02/10-Stunning-Tourist-Attractions-in-Salalah-Oman-in-2025.webp",
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
      image: "https://tse1.mm.bing.net/th/id/OIP.BmmRMzgJB5HZuhyxcrOahwHaFj",
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
      image: "https://tse3.mm.bing.net/th/id/OIP.Z4uWFmNHjfXIeIbMZFchzQHaEy",
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
      image: "https://dynamic-media-cdn.tripadvisor.com/media/photo-o-0c/c0/c1/cb/falaj-daris-hotel.jpg?w=900&h=-1&s=1",
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
      image: "https://tse3.mm.bing.net/th/id/OIP.cQkY9OSgAtxqHYr0GLrbDAHaFV",
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
      image: "https://tse1.mm.bing.net/th/id/OIP.durYhMa6kohiABKvTYe8TgHaE8",
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
      image: "https://tse3.mm.bing.net/th/id/OIP.9JbSeXWg3AGYqvJ0TxpEUwHaEK",
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
      image: "https://images.squarespace-cdn.com/content/v1/596b2969d2b85786e6892853/e8b5b40f-a0da-4a64-ac2b-fa795b8fc298/6D2A9676.jpg?format=1500w",
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
      image: "https://tse4.mm.bing.net/th/id/OIP._ji9oRgUkicRUgQv1LaSvAHaD8",
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
      image: "https://tse1.mm.bing.net/th/id/OIP.BcPvhhg3kjyzoIwGOCN-hAHaE7",
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
      image: "https://tse3.mm.bing.net/th/id/OIP.XYkdLShfo1rr2A1m29POTQHaDF",
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
      image: "https://tse1.mm.bing.net/th/id/OIP.hiE8-CCTdmyCmQdzQQJEeAHaEK",
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
      image: "https://tse2.mm.bing.net/th/id/OIP.kvczusGkGehpDM-kf9QiQQHaEK",
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
      image: "https://th.bing.com/th/id/R.e000b0d3697da31dc276ac5ad7d513ba",
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
      image: "https://images.squarespace-cdn.com/content/v1/5d8ca8b3d46259208da62e42/5019a159-ebc7-4490-9649-2afb4fd5d171/Al-Hafa-09.jpg",
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
      image: "https://tse4.mm.bing.net/th/id/OIP.Q7-an9Me5IRGin6c_DNTdQHaEK?rs=1&pid=ImgDetMain&o=7&rm=3",
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
      image: "https://images.locationscout.net/2022/12/wadi-darbat-oman-oman-pcfs.jpg?h=1100&q=83",
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
      image: "https://tse4.mm.bing.net/th/id/OIP.xxEwzJrbXYqdNqhkvykN8gHaE8?rs=1&pid=ImgDetMain&o=7&rm=3",
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
      image: "https://tse1.mm.bing.net/th/id/OIP.5wHdhIduGpqzwyKzXeIheAHaFp?rs=1&pid=ImgDetMain&o=7&rm=3",
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
      name: { en: "Ibra", ar: "إبرا" },
      image: "https://tse3.mm.bing.net/th/id/OIP.6A-W34DGgtezP9Mk_XZNcgHaFj?rs=1&pid=ImgDetMain&o=7&rm=3",
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
      image: "https://th.bing.com/th/id/R.8381726264a37af4e991ecb7910128a2?rik=wq9WTVkBquz6pg&pid=ImgRaw&r=0",
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
      image: "https://www.civitatis.com/f/oman/al-hamra/al-hamra.jpg",
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
      image: "https://www.muchbetteradventures.com/magazine/content/images/2021/07/History-Books-Oman-Misfat-Al-Abriyeen-adventure-2.jpg",
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
      image: "https://tse4.mm.bing.net/th/id/OIP.SAPvWxnPuaNkqRHwMClqzgHaDn?rs=1&pid=ImgDetMain&o=7&rm=3",
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
      id: "muscat10",
      name: { en: "Shangri-La Barr Al Jissah", ar: "بر الجصة" },
      image: "https://www.africanwildlifesafaris.com/wp-content/uploads/2020/01/Barr-Al-Jissah-Feature.jpg",
      lat: 23.55,
      lng: 58.48,
      region: { en: "muscat", ar: "مسقط" },
      categories: ["beach","nature"],
      company: { en: "Shangri-La", ar: "شانغريلا" },
      avg_visit_duration_minutes: 180,
      ticket_cost_omr: 20,
      recommended_months: [10,11,12,1,2,3,4],
      crowd_level: 2
    },

    {
      id: "sharqiya9",
      name: { en: "Fins Beach", ar: "شاطئ فنس" },
      image: "data:image/webp;base64,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",
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
      image: "https://tse4.mm.bing.net/th/id/OIP.4Td4Rpz-772lWBXJYghw6QHaFj?rs=1&pid=ImgDetMain&o=7&rm=3",
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

