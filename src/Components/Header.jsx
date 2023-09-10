import React from 'react';
import './Header.css'; // Import your CSS file for styling

const Header = () => {
    return (
        <nav className="navbar">
            <div className="logo">
                <img src="./images/logo_w2.png" alt="Logo" />
            </div>
            <ul className="nav-links">
                <li><a href="#">Home</a></li>
                <li><a href="#"> Services</a></li>
                <li><a href="#">Industry</a></li>
                <li><a href="#">About</a></li>
                <li><a href="#">Page</a></li>
                <li><a href="#">Blog</a></li>
                <li><a href="#">Contact</a></li>

                <div class="banner-btn-wrap">
                <button class="button button4">Contact Us</button>

                </div>

            </ul>
        </nav>

    );
};

export default Header;



