import { Link } from "react-router-dom";
import useDocumentMeta from "../hooks/useDocumentMeta.js";

export default function NotFound({ message = "That page does not exist." }) {
  useDocumentMeta("Page not found | Syncorp Technologies");
  return (
    <section className="section container notfound">
      <h1>Page not found</h1>
      <p className="body-text">{message}</p>
      <Link to="/" className="btn btn-primary">Go to home</Link>
    </section>
  );
}
