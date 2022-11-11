import "./App.css";
import { About } from "./comp/About";
import { Contact } from "./comp/Contact";
import { Footer } from "./comp/Footer";
import { Herosection } from "./comp/Herosection";
import { Navbar } from "./comp/Navbar";
import { Project } from "./comp/Project";
import { Skill } from "./comp/Skill";

function App() {
  return (
    <div class="wrapper">
      {/* navbar */}

      <Navbar />

      {/* hero section */}
      <Herosection />
      {/* skill */}
      <Skill />

      {/* titles */}

      {/* containts */}

      {/* project */}
      <Project />

      {/* About me  */}
      <About />
      {/* Contact */}
      <Contact />
      {/* footer */}
      <Footer />
    </div>
  );
}

export default App;
