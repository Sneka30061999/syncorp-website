import { Link } from "react-router-dom";
import { useLanguage } from "../i18n/LanguageContext.jsx";

export default function ProductCard({ product, index = 0 }) {
  const { t } = useLanguage();
  const url   = `/products/${product.id}`;
  const num   = String(index + 1).padStart(2, "0");

  return (
    <article className="scard" style={{ "--i": index }}>

      {/* ── Image ── */}
      <div className="scard-img-wrap">
        {/* card number top-left */}
        <span className="scard-num" aria-hidden="true">{num}</span>
        <img
          src={product.icon}
          alt={product.name}
          className="scard-img"
          loading={index < 3 ? "eager" : "lazy"}
        />
        {/* CLOUD SAAS badge bottom-left */}
        <span className="scard-badge">CLOUD SAAS</span>
      </div>

      {/* ── Body ── */}
      <div className="scard-body">
        <h3 className="scard-title">
          <Link to={url}>{product.name}</Link>
        </h3>
        <p className="scard-desc">{product.short}</p>

        <div className="scard-actions">
          <Link to={url} className="scard-link scard-link--primary">
            Platform Details
            <svg xmlns="http://www.w3.org/2000/svg" width="14" height="14"
              viewBox="0 0 24 24" fill="none" stroke="currentColor"
              strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
              <line x1="5" y1="12" x2="19" y2="12"/>
              <polyline points="12 5 19 12 12 19"/>
            </svg>
          </Link>
          <Link to={`/contact?product=${product.id}`} className="scard-link scard-link--ghost">
            Book Demo
            <svg xmlns="http://www.w3.org/2000/svg" width="13" height="13"
              viewBox="0 0 24 24" fill="none" stroke="currentColor"
              strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
              <line x1="7" y1="17" x2="17" y2="7"/>
              <polyline points="7 7 17 7 17 17"/>
            </svg>
          </Link>
        </div>
      </div>
    </article>
  );
}
