import { useSearchParams } from "react-router-dom";
import ContactForm from "../components/ContactForm.jsx";
import useDocumentMeta from "../hooks/useDocumentMeta.js";
import { company } from "../data/company.js";
import { getProduct } from "../data/products.js";
import { useLanguage } from "../i18n/LanguageContext.jsx";
import { Icon } from "../components/Icons.jsx";

export default function ContactPage() {
  const [params] = useSearchParams();
  const product = getProduct(params.get("product"));
  const { t } = useLanguage();

  useDocumentMeta(
    "Contact | Syncorp Technologies",
    "Contact Syncorp Technologies to learn more about our SaaS products."
  );

  // Build a no-API-key Google Maps embed URL from the company address
  const mapSrc = `https://maps.google.com/maps?q=${encodeURIComponent(company.address)}&output=embed`;

  return (
    <div className="contact-page-wrap section">
      <div className="container">

        {/* ── Top row: info + form ── */}
        <div className="contact-page">
          {/* Left — info */}
          <div>
            <h1>{t("contact_heading")}</h1>
            <p className="body-text">{t("contact_body")}</p>
            <ul className="contact-list">
              <li>
                <strong>{t("contact_email")}</strong>
                <a href={`mailto:${company.email}`}>{company.email}</a>
              </li>
              <li>
                <strong>{t("contact_phone")}</strong>
                <a href={`tel:${company.phone.replace(/\s/g, "")}`}>{company.phone}</a>
              </li>
              <li>
                <strong>{t("contact_address")}</strong>
                <span>{company.address}</span>
              </li>
              <li>
                <strong>{t("contact_hours")}</strong>
                <span>{company.hours}</span>
              </li>
            </ul>
          </div>

          {/* Right — form */}
          <div className="glass form-wrap">
            <ContactForm key={product?.id ?? "none"} product={product} selectable />
          </div>
        </div>

        {/* ── Map ── */}
        <div className="contact-map-wrap">
          <div className="contact-map-header">
            <Icon name="map" size={18} />
            <span>{t("contact_address")} — {company.address}</span>
          </div>
          <div className="contact-map">
            <iframe
              title="Office location map"
              src={mapSrc}
              width="100%"
              height="100%"
              style={{ border: 0 }}
              allowFullScreen
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
            />
          </div>
        </div>

      </div>
    </div>
  );
}
