import React, { useEffect, useRef, useState } from "react";
import "../css/Navbar.css";
import { Link } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBars } from "@fortawesome/free-solid-svg-icons";

function Header() {
  const navItemsRef = useRef([]);
  const [open, setOpen] = useState(false);

  useEffect(() => {
    navItemsRef.current.forEach((item) => {
      if (item.textContent.trim().toLowerCase() === "produits") {
        item.style.background =
          "linear-gradient(0deg, #4b2500 0%, #707000 100%)";
        item.style.borderRadius = "8px";
      }
    });
  }, []);

  return (
    <nav className="navbar">
      <div className="logo">
        <h1>
          <Link to="/">Eden-studio</Link>
        </h1>
      </div>
      <div className={`bare-denavigation ${open ? "open" : ""}`}>
        <ul>
          <li ref={(el) => (navItemsRef.current[0] = el)}>
            <Link to="/">accueil</Link>
          </li>
          <li ref={(el) => (navItemsRef.current[1] = el)}>
            <Link to="/services">service</Link>
          </li>
          <li ref={(el) => (navItemsRef.current[2] = el)}>
            <Link to="/about">a propos</Link>
          </li>
          <li ref={(el) => (navItemsRef.current[3] = el)}>
            <Link to="/panier">panier</Link>
          </li>
          <li ref={(el) => (navItemsRef.current[4] = el)}>
            <Link to="/product">produits</Link>
          </li>
        </ul>
      </div>
      <FontAwesomeIcon
        icon={faBars}
        className="openToggle"
        onClick={() => setOpen(!open)}
      />
    </nav>
  );
}

export default Header;
