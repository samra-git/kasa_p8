import React from "react";
import footer from "../assets/logo_footer.png";
import footer_mobile from "../assets/logo_footer_mobile.png";
import text from "../assets/text_footer.png";
// import '../style/sass/footer.scss';

const Footer = () => {
  return (
    <footer>
      <div className="imageFooter">
        <div className="logoNoneMobile">
          <img src={footer} alt={footer} />
          <img src={text} alt="copyright" />
        </div>

        <img src={footer_mobile} alt="copyright" className="logoFooterMobile" />
      </div>
    </footer>
  );
};

export default Footer;
