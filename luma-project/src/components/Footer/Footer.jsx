
import "./Footer.css";

export function Footer() {
  return (
    <footer className="footer">
      <div className="footerContent">
        <div className="footerBrand">
          <h2>LUMA.</h2>
          <p>
            Thoughtful furniture for spaces
            that feel like home.
          </p>
        </div>

        <div className="footerLinks">
          <h3>Explore</h3>
          <a href="/">Home</a>
          <a href="/collection">Collection</a>
          <a href="/about">About Us</a>
          <a href="/about">About Us</a>
          <a href="/about">About Us</a>
          <a href="/contact">Contact </a>
          <a href="/contact">Contact </a>
          <a href="/contact">Contact </a>
        </div>

        <div className="footerContact">
          <h3>Get in Touch</h3>
          <p>hello@luma.com</p>
          <p>+20 100 000 0000</p>
        </div>
      </div>

      <div className="footerBottom">
        <p>© 2026 LUMA. All rights reserved.</p>
        <p>Designed for Living.</p>
      </div>
    </footer>
  );
}
