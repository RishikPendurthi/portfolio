import Hero from "@/components/Portfolio/Hero";
import Skills from "@/components/Portfolio/Skills";
import Projects from "@/components/Portfolio/Projects";
import Education from "@/components/Portfolio/Education";
import Contact from "@/components/Portfolio/Contact";
import Navigation from "@/components/Portfolio/Navigation";

const Index = () => {
  return (
    <div className="min-h-screen">
      <Navigation />
      <Hero />
      <Skills />
      <Projects />
      <Education />
      <Contact />
    </div>
  );
};

export default Index;
