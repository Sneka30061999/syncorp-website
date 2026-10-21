import { useEffect, useRef, useState } from "react";
import { products, getProduct } from "../data/products.js";
import { useLanguage } from "../i18n/LanguageContext.jsx";

const EMAIL_RE = /^[^\s@]+@[^\s@]+\.[^\s@]{2,}$/;

// Sends the enquiry to VITE_FORM_ENDPOINT if set, otherwise stores it in localStorage (demo mode).
async function sendEnquiry(payload) {
  const endpoint = import.meta.env.VITE_FORM_ENDPOINT;
  if (endpoint) {
    const res = await fetch(endpoint, {
      method: "POST",
      headers: { "Content-Type": "application/json", Accept: "application/json" },
      body: JSON.stringify(payload),
    });
    if (!res.ok) throw new Error("Request failed");
    return;
  }
  await new Promise((r) => setTimeout(r, 700)); // simulate network
  const key = "syncorb_enquiries";
  const saved = JSON.parse(localStorage.getItem(key) || "[]");
  localStorage.setItem(key, JSON.stringify([...saved, payload]));
}

export default function ContactForm({ product = null, selectable = false, onDone, autoFocus = false }) {
  const { t } = useLanguage();
  const [productId, setProductId] = useState(product?.id ?? "");
  const [values, setValues] = useState({
    name: "",
    email: "",
    phone: "",
    message: product ? `${t("form_prefill")} ${product.name}.` : "",
  });
  const [touched, setTouched] = useState({});
  const [status, setStatus] = useState("idle"); // idle | sending | sent | error
  const messageEdited = useRef(false);
  const nameRef = useRef(null);

  useEffect(() => {
    if (autoFocus) nameRef.current?.focus();
  }, [autoFocus]);

  // Keep message prefill in sync with selected product (if user hasn't typed)
  useEffect(() => {
    if (messageEdited.current) return;
    const p = getProduct(productId);
    setValues((v) => ({
      ...v,
      message: p ? `${t("form_prefill")} ${p.name}.` : "",
    }));
  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [productId, t]);

  // Re-validate when language changes (error messages are translated)
  const validate = (v) => {
    const e = {};
    if (!v.name.trim()) e.name = t("form_err_name");
    else if (v.name.trim().length < 2) e.name = t("form_err_name_len");

    if (!v.email.trim()) e.email = t("form_err_email");
    else if (!EMAIL_RE.test(v.email.trim())) e.email = t("form_err_email_fmt");

    const digits = v.phone.replace(/[\s()+-]/g, "");
    if (!v.phone.trim()) e.phone = t("form_err_phone");
    else if (!/^\d{7,15}$/.test(digits)) e.phone = t("form_err_phone_fmt");

    if (!v.message.trim()) e.message = t("form_err_msg");
    else if (v.message.trim().length < 10) e.message = t("form_err_msg_len");
    return e;
  };

  const errors = validate(values);
  const show = (f) => touched[f] && errors[f];

  const onChange = (e) => {
    const { name, value } = e.target;
    if (name === "message") messageEdited.current = true;
    setValues((v) => ({ ...v, [name]: value }));
  };
  const onBlur = (e) => setTouched((t) => ({ ...t, [e.target.name]: true }));

  const onSubmit = async (e) => {
    e.preventDefault();
    setTouched({ name: true, email: true, phone: true, message: true });
    if (Object.keys(errors).length) {
      document.querySelector(".field.invalid input, .field.invalid textarea")?.focus();
      return;
    }
    setStatus("sending");
    try {
      await sendEnquiry({
        ...values,
        name: values.name.trim(),
        email: values.email.trim(),
        phone: values.phone.trim(),
        message: values.message.trim(),
        product: getProduct(productId)?.name ?? "General enquiry",
        submittedAt: new Date().toISOString(),
      });
      setStatus("sent");
    } catch {
      setStatus("error");
    }
  };

  if (status === "sent") {
    return (
      <div className="success" role="status">
        <div className="tick" aria-hidden="true">✓</div>
        <h3>{t("form_success_h3")}, {values.name.split(" ")[0]}.</h3>
        <p>
          {t("form_success_body")}
          {getProduct(productId) ? ` ${t("form_success_about")} ${getProduct(productId).name}` : ""}
          {" "}{t("form_success_reply")} {values.email} {t("form_success_soon")}
        </p>
        {onDone && <button className="btn btn-outline" onClick={onDone}>{t("form_close")}</button>}
      </div>
    );
  }

  const field = (name, label, props = {}) => (
    <div className={`field ${show(name) ? "invalid" : ""}`}>
      <label htmlFor={`cf-${name}`}>{label} <span aria-hidden="true">*</span></label>
      <input
        id={`cf-${name}`}
        name={name}
        value={values[name]}
        onChange={onChange}
        onBlur={onBlur}
        aria-invalid={!!show(name)}
        aria-describedby={show(name) ? `cf-${name}-err` : undefined}
        required
        ref={name === "name" ? nameRef : undefined}
        {...props}
      />
      {show(name) && <p className="error" id={`cf-${name}-err`}>{errors[name]}</p>}
    </div>
  );

  return (
    <form className="form" onSubmit={onSubmit} noValidate>
      {selectable && (
        <div className="field">
          <label htmlFor="cf-product">{t("form_product")}</label>
          <select id="cf-product" value={productId} onChange={(e) => setProductId(e.target.value)}>
            <option value="">{t("form_general")}</option>
            {products.map((p) => (
              <option key={p.id} value={p.id}>{p.name}</option>
            ))}
          </select>
        </div>
      )}

      <div className="row">
        {field("name", t("form_name"), { type: "text", autoComplete: "name" })}
        {field("phone", t("form_phone"), { type: "tel", autoComplete: "tel", inputMode: "tel" })}
      </div>
      {field("email", t("form_email"), { type: "email", autoComplete: "email" })}

      <div className={`field ${show("message") ? "invalid" : ""}`}>
        <label htmlFor="cf-message">{t("form_message")} <span aria-hidden="true">*</span></label>
        <textarea
          id="cf-message"
          name="message"
          rows="4"
          value={values.message}
          onChange={onChange}
          onBlur={onBlur}
          aria-invalid={!!show("message")}
          aria-describedby={show("message") ? "cf-message-err" : undefined}
          required
        />
        {show("message") && <p className="error" id="cf-message-err">{errors.message}</p>}
      </div>

      {status === "error" && (
        <p className="error banner" role="alert">{t("form_err_network")}</p>
      )}

      <button type="submit" className="btn btn-primary" disabled={status === "sending"}>
        {status === "sending" ? t("form_sending") : t("form_send")}
      </button>
    </form>
  );
}
