import { Destination } from "../types/destination";
import { useLanguage } from "../context/LanguageContext";

export default function DestinationCard({ place }: { place: Destination }) {
  const { language, t } = useLanguage();
  
  return (
    <div className="card">
      <h3>{language === "en" ? place.name.en : place.name.ar}</h3>
      <p>{t("Type:", "النوع:")} {place.categories.join(", ")}</p>
      <p>{t("Region:", "المنطقة:")} {language === "en" ? place.region.en : place.region.ar}</p>
    </div>
  );
}
