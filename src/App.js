import "./App.css";
import Work from "./components/Pages/Work";
import Resume from './components/Pages/Resume';
import Navbar from "./components/Nav/Navbar";
import About from "./components/Pages/About";
import Contact from "./components/Pages/Contact";
import Github from "./components/Pages/Github";
import { Route, Routes } from "react-router-dom";

function App() {
  return (
    <>
      <Navbar />
      <div className="App">
        <Routes>
          <Route path="/about" element={<About />} />
          <Route path="/contact" element={<Contact />} />
          <Route path='/github' element={<Github />} />
          <Route path="/resume" element={<Resume />} />
          <Route path="/work" element={<Work />} />
        </Routes>
      </div>
    </>
  );
}

export default App;

