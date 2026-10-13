import ProductCard from "./ProductCard.jsx";
import useReveal from "../hooks/useReveal.js";
import { products } from "../data/products.js";
import { useLanguage } from "../i18n/LanguageContext.jsx";

export default function Products() {
  const gridRef = useReveal();
  const { t } = useLanguage();

  return (
    <section id="products" className="section" aria-labelledby="products-title">
      <div className="container">
        <header className="center-head">
          <p className="eyebrow">{t("products_eyebrow")}</p>
          <h2 id="products-title">{t("products_heading")}</h2>
          <p className="body-text">{t("products_intro")}</p>
        </header>
        <div className="grid reveal" ref={gridRef}>
          {products.map((p, i) => (
            <ProductCard key={p.id} product={p} index={i} />
          ))}
        </div>
      </div>
    </section>
  );
}
