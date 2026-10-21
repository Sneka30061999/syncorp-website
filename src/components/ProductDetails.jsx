import { Link } from "react-router-dom";
import { Icon } from "./Icons.jsx";
import { useLanguage } from "../i18n/LanguageContext.jsx";

export default function ProductDetails({ product, onGetInTouch }) {
  const p = product;
  const { t } = useLanguage();

  // fallback whoFor in case a product doesn't define it
  const whoFor = p.whoFor?.length ? p.whoFor : [];

  return (
    <article className="pd2">

      {/* ══ HERO ══ */}
      <section className="pd2-hero container" aria-labelledby="pd2-title">
        <Link to="/#products" className="back-link">
          <Icon name="back" size={16} /> {t("pd_back")}
        </Link>

        <div className="pd2-hero-grid">

          {/* Left — image */}
          <div className="pd2-img-col">
            <div className="pd2-img-wrap">
              <img
                src={p.image}
                alt={`${p.name} screenshot`}
                className="pd2-img"
                fetchpriority="high"
              />
            </div>
          </div>

          {/* Right — copy */}
          <div className="pd2-copy-col">
            <span className="pd2-category">{p.category}</span>
            <h1 id="pd2-title" className="pd2-title">{p.name}</h1>
            <p className="pd2-subtitle">{p.subtitle}</p>

            {/* Overview card */}
            <div className="pd2-overview-card">
              <p className="pd2-overview-label">{t("pd_overview")}</p>
              <p className="pd2-overview-text">{p.purpose}</p>
            </div>

            {/* CTAs */}
            <div className="pd2-ctas">
              <button type="button" className="pd2-btn-primary" onClick={onGetInTouch}>
                {t("pd_request_demo")}
              </button>
              <Link to="/#products" className="pd2-btn-ghost">
                {t("pd_all_platforms")}
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* ══ FEATURE GROUPS ══ */}
      {p.featureGroups?.length > 0 && (
        <section className="pd2-section pd2-features-section container" aria-labelledby="pd2-fg-title">
          <h2 id="pd2-fg-title" className="pd2-section-title">
            {p.featureSectionTitle || t("pd_features")}
          </h2>

          <ol className="pd2-fg-list">
            {p.featureGroups.map((group, gi) => (
              <li key={gi} className="pd2-fg-item">
                {/* Numbered heading */}
                <h3 className="pd2-fg-heading">
                  <span className="pd2-fg-num">{gi + 1}.</span>
                  {group.title}
                </h3>

                {/* Sub-points */}
                <ul className="pd2-fg-points">
                  {group.points.map((pt, pi) => (
                    <li key={pi} className="pd2-fg-point">
                      <span className="pd2-fg-dot" aria-hidden="true" />
                      <p>
                        {pt.label && (
                          <strong className="pd2-fg-label">{pt.label} </strong>
                        )}
                        {pt.text}
                      </p>
                    </li>
                  ))}
                </ul>
              </li>
            ))}
          </ol>
        </section>
      )}

      {/* ══ WHO IT'S FOR ══ */}
      {whoFor.length > 0 && (
        <section className="pd2-section pd2-who-section container" aria-labelledby="pd2-who-title">
          <h2 id="pd2-who-title" className="pd2-section-title">{t("pd_who_for")}</h2>
          <ul className="pd2-who-list">
            {whoFor.map((item) => (
              <li key={item} className="pd2-who-item">
                {/* Filled dark circle with white tick — matches screenshot */}
                <span className="pd2-who-check" aria-hidden="true">
                  <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18"
                    viewBox="0 0 24 24" aria-hidden="true">
                    <circle cx="12" cy="12" r="12" fill="currentColor"/>
                    <polyline points="6 12 10 16 18 8" fill="none"
                      stroke="#fff" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round"/>
                  </svg>
                </span>
                <span>{item}</span>
              </li>
            ))}
          </ul>
        </section>
      )}

      {/* ══ GET STARTED ══ */}
      {p.ctaText && (
        <section className="pd2-section pd2-cta-section container" aria-labelledby="pd2-gs-title">
          <h2 id="pd2-gs-title" className="pd2-section-title">{t("pd_get_started")}</h2>
          <p className="pd2-cta-text">{p.ctaText}</p>
        </section>
      )}

    </article>
  );
}
