import { Route, Routes } from "react-router-dom";
import "./App.css";
import Header from "./components/Header";
import Contact from "./components/Contact";
import Home from "./components/Home";
import Features from "./components/Features";
import Footer from "./components/Footer";
import About from "./components/About";

function App() {
  return (
    <div className="App">
      <Header />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/features" element={<Features />} />
      </Routes>
      <Footer />
    </div>
  );
}

export default App;
