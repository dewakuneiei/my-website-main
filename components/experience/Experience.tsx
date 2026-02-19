import { experiences, education } from '@/constants/experience';
import DotPattern from '../ui/dot-pattern';

const Experience = () => {
  return (
    <section id="experience" className="relative px-6 py-24 xl:px-56">
      <div className="z-10">
        <h2 className="h2-bold mb-4">Experience</h2>
        <p className="regular-paragraph mb-16 max-w-[835px]">
          My professional journey as a developer — from game programming to
          full-stack web development.
        </p>

        {/* Work Experience */}
        <div className="mb-16">
          <h3 className="mb-8 font-Silkscreen text-sm uppercase tracking-widest text-gray-400">
            Work Experience
          </h3>
          <div className="relative flex flex-col gap-6">
            {/* Timeline line */}
            <div className="absolute left-[11px] top-2 hidden h-full w-px bg-gradient-to-b from-gray-600 to-transparent md:block" />

            {experiences.map((exp) => (
              <div key={exp.id} className="relative flex flex-col gap-4 md:flex-row md:gap-8">
                {/* Timeline dot */}
                <div
                  className="mt-1 hidden size-[23px] shrink-0 rounded-full border-2 md:block"
                  style={{ borderColor: exp.color, backgroundColor: exp.bgColor }}
                />

                <div
                  className="rounded-xl border p-6 transition-all hover:-translate-y-1"
                  style={{
                    borderColor: exp.borderColor,
                    backgroundColor: exp.bgColor,
                  }}
                >
                  <div className="mb-3 flex flex-wrap items-start justify-between gap-3">
                    <div>
                      <h4
                        className="text-code text-lg font-bold"
                        style={{ color: exp.color }}
                      >
                        {exp.role}
                      </h4>
                      <p className="text-whiteice">{exp.company}</p>
                    </div>
                    <div className="text-right">
                      <span className="rounded-full px-3 py-1 font-Silkscreen text-[11px] uppercase" style={{ color: exp.color, backgroundColor: exp.bgColor, border: `1px solid ${exp.borderColor}` }}>
                        {exp.type}
                      </span>
                      <p className="mt-1 font-Silkscreen text-[11px] text-gray-400">
                        {exp.period}
                      </p>
                      {exp.duration !== 'Present' && (
                        <p className="font-Silkscreen text-[11px] text-gray-500">
                          {exp.duration}
                        </p>
                      )}
                    </div>
                  </div>

                  <p className="mb-4 text-silverchalice">{exp.description}</p>

                  <div className="flex flex-wrap gap-2">
                    {exp.tech.map((t) => (
                      <span
                        key={t}
                        className="rounded-md px-2 py-0.5 font-Silkscreen text-[11px] uppercase text-gray-300"
                        style={{ backgroundColor: 'rgba(255,255,255,0.06)' }}
                      >
                        {t}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Education */}
        <div>
          <h3 className="mb-8 font-Silkscreen text-sm uppercase tracking-widest text-gray-400">
            Education
          </h3>
          {education.map((edu) => (
            <div
              key={edu.id}
              className="rounded-xl border border-gray-700/40 bg-white/5 p-6"
            >
              <div className="mb-3 flex flex-wrap items-start justify-between gap-3">
                <div>
                  <h4 className="text-code text-lg font-bold text-cyan-400">
                    {edu.school}
                  </h4>
                  <p className="text-whiteice">{edu.degree}</p>
                </div>
                <div className="text-right">
                  <p className="font-Silkscreen text-[11px] text-gray-400">
                    {edu.period}
                  </p>
                  <p className="font-Silkscreen text-[11px] text-yellow-400">
                    GPA: {edu.gpa}
                  </p>
                </div>
              </div>
              <div className="flex flex-wrap gap-2">
                {edu.subjects.map((s) => (
                  <span
                    key={s}
                    className="rounded-md px-2 py-0.5 font-Silkscreen text-[11px] uppercase text-gray-300"
                    style={{ backgroundColor: 'rgba(255,255,255,0.06)' }}
                  >
                    {s}
                  </span>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>

      <DotPattern
        width={20}
        height={20}
        cx={1}
        cy={1}
        cr={1}
        className="dot-pattern opacity-30"
      />
    </section>
  );
};

export default Experience;
