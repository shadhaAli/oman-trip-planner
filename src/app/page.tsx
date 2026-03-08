"use client";

import { useState } from "react";
import { getDestinations } from "../lib/get-destinations";
import TripMap from "../components/TripMap";
import DestinationCard from "../components/DestinationCard";
import { LanguageProvider, useLanguage } from "../context/LanguageContext";

function HomeContent() {
  const allPlaces = getDestinations();
  const { language, setLanguage, t } = useLanguage();

  const [filter, setFilter] = useState("all");

  const filtered =
    filter === "all"
      ? allPlaces
      : allPlaces.filter(p => p.categories.includes(filter));

  const toggleLanguage = () => {
    const newLang = language === "en" ? "ar" : "en";
    setLanguage(newLang);
    // Update document direction for RTL support
    document.documentElement.dir = newLang === "ar" ? "rtl" : "ltr";
    document.documentElement.lang = newLang;
  };

  return (
    <div className="container">

      <div className="header">
        <h1>{t("Oman Smart Trip Planner", "مخطط رحلات عُمان الذكي")}</h1>
        <button className="lang-toggle" onClick={toggleLanguage}>
          {language === "en" ? "العربية" : "English"}
        </button>
      </div>

      <div className="filters">
        <button onClick={() => setFilter("all")}>{t("All", "الكل")}</button>
        <button onClick={() => setFilter("nature")}>{t("Nature", "طبيعة")}</button>
        <button onClick={() => setFilter("beach")}>{t("Beach", "شاطئ")}</button>
        <button onClick={() => setFilter("mountain")}>{t("Mountain", "جبل")}</button>
        <button onClick={() => setFilter("culture")}>{t("Culture", "ثقافة")}</button>
        <button onClick={() => setFilter("desert")}>{t("Desert", "صحراء")}</button>
      </div>

      <div className="grid">
        {filtered.map(p => (
          <DestinationCard key={p.id} place={p} />
        ))}
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

