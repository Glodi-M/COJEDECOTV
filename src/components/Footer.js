import React from 'react'
import '../styles/footer.css';

function Footer() {
    return (
        <footer className='footer'>
            <div className="footer-content">
                <p>© 2025 COJEDECO TV. Tous droits réservés.</p>
                <p>Rejoins-nous sur les réseaux sociaux :</p>
                <ul className="footer-link">
                    <li><a href="https://www.facebook.com/COJEDECO" target="_blank" rel="noopener noreferrer">Facebook</a></li>
                    <li><a href="https://www.instagram.com/COJEDECO" target="_blank" rel="noopener noreferrer">Instagram</a></li>
                    <li><a href="https://www.twitter.com/COJEDECO" target="_blank" rel="noopener noreferrer">Twitter</a></li>
                </ul>
            </div>

        </footer>
    )
}

export default Footer;
