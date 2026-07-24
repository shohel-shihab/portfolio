import About from "../components/about/About";
import Contact from "../components/contact/Contact";
import Education from "../components/education/Education";

import Hero from "../components/hero/Hero";
import Projects from "../components/projects/Projects";
import Skills from "../components/skills/Skills";


export default function Home() {
  return (
    <main className="min-h-screen bg-[#0F0715] text-white overflow-x-hidden">
    <Hero></Hero>
    <About></About>
    <Skills></Skills>
    <Education></Education>
    <Projects></Projects>
    <Contact></Contact>
    
    </main>
  );
}