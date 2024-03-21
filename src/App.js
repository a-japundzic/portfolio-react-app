import { About } from "./components/About";
import Home from "./components/Home";
import Navbar from "./components/Navbar";
import Skills from "./components/Skills";
import Work from "./components/Work";
import Contact from "./components/Contact";
import Timeline from "./components/Timeline";

import Stack from '@mui/material/Stack';


function App() {
  return (
    <div>
      <Navbar />
      <Home />
      <About />
      <Stack className="bg-[#000000]" spacing={10}>
      <Timeline />
      <Work />
      <Skills />
      <Contact />
      </Stack>
    </div>
  );
}

export default App;
