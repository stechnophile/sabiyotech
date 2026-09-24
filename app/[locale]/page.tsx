import Hero from "@/components/Hero";
import About from "@/components/About";
import Topics from "@/components/electiontechnology";
import Cybersecurity from "@/components/cybersecurity";
import GenAI from "@/components/genAI";
import Blog from "@/components/Blog";
import Contact from "@/components/Contact";
import Media from "@/components/MediaGallery";
export default function Home() {
  return (
    <>
      <Hero />            
      <Cybersecurity />
      <Topics />
      <GenAI />
      <Blog />
      <About />
      <Media /> 
      <Contact />
    </>
  );
}