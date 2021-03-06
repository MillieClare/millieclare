import React from "react";
import Header from "./components/header/header";
import About from "./components/about/about";
import Resume from "./components/resume/resume";
import Portfolio from "./components/portfolio/portfolio";
import Testimonials from "./components/testimonials/testimonials";
import Footer from "./components/footer/footer";

function App() {
  return (
    <div className="App">
      <p className="App-intro">
        <Header />
        <About />
        <Resume />
        <Portfolio />
        <Testimonials />
        <Footer />
      </p>
    </div>
  );
}

export default App;
