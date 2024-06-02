// import { useState } from "react";

import "./App.css";
import Aboutus from "./components/Aboutus.jsx";
import Featuredproducts from "./components/Featuredproducts.jsx";
import Footer from "./components/Footer.jsx";
import Header from "./components/Header.jsx";
import Mobilehero from "./components/Mobilehero.jsx";
import Services from "./components/Services.jsx";

function App() {
  return (
    <>
      <Header />
      <Mobilehero />
      <Services />
      <Featuredproducts />
      <Aboutus />
      <Footer />
    </>
  );
}

export default App;
