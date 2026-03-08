"use client";

import { useState } from "react";
import { getDestinations } from "../lib/get-destinations";
import TripMap from "../components/TripMap";
import DestinationCard from "../components/DestinationCard";
import { LanguageProvider, useLanguage } from "../context/LanguageContext";
import CategoryIcon from "../components/CategoryIcon";

const ITEMS_PER_PAGE = 10;

function HomeContent() {
  const allPlaces = getDestinations();
  const { language, setLanguage, t } = useLanguage();

  const [filter, setFilter] = useState("all");
  const [currentPage, setCurrentPage] = useState(1);

  const filtered =
    filter === "all"
      ? allPlaces
      : allPlaces.filter(p => p.categories.includes(filter));

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

  const categories = [
    { key: "all", labelEn: "All", labelAr: "الكل" },
    { key: "nature", labelEn: "Nature", labelAr: "طبيعة" },
    { key: "beach", labelEn: "Beach", labelAr: "شاطئ" },
    { key: "mountain", labelEn: "Mountain", labelAr: "جبل" },
    { key: "culture", labelEn: "Culture", labelAr: "ثقافة" },
    { key: "desert", labelEn: "Desert", labelAr: "صحراء" },
  ];

  return (
    <div className="container">

      <div className="header">
        <h1>{t("Oman Smart Trip Planner", "مخطط رحلات عُمان الذكي")}</h1>
        <button className="lang-toggle" onClick={toggleLanguage}>
          {language === "en" ? "العربية" : "English"}
        </button>
      </div>

      <div className="filters">
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
      </div>

      <div className="grid">
        {currentPlaces.map(p => (
          <DestinationCard key={p.id} place={p} />
        ))}
      </div>

      {totalPages > 1 && (
        <div className="pagination">
          <button 
            onClick={() => setCurrentPage(1)}
            disabled={currentPage === 1}
            className="page-btn"
          >
            &laquo;
          </button>
          <button 
            onClick={() => setCurrentPage(currentPage - 1)}
            disabled={currentPage === 1}
            className="page-btn"
          >
            &lsaquo;
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
            &rsaquo;
          </button>
          <button 
            onClick={() => setCurrentPage(totalPages)}
            disabled={currentPage === totalPages}
            className="page-btn"
          >
            &raquo;
          </button>
        </div>
      )}

      <div className="results-info">
        {t("Showing", "عرض")} {startIndex + 1}-{Math.min(endIndex, filtered.length)} {t("of", "من")} {filtered.length} {t("places", "مكان")}
      </div>

      <h2>{t("Trip Route", "مسار الرحلة")}</h2>

      <TripMap places={filtered} />

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

