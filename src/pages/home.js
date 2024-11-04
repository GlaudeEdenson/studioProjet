import React from "react";
import Hero from "../component/hero/Hero";
import "../component/css/Home.css";


function home() {
  return (
    <>
      {/* Hero */}
      <Hero />
      <section className="inforSell">
        <div className="container-info">
        <h2>Comment nous vendons <span id="gradientcolor-text">nos instrus ?</span></h2>
        <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Dolorum omnis optio fugit quisquam reiciendis ab eius! Explicabo a error magni quos architecto possimus, laudantium facilis doloremque ad blanditiis nemo! Pariatur suscipit voluptate expedita sapiente dolorum veniam aliquid eveniet impedit eum ducimus ratione exercitationem quis soluta, sed sint beatae id.</p>
        </div>

        <div className="stepsSell-container">
            <div className="steps-container">
              <div className="title-content">
              <h3 id="gradientcolor-text">1</h3>
              </div>
              <div className="text-content">
                <h4>Lorem ipsum dolor sit amet.</h4>
              <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Doloremque fugit, recusandae vero reprehenderit alias quod, itaque porro odit mollitia dolorem odio iure culpa consectetur, iste ea ad dolorum possimus ab!</p>
              </div>
            </div>
            <div className="steps-container">
              <div className="title-content">
              <h3 id="gradientcolor-text">2</h3>
              </div>
              <div className="text-content">
                <h4>Lorem ipsum dolor sit amet.</h4>
              <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Doloremque fugit, recusandae vero reprehenderit alias quod, itaque porro odit mollitia dolorem odio iure culpa consectetur, iste ea ad dolorum possimus ab!</p>
              </div>
            </div>
            <div className="steps-container">
              <div className="title-content">
              <h3 id="gradientcolor-text">3</h3>
              </div>
              <div className="text-content">
                <h4>Lorem ipsum dolor sit amet.</h4>
              <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Doloremque fugit, recusandae vero reprehenderit alias quod, itaque porro odit mollitia dolorem odio iure culpa consectetur, iste ea ad dolorum possimus ab!</p>
              </div>
            </div>
            <button type="button" className="actionSellBtn">Commencer maintenant</button>
        </div>
      </section>
    </>
  );
}

export default home;