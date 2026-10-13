import { Link } from "react-router-dom";
import { useSelector } from "react-redux";
import { useLanguage } from "../i18n/LanguageContext.jsx";
import bgVideo from "../assets/background-video.mp4";

export default function Hero() {
  const theme = useSelector((state) => state.theme.mode);
  const { t } = useLanguage();

  return (
    <section className="hero" aria-labelledby="hero-title">
      {/* Background video — dark mode only */}
      {theme === "dark" && (
        <>
          <video
            className="hero-bg-video"
            src={bgVideo}
            autoPlay
            loop
            muted
            playsInline
            aria-hidden="true"
          />
          <div className="hero-smoke" aria-hidden="true" />
        </>
      )}

      <div className="container hero-grid">
        <div className="hero-copy">
          <p className="eyebrow">{t("hero_eyebrow")}</p>
          <h1 id="hero-title">{t("hero_tagline")}</h1>
          <p className="lead">{t("hero_intro")}</p>
          <div className="hero-actions">
            <Link to="/#products" className="btn btn-outline">{t("hero_explore")}</Link>
            <Link to="/contact" className="btn btn-outline">{t("hero_contactUs")}</Link>
          </div>
        </div>

        <div className="hero-art">
          <div className="laptop-scene" aria-hidden="true">
            <span className="blob blob-1" />
            <span className="blob blob-2" />
            <span className="blob blob-3" />
            <span className="orbit-ring orbit-ring-1" />
            <span className="orbit-ring orbit-ring-2" />
            <span className="particle p1" />
            <span className="particle p2" />
            <span className="particle p3" />
            <span className="particle p4" />
            <span className="particle p5" />
            <span className="particle p6" />
          </div>
          <div className="laptop-float">
            <img
              src="/syncorp-website/images/hero-laptop.svg"
              alt="Laptop showing a Syncorp analytics dashboard"
              width="900"
              height="560"
              fetchpriority="high"
            />
          </div>
        </div>
      </div>
    </section>
  );
}
