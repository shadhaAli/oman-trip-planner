import { Destination } from "../types/destination";
import { useLanguage } from "../context/LanguageContext";
import CategoryIcon from "./CategoryIcon";

export default function DestinationCard({ place }: { place: Destination }) {
  const { language, t } = useLanguage();
  
  return (
    <div className="card">
      <div className="card-image">
        <img src={place.image} alt={language === "en" ? place.name.en : place.name.ar} />
      </div>
      <h3>{language === "en" ? place.name.en : place.name.ar}</h3>
      <div className="card-categories">
        {place.categories.map((category, index) => (
          <span key={category} className="category-badge">
            <CategoryIcon category={category} size="small" />
            <span>{category}</span>
            {index < place.categories.length - 1 && <span className="category-separator">, </span>}
          </span>
        ))}
      </div>
      <p>{t("Region:", "المنطقة:")} {language === "en" ? place.region.en : place.region.ar}</p>
    </div>
  );
}

