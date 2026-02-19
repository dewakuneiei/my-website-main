import DotPattern from '../ui/dot-pattern';
import { skills } from '@/constants/skills';
import SkillCard from './SkillCard';

const About = () => {
  return (
    <section id="about" className="relative flex items-center justify-center px-6 py-24">
      <div className="z-10">
        <div className="space-y-8 md:text-center">
          <h2 className="h2-bold">About me</h2>
          <p className="regular-paragraph mx-auto max-w-[835px]">
            Hi 👋, I&apos;m{' '}
            <span className="text-code text-yellow-600">Nattawut Pasuk</span>{' '}
            (Deewa), a{' '}
            <span className="text-green-400">Software Engineering</span> student
            at University of Phayao (GPA 3.55). I&apos;m a{' '}
            <span className="text-blue-400">Full-Stack Developer</span> and{' '}
            <span className="text-violet-400">Game Developer</span> passionate
            about building web applications, creating interactive games, and
            exploring new technologies. Currently working as a{' '}
            <span className="text-orange-400">Software Developer</span> at
            TechSpace, and I&apos;ve shipped 10+ games on itch.io. Looking for
            opportunities as a{' '}
            <span className="text-cyan-400">Fullstack Developer</span> who loves
            to challenge new technology.
          </p>
        </div>

        <div className="mt-16 flex flex-wrap gap-8 md:mt-24">
          {skills.map((skill) => {
            const Icon = skill.asset.icon;
            return (
              <SkillCard
                key={skill.id}
                gradientColor={skill.gradientColor}
                assetBackground={skill.asset.background}
                titleBackground={skill.title.background}
                titleLabel={skill.title.label}
                content={skill.content}
              >
                <Icon className="size-4" />
              </SkillCard>
            );
          })}
        </div>
      </div>

      <DotPattern
        width={20}
        height={20}
        cx={1}
        cy={1}
        cr={1}
        className="dot-pattern opacity-50"
      />
    </section>
  );
};

export default About;
