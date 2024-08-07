import React from 'react';
import './Foot.css';
import AccountBalanceIcon from '@mui/icons-material/AccountBalance';

const Foot = () => {
    return (
        <footer className="footer">
            <div className="footer-content">
                <div className="footer-title-container">
                    <AccountBalanceIcon className="footer-icon" />
                    <h3 className="footer-title">HallSpace</h3>
                </div>
                <p className="footer-tagline">Your one-stop solution for booking halls for events, meetings, and more.</p>
                <div className="footer-navigation">
                    <a href="/about" className="footer-nav-link">ABOUT US</a>
                    <a href="/faq" className="footer-nav-link">FAQ</a>
                    <a href="/contact" className="footer-nav-link">CONTACT US</a>
                </div>
                <div className="footer-icons">
                    <a href="https://facebook.com" target="_blank" rel="noopener noreferrer" className="footer-icon"><i className="fab fa-facebook-f"></i></a>
                    <a href="https://twitter.com" target="_blank" rel="noopener noreferrer" className="footer-icon"><i className="fab fa-twitter"></i></a>
                    <a href="https://google.com" target="_blank" rel="noopener noreferrer" className="footer-icon"><i className="fab fa-google"></i></a>
                    <a href="https://instagram.com" target="_blank" rel="noopener noreferrer" className="footer-icon"><i className="fab fa-instagram"></i></a>
                    <a href="https://linkedin.com" target="_blank" rel="noopener noreferrer" className="footer-icon"><i className="fab fa-linkedin-in"></i></a>
                    <a href="https://github.com" target="_blank" rel="noopener noreferrer" className="footer-icon"><i className="fab fa-github"></i></a>
                </div>
                <p className="footer-copyright">&copy; {new Date().getFullYear()}  HallSpace.com</p>
            </div>
        </footer>
    );
}

export default Foot;
