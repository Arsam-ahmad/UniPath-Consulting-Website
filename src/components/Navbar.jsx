import { Link } from "react-router-dom";
import logo from "../assets/logo.png";

export default function Navbar() {
  return (
    <header className="nav">
      <Link to="/" className="brand" aria-label="UniPath Consulting – Home">
        <img src={logo} alt="UniPath Consulting logo" />
        <span>UniPath Consulting</span>
      </Link>
      <nav>
        <a className="linklike" href="/#about">About Us</a>
        <a className="linklike" href="/#services">Services</a>
        <a className="linklike" href="/#faqs">FAQs</a>
        <a className="linklike" href="/contact">Contact</a>
        <a className="cta" href="/contact" aria-label="Book a free consultation">
  Book Free Consultation
</a>

      </nav>
    </header>
  );
}
