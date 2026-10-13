import { Link } from "react-router-dom";
import { useLanguage } from "../i18n/LanguageContext.jsx";

export default function ProductCard({ product, index = 0 }) {
  const { t } = useLanguage();
  const url = `/products/${product.id}`;

  return (
    <article className="card glass" style={{ "--i": index }}>
      <Link to={url} className="card-img" aria-label={`View ${product.name} details`}>
        <img src={product.icon} alt={`${product.name} product icon`} loading="lazy" width="400" height="400" />
      </Link>
      <div className="card-body">
        <h3>{product.name}</h3>
        <p>{product.short}</p>
        <Link to={url} className="btn btn-outline">{t("products_learnMore")}</Link>
      </div>
    </article>
  );
}
