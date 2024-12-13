import React from "react";
import "../component/css/services.css";
import serviceVideo from "../component/vidéo/service-v.mp4";

function services() {
  return (
    <>
      <section className="section-service">
        <div className="container">
          <h1>Lorem ipsum dolor sit amet.</h1>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Odio
            voluptate nisi reiciendis veritatis vitae voluptatem quae magni
            tempore, cumque voluptatibus quibusdam eveniet repellendus
            repudiandae quis eum nostrum. Mollitia, ipsum aspernatur delectus
            quam quia impedit rerum reiciendis, natus beatae, veritatis eveniet
            est cum autem eaque illo debitis labore et ad alias!
          </p>
        </div>
      </section>
      <section className="dynamicVideo">
        <div className="video-container-service">
          <video
            src={serviceVideo}
            type="video/mp4"
            autoPlay
            muted
            loop
            className="video-service"
          ></video>
        </div>
      </section>
    </>
  );
}

export default services;
