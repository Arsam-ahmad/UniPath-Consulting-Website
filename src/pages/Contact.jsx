import ContactForm from "../components/ContactForm.jsx";

export default function Contact() {
  return (
    <section className="page section">
      <header className="section-head">
        <span className="eyebrow">Get in Touch</span>
        <h2>Book a Free Consultation</h2>
        <p className="lead">
          Share your goals—We’ll reply from <a href="mailto:info@unipathconsulting.us">info@unipathconsulting.us</a>.
        </p>
      </header>

      <div className="grid split">
        <div className="card lift">
          <ContactForm />
        </div>

        <aside className="card">
          <h3>Contact Info</h3>
          <p>
            WhatsApp: <a href="https://wa.me/15085959834" target="_blank" rel="noreferrer">+1 508-595-9834</a><br/>
            Email: <a href="mailto:info@unipathconsulting.us">info@unipathconsulting.us</a>
          </p>
          <p className="small">Typical reply time: within 1–2 business days.</p>
        </aside>
      </div>
    </section>
  );
}
