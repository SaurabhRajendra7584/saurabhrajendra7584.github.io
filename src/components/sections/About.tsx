import { Check } from 'lucide-react';
import { personalInfo } from '@/data/portfolio';
import { Section, SectionHeading } from '@/components/ui/Section';
import { useScrollReveal } from '@/hooks/useScrollReveal';

export function About() {
  const { ref, isVisible } = useScrollReveal<HTMLDivElement>();

  return (
    <Section id="about">
      <SectionHeading
        label="About Me"
        title="Building Practical Solutions Through Engineering & Automation."
      />

      <div ref={ref} className={`grid gap-10 lg:grid-cols-[1.5fr_1fr] lg:gap-16 ${isVisible ? 'reveal is-visible' : 'reveal'}`}>
        <div className="space-y-4">
          {personalInfo.aboutBio.map((paragraph, i) => (
            <p key={i} className="text-base leading-relaxed text-ink-2">
              {paragraph}
            </p>
          ))}
        </div>

        <div className="lg:sticky lg:top-24 lg:self-start">
          <div className="rounded-2xl border border-border bg-canvas-2 p-6 sm:p-8">
            <h3 className="text-sm font-semibold uppercase tracking-wider text-ink mb-5">
              Professional Highlights
            </h3>
            <ul className="space-y-3">
              {personalInfo.aboutHighlights.map((highlight) => (
                <li key={highlight} className="flex items-start gap-3">
                  <span className="mt-0.5 flex h-5 w-5 flex-none items-center justify-center rounded-full bg-accent-50">
                    <Check size={12} className="text-accent" />
                  </span>
                  <span className="text-sm font-medium text-ink">{highlight}</span>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </Section>
  );
}
