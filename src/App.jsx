import { Routes, Route } from "react-router-dom";
import About from "./components/About/About";
import Contact from "./components/Contact/Contact";
import Experience from "./components/Experience/Experience";
import Footer from "./components/Footer/Footer";
import Home from "./components/Home/Home";
import Navbar from "./components/Navbar/Navbar";
import Projects from "./components/Projects/Projects";

function App() {
  return (
    <Routes>
      <Route
        path="/"
        element={
          <div className="bg-[#171d32] h-auto w-full overflow-hidden">
            <Navbar />
            <Home />
            <About />
            <Experience />
            <Projects />
            <Footer />
          </div>
        }
      />
      <Route
        path="/contact"
        element={
          <div className="bg-[#171d32] h-auto w-full overflow-hidden">
            <Navbar />
            <Contact />
            <Footer />
          </div>
        }
      />
    </Routes>
  );
}

export default App;
