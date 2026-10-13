import { Icon } from "./Icons.jsx";
import { useLanguage } from "../i18n/LanguageContext.jsx";

export default function Solutions() {
  const { t } = useLanguage();

  const solutions = [
    { icon: "workflow", titleKey: "solutions_workflow",   textKey: "solutions_workflow_t" },
    { icon: "chart",    titleKey: "solutions_efficiency", textKey: "solutions_efficiency_t" },
    { icon: "cloud",    titleKey: "solutions_central",    textKey: "solutions_central_t" },
    { icon: "expand",   titleKey: "solutions_scale",      textKey: "solutions_scale_t" },
  ];

  return (
    <section id="solutions" className="section solutions" aria-labelledby="solutions-title">
      <div className="container solutions-grid">
        <div>
          <p className="eyebrow">{t("solutions_eyebrow")}</p>
          <h2 id="solutions-title">{t("solutions_heading")}</h2>
          <p className="body-text">{t("solutions_body")}</p>
        </div>
        <ul className="feature-grid">
          {solutions.map((s) => (
            <li key={s.titleKey}>
              <span className="ficon"><Icon name={s.icon} /></span>
              <div>
                <h3>{t(s.titleKey)}</h3>
                <p>{t(s.textKey)}</p>
              </div>
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}
