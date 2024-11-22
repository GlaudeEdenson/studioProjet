import React from "react";
import "../css/contact.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faLocationDot,
  faPhone,
  faEnvelope,
  faFax,
} from "@fortawesome/free-solid-svg-icons";
import logo from "../images/logo.png";
import { motion } from "framer-motion";

function Contact() {
  return (
    <>
      <section className="contact-section">
        <div className="container-contact">
          <div className="cords-contact">
            <div className="gps-card">
              <FontAwesomeIcon icon={faLocationDot} className="icon gps" />
              <h3>Lorem, ipsum dolor.</h3>
              <p>Lorem ipsum dolor sit amet consectetur adipisicing elit.</p>
            </div>
            <div className="gps-card">
              <FontAwesomeIcon icon={faPhone} className="icon gps" />
              <h3>Lorem, ipsum dolor.</h3>
              <p>Lorem ipsum dolor sit amet consectetur adipisicing elit.</p>
            </div>
            <div className="gps-card">
              <FontAwesomeIcon icon={faFax} className="icon gps" />
              <h3>Lorem, ipsum dolor.</h3>
              <p>Lorem ipsum dolor sit amet consectetur adipisicing elit.</p>
            </div>
            <div className="gps-card">
              <FontAwesomeIcon icon={faEnvelope} className="icon gps" />
              <h3>Lorem, ipsum dolor.</h3>
              <p>Lorem ipsum dolor sit amet consectetur adipisicing elit.</p>
            </div>
          </div>
          <div className="contact-form">
            <div className="container-form">
              <form action="POST">
                <div className="field-name">
                  <label htmlFor="">Nom</label>
                  <input
                    type="text"
                    name="name"
                    placeholder="Votre nom complet"
                    required
                  />
                </div>
                <div className="field-email">
                  <label htmlFor="">E-mail</label>
                  <input
                    type="email"
                    name="email"
                    placeholder="Votre adresse e-mail"
                    required
                  />
                </div>
                <div className="field-message">
                  <label htmlFor="">Message</label>
                  <textarea
                    name="message"
                    id=""
                    cols="30"
                    rows="10"
                    placeholder="Votre message"
                  ></textarea>
                </div>
                <div className="submit">
                  <input type="submit" value="Envoyer" id="send" />
                </div>
              </form>
            </div>
            <motion.div
              className="container-info"
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.11 }}
              viewport={{ once: true }}
            >
              <img src={logo} alt="logo" id="logo" />
              <button id="call-to-action">Voir nos produits</button>
            </motion.div>
          </div>
        </div>
      </section>
    </>
  );
}

export default Contact;
