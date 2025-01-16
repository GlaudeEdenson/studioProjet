import React from "react";
import "../component/css/services.css";

const servicesList = [
  {
    title: "Enregistrement",
    description:
      "Lorem ipsum dolor sit amet coneturde, adipisicing elit.",
    listeType: ["liste type 1", "liste type 2", "liste type 3", "liste type 4", "liste type 5", "liste type 6"],
    listePrix: ["Prix 1", "Prix 2", "Prix 3", "Prix 4", "Prix 5", "Prix 6"],
  },
  {
    title: "Mixage",
    description:
      "Lorem ipsum dolor sit amet coneturde, adipisicing elit.",
    listeType: ["Mixage 1", "Mixage 2", "Mixage 3", "Mixage 4", "Mixage 5", "Mixage 6"],
    listePrix: ["Prix 1", "Prix 2", "Prix 3", "Prix 4", "Prix 5", "Prix 6"],
  },
  {
    title: "Mastering",
    description:
      "Lorem ipsum dolor sit amet coneturde, adipisicing elit.",
    listeType: ["Mastering 1", "Mastering 2", "Mastering 3", "Mastering 4", "Mastering 5", "Mastering 6"],
    listePrix: ["Prix 1", "Prix 2", "Prix 3", "Prix 4", "Prix 5", "Prix 6"],
  },
];


function services() {
  return (
    <>
      <section className="sectionONe-service">
        <div className="container">
          <h1>Lorem ipsum dolor sit amet.</h1>
          <p className="paragraphOne">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Odio
            voluptate nisi reiciendis veritatis vitae voluptatem quae magni
            tempore, cumque voluptatibus quibusdam eveniet repellendus
            repudiandae quis eum nostrum. Mollitia, ipsum aspernatur delectus
            quam quia impedit rerum reiciendis, natus beatae, veritatis eveniet
            est cum autem eaque illo debitis labore et ad alias!
          </p>
        </div>
      </section>

      <section className="list-service-card">
      <div className="container-two-service">
        {servicesList.map((service, index) => (
          <div className="card" key={index}>
            <h3>{service.title}</h3>
            <p>{service.description}</p>
            <div className="tarif">
              <div className="liste-type">
                <ul>
                  {service.listeType.map((type, i) => (
                    <li key={i}>{type}</li>
                  ))}
                </ul>
              </div>
              <div className="liste-prix">
                <ul>
                  {service.listePrix.map((prix, i) => (
                    <li key={i}>{prix}</li>
                  ))}
                </ul>
              </div>
            </div>
            <div className="bouton">
              <button type="button" className="service-btn">
                En savoir plus
              </button>
            </div>
          </div>
        ))}
      </div>
    </section>
    </>
  );
}

export default services;
