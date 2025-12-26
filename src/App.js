import React from "react";
import "./App.css";
import { ThemeProvider } from "./context/ThemeContext";
import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import About from "./components/About";
import MotivationalQuotes from "./components/MotivationalQuotes";
import Games from "./components/Games";
import Members from "./components/Members";
import Gallery from "./components/Gallery";
import Footer from "./components/Footer";

function App() {
  return (
    <ThemeProvider>
      <div className="App min-h-screen bg-white dark:bg-black transition-colors duration-300">
        <Navbar />
        <Hero />
        <About />
        <MotivationalQuotes />
        <Games />
        <Members />
        <Gallery />
        <Footer />
      </div>
    </ThemeProvider>
  );
}

export default App;
