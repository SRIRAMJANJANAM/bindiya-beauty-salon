import React from "react";

function Footer() {
  const googleReviewLink = "https://search.google.com/local/writereview?placeid=ChIJJe7-fQFLsTsR5LKQxONUrpg";

  return (
    <>
      <style>{`
        .footer {
          background: linear-gradient(135deg, #3A1026 0%, #3B1830 55%, #6B1641 100%);
          color: #FFF5F3;
          padding: 60px 20px 20px;
          position: relative;
          overflow: hidden;
          border-top: 1px solid rgba(216, 167, 107, 0.35);
        }

        .footer::before {
          content: "";
          position: absolute;
          top: -120px;
          right: -80px;
          width: 260px;
          height: 260px;
          background: rgba(198, 90, 120, 0.25);
          border-radius: 50%;
          filter: blur(45px);
        }

        .footer::after {
          content: "";
          position: absolute;
          bottom: -120px;
          left: -80px;
          width: 260px;
          height: 260px;
          background: rgba(216, 167, 107, 0.18);
          border-radius: 50%;
          filter: blur(45px);
        }

        .footer-container {
          position: relative;
          z-index: 1;
          max-width: 1200px;
          margin: 0 auto;
          display: grid;
          grid-template-columns: 1.4fr 1fr 1fr 1.2fr;
          gap: 35px;
        }

        .footer-brand h2 {
          margin: 0 0 12px;
          font-size: 2rem;
          font-family: "Playfair Display", Georgia, serif;
          background: linear-gradient(135deg, #D8A76B, #FFE1A8, #D8A76B);
          -webkit-background-clip: text;
          -webkit-text-fill-color: transparent;
        }

        .footer-brand p {
          color: #EFD7D3;
          line-height: 1.7;
          margin: 0 0 22px;
          font-size: 0.98rem;
        }

        .footer-title {
          color: #D8A76B;
          font-size: 1.1rem;
          margin-bottom: 16px;
          font-weight: 700;
        }

        .footer-links,
        .footer-contact {
          display: flex;
          flex-direction: column;
          gap: 12px;
        }

        .footer-links a,
        .footer-contact a {
          color: #FFF5F3;
          text-decoration: none;
          font-size: 0.95rem;
          transition: all 0.3s ease;
          display: flex;
          align-items: center;
          gap: 10px;
        }

        .footer-links a i,
        .footer-contact a i {
          color: #C65A78;
          width: 18px;
        }

        .footer-links a:hover,
        .footer-contact a:hover {
          color: #D8A76B;
          transform: translateX(4px);
        }

        .social-icons {
          display: flex;
          gap: 12px;
          flex-wrap: wrap;
          margin-top: 8px;
        }

        .social-icons a {
          width: 42px;
          height: 42px;
          border-radius: 50%;
          background: rgba(251, 231, 234, 0.12);
          border: 1px solid rgba(216, 167, 107, 0.25);
          color: #D8A76B;
          display: flex;
          align-items: center;
          justify-content: center;
          text-decoration: none;
          transition: all 0.3s ease;
          font-size: 1.05rem;
        }

        .social-icons a:hover {
          background: #FBE7EA;
          color: #6B1641;
          transform: translateY(-5px);
        }

        .review-box {
          background: rgba(255, 253, 252, 0.08);
          border: 1px solid rgba(216, 167, 107, 0.25);
          border-radius: 22px;
          padding: 18px;
          box-shadow: 0 14px 35px rgba(0, 0, 0, 0.12);
        }

        .review-box p {
          color: #EFD7D3;
          line-height: 1.6;
          margin: 0 0 16px;
          font-size: 0.95rem;
        }

        .review-btn {
          display: inline-flex;
          align-items: center;
          justify-content: center;
          gap: 10px;
          width: 100%;
          padding: 13px 18px;
          border-radius: 40px;
          background: linear-gradient(135deg, #DB6B82, #6B1641);
          color: #FFFDFC;
          text-decoration: none;
          font-weight: 700;
          font-size: 0.95rem;
          box-shadow: 0 10px 25px rgba(219, 107, 130, 0.35);
          transition: all 0.3s ease;
        }

        .review-btn:hover {
          transform: translateY(-3px);
          background: linear-gradient(135deg, #C65A78, #6B1641);
          box-shadow: 0 14px 32px rgba(198, 90, 120, 0.45);
        }

        .footer-bottom {
          position: relative;
          z-index: 1;
          max-width: 1200px;
          margin: 38px auto 0;
          padding-top: 22px;
          border-top: 1px solid rgba(239, 215, 211, 0.22);
          display: flex;
          justify-content: space-between;
          align-items: center;
          gap: 18px;
          color: #FFF5F3;
          font-size: 0.95rem;
        }

        .footer-copy,
        .developed-by {
          margin: 0;
          line-height: 1.6;
          color: #FFF5F3;
          opacity: 1;
        }

        .developed-by {
          font-weight: 500;
          text-align: right;
        }

        .developed-by a {
          color: #D8A76B;
          text-decoration: none;
          font-weight: 800;
          letter-spacing: 0.4px;
        }

        .developed-by a:hover {
          color: #FFF5F3;
          text-decoration: underline;
        }

        /* ========== RESPONSIVE BREAKPOINTS ========== */

        /* Tablet - 900px */
        @media (max-width: 900px) {
          .footer-container {
            grid-template-columns: 1fr 1fr;
            gap: 30px;
          }

          .footer-brand {
            grid-column: 1 / -1;
          }

          .footer-brand h2 {
            font-size: 1.8rem;
          }

          .footer {
            padding: 50px 25px 20px;
          }
        }

        /* Mobile - 600px */
        @media (max-width: 600px) {
          .footer {
            padding: 40px 16px 16px;
          }

          .footer-container {
            grid-template-columns: 1fr;
            gap: 28px;
          }

          .footer-brand h2 {
            font-size: 1.6rem;
          }

          .footer-brand p {
            font-size: 0.9rem;
            margin-bottom: 18px;
          }

          .footer-title {
            font-size: 1rem;
            margin-bottom: 12px;
          }

          .footer-links a,
          .footer-contact a {
            font-size: 0.9rem;
          }

          .social-icons {
            gap: 10px;
          }

          .social-icons a {
            width: 38px;
            height: 38px;
            font-size: 0.95rem;
          }

          .review-box {
            padding: 16px;
            border-radius: 18px;
          }

          .review-box p {
            font-size: 0.9rem;
            margin-bottom: 14px;
          }

          .review-btn {
            padding: 12px 16px;
            font-size: 0.9rem;
          }

          .footer-bottom {
            flex-direction: column;
            justify-content: center;
            text-align: center;
            gap: 8px;
            font-size: 0.9rem;
            margin-top: 30px;
            padding-top: 18px;
          }

          .developed-by {
            text-align: center;
          }

          .developed-by a {
            display: inline-block;
            margin-top: 3px;
          }
        }

        /* Small Mobile - 400px */
        @media (max-width: 400px) {
          .footer {
            padding: 35px 14px 14px;
          }

          .footer-container {
            gap: 24px;
          }

          .footer-brand h2 {
            font-size: 1.45rem;
          }

          .footer-brand p {
            font-size: 0.85rem;
          }

          .social-icons a {
            width: 35px;
            height: 35px;
            font-size: 0.9rem;
          }

          .footer-links a,
          .footer-contact a {
            font-size: 0.85rem;
            gap: 8px;
          }

          .footer-links a i,
          .footer-contact a i {
            width: 16px;
          }

          .review-btn {
            padding: 11px 14px;
            font-size: 0.85rem;
          }

          .footer-bottom {
            font-size: 0.82rem;
            gap: 6px;
          }
        }
      `}</style>

      <footer className="footer">
        <div className="footer-container">
          <div className="footer-brand">
            <h2>Bindiya'z The signature salon and academy</h2>
            <p>
              Beauty, style, and confidence in one place. Experience premium
              salon services with a clean, elegant, and professional touch.
            </p>

            <div className="social-icons">
              <a
                href="https://www.instagram.com/bindiya_makeup_artist_atp/"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Instagram"
              >
                <i className="fa-brands fa-instagram"></i>
              </a>

              <a
                href="https://www.facebook.com/share/18LkoJoBc9/"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Facebook"
              >
                <i className="fa-brands fa-facebook-f"></i>
              </a>

              <a
                href="https://wa.me/916300593450"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="WhatsApp"
              >
                <i className="fa-brands fa-whatsapp"></i>
              </a>

              <a
                href="https://youtube.com/@shahinsulthana5558?si=zp-wKjxx1ExyDT20"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="YouTube"
              >
                <i className="fa-brands fa-youtube"></i>
              </a>
            </div>
          </div>

          <div>
            <h3 className="footer-title">Quick Links</h3>

            <div className="footer-links">
              <a href="/">
                <i className="fa-solid fa-house"></i>
                Home
              </a>

              <a href="/about">
                <i className="fa-solid fa-user-tie"></i>
                About
              </a>

              <a href="/gallery">
                <i className="fa-solid fa-images"></i>
                Gallery
              </a>

              <a href="/services">
                <i className="fa-solid fa-spa"></i>
                Services
              </a>

              <a href="/booking">
                <i className="fa-solid fa-calendar-check"></i>
                Booking
              </a>

              <a href="/contact">
                <i className="fa-solid fa-phone"></i>
                Contact
              </a>
            </div>
          </div>

          <div>
            <h3 className="footer-title">Contact</h3>

            <div className="footer-contact">
              <a href="tel:+916300593450">
                <i className="fa-solid fa-phone"></i>
                +91 6300593450
              </a>

              <a href="mailto:bindiyabeautycare@gmail.com">
                <i className="fa-solid fa-envelope"></i>
                bindiyabeautycare@gmail.com
              </a>

              <a
                href="https://www.google.com/maps"
                target="_blank"
                rel="noopener noreferrer"
              >
                <i className="fa-solid fa-location-dot"></i>
                Ananthapur, Andhra Pradesh
              </a>
            </div>
          </div>

          <div>
            <h3 className="footer-title">Love Our Service?</h3>

            <div className="review-box">
              <p>
                Your feedback helps us grow. Tap below to write a review on
                Google.
              </p>

              <a
                className="review-btn"
                href={googleReviewLink}
                target="_blank"
                rel="noopener noreferrer"
              >
                <i className="fa-brands fa-google"></i>
                Write a Google Review
              </a>
            </div>
          </div>
        </div>

        <div className="footer-bottom">
          <p className="footer-copy">
            © {new Date().getFullYear()} Bindya Saloon. All rights reserved.
          </p>

          <p className="developed-by">
            Developed by{" "}
            <a
              href="https://smyvisiontechnologies.vercel.app"
              target="_blank"
              rel="noopener noreferrer"
            >
              SMYVISION TECHNOLOGIES
            </a>
          </p>
        </div>
      </footer>
    </>
  );
}

export default Footer;