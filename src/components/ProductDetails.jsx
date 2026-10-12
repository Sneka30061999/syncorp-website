import { Link } from "react-router-dom";
import { Icon } from "./Icons.jsx";

// Laptop frame used for the product screenshot (hero and "why" section)
function Laptop({ src, alt, priority = false }) {
  return (
    <div className="laptop">
      <div className="laptop-screen">
        <img src={src} alt={alt} width="1200" height="750" {...(priority ? { fetchpriority: "high" } : { loading: "lazy" })} />
      </div>
      <div className="laptop-base" aria-hidden="true" />
    </div>
  );
}

export default function ProductDetails({ product, onGetInTouch }) {
  const p = product;
  return (
    <article className="pd">
      {/* Hero */}
      <section className="pd-hero container" aria-labelledby="pd-title">
        <Link to="/#products" className="back-link"><Icon name="back" size={16} /> Back to Products</Link>
        <div className="pd-hero-grid">
          <div>
            <div className="pd-title-row">
              <span className="pd-icon"><img src={p.icon} alt="" width="64" height="64" /></span>
              <div>
                <h1 id="pd-title">{p.name}</h1>
                <p className="pd-sub">{p.subtitle}</p>
              </div>
            </div>
            <p className="pd-tagline">{p.tagline}</p>
            <p className="lead">{p.intro}</p>
            <div className="hero-actions">
              <button type="button" className="btn btn-outline" onClick={onGetInTouch}>
                Get in Touch <Icon name="arrow" size={16} />
              </button>
              {p.demoUrl && (
                <a className="btn btn-ghost" href={p.demoUrl} target="_blank" rel="noreferrer">
                  <Icon name="play" size={14} /> Watch Demo
                </a>
              )}
            </div>
          </div>
          <Laptop src={p.image} alt={`${p.name} dashboard screenshot`} priority />
        </div>
      </section>

      {/* Overview */}
      <section className="pd-section container pd-overview" aria-labelledby="ov-title">
        <div>
          <p className="eyebrow">Overview</p>
          <h2 id="ov-title">{p.overviewTitle}</h2>
          <p className="body-text">{p.purpose}</p>
          <ul className="pd-highlights">
            {p.highlights.map((h) => (
              <li key={h.title}>
                <span className="hicon"><Icon name={h.icon} size={26} /></span>
                <h3>{h.title}</h3>
                <p>{h.text}</p>
              </li>
            ))}
          </ul>
        </div>
        <div className="tilt glass">
          <img src={p.image} alt={`${p.name} in use`} width="1200" height="750" loading="lazy" />
        </div>
      </section>

      {/* Key features */}
      <section className="pd-section container" aria-labelledby="kf-title">
        <div className="kf-head">
          <div>
            <p className="eyebrow">Key Features</p>
            <h2 id="kf-title">{p.featuresTitle}</h2>
          </div>
          <p className="body-text">{p.featuresIntro}</p>
        </div>
        <ul className="kf-grid">
          {p.features.map((f) => (
            <li key={f.title}>
              <span className="ficon"><Icon name={f.icon} size={34} /></span>
              <div>
                <h3>{f.title}</h3>
                <p>{f.text}</p>
              </div>
            </li>
          ))}
        </ul>
      </section>

      {/* Why choose */}
      <section className="pd-section container pd-why" aria-labelledby="why-title">
        <Laptop src={p.image} alt={`${p.name} on a laptop`} />
        <div>
          <p className="eyebrow">Why Choose {p.name}</p>
          <h2 id="why-title">{p.whyTitle}</h2>
          <p className="body-text">{p.whyText}</p>
          <ul className="checks">
            {p.whyPoints.map((w) => (
              <li key={w}><Icon name="check" size={18} /> {w}</li>
            ))}
          </ul>
        </div>
      </section>

      {/* CTA */}
      {/* <section className="container pd-cta-wrap">
        <div className="pd-cta glass">
          <span className="cta-icon"><Icon name="send" size={34} /></span>
          <div className="cta-text">
            <h2>Ready to Get Started?</h2>
            <p>{p.ctaText}</p>
          </div>
          <button type="button" className="btn btn-outline" onClick={onGetInTouch}>
            Get in Touch <Icon name="arrow" size={16} />
          </button>
        </div>
      </section> */}
    </article>
  );
}
