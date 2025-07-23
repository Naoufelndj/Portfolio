import "./styles/global.css";
import "./styles/variables.css";
import { Route, Routes } from "react-router-dom";
import ContextProvider from "./context/context";

import ScrollRevealInit from "./components/ScrollReveal/ScrollReveal";
import Main from "./pages/Main/Main";
import AllProjects from "./pages/AllProjects/AllProjects";

function App() {
  return (
    <ContextProvider>
      <ScrollRevealInit />
      <Routes>
        <Route path="/" element={<Main />} />
        <Route path="/projects" element={<AllProjects />} />
      </Routes>
    </ContextProvider>
  );
}

export default App;
