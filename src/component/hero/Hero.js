import React from "react";
import "../css/Home.css";
import heroVideo from "../vidéo/hero.mp4";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faFacebook,
  faSquareInstagram,
  faYoutube,
  faSpotify,
  faDeezer,
  faApple,
} from "@fortawesome/free-brands-svg-icons";
import { motion } from "framer-motion";


function Hero() {
  const text = "E-Studio";
  const letters = text.split("");

  return (
    <section className="hero">
      <video
        src={heroVideo}
        type="video/mp4"
        autoPlay
        muted
        loop
        className="video-hero"
      ></video>
      <div className="hero-content">
      <div
          className="principaleTitle"
          style={{
            display: "flex",
            justifyContent: "center",
          }}
        >
          <h1>
            Bienvenue chez{" "}
            {letters.map((letter, index) => (
              <motion.span
                id="gradientcolor-text"
                key={index}
                style={{
                  margin: "0 5px",
                  display: "inline-block",
                }}
                animate={{
                  y: [0, -50, 0],
                  opacity: [1, 0, 1], 
                }}
                transition={{
                  repeat: 1,
                  duration: 2,
                  delay: index * 0.1, 
                }}
              >
                {letter}
              </motion.span>
            ))}
          </h1>
        </div>
        <div className="icons">
          <motion.div
            className="facebookcontent"
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.11 }}
            viewport={{ once: true }}
          >
            <FontAwesomeIcon icon={faFacebook} className="facebook-icon" />
            <a href="https://www.facebook.com" target="blank">
              Facebook
            </a>
          </motion.div>

          <motion.div
            className="Applecontent"
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.9 }}
            viewport={{ once: true }}
          >
            <FontAwesomeIcon icon={faApple} className="apple-icon" />
            <a href="https://www.apple.com" target="blank">
              Music
            </a>
          </motion.div>

          <motion.div
            className="instaContent"
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <FontAwesomeIcon
              icon={faSquareInstagram}
              className="instagram-icon"
            />
            <a href="https://www.instagram.com" target="blank">
              Instagram
            </a>
          </motion.div>

          <motion.div
            className="youtubeContent"
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7 }}
            viewport={{ once: true }}
          >
            <FontAwesomeIcon icon={faYoutube} className="youtube-icon" />
            <a href="https://www.youtube.com" target="blank">
              Youtube
            </a>
          </motion.div>

          <motion.div
            className="spotifyContent"
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
          >
            <FontAwesomeIcon icon={faSpotify} className="spotify-icon" />
            <a href="https://www.spotify.com" target="blank">
              Spotify
            </a>
          </motion.div>

          <motion.div
            className="deezerContent"
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.9 }}
            viewport={{ once: true }}
          >
            <FontAwesomeIcon icon={faDeezer} className="deezer-icon" />
            <a href="https://www.deezer.com" target="blank">
              Deezer
            </a>
          </motion.div>
        </div>
        <button className="hero-button">Contactez nous</button>
      </div>
    </section>
  );
}

export default Hero;
