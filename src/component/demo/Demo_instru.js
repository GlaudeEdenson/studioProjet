import { React } from "react";
import "../css/demo.css";
import demoVideo from "../vidéo/videoMusique.mp4";
import audioTwo from "../audio/Hip Pop.mp3";
import audioOne from "../audio/classical.mp3";
import audioThree from "../audio/SoulRnB.mp3";

function Contact() {
  const btnDemo = () =>{
    window.location.href = "/store"
  } 
  return (
    <section className="demo-section">
      <h2>Démonstration de nos instrus</h2>
      <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Blanditiis culpa, sint reiciendis aliquam officiis iste. Veniam ab ipsa nisi voluptatum perspiciatis possimus, officiis quisquam labore beatae incidunt officia laborum eligendi, sint, fugit debitis. Non quis aspernatur, molestiae nobis mollitia quia provident quos culpa maiores perspiciatis fugit quaerat corporis officiis eaque!</p>
      <div className="container-demo">
        <div className="Video-demo-container">
          {/* <img src={imageDemo} alt="imageDemo" className="imageDemo"/> */}
           <video
              src={demoVideo}
              type="video/mp4"
              autoPlay
              muted
              loop
              className="demoVideo"
            ></video>
        </div>
        <div className="liste-audio">
          <figure>
            <figcaption>Classique</figcaption>
            <audio controls src={audioOne}></audio>
          </figure>
          <figure>
            <figcaption>Hip pop</figcaption>
            <audio controls src={audioTwo}></audio>
          </figure>
          <figure>
            <figcaption>Soul RnB</figcaption>
            <audio controls src={audioThree}></audio>
          </figure>
        </div>
      </div>
      <button type="button" className="btn-demo" onClick={btnDemo}>Achter maintenant</button>
    </section>
  );
}
export default Contact;
