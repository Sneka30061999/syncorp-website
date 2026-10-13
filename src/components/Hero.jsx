import { Link } from "react-router-dom";
import { useSelector } from "react-redux";
import { company } from "../data/company.js";
import bgVideo from "../assets/background-video.mp4";

export default function Hero() {
  const theme = useSelector((state) => state.theme.mode);

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
          {/* Smokey overlay for extra depth on left side */}
          <div className="hero-smoke" aria-hidden="true" />
        </>
      )}

      <div className="container hero-grid">
        <div className="hero-copy">
          <p className="eyebrow">{company.eyebrow}</p>
          <h1 id="hero-title">{company.tagline}</h1>
          <p className="lead">{company.intro}</p>
          <div className="hero-actions">
            <Link to="/#products" className="btn btn-outline">Explore Products</Link>
            <Link to="/contact" className="btn btn-outline">Contact Us</Link>
          </div>
        </div>

        <div className="hero-art">
          {/* Floating background scene */}
          <div className="laptop-scene" aria-hidden="true">
            {/* Ambient blobs */}
            <span className="blob blob-1" />
            <span className="blob blob-2" />
            <span className="blob blob-3" />

            {/* Orbiting ring */}
            <span className="orbit-ring orbit-ring-1" />
            <span className="orbit-ring orbit-ring-2" />

            {/* Floating particles */}
            <span className="particle p1" />
            <span className="particle p2" />
            <span className="particle p3" />
            <span className="particle p4" />
            <span className="particle p5" />
            <span className="particle p6" />
          </div>

          {/* Laptop image — floats up and down */}
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
