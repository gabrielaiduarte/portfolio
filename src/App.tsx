import { Routes, Route } from "react-router-dom"
import DriftlineCaseStudy from "./pages/DriftlineCaseStudy"
import Navbar from "./components/layout/Navbar"
import Hero from "./sections/Hero"
import Projects from "./sections/Projects"
import About from "./sections/About"
import Experience from "./sections/Experience"
import Toolbox from "./sections/Toolbox"
import Education from "./sections/Education"
import BeyondCode from "./sections/BeyondCode"
import Contact from "./sections/Contact"

function Portfolio() {
  return (
    <>
    <div id="top" />

      <Navbar />
      
      <main>
        <Hero />
        <Projects />
        <About />
        <Experience />
        <Toolbox />
        <Education />
        <BeyondCode />
        <Contact />
      </main>
      
    </>
  )
}

export default function App() {
  return (
    <Routes>
      <Route path="/" element={<Portfolio />} />
      <Route
        path="/projects/driftline"
        element={<DriftlineCaseStudy />}
      />
    </Routes>
  )
}