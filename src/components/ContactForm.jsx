import { useState } from "react";

export default function ContactForm() {
  const [form, setForm] = useState({ name: "", email: "", phone: "", message: "" });
  const onChange = (e) => setForm({ ...form, [e.target.name]: e.target.value });

  const onSubmit = (e) => {
    e.preventDefault();
    const subject = encodeURIComponent(`Consultation request from ${form.name}`);
    const body = encodeURIComponent(
      `Name: ${form.name}\nEmail: ${form.email}\nPhone: ${form.phone}\n\nMessage:\n${form.message}`
    );
    window.location.href = `mailto:info@unipathconsulting.us?subject=${subject}&body=${body}`;
  };

  return (
    <form className="form modern" onSubmit={onSubmit}>
      <div className="fields">
        <div className="field">
          <input required name="name" value={form.name} onChange={onChange} placeholder=" " />
          <label>Name</label>
        </div>
        <div className="field">
          <input required type="email" name="email" value={form.email} onChange={onChange} placeholder=" " />
          <label>Email</label>
        </div>
        <div className="field">
          <input name="phone" value={form.phone} onChange={onChange} placeholder=" " />
          <label>WhatsApp / Phone</label>
        </div>
      </div>
      <div className="field">
        <textarea required name="message" rows="6" value={form.message} onChange={onChange} placeholder=" " />
        <label>Tell us about your goals…</label>
      </div>
      <button className="cta large" type="submit">Send Message</button>
      <p className="form-note">Prefer WhatsApp? <a href="https://wa.me/15085959834" target="_blank" rel="noreferrer">Chat with us</a>.</p>
    </form>
  );
}
