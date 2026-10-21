import { useState } from "react";
import { products } from "../data/products.js";
import { useLanguage } from "../i18n/LanguageContext.jsx";
import ProductCard from "./ProductCard.jsx";
import useReveal from "../hooks/useReveal.js";

// Category chips shown at the top — add entries here to extend
const CATEGORIES = [
  {
    id: "Hospitality",
    label: "Hospitality",
    sub: "Cloud SaaS",
    icon: (
      <svg viewBox="0 0 40 40" fill="none" xmlns="http://www.w3.org/2000/svg" aria-hidden="true">
        <rect x="8" y="18" width="24" height="16" rx="3" stroke="currentColor" strokeWidth="2"/>
        <path d="M4 18L20 6l16 12" stroke="currentColor" strokeWidth="2" strokeLinecap="round"/>
        <rect x="15" y="24" width="10" height="10" rx="1" stroke="currentColor" strokeWidth="1.5"/>
      </svg>
    ),
  },
  {
    id: "Enterprise & SaaS",
    label: "Enterprise",
    sub: "ERP & SaaS",
    icon: (
      <svg viewBox="0 0 40 40" fill="none" xmlns="http://www.w3.org/2000/svg" aria-hidden="true">
        <rect x="6" y="6" width="12" height="12" rx="2" stroke="currentColor" strokeWidth="2"/>
        <rect x="22" y="6" width="12" height="12" rx="2" stroke="currentColor" strokeWidth="2"/>
        <rect x="6" y="22" width="12" height="12" rx="2" stroke="currentColor" strokeWidth="2"/>
        <rect x="22" y="22" width="12" height="12" rx="2" stroke="currentColor" strokeWidth="2"/>
      </svg>
    ),
  },
  {
    id: "Human Resources",
    label: "HR Tech",
    sub: "HRMS",
    icon: (
      <svg viewBox="0 0 40 40" fill="none" xmlns="http://www.w3.org/2000/svg" aria-hidden="true">
        <circle cx="20" cy="14" r="6" stroke="currentColor" strokeWidth="2"/>
        <path d="M8 34c0-6.627 5.373-12 12-12s12 5.373 12 12" stroke="currentColor" strokeWidth="2" strokeLinecap="round"/>
      </svg>
    ),
  },
];

// All unique tags from products list, deduped
function getAllTags(prods) {
  const tags = ["All"];
  prods.forEach((p) => {
    if (p.tag && !tags.includes(p.tag)) tags.push(p.tag);
  });
  return tags;
}

export default function Products() {
  const { t } = useLanguage();
  const allTags = getAllTags(products);
  const [activeTag, setActiveTag] = useState("All");
  const gridRef = useReveal();

  const filtered = activeTag === "All"
    ? products
    : products.filter((p) => p.tag === activeTag);

  return (
    <section id="products" className="section ps-section" aria-labelledby="ps-title">
      <div className="container">

        {/* ── Breadcrumb pill ── */}
        <div className="ps-breadcrumb-wrap">
          <span className="ps-breadcrumb">
            SYNCORB &nbsp;/&nbsp; PRODUCTS &amp; PLATFORMS
          </span>
        </div>

        {/* ── Heading ── */}
        <div className="ps-head">
          <h2 id="ps-title" className="ps-heading">{t("products_heading")}</h2>
          <p className="ps-subtext">{t("products_intro")}</p>
        </div>

        {/* ── Category icon chips ── */}
        <div className="ps-cat-chips" role="list">
          {CATEGORIES.map((cat) => (
            <button
              key={cat.id}
              role="listitem"
              className={`ps-cat-chip ${activeTag === cat.id ? "active" : ""}`}
              onClick={() => setActiveTag(activeTag === cat.id ? "All" : cat.id)}
              aria-pressed={activeTag === cat.id}
            >
              <span className="ps-cat-icon">{cat.icon}</span>
              <span className="ps-cat-label">{cat.label}</span>
              <span className="ps-cat-sub">{cat.sub}</span>
            </button>
          ))}
        </div>

        {/* ── Filter pills ── */}
        <div className="ps-filter-pills" role="tablist" aria-label="Filter products by category">
          {allTags.map((tag) => (
            <button
              key={tag}
              role="tab"
              aria-selected={activeTag === tag}
              className={`ps-pill ${activeTag === tag ? "active" : ""}`}
              onClick={() => setActiveTag(tag)}
            >
              {tag === "All"
                ? `${t("products_eyebrow").split(" ")[0]} Platforms (${products.length})`
                : tag}
            </button>
          ))}
        </div>

        {/* ── Product cards ── */}
        <div className="pcard-grid reveal" ref={gridRef}>
          {filtered.map((p, i) => (
            <ProductCard key={p.id} product={p} index={i} />
          ))}
        </div>

      </div>
    </section>
  );
}
