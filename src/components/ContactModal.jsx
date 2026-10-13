import { useEffect, useRef } from "react";
import ContactForm from "./ContactForm.jsx";
import { useLanguage } from "../i18n/LanguageContext.jsx";

// Accessible modal: closes on Esc / backdrop / close button, locks page scroll, restores focus.
export default function ContactModal({ product, onClose }) {
  const dialogRef = useRef(null);
  const { t } = useLanguage();

  useEffect(() => {
    const previous = document.activeElement;
    document.body.style.overflow = "hidden";

    const onKey = (e) => {
      if (e.key === "Escape") onClose();
      if (e.key === "Tab" && dialogRef.current) {
        const focusables = dialogRef.current.querySelectorAll(
          'button, [href], input, select, textarea, [tabindex]:not([tabindex="-1"])'
        );
        const list = [...focusables].filter((el) => !el.disabled);
        if (!list.length) return;
        const first = list[0];
        const last = list[list.length - 1];
        if (e.shiftKey && document.activeElement === first) { e.preventDefault(); last.focus(); }
        else if (!e.shiftKey && document.activeElement === last) { e.preventDefault(); first.focus(); }
      }
    };
    document.addEventListener("keydown", onKey);
    return () => {
      document.body.style.overflow = "";
      document.removeEventListener("keydown", onKey);
      previous?.focus?.();
    };
  }, [onClose]);

  return (
    <div className="modal-backdrop" onMouseDown={(e) => e.target === e.currentTarget && onClose()}>
      <div className="modal glass" role="dialog" aria-modal="true" aria-labelledby="modal-title" ref={dialogRef}>
        <button className="modal-close" onClick={onClose} aria-label={t("modal_close")}>×</button>
        <h2 id="modal-title">{t("modal_title")} {product.name}</h2>
        <p className="body-text">{t("modal_body")}</p>
        <ContactForm product={product} autoFocus onDone={onClose} />
      </div>
    </div>
  );
}
