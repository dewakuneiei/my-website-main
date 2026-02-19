import About from '@/components/about/About';
import Contact from '@/components/contact/Contact';
import Hero from '@/components/hero/Hero';
import ProjectsSection from '@/components/projects/ProjectsSection';
import Techs from '@/components/techs/Techs';
import Experience from '@/components/experience/Experience';
import Games from '@/components/games/Games';
import Certificates from '@/components/certificates/Certificates';
import Posts from '@/components/posts/Posts';

export default function Home() {
  return (
    <>
      <Hero />
      <About />
      <Techs />
      <ProjectsSection />
      <Games />
      <Experience />
      <Certificates />
      <Posts />
      <Contact />
    </>
  );
}
