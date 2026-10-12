import { useEffect } from "react";
import { Routes, Route, useLocation } from "react-router-dom";
import { useSelector } from "react-redux";
import Header from "./components/Header.jsx";
import Footer from "./components/Footer.jsx";
import Home from "./pages/Home.jsx";
import ProductPage from "./pages/ProductPage.jsx";
import ContactPage from "./pages/ContactPage.jsx";
import NotFound from "./pages/NotFound.jsx";

// Scrolls to top on page change, or to the #section when the URL has a hash (e.g. /#products).
function ScrollManager() {
  const { pathname, hash } = useLocation();
  useEffect(() => {
    if (hash) {
      const el = document.getElementById(hash.slice(1));
      if (el) {
        requestAnimationFrame(() => el.scrollIntoView({ behavior: "smooth", block: "start" }));
        return;
      }
    }
    window.scrollTo({ top: 0 });
  }, [pathname, hash]);
  return null;
}

export default function App() {
  const theme = useSelector((state) => state.theme.mode);

  // Apply "light" or "dark" class to <html> so CSS variables can respond
  useEffect(() => {
    const root = document.documentElement;
    root.classList.remove("light", "dark");
    root.classList.add(theme);
  }, [theme]);

  // Global zoom-in/out effect on every .btn click and nav link click
  useEffect(() => {
    const triggerZoom = (el, cls) => {
      el.classList.remove(cls);
      void el.offsetWidth; // force reflow to restart animation
      el.classList.add(cls);
      el.addEventListener("animationend", () => el.classList.remove(cls), { once: true });
    };

    const handleClick = (e) => {
      // Buttons
      const btn = e.target.closest(".btn");
      if (btn) { triggerZoom(btn, "btn-zoom"); return; }

      // Nav links (Home, About, Products, Solutions, Contact)
      const navLink = e.target.closest(".nav a");
      if (navLink) { triggerZoom(navLink, "nav-zoom"); }
    };

    document.addEventListener("click", handleClick);
    return () => document.removeEventListener("click", handleClick);
  }, []);

  return (
    <>
      <a className="skip-link" href="#main">Skip to content</a>
      <ScrollManager />
      <Header />
      <main id="main">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/products/:productId" element={<ProductPage />} />
          <Route path="/contact" element={<ContactPage />} />
          <Route path="*" element={<NotFound />} />
        </Routes>
      </main>
      <Footer />

      {/* Floating WhatsApp button */}
      <a
        href="https://wa.me/910000000000"
        target="_blank"
        rel="noopener noreferrer"
        className="whatsapp-float"
        aria-label="Chat with us on WhatsApp"
      >
        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 48 48" width="32" height="32" aria-hidden="true">
          <path fill="#fff" d="M4.868 43.303l2.694-9.835a18.931 18.931 0 0 1-2.527-9.489C5.038 13.514 13.514 5.038 23.98 5.038c5.076.002 9.845 1.98 13.43 5.566 3.584 3.588 5.558 8.356 5.556 13.428-.004 10.465-8.48 18.942-18.943 18.942h-.007a18.96 18.96 0 0 1-9.055-2.301L4.868 43.303z"/>
          <path fill="#fff" d="M4.868 43.803a.5.5 0 0 1-.482-.631l2.639-9.636a19.428 19.428 0 0 1-2.497-9.557C4.532 13.238 13.238 4.532 23.98 4.532c5.21.002 10.105 2.031 13.784 5.713 3.678 3.683 5.703 8.577 5.701 13.783-.004 10.741-8.707 19.447-19.448 19.447h-.006a19.44 19.44 0 0 1-9.29-2.367l-9.66 2.534a.504.504 0 0 1-.193.161z"/>
          <path fill="#cfd8dc" d="M23.98 5.032c5.068.002 9.831 1.976 13.411 5.559 3.582 3.582 5.555 8.344 5.553 13.41-.004 10.456-8.473 18.927-18.927 18.927h-.007a18.907 18.907 0 0 1-9.041-2.298l-.505-.299-5.233 1.372 1.395-5.098-.331-.537a18.893 18.893 0 0 1-2.906-10.078c.004-10.456 8.474-18.958 18.591-18.958m0-1c-10.985 0-19.932 8.947-19.936 19.932a19.864 19.864 0 0 0 2.667 9.983l-2.806 10.245 10.493-2.751a19.9 19.9 0 0 0 9.516 2.42h.008c10.985 0 19.932-8.947 19.936-19.932.002-5.324-2.07-10.332-5.832-14.097C34.283 5.067 29.274 4.032 23.98 4.032z"/>
          <path fill="#40c351" d="M35.176 12.832a15.814 15.814 0 0 0-11.219-4.65c-8.737 0-15.845 7.106-15.849 15.843a15.789 15.789 0 0 0 2.112 7.923l.329.521-1.396 5.097 5.228-1.371.504.299a15.814 15.814 0 0 0 9.051 2.806h.006c8.73 0 15.838-7.108 15.841-15.845a15.764 15.764 0 0 0-4.607-11.623z"/>
          <path fill="#fff" fillRule="evenodd" d="M19.268 16.045c-.355-.79-.729-.806-1.068-.82-.277-.012-.593-.011-.909-.011-.316 0-.83.119-1.265.594-.435.475-1.661 1.622-1.661 3.956 0 2.334 1.7 4.59 1.937 4.906.237.316 3.282 5.259 8.104 7.161 4.007 1.58 4.823 1.266 5.693 1.187.87-.079 2.807-1.147 3.202-2.255.395-1.108.395-2.057.277-2.255-.119-.198-.435-.316-.909-.554s-2.807-1.385-3.242-1.543c-.435-.158-.751-.237-1.068.238-.316.474-1.225 1.543-1.502 1.859-.277.317-.554.357-1.028.119-.474-.237-2.002-.738-3.815-2.354-1.41-1.257-2.362-2.81-2.639-3.285-.277-.474-.03-.731.208-.968.213-.213.474-.554.712-.831.237-.277.316-.475.474-.791.158-.317.079-.594-.04-.831-.118-.238-1.049-2.584-1.461-3.518z"/>
        </svg>
      </a>
    </>
  );
}
