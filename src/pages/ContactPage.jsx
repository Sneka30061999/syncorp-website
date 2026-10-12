import { useSearchParams } from "react-router-dom";
import ContactForm from "../components/ContactForm.jsx";
import useDocumentMeta from "../hooks/useDocumentMeta.js";
import { company } from "../data/company.js";
import { getProduct } from "../data/products.js";

export default function ContactPage() {
  const [params] = useSearchParams();
  const product = getProduct(params.get("product"));

  useDocumentMeta("Contact | Syncorp Technologies", "Contact Syncorp Technologies to learn more about our SaaS products.");

  return (
    <section className="section container contact-page">
      <div>
        <h1>Contact us</h1>
        <p className="body-text">Questions about a product, pricing or a demo? Send us a message and we will reply soon.</p>
        <ul className="contact-list">
          <li><strong>Email</strong><a href={`mailto:${company.email}`}>{company.email}</a></li>
          <li><strong>Phone</strong><a href={`tel:${company.phone.replace(/\s/g, "")}`}>{company.phone}</a></li>
          <li><strong>Address</strong><span>{company.address}</span></li>
          <li><strong>Hours</strong><span>{company.hours}</span></li>
        </ul>
      </div>
      <div className="glass form-wrap">
        <ContactForm key={product?.id ?? "none"} product={product} selectable />
      </div>
    </section>
  );
}
