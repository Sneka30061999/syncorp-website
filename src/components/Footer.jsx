import { Link } from "react-router-dom";
import Logo from "./Logo.jsx";
import { Icon, SocialIcons } from "./Icons.jsx";
import { company } from "../data/company.js";

export default function Footer() {
  return (
    <footer className="site-footer">
      <div className="container footer-grid">
        <div className="f-brand">
          <Logo />
        </div>

        <nav aria-label="Footer" className="f-nav">
          <Link to="/">Home</Link>
          <Link to="/#about">About</Link>
          <Link to="/#products">Products</Link>
          <Link to="/#solutions">Solutions</Link>
          <Link to="/contact">Contact</Link>
        </nav>

        <address className="f-contact">
          <a href={`mailto:${company.email}`}><Icon name="mail" size={20} /> {company.email}</a>
          <a href={`tel:${company.phone.replace(/\s/g, "")}`}><Icon name="phone" size={20} /> {company.phone}</a>
        </address>

        <SocialIcons />
      </div>
      <div className="container copyright">
        © {new Date().getFullYear()} {company.name}. All rights reserved.
      </div>
    </footer>
  );
}
