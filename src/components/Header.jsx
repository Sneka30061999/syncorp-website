import { useEffect, useRef, useState } from "react";
import { Link, useLocation } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";
import { toggleTheme } from "../store/themeSlice.js";
import { useLanguage } from "../i18n/LanguageContext.jsx";
import Logo from "./Logo.jsx";

export default function Header() {
  const [open, setOpen] = useState(false);
  const [langOpen, setLangOpen] = useState(false);
  const { pathname, hash } = useLocation();
  const theme = useSelector((state) => state.theme.mode);
  const dispatch = useDispatch();
  const { t, lang, setLang, languages } = useLanguage();
  const langRef = useRef(null);
  const navLangRef = useRef(null);

  const links = [
    { key: "nav_home",      to: "/" },
    { key: "nav_about",     to: "/#about" },
    { key: "nav_products",  to: "/#products" },
    { key: "nav_solutions", to: "/#solutions" },
    { key: "nav_contact",   to: "/contact" },
  ];

  useEffect(() => setOpen(false), [pathname, hash]);

  useEffect(() => {
    const onKey = (e) => {
      if (e.key === "Escape") { setOpen(false); setLangOpen(false); }
    };
    window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  }, []);

  // Close lang dropdown when clicking outside (covers both desktop + mobile refs)
  useEffect(() => {
    const onClick = (e) => {
      const inDesktop = langRef.current && langRef.current.contains(e.target);
      const inNav     = navLangRef.current && navLangRef.current.contains(e.target);
      if (!inDesktop && !inNav) setLangOpen(false);
    };
    document.addEventListener("mousedown", onClick);
    return () => document.removeEventListener("mousedown", onClick);
  }, []);

  const isActive = (to) => {
    if (to === "/contact") return pathname === "/contact";
    if (to === "/") return pathname === "/" && !hash;
    const h = to.replace("/", "");
    return (pathname === "/" && hash === h) || (h === "#products" && pathname.startsWith("/products"));
  };

  const currentLang = languages.find((l) => l.code === lang);

  // Reusable language dropdown list (rendered in both desktop bar & mobile nav)
  const LangMenu = ({ menuRef }) => (
    <div className="lang-dropdown" ref={menuRef}>
      <button
        className="lang-btn"
        aria-haspopup="listbox"
        aria-expanded={langOpen}
        aria-label="Select language"
        onClick={() => setLangOpen((o) => !o)}
      >
        {/* Globe icon */}
        <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none"
          stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
          <circle cx="12" cy="12" r="10"/><line x1="2" y1="12" x2="22" y2="12"/>
          <path d="M12 2a15.3 15.3 0 0 1 4 10 15.3 15.3 0 0 1-4 10 15.3 15.3 0 0 1-4-10 15.3 15.3 0 0 1 4-10z"/>
        </svg>
        <span className="lang-label">{currentLang?.label}</span>
        <svg className={`lang-chevron ${langOpen ? "open" : ""}`}
          xmlns="http://www.w3.org/2000/svg" width="14" height="14" viewBox="0 0 24 24" fill="none"
          stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
          <polyline points="6 9 12 15 18 9"/>
        </svg>
      </button>

      {langOpen && (
        <ul className="lang-menu glass" role="listbox" aria-label="Language options">
          {languages.map((l) => (
            <li key={l.code} role="option" aria-selected={l.code === lang}>
              <button
                className={`lang-option ${l.code === lang ? "active" : ""}`}
                onClick={() => { setLang(l.code); setLangOpen(false); }}
              >
                {l.label}
                {l.code === lang && (
                  <svg xmlns="http://www.w3.org/2000/svg" width="14" height="14" viewBox="0 0 24 24" fill="none"
                    stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
                    <polyline points="20 6 9 17 4 12"/>
                  </svg>
                )}
              </button>
            </li>
          ))}
        </ul>
      )}
    </div>
  );

  // Reusable theme toggle button
  const ThemeToggle = () => (
    <button
      className="theme-toggle"
      onClick={() => dispatch(toggleTheme())}
      aria-label={`${t("theme_switch")} ${theme === "dark" ? t("theme_light") : t("theme_dark")} ${t("theme_mode")}`}
      title={`${t("theme_switch")} ${theme === "dark" ? t("theme_light") : t("theme_dark")} ${t("theme_mode")}`}
    >
      {theme === "dark" ? (
        /* Sun */
        <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none"
          stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
          <circle cx="12" cy="12" r="5"/>
          <line x1="12" y1="1" x2="12" y2="3"/><line x1="12" y1="21" x2="12" y2="23"/>
          <line x1="4.22" y1="4.22" x2="5.64" y2="5.64"/><line x1="18.36" y1="18.36" x2="19.78" y2="19.78"/>
          <line x1="1" y1="12" x2="3" y2="12"/><line x1="21" y1="12" x2="23" y2="12"/>
          <line x1="4.22" y1="19.78" x2="5.64" y2="18.36"/><line x1="18.36" y1="5.64" x2="19.78" y2="4.22"/>
        </svg>
      ) : (
        /* Moon */
        <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none"
          stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
          <path d="M21 12.79A9 9 0 1 1 11.21 3 7 7 0 0 0 21 12.79z"/>
        </svg>
      )}
    </button>
  );

  return (
    <header className="site-header">
      <div className="container header-inner">
        <Logo />

        {/* Nav — links + controls row at the bottom on mobile */}
        <nav id="primary-nav" className={`nav ${open ? "open" : ""}`} aria-label="Primary">
          {links.map((l) => (
            <Link key={l.key} to={l.to} className={isActive(l.to) ? "active" : ""}>
              {t(l.key)}
            </Link>
          ))}

          {/* Mobile-only controls row inside the nav panel */}
          <div className="nav-controls">
            <ThemeToggle />
            <LangMenu menuRef={navLangRef} />
          </div>
        </nav>

        {/* Desktop-only: theme toggle + lang dropdown in the header bar */}
        <ThemeToggle />
        <LangMenu menuRef={langRef} />

        {/* Hamburger — always last, margin-left:auto pushes it right on mobile */}
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
