import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import ProductDetails from "../components/ProductDetails.jsx";
import ContactModal from "../components/ContactModal.jsx";
import NotFound from "./NotFound.jsx";
import useDocumentMeta from "../hooks/useDocumentMeta.js";
import { getProduct } from "../data/products.js";

export default function ProductPage() {
  const { productId } = useParams();
  const product = getProduct(productId);
  const [open, setOpen] = useState(false);

  useDocumentMeta(
    product ? `${product.name} | Syncorp Technologies` : "Product not found | Syncorp Technologies",
    product ? `${product.name}: ${product.subtitle}. ${product.short}` : undefined
  );

  // close the modal when moving to another product
  useEffect(() => setOpen(false), [productId]);

  if (!product) return <NotFound message="We could not find that product." />;

  return (
    <>
      <ProductDetails product={product} onGetInTouch={() => setOpen(true)} />
      {open && <ContactModal product={product} onClose={() => setOpen(false)} />}
    </>
  );
}
