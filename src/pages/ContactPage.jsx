import { useSearchParams } from "react-router-dom";
import ContactForm from "../components/ContactForm.jsx";
import useDocumentMeta from "../hooks/useDocumentMeta.js";
import { company } from "../data/company.js";
import { getProduct } from "../data/products.js";
import { useLanguage } from "../i18n/LanguageContext.jsx";

export default function ContactPage() {
  const [params] = useSearchParams();
  const product = getProduct(params.get("product"));
  const { t } = useLanguage();

  useDocumentMeta("Contact | Syncorp Technologies", "Contact Syncorp Technologies to learn more about our SaaS products.");

  return (
    <section className="section container contact-page">
      <div>
        <h1>{t("contact_heading")}</h1>
        <p className="body-text">{t("contact_body")}</p>
        <ul className="contact-list">
          <li><strong>{t("contact_email")}</strong><a href={`mailto:${company.email}`}>{company.email}</a></li>
          <li><strong>{t("contact_phone")}</strong><a href={`tel:${company.phone.replace(/\s/g, "")}`}>{company.phone}</a></li>
          <li><strong>{t("contact_address")}</strong><span>{company.address}</span></li>
          <li><strong>{t("contact_hours")}</strong><span>{company.hours}</span></li>
        </ul>
      </div>
      <div className="glass form-wrap">
        <ContactForm key={product?.id ?? "none"} product={product} selectable />
      </div>
    </section>
  );
}
