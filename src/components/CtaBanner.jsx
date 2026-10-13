import { Link } from "react-router-dom";
import { useLanguage } from "../i18n/LanguageContext.jsx";

export default function CtaBanner() {
  const { t } = useLanguage();

  return (
    <section className="cta" aria-labelledby="cta-title">
      <div className="container">
        <h2 id="cta-title">{t("cta_heading")}</h2>
        <p className="body-text">{t("cta_body")}</p>
        <Link to="/contact" className="btn btn-outline">{t("cta_btn")}</Link>
      </div>
    </section>
  );
}
