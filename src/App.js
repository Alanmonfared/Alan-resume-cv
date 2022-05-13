import "./App.css";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "./components/home/Home";
import Experience from "./components/experience/Experience";
import Education from "./components/education/Education";
import Internship  from "./components/internship/Internship";
import Navbar from "./components/nav/Navbar";
import About from "./components/about/About";
import SocialMedia from "./global/SocialMedia";

function App() {
  return (
    <>
      <Router >
        <Navbar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/experience" element={<Experience />} />
          <Route path="/education" element={<Education />} />
          <Route path="/internship" element={<Internship  />} />
          <Route path="/about" element={<About  />} />
        </Routes>
        <SocialMedia />
      </Router>
    </>
  );
}

export default App;
