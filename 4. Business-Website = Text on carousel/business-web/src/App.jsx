import React from "react";
import "./App.css";
import Navbar from "./components/Navbar/Navbar";
import Carousel from "./components/Carousel/Carousel";
import About from "./components/About/About";
const App = () => {
  return (
    <div>
      {/* Navbar */}
      <Navbar />
      {/* Carousel */}
      <Carousel />
      {/* About Us */}
      <About/>
    </div>
  );
};

export default App;
