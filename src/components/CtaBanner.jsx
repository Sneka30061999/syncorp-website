import { Link } from "react-router-dom";

export default function CtaBanner() {
  return (
    <section className="cta" aria-labelledby="cta-title">
      <div className="container">
        <h2 id="cta-title">Ready to Transform the Way You Work?</h2>
        <p className="body-text">Discover how Syncorp Technologies can help your business work smarter with modern software solutions.</p>
        <Link to="/contact" className="btn btn-outline">Contact Our Team</Link>
      </div>
    </section>
  );
}
