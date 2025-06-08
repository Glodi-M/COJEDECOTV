import React from 'react'
import logo from '../assets/COJEDECO4.png';
import '../styles/header.css';

export default function header() {
    return (
        <div>
            <header className="header">
                <img src={logo} alt="Logo COJEDECO TV" className="logo"/>
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
