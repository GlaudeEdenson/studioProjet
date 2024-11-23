import { React, useRef } from "react";
import "../css/Footer.css";
import { Link } from "react-router-dom";
import logo from "../images/logo.png";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowUpFromBracket } from "@fortawesome/free-solid-svg-icons";

function Footer() {
  const navItemsRef = useRef([]);
  const scrollTop = () =>{
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };
  return (
    <>
    <footer>
      <div className="container-footer">
        <div className="info-footer">
          <div className="vertical-separation">
            <img src={logo} alt="logo" className="logo-footer" />
          </div>
          <div className="vertical-separation">
            <div className="navigation-footer">
              <h4>La navigation</h4>
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
                  <Link to="/boutique">boutique</Link>
                </li>
              </ul>
            </div>
          </div>
          <div className="vertical-separation">
            <div className="service-footer">
              <h4>Nous proposons</h4>
              <ul>
                <li>Afro-beat</li>
                <li>Konpa</li>
                <li>Gospel</li>
                <li>Reggae</li>
                <li>Drill hop</li>
              </ul>
            </div>
          </div>
          <div className="vertical-separation">
            <div className="horaire-footer">
              <h4>Nos Horaires</h4>
              <ul>
                <li>Ludin : 8h-20h</li>
                <li>Mardi : 8h-20h</li>
                <li>Mercredi : 8h-18h</li>
                <li>Jeudi : 8h-20h</li>
                <li>Vendredi : 8h-19h</li>
              </ul>
            </div>
          </div>
          <div className="vertical-separation">
            <div className="reseau-footer">
              <h4>Suivez-nous :</h4>
              <FontAwesomeIcon icon={faArrowUpFromBracket} className="icon-to-top" onClick={scrollTop }/>
            </div>
          </div>
        </div>
      </div>
    </footer>
    <div className="copyRight">
        <p>&#169;Copyright 2024 Edenson Glaude Tout droit réservé. <a href="/">metion légale</a></p>
    </div>
  </>
  );
}

export default Footer;
