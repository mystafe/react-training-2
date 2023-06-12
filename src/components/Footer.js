import React from "react";
import "../css/Footer.css";

const Footer = () => {
  return (
    <footer>
      <div className="container">
        <div className="footer-content">
          <p>
            Ziyaretiniz için teşekkür ederiz! Daha fazla güncelleme ve heyecan
            verici özellikler için bağlantıda kalın.
          </p>
          <p>
            &copy; Şirket Adınız {new Date().getFullYear()}. Tüm hakları
            saklıdır. <a href="terms.html">Hizmet Şartları</a> |{" "}
            <a href="privacy.html">Gizlilik Politikası</a>
          </p>
          <ul className="social-media">
            <li>
              <a href="#">
                <i className="fab fa-facebook"></i>
              </a>
            </li>
            <li>
              <a href="#">
                <i className="fab fa-twitter"></i>
              </a>
            </li>
            <li>
              <a href="#">
                <i className="fab fa-instagram"></i>
              </a>
            </li>
          </ul>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
