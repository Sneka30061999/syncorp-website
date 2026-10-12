import { useEffect, useRef, useState } from "react";
import { products, getProduct } from "../data/products.js";

const EMAIL_RE = /^[^\s@]+@[^\s@]+\.[^\s@]{2,}$/;

export const prefill = (product) =>
  product ? `I am interested in learning more about ${product.name}.` : "";

function validate(v) {
  const e = {};
  if (!v.name.trim()) e.name = "Enter your name.";
  else if (v.name.trim().length < 2) e.name = "Name must be at least 2 characters.";

  if (!v.email.trim()) e.email = "Enter your email address.";
  else if (!EMAIL_RE.test(v.email.trim())) e.email = "Enter a valid email, like name@company.com.";

  const digits = v.phone.replace(/[\s()+-]/g, "");
  if (!v.phone.trim()) e.phone = "Enter your phone number.";
  else if (!/^\d{7,15}$/.test(digits)) e.phone = "Enter 7 to 15 digits. You may start with +.";

  if (!v.message.trim()) e.message = "Write a short message.";
  else if (v.message.trim().length < 10) e.message = "Message must be at least 10 characters.";
  return e;
}

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
  const key = "syncorp_enquiries";
  const saved = JSON.parse(localStorage.getItem(key) || "[]");
  localStorage.setItem(key, JSON.stringify([...saved, payload]));
}

export default function ContactForm({ product = null, selectable = false, onDone, autoFocus = false }) {
  const [productId, setProductId] = useState(product?.id ?? "");
  const [values, setValues] = useState({
    name: "",
    email: "",
    phone: "",
    message: prefill(product),
  });
  const [touched, setTouched] = useState({});
  const [status, setStatus] = useState("idle"); // idle | sending | sent | error
  const messageEdited = useRef(false);
  const nameRef = useRef(null);

  useEffect(() => {
    if (autoFocus) nameRef.current?.focus();
  }, [autoFocus]);

  // Keep message prefill in sync with the product when the visitor hasn't typed their own text
  useEffect(() => {
    if (messageEdited.current) return;
    setValues((v) => ({ ...v, message: prefill(getProduct(productId)) }));
  }, [productId]);

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
        <h3>Thank you, {values.name.split(" ")[0]}.</h3>
        <p>We received your message{getProduct(productId) ? ` about ${getProduct(productId).name}` : ""} and will reply to {values.email} soon.</p>
        {onDone && <button className="btn btn-outline" onClick={onDone}>Close</button>}
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
          <label htmlFor="cf-product">Product</label>
          <select id="cf-product" value={productId} onChange={(e) => setProductId(e.target.value)}>
            <option value="">General enquiry</option>
            {products.map((p) => (
              <option key={p.id} value={p.id}>{p.name}</option>
            ))}
          </select>
        </div>
      )}

      <div className="row">
        {field("name", "Name", { type: "text", autoComplete: "name" })}
        {field("phone", "Phone", { type: "tel", autoComplete: "tel", inputMode: "tel" })}
      </div>
      {field("email", "Email", { type: "email", autoComplete: "email" })}

      <div className={`field ${show("message") ? "invalid" : ""}`}>
        <label htmlFor="cf-message">Message <span aria-hidden="true">*</span></label>
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
        <p className="error banner" role="alert">Something went wrong sending your message. Check your connection and try again.</p>
      )}

      <button type="submit" className="btn btn-primary" disabled={status === "sending"}>
        {status === "sending" ? "Sending…" : "Send message"}
      </button>
    </form>
  );
}
