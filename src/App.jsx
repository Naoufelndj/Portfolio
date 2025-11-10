import "./styles/global.css";
import "./styles/variables.css";
import { Route, Routes } from "react-router-dom";
import ContextProvider from "./context/context";
import { Analytics } from "@vercel/analytics/react";

import ScrollRevealInit from "./components/ScrollReveal/ScrollReveal";
import Main from "./pages/Main/Main";
import AllProjects from "./pages/AllProjects/AllProjects";
import Footer from "./components/Footer/Footer";

function App() {
  return (
    <ContextProvider>
      <Analytics />
      <ScrollRevealInit />
      <Routes>
        <Route path="/" element={<Main />} />
        <Route path="/projects" element={<AllProjects />} />
      </Routes>

      <Footer />
    </ContextProvider>
  );
}

export default App;
