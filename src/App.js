import { About } from "./components/About";
import Home from "./components/Home";
import Navbar from "./components/Navbar";
import Skills from "./components/Skills";
import Work from "./components/Work";
import Contact from "./components/Contact";


function App() {
  return (
    <div>
      <Navbar />
      <Home />
      <About />
      <Work />
      <Skills />
      <Contact />
    </div>
  );
}

export default App;
