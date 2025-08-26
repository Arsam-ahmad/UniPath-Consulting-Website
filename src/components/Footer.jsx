export default function Footer() {
  return (
    <footer className="footer">
      <div className="footer-grid">
        <div>
          <h3>Contact Info</h3>
          <p>
            WhatsApp: <a href="https://wa.me/15085959834" target="_blank" rel="noreferrer">+1 508-595-9834</a><br/>
            Email: <a href="mailto:info@unipathconsulting.us">info@unipathconsulting.us</a>
          </p>
          <p>© {new Date().getFullYear()} UniPath Consulting</p>
        </div>
        <div>
          <h3>Quick Links</h3>
          <ul>
            <li><a href="/#about">About Us</a></li>
            <li><a href="/#services">Services</a></li>
            <li><a href="/#faqs">FAQs</a></li>
            <li><a href="/contact">Book Consultation</a></li>
          </ul>
        </div>
      </div>
    </footer>
  );
}
