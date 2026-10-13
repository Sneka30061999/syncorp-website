import { Link } from "react-router-dom";
import useDocumentMeta from "../hooks/useDocumentMeta.js";
import { useLanguage } from "../i18n/LanguageContext.jsx";

export default function NotFound({ message }) {
  const { t } = useLanguage();
  useDocumentMeta("Page not found | Syncorp Technologies");

  return (
    <section className="section container notfound">
      <h1>{t("notfound_heading")}</h1>
      <p className="body-text">{message ?? t("notfound_body")}</p>
      <Link to="/" className="btn btn-primary">{t("notfound_back")}</Link>
    </section>
  );
}
