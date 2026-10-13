import { Icon } from "./Icons.jsx";
import { useLanguage } from "../i18n/LanguageContext.jsx";

export default function About() {
  const { t } = useLanguage();

  const whyPoints = [
    { icon: "target",   titleKey: "about_why1_title", textKey: "about_why1_text" },
    { icon: "users",    titleKey: "about_why2_title", textKey: "about_why2_text" },
    { icon: "code",     titleKey: "about_why3_title", textKey: "about_why3_text" },
    { icon: "refresh",  titleKey: "about_why4_title", textKey: "about_why4_text" },
  ];

  return (
    <section id="about" className="about" aria-labelledby="about-title">
      <div className="about-bg" aria-hidden="true" />
      <div className="container about-grid">
        <div className="about-img">
          <img
            src="/syncorp-website/images/mountains.svg"
            alt="Dark mountain landscape representing a strong foundation"
            loading="lazy"
            width="800"
            height="560"
          />
        </div>
        <div className="about-copy">
          <p className="eyebrow">{t("about_eyebrow")}</p>
          <h2 id="about-title">{t("about_heading")}</h2>
          <p className="body-text">{t("about_body")}</p>
          <ul className="why-grid">
            {whyPoints.map((w) => (
              <li key={w.titleKey}>
                <span className="wicon"><Icon name={w.icon} size={32} /></span>
                <h3>{t(w.titleKey)}</h3>
                <p>{t(w.textKey)}</p>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </section>
  );
}
