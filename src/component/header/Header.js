import React, { useEffect, useRef } from "react";
import '../css/Navbar.css';
import { Link } from "react-router-dom";

function Header() {
  const navItemsRef = useRef([]);

  useEffect(() => {
    navItemsRef.current.forEach((item) => {
      if (item.textContent.trim().toLowerCase() === "produits") {
        item.style.background = "linear-gradient(0deg, #4b2500 0%, #707000 100%)";
        item.style.borderRadius = "8px";
      }
    });
  }, []);

  return (
    <nav className="navbar">
      <div className="logo">
        <h1><Link to="/">Cham-studio</Link></h1>
      </div>
      <div className="bare-denavigation">
        <ul>
          <li ref={(el) => (navItemsRef.current[0] = el)}><Link to="/">accueil</Link></li>
          <li ref={(el) => (navItemsRef.current[1] = el)}><Link to="/services">service</Link></li>
          <li ref={(el) => (navItemsRef.current[2] = el)}><Link to="/about">a propos</Link></li>
          <li ref={(el) => (navItemsRef.current[3] = el)}><Link to="/panier">panier</Link></li>
          <li ref={(el) => (navItemsRef.current[4] = el)}><Link to="/product">produits</Link></li>
        </ul>
      </div>
    </nav>
  );
}

export default Header;
