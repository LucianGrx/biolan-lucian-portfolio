import React from "react";
import { About, Footer, Header, Skills, Testimonial, Work, Gallery } from "./container";
import { Navbar } from "./components";
import "./App.scss";

const App = () => {
  return (
    <div className="app">
      <Navbar />
      <Header />
      <About />
      <Work />
      <Skills />
      <Gallery />
      <Testimonial />
      <Footer />
    </div>
  );
};

export default App;
