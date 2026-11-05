import { ChevronRight } from 'lucide-react';
import {
  Code2, Database, Workflow, Plug, FileText, Rocket,
} from 'lucide-react';
import { services } from '@/data/portfolio';
import { Section, SectionHeading } from '@/components/ui/Section';
import { useScrollReveal } from '@/hooks/useScrollReveal';

const icons = [Code2, Database, Workflow, Plug, FileText, Rocket];

export function Services() {
  const { ref, isVisible } = useScrollReveal<HTMLDivElement>();

  return (
    <Section id="services">
      <SectionHeading
        label="How I Can Help"
        title="Services"
        subtitle="Practical engineering and automation services based on real production experience."
      />

      <div
        ref={ref}
        className={`grid gap-5 sm:grid-cols-2 lg:grid-cols-3 reveal-stagger ${isVisible ? 'is-visible' : ''}`}
      >
        {services.map((service, i) => {
          const Icon = icons[i] ?? Code2;
          return (
            <div
              key={service.title}
              style={{ '--stagger-index': i } as React.CSSProperties}
              className="motion-card group rounded-2xl border border-border bg-canvas p-6 hover:border-accent-200 hover:shadow-md"
            >
              <span className="motion-card-icon flex h-11 w-11 items-center justify-center rounded-xl bg-accent-50 transition-colors group-hover:bg-accent group-hover:text-white">
                <Icon size={20} className="text-accent group-hover:text-white" />
              </span>
              <h3 className="mt-4 text-base font-bold text-ink">{service.title}</h3>
              <ul className="mt-3 space-y-1.5">
                {service.items.map((item, j) => (
                  <li key={j} className="flex items-start gap-2 text-sm text-ink-2">
                    <ChevronRight size={14} className="mt-1 flex-none text-accent" />
                    {item}
                  </li>
                ))}
              </ul>
            </div>
          );
        })}
      </div>
    </Section>
  );
}
