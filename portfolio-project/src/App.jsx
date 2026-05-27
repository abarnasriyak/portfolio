import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { ThemeProvider } from "./context/ThemeContext";
import CustomCursor from "./components/CustomCursor";
import ParticleBackground from "./components/ParticleBackground";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";

// Sections
import Hero from "./sections/Hero";
import About from "./sections/About";
import Skills from "./sections/Skills";
import Education from "./sections/Education";
import Projects from "./sections/Projects";
import Interests from "./sections/Interests";
import Experience from "./sections/Experience";
import Testimonials from "./sections/Testimonials";
import Contact from "./sections/Contact";

function MainLayout() {
  return (
    <div className="relative min-h-screen text-slate-800 dark:text-slate-100 bg-cyber-light dark:bg-cyber-dark transition-colors duration-300">
      {/* Interactive Cyber Cursor */}
      <CustomCursor />
      
      {/* Animated network graph background */}
      <ParticleBackground />
      
      {/* Floating navigation panel */}
      <Navbar />
      
      {/* Sections */}
      <main className="relative z-10">
        <Hero />
        <About />
        <Skills />
        <Education />
        <Projects />
        <Interests />
        <Experience />
        <Testimonials />
        <Contact />
      </main>
      
      {/* Footer */}
      <Footer />
    </div>
  );
}

export default function App() {
  return (
    <ThemeProvider>
      <Router>
        <Routes>
          <Route path="/" element={<MainLayout />} />
        </Routes>
      </Router>
    </ThemeProvider>
  );
}