import React, { useState } from 'react';
import logo from '../assets/COJEDECO4.png';
import '../styles/hero.css';

function hero() {
  const [message, setMessage] = useState('Rejoins COJEDECOTV pour t\'inspirer un avenir meilleur !');

  const handleClick = () => {
    setMessage("Découvre nos vidéeos et commenece ton voyage dès aujourd'hui !")
  };

  return (
    <section id="home" className="hero">
      <div className="hero-image">
        <img src={logo} alt="Logo COJEDECO TV" />
      </div>

      <h1 className="hero-title">Eveille-toi - Agis - Transforme le Monde</h1>
      <p className='hero-subtitle'>{message}</p>
      <button className="cta-button" onClick={handleClick}> Découvrir nos vidéos </button>
    </section>
  )
}

export default hero
