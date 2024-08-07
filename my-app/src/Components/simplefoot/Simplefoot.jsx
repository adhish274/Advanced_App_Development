import React from 'react';
import './Simplefoot.css';
import AccountBalanceIcon from '@mui/icons-material/AccountBalance';

const Simplefoot = () => {
    return (
        <footer className="simplefooter">
            <div className="simplefooter-content">
                <div className="fsimpleooter-title-container">
                    <AccountBalanceIcon className="simplefooter-icon" />
                    <h3 className="simplefooter-title">HallSpace</h3>
                </div>
                <p className="simplefooter-tagline">Your one-stop solution for booking halls for events, meetings, and more.</p>

                <div className="simplefooter-icons">
                    <a href="https://facebook.com" target="_blank" rel="noopener noreferrer" className="simplefooter-icon"><i className="fab fa-facebook-f"></i></a>
                    <a href="https://twitter.com" target="_blank" rel="noopener noreferrer" className="simplefooter-icon"><i className="fab fa-twitter"></i></a>
                    <a href="https://google.com" target="_blank" rel="noopener noreferrer" className="simplefooter-icon"><i className="fab fa-google"></i></a>
                    <a href="https://instagram.com" target="_blank" rel="noopener noreferrer" className="simplefooter-icon"><i className="fab fa-instagram"></i></a>
                    <a href="https://linkedin.com" target="_blank" rel="noopener noreferrer" className="simplefooter-icon"><i className="fab fa-linkedin-in"></i></a>
                    <a href="https://github.com" target="_blank" rel="noopener noreferrer" className="simplefooter-icon"><i className="fab fa-github"></i></a>
                </div>
                <p className="simplefooter-copyright">&copy; {new Date().getFullYear()}  HallSpace.com</p>
            </div>
        </footer>
    );
}

export default Simplefoot;
