import { Briefcase, ChevronRight } from 'lucide-react';
import { experiences } from '@/data/portfolio';
import { Section, SectionHeading } from '@/components/ui/Section';
import { useScrollReveal } from '@/hooks/useScrollReveal';

export function Experience() {
  const { ref, isVisible } = useScrollReveal<HTMLDivElement>();

  return (
    <Section id="experience">
      <SectionHeading
        label="Professional Experience"
        title="Career Timeline"
        subtitle="A track record of building production systems, automating workflows, and delivering engineering results."
      />

      <div ref={ref} className={`relative ${isVisible ? 'reveal is-visible' : 'reveal'}`}>
        <div className="absolute left-4 top-2 bottom-2 w-px bg-border sm:left-6" />

        <div className="space-y-10">
          {experiences.map((exp, i) => (
            <div key={i} className="relative pl-12 sm:pl-16">
              <div className="absolute left-0 top-1 flex h-8 w-8 items-center justify-center rounded-full border border-border bg-canvas sm:left-2">
                <Briefcase size={14} className="text-accent" />
              </div>

              <div className="rounded-2xl border border-border bg-canvas p-6 sm:p-8 transition-shadow hover:shadow-sm">
                <div className="flex flex-wrap items-start justify-between gap-2 mb-1">
                  <h3 className="text-lg font-bold text-ink">{exp.title}</h3>
                  <span className="text-xs font-medium text-ink-2 bg-canvas-2 border border-border rounded-full px-3 py-1">
                    {exp.period}
                  </span>
                </div>
                <p className="text-sm font-semibold text-accent">{exp.company}</p>
                {(exp.team || exp.location) && (
                  <p className="text-sm text-ink-2 mt-0.5">
                    {[exp.team, exp.location].filter(Boolean).join(' · ')}
                  </p>
                )}

                {exp.description && (
                  <p className="mt-4 text-sm leading-relaxed text-ink-2">{exp.description}</p>
                )}

                <ul className="mt-4 space-y-2.5">
                  {exp.achievements.map((ach, j) => (
                    <li key={j} className="flex items-start gap-2.5">
                      <ChevronRight size={16} className="mt-0.5 flex-none text-accent" />
                      <span className="text-sm text-ink-2">
                        {ach.heading && <span className="font-semibold text-ink">{ach.heading}: </span>}
                        {ach.body}
                      </span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          ))}
        </div>
      </div>
    </Section>
  );
}
