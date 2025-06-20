import React from 'react'
import logo from '../assets/COJEDECOnew.png';
import '../styles/header.css';

function header() {
    return (
        <div>
            <header className="header">
                <a href='#home'> <img src={logo} alt="Logo COJEDECO TV" className="logo" /></a>
                <nav className="nav">
                    <ul className="nav-list">
                        <li className='nav-item'>
                            <a href="#home">Accueil</a>
                        </li>
                        <li className='nav-item'>
                            <a href="#about">À propos</a>
                        </li>
                        <li className='nav-item'>
                            <a href="#services">Services</a>
                        </li>
                        <li className='nav-item'>
                            <a href="#contact">Contact</a>
                        </li>
                    </ul>
                </nav>
            </header>
        </div>
    )
}

export default header
