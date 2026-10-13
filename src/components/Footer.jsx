import { Link } from "react-router-dom";
import Logo from "./Logo.jsx";
import { Icon, SocialIcons } from "./Icons.jsx";
import { company } from "../data/company.js";
import { useLanguage } from "../i18n/LanguageContext.jsx";

export default function Footer() {
  const { t } = useLanguage();

  return (
    <footer className="site-footer">
      <div className="container footer-grid">
        <div className="f-brand">
          <Logo />
        </div>

        <nav aria-label="Footer" className="f-nav">
          <Link to="/">{t("nav_home")}</Link>
          <Link to="/#about">{t("nav_about")}</Link>
          <Link to="/#products">{t("nav_products")}</Link>
          <Link to="/#solutions">{t("nav_solutions")}</Link>
          <Link to="/contact">{t("nav_contact")}</Link>
        </nav>

        <address className="f-contact">
          <a href={`mailto:${company.email}`}><Icon name="mail" size={20} /> {company.email}</a>
          <a href={`tel:${company.phone.replace(/\s/g, "")}`}><Icon name="phone" size={20} /> {company.phone}</a>
        </address>

        <SocialIcons />
      </div>
      <div className="container copyright">
        © {new Date().getFullYear()} {company.name}. {t("footer_rights")}
      </div>
    </footer>
  );
}
