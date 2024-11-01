// App.js
import React from "react";
import Layout from "./component/Layout"; 
import Service from "./pages/services";
import About from "./pages/about";
import Panier from "./pages/panier";
import Product from "./pages/product";
import { Route, Routes } from "react-router-dom";
import "./component/css/Home.css";

function App() {
  return (
    <Layout>
      <Routes>
        <Route path="/services" element={<Service />} />
        <Route path="/about" element={<About />} />
        <Route path="/panier" element={<Panier />} />
        <Route path="/product" element={<Product />} />
      </Routes>
    </Layout>
  );
}

export default App;
