import {React, useState} from "react";
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
  const [formData, setFormData] = useState({name: "", email: "", message: ""});

  const handleChange = (e)  =>{
    const {name, value} = e.target;
    setFormData({...formData, [name]: value});
  };
  const handleSubmit = async (e) => {
    e.preventDefault();
    try{
      const reponse = await fetch("http:://localhost/ProjetChamy/studio-website/backend/server.php", {
        method:"POST",
        headers:{
         "Content-Type": "application/json",
        },
        body: JSON.stringify(formData),
      });
      if (reponse.ok) {
        alert("E-mail envoyé avec succès");
      }else{
        alert("Erreur de lors de l'envois de l'email")
      }
    }
    catch (error){
      console.error("Erreur lors de la requête :", error);
    } 
  }
  return (
    <>
      <section className="contact-section" id="contact">
        <div className="container-contact">
          <div className="cords-contact">
            <div className="gps-card">
              <FontAwesomeIcon icon={faLocationDot} className="icon gps" />
              <h3>Adresse postale</h3>
              <p>Route de Montabo 10 rue stanislas lemki</p>
            </div>
            <div className="gps-card">
              <FontAwesomeIcon icon={faPhone} className="icon gps" />
              <h3>Tel portable :</h3>
              <p>694133970</p>
            </div>
            <div className="gps-card">
              <FontAwesomeIcon icon={faFax} className="icon gps" />
              <h3>Tel fixe : </h3>
              <p>694133970</p>
            </div>
            <div className="gps-card">
              <FontAwesomeIcon icon={faEnvelope} className="icon gps" />
              <h3>Envoyez un mail :</h3>
              <p>glaudeedenson@gmail.com</p>
            </div>
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
              <button id="call-to-action">Voir nos produits</button>
            </motion.div>
          </div>
        </div>
      </section>
    </>
  );
}

export default Contact;
