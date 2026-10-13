import { company } from "../data/company.js";
import { Icon } from "./Icons.jsx";

export default function About() {
  return (
    <section id="about" className="about" aria-labelledby="about-title">
      <div className="about-bg" aria-hidden="true" />
      <div className="container about-grid">
        <div className="about-img">
          <img src="/syncorp-website/images/mountains.svg" alt="Dark mountain landscape representing a strong foundation" loading="lazy" width="800" height="560" />
        </div>
        <div className="about-copy">
          <p className="eyebrow">Why Choose Syncorp</p>
          <h2 id="about-title">Your Trusted Technology Partner</h2>
          <p className="body-text">{company.about}</p>
          <ul className="why-grid">
            {company.whyPoints.map((w) => (
              <li key={w.title}>
                <span className="wicon"><Icon name={w.icon} size={32} /></span>
                <h3>{w.title}</h3>
                <p>{w.text}</p>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </section>
  );
}
