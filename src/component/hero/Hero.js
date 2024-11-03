import React from "react";
import "../css/Home.css";
import heroVideo from "../vidéo/hero.mp4";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faFacebook, faSquareInstagram,faYoutube,faSpotify,faDeezer } from "@fortawesome/free-brands-svg-icons";

function Hero() {
  return (
    <section className="hero">
      <video src={heroVideo} type="video/mp4" autoPlay muted loop className="video-hero"></video>
      <div className="hero-content">
        <h1>Bienvenue chez cham-studio</h1>
        <div className="icons">
          <div className="facebookcontent">
          <FontAwesomeIcon icon={faFacebook} className="facebook-icon"/> 
          <a href="https://www.facebook.com" target="blank">Facebook</a> 
          </div> 
          <div className="instaContent">
          <FontAwesomeIcon icon={faSquareInstagram} className="instagram-icon" />
          <a href="https://www.instagram.com" target="blank">Instagram</a>  
          </div>
          <div className="youtubeContent">
          <FontAwesomeIcon icon={faYoutube} className="youtube-icon"/>
          <a href="https://www.youtube.com" target="blank">Youtube</a>  
          </div>
          <div className="spotifyContent">
          <FontAwesomeIcon icon={faSpotify} className="spotify-icon"/>
          <a href="https://www.spotify.com" target="blank">Spotify</a>  
          </div>
          <div className="deezerContent">
          <FontAwesomeIcon icon={faDeezer} className="deezer-icon"/>
          <a href="https://www.deezer.com" target="blank">Deezer</a>  
          </div>
          
        </div>
        <button className="hero-button">Bienvenu</button>
      </div>
    </section>
  );
}

export default Hero;
