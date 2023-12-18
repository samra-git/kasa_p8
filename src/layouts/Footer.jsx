import React from 'react';
import footer from '../assets/logo_footer.png'
import text from '../assets/text_footer.png';
// import '../style/sass/footer.scss';

const Footer = () => {
    return (
        <footer>
            <div className='imageFooter'>
            <img src={footer} alt={footer} />
            <img src={text} alt="copyright" />

            </div>

        </footer>
    );
};

export default Footer;