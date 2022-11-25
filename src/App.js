import "./App.css";
import "./css/Home.css";
import "./css/Skills.css";
import "./css/Project.css";
import "./css/Aboutme.css";
import "./css/Review.css";
import { About } from "./comp/About";
import { Contact } from "./comp/Contact";
import { Footer } from "./comp/Footer";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { Home } from "./comp/Home";

function App() {
  return (
    <>
      <div className="main">
        <BrowserRouter>
          <Routes>
            <Route path="/" element={<Home />}></Route>

            <Route path="/about" element={<About />}></Route>
          </Routes>
        </BrowserRouter>
      </div>
    </>
  );
}

export default App;
