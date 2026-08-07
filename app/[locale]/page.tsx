import Hero from "@/components/Hero";
import About from "@/components/About";
import Topics from "@/components/Topics";
import Blog from "@/components/Blog";
import Contact from "@/components/Contact";
import Media from "@/components/MediaGallery";
export default function Home() {
  return (
    <>
      <Hero />
      <Topics />
      <Blog />
      <About />
      <Media /> 
      <Contact />
    </>
  );
}