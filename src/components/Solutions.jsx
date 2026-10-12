import { company } from "../data/company.js";
import { Icon } from "./Icons.jsx";

export default function Solutions() {
  return (
    <section id="solutions" className="section solutions" aria-labelledby="solutions-title">
      <div className="container solutions-grid">
        <div>
          <p className="eyebrow">Our Solutions</p>
          <h2 id="solutions-title">Built for Your Business Goals</h2>
          <p className="body-text">{company.solutionsText}</p>
        </div>
        <ul className="feature-grid">
          {company.solutions.map((s) => (
            <li key={s.title}>
              <span className="ficon"><Icon name={s.icon} /></span>
              <div>
                <h3>{s.title}</h3>
                <p>{s.text}</p>
              </div>
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}
