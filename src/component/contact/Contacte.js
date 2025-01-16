import { React, useState } from "react";
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
import { title } from "framer-motion/client";

const cardsContact = [
  {
    icon: <FontAwesomeIcon icon={faLocationDot} className="icon gps" />,
    title: "Adresse postale :",
    valueText: "Route de Montabo 10 rue stanislas lemki",
  },
  {
    icon: <FontAwesomeIcon icon={faPhone} className="icon gps" />,
    title: "Tel portable :",
    valueText: "+594694133970",
  },
  {
    icon: <FontAwesomeIcon icon={faFax} className="icon gps" />,
    title: "Tel fixe :",
    valueText: "+594694133970",
  },
  {
    icon: <FontAwesomeIcon icon={faEnvelope} className="icon gps" />,
    title: "Envoyez un mail :",
    valueText: "glaudeedenson@gmail.com",
  },
];

function Contact() {
  const toBoutique = () => {
    window.location.href = "./boutique";
  };
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });
  console.log(formData);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };
  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await fetch(
        "http://localhost/ProjetChamy/studio-website/backend/email.php",
        {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify(formData),
        }
      );
      const result = await response.json();
      alert(result.message);
    } catch (error) {
      console.error("Erreur lors de la requête :", error);
      alert("Erreur lors de la requête !", error);
    }
  };
  return (
    <>
      <section className="contact-section" id="contact">
        <div className="container-contact">
          <div className="cards-contact">
            {cardsContact.map((element, index) => (
              <div className="cards-content" key={index}>
                {element.icon}
                <h3>{element.title}</h3>
                {/* Condition */}
                {element.title === "Tel portable :" ||
                element.title === "Tel fixe :" ? (
                  <a href={`tel:${element.valueText}`}>{element.valueText}</a>
                ) : (
                  <p>{element.valueText}</p>
                )}
              </div>
            ))}
            ;
          </div>

          <div className="contact-form">
            <div className="container-form">
              <form onSubmit={handleSubmit}>
                <div className="field-name">
                  <label htmlFor="">Nom</label>
                  <input
                    type="text"
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    placeholder="Votre nom complet"
                    required
                  />
                </div>
                <div className="field-email">
                  <label htmlFor="">E-mail</label>
                  <input
                    type="email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    placeholder="Votre adresse e-mail"
                    required
                  />
                </div>
                <div className="field-message">
                  <label htmlFor="">Message</label>
                  <textarea
                    name="message"
                    value={formData.message}
                    onChange={handleChange}
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
              <button id="call-to-action" onClick={toBoutique}>
                Voir nos produits
              </button>
            </motion.div>
          </div>
        </div>
      </section>
    </>
  );
}

export default Contact;
