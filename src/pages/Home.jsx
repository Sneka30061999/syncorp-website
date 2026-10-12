import Hero from "../components/Hero.jsx";
import Products from "../components/Products.jsx";
import Solutions from "../components/Solutions.jsx";
import About from "../components/About.jsx";
import CtaBanner from "../components/CtaBanner.jsx";
import useDocumentMeta from "../hooks/useDocumentMeta.js";

export default function Home() {
  useDocumentMeta(
    "Syncorp Technologies | Smart SaaS Solutions for Growing Businesses",
    "Syncorp Technologies builds innovative SaaS products that help businesses streamline operations, improve productivity and grow with confidence."
  );
  return (
    <>
      <Hero />
      <Products />
      <Solutions />
      <About />
      <CtaBanner />
    </>
  );
}
