import React from "react"; 
import Hero from "../component/hero/Hero";
import Contact from "../component/contact/Contacte";
import "../component/css/Home.css";
import player from "../component/images/player_guitare.jpg";
import enceinte from "../component/images/enceinte.jpg";
import saxophone from "../component/images/saxophone.jpg";
import { motion } from "framer-motion";

function home() {
  return (
    <>
      {/* Hero */}
      <Hero />
      <section className="inforSell">
        <div className="container-principale">
          <div className="container-info">
            <h2>
              Comment nous vendons{" "}
              <span id="gradientcolor-text">nos instrus ?</span>
            </h2>
            <p>
              Lorem ipsum dolor sit, amet consectetur adipisicing elit. Dolorum
              omnis optio fugit quisquam reiciendis ab eius! Explicabo a error
              magni quos architecto possimus, laudantium facilis doloremque ad
              blanditiis nemo! Pariatur suscipit voluptate expedita sapiente
              dolorum veniam aliquid eveniet impedit eum ducimus ratione
              exercitationem quis soluta, sed sint beatae id.
            </p>
          </div>

          <div className="stepsSell-container">
            <div className="steps-container">
              <div className="title-content">
                <h3 id="gradientcolor-text">1</h3>
              </div>
              <div className="text-content">
                <h4>Lorem ipsum dolor sit amet.</h4>
                <p>
                  Lorem ipsum dolor sit amet consectetur adipisicing elit.
                  Doloremque fugit, recusandae vero reprehenderit alias quod,
                  itaque porro odit mollitia dolorem odio iure culpa
                  consectetur, iste ea ad dolorum possimus ab!
                </p>
              </div>
            </div>
            <div className="steps-container">
              <div className="title-content">
                <h3 id="gradientcolor-text">2</h3>
              </div>
              <div className="text-content">
                <h4>Lorem ipsum dolor sit amet.</h4>
                <p>
                  Lorem ipsum dolor sit amet consectetur adipisicing elit.
                  Doloremque fugit, recusandae vero reprehenderit alias quod,
                  itaque porro odit mollitia dolorem odio iure culpa
                  consectetur, iste ea ad dolorum possimus ab!
                </p>
              </div>
            </div>
            <div className="steps-container">
              <div className="title-content">
                <h3 id="gradientcolor-text">3</h3>
              </div>
              <div className="text-content">
                <h4>Lorem ipsum dolor sit amet.</h4>
                <p>
                  Lorem ipsum dolor sit amet consectetur adipisicing elit.
                  Doloremque fugit, recusandae vero reprehenderit alias quod,
                  itaque porro odit mollitia dolorem odio iure culpa
                  consectetur, iste ea ad dolorum possimus ab!
                </p>
              </div>
            </div>
            <button type="button" className="actionSellBtn">
              Commencer maintenant
            </button>
          </div>
        </div>
      </section>
      <section className="info">
        <div className="container-infoStudio">
          <h2>
            Découvrez le concept d'
            <span id="gradientcolor-text">E-Studio</span>
          </h2>
          <p id="paragraph">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Velit
            impedit illum nihil eius, doloremque assumenda! Aliquam sint in
            obcaecati illo aliquid? Repudiandae consectetur illo impedit enim,
            ipsa voluptate nam fugit nostrum saepe sint facere perspiciatis.
            Culpa tenetur nihil magni maxime ipsum numquam illo aspernatur minus
            porro. Id impedit ipsa consequuntur.
          </p>
          <button type="button" className="seeMore">
            Voir plus
          </button>
        </div>
      </section>
      <section className="boutique">
        <div className="container-store">
          <h2>Voir notre boutique</h2>
          <div className="cards">
            <motion.div
              className="product-card"
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 1 }}
              viewport={{ once: true }}
            >
              <img
                src={player}
                alt="music illustration"
                className="image_card"
              />
              <h3>Lorem ipsum</h3>
              <p>
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Unde
                facere fuga obcaecati corporis provident corrupti reprehenderit
                id iure esse dolorem.
              </p>
            </motion.div>
            <motion.div
              className="product-card"
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 2 }}
              viewport={{ once: true }}
            >
              <img
                src={enceinte}
                alt="music illustration"
                className="image_card"
              />
              <h3>Lorem ipsum</h3>
              <p>
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Unde
                facere fuga obcaecati corporis provident corrupti reprehenderit
                id iure esse dolorem.
              </p>
            </motion.div>
            <motion.div
              className="product-card"
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 3 }}
              viewport={{ once: true }}
            >
              <img
                src={saxophone}
                alt="music illustration"
                className="image_card"
              />
              <h3>Lorem ipsum</h3>
              <p>
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Unde
                facere fuga obcaecati corporis provident corrupti reprehenderit
                id iure esse dolorem.
              </p>
            </motion.div>
          </div>
          <button type="button" className="btn-boutique">
            Aller à la boutique
          </button>
        </div>
      </section>
      <Contact/>
    </>
  );
}

export default home;
