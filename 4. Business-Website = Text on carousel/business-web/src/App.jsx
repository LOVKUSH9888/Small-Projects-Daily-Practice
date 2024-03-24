import React from "react";
import "./App.css";
import Navbar from "./components/Navbar/Navbar";
import Carousel from "./components/Carousel/Carousel";
import About from "./components/About/About";
import Services from "./components/Services/Services";
import Team from "./components/Team/Team";
const App = () => {
  return (
    <div>
      {/* Navbar */}
      <Navbar />
      {/* Carousel */}
      <Carousel />
      {/* About Us */}
      <About/>
      {/* Our Services */}
      <Services/>
      {/* Team */}
      <Team/>
    </div>
  );
};

export default App;
