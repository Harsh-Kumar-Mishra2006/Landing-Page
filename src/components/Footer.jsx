import "./Footer.css";
// Optional: uncomment after installing react‑icons →  npm i react-icons
// import { FaFacebookF, FaInstagram, FaLinkedinIn } from "react-icons/fa";

function Footer() {
  const year = new Date().getFullYear();

  return (
    <footer className="site-footer">
      <div className="footer-inner">

        {/* ─── Left block: Logo + blurb ─────────────────────── */}
        <div className="footer-brand">
          <h3 className="footer-logo">Acheive Heights</h3>
          <p className="footer-desc">
            Based in Darbhanga (Bihar), Acheive Heights delivers high‑quality online
            education that empowers students nationwide to achieve their academic dreams.
          </p>
        </div>

        {/* ─── Middle block: Quick links (file/component names) ─ */}
        <nav className="footer-links">
          <h4>Site&nbsp;Links</h4>
          {/* Anchor IDs assume you have #home, #about, #courses in sections;
              replace with routes if/when you reintroduce React Router */}
          <a href="#home">Home</a>
          <a href="#about">About</a>
          <a href="#courses">Courses</a>
          <a href="#contact">Contact</a>
        </nav>

        {/* ─── Right block: Contact / socials ────────────────── */}
        <div className="footer-contact">
          <h4>Contact</h4>
          <p>Email: support@acheiveheights.in</p>
          <p>Darbhanga, Bihar 846004</p>

          {/* Uncomment icons when react‑icons installed
          <div className="socials">
            <a href="#"><FaFacebookF /></a>
            <a href="#"><FaInstagram /></a>
            <a href="#"><FaLinkedinIn /></a>
          </div> */}
        </div>
      </div>

      {/* Bottom strip */}
      <div className="footer-bar">
        © {year} Acheive Heights. All rights reserved.
      </div>
    </footer>
  );
}
export default Footer