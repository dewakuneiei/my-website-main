import Projects from './Projects';

const ProjectsSection = () => {
  return (
    <section id="projects" className="relative py-24">
      <div className="mb-12 space-y-8 px-6 md:mb-0 xl:px-56">
        <h2 className="h2-bold">Projects</h2>
        <p className="regular-paragraph max-w-[835px]">
          A mix of web apps, desktop tools, Roblox games, and UI/UX prototypes.
          From Rust-powered CLI tools to collaborative Next.js apps — here are
          my featured projects:
        </p>
      </div>

      <Projects />

      <div className="projects-grid-pattern-bottom absolute bottom-0 -z-10 h-48 w-full" />
    </section>
  );
};
export default ProjectsSection;
