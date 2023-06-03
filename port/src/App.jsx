import Navbar from "./components/Navbar";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Project from "./pages/Project";
import Home from "./pages/Home";
import Contact from "./pages/Contact";
import About from "./pages/About";
import Footer from "./components/Footer";
import ScrollToTop from "./components/SmoothScrollbar";
function App() {
  return (
    <>
      <Router>
      <Navbar />
      <ScrollToTop />
        <Routes>
            <Route exact path="/about" element={<About />} > </Route>
            <Route exact path="/projects" element={<Project />} > </Route>
            <Route exact path="/contact" element={<Contact />} > </Route>
          <Route  exact path="/" element={<Home />}>
          </Route>
        </Routes>
        <Footer />
      </Router>
    </>
  );
}

export default App;
