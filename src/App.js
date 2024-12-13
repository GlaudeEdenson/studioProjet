import React from "react";
import Layout from "./component/Layout";
import Service from "./pages/services";
import About from "./pages/about";
import Panier from "./pages/panier";
import Home from "./pages/home";
import Boutique from "./pages/store";
import { Route, Routes } from "react-router-dom";

function App() {
  return (
    <Layout>
      {/* Les routes */}
      <Routes>
      <Route path="/" element={<Home />} />
        <Route path="/services" element={<Service />} />
        <Route path="/about" element={<About />} />
        <Route path="/store" element={<Boutique />} />
        <Route path="/panier" element={<Panier />} />
      </Routes>
    </Layout>
  );
}

export default App;
