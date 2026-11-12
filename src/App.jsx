import { useEffect } from "react";
import { HashRouter, Routes, Route, useLocation } from "react-router-dom";
import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import Projects from "./components/Projects";
import About from "./components/About";
import Contact from "./components/Contact";
import ProjectPage from "./components/ProjectPage";

function Home() {
  return (
    <>
      <Hero />
      <Projects />
      <About />
      <Contact />
    </>
  );
}

// Nova stranica počinje na vrhu; ako je zadan cilj (npr. "projects"), skroluje do njega
function ScrollManager() {
  const { pathname, state } = useLocation();
  useEffect(() => {
    if (state?.scrollTo) {
      setTimeout(() => document.getElementById(state.scrollTo)?.scrollIntoView(), 0);
    } else {
      window.scrollTo(0, 0);
    }
  }, [pathname, state]);
  return null;
}

export default function App() {
  return (
    <HashRouter>
      <ScrollManager />
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/projects/:slug" element={<ProjectPage />} />
        <Route path="*" element={<Home />} />
      </Routes>
    </HashRouter>
  );
}
