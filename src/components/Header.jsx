import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { useLocation } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";
import { toggleTheme } from "../store/themeSlice.js";
import Logo from "./Logo.jsx";

const links = [
  { label: "Home", to: "/" },
  { label: "About", to: "/#about" },
  { label: "Products", to: "/#products" },
  { label: "Solutions", to: "/#solutions" },
  { label: "Contact", to: "/contact" },
];

export default function Header() {
  const [open, setOpen] = useState(false);
  const { pathname, hash } = useLocation();
  const theme = useSelector((state) => state.theme.mode);
  const dispatch = useDispatch();

  useEffect(() => setOpen(false), [pathname, hash]);

  useEffect(() => {
    const onKey = (e) => e.key === "Escape" && setOpen(false);
    window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  }, []);

  const isActive = (to) => {
    if (to === "/contact") return pathname === "/contact";
    if (to === "/") return pathname === "/" && !hash;
    const h = to.replace("/", "");
    return (pathname === "/" && hash === h) || (h === "#products" && pathname.startsWith("/products"));
  };

  return (
    <header className="site-header">
      <div className="container header-inner">
        <Logo />
        <nav id="primary-nav" className={`nav ${open ? "open" : ""}`} aria-label="Primary">
          {links.map((l) => (
            <Link key={l.label} to={l.to} className={isActive(l.to) ? "active" : ""}>
              {l.label}
            </Link>
          ))}
        </nav>
        <button
          className="theme-toggle"
          onClick={() => dispatch(toggleTheme())}
          aria-label={`Switch to ${theme === "dark" ? "light" : "dark"} mode`}
          title={`Switch to ${theme === "dark" ? "light" : "dark"} mode`}
        >
          {theme === "dark" ? (
            /* Sun icon */
            <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
              <circle cx="12" cy="12" r="5"/><line x1="12" y1="1" x2="12" y2="3"/><line x1="12" y1="21" x2="12" y2="23"/>
              <line x1="4.22" y1="4.22" x2="5.64" y2="5.64"/><line x1="18.36" y1="18.36" x2="19.78" y2="19.78"/>
              <line x1="1" y1="12" x2="3" y2="12"/><line x1="21" y1="12" x2="23" y2="12"/>
              <line x1="4.22" y1="19.78" x2="5.64" y2="18.36"/><line x1="18.36" y1="5.64" x2="19.78" y2="4.22"/>
            </svg>
          ) : (
            /* Moon icon */
            <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
              <path d="M21 12.79A9 9 0 1 1 11.21 3 7 7 0 0 0 21 12.79z"/>
            </svg>
          )}
        </button>
        <a href="https://wa.me/910000000000" target="_blank" rel="noopener noreferrer" className="btn btn-outline header-cta">Get in Touch</a>
        <button
          className="menu-btn"
          aria-expanded={open}
          aria-controls="primary-nav"
          aria-label={open ? "Close menu" : "Open menu"}
          onClick={() => setOpen((o) => !o)}
        >
          <span /><span /><span />
        </button>
      </div>
    </header>
  );
}
