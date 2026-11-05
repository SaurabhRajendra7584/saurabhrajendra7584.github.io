import { skillCategories } from '@/data/portfolio';
import { Section, SectionHeading } from '@/components/ui/Section';
import { useScrollReveal } from '@/hooks/useScrollReveal';

export function Skills() {
  const { ref, isVisible } = useScrollReveal<HTMLDivElement>();

  return (
    <Section id="skills" className="bg-canvas-2">
      <SectionHeading
        label="Technical Skills"
        title="Technologies, tools, and engineering capabilities."
      />

      <div
        ref={ref}
        className={`grid gap-5 sm:grid-cols-2 lg:grid-cols-3 reveal-stagger ${isVisible ? 'is-visible' : ''}`}
      >
        {skillCategories.map((cat, index) => (
          <div
            key={cat.label}
            style={{ '--stagger-index': index } as React.CSSProperties}
            className="motion-card rounded-2xl border border-border bg-canvas p-6 hover:shadow-md"
          >
            <div className="flex items-center gap-3 mb-4">
              <span className="flex h-8 w-8 flex-none items-center justify-center rounded-lg bg-accent-50 text-sm font-bold text-accent">
                {cat.label}
              </span>
              <h3 className="text-base font-semibold text-ink">{cat.title}</h3>
            </div>
            <div className="flex flex-wrap gap-2">
              {cat.skills.map((skill) => (
                <span
                  key={skill}
                  className="skill-badge rounded-lg border border-border bg-canvas-2 px-3 py-1.5 text-xs font-medium text-ink-2 hover:border-accent-200 hover:text-accent"
                >
                  {skill}
                </span>
              ))}
            </div>
          </div>
        ))}
      </div>
    </Section>
  );
}
