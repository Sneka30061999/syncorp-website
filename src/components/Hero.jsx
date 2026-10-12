import { Link } from "react-router-dom";
import { company } from "../data/company.js";

export default function Hero() {
  return (
    <section className="hero" aria-labelledby="hero-title">
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
              src="/images/hero-laptop.svg"
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
