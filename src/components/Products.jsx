import ProductCard from "./ProductCard.jsx";
import useReveal from "../hooks/useReveal.js";
import { products } from "../data/products.js";
import { company } from "../data/company.js";

// Cards are generated from products.js, so adding a product there adds a card here.
export default function Products() {
  const gridRef = useReveal();
  return (
    <section id="products" className="section" aria-labelledby="products-title">
      <div className="container">
        <header className="center-head">
          <p className="eyebrow">Our Products</p>
          <h2 id="products-title">Powerful SaaS Products for Modern Businesses</h2>
          <p className="body-text">{company.productsIntro}</p>
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
