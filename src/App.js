import React, { useEffect } from 'react';
import About from './components/About';
import Card from './components/Card';
import Contact from './components/Contact';
import Footer from './components/Footer';
import Skills from './components/Skills';
import Aos from 'aos';
import 'aos/dist/aos.css';
import './App.css';

function App() {
  useEffect(() => {
    Aos.init({
      once: true,
    });
  });

  return (
    <div className="app min-h-screen text-black py-10 px-3 sm:px-5 ">
      <div data-aos="fade-down" data-aos-duration="800">
        <Card />
      </div>

      <div data-aos="fade-up" data-aos-duration="800" data-aos-delay="400">
        <About />
      </div>

      <Skills />
      <Contact />
      <Footer />
    </div>
  );
}

export default App;
