import { GraduationCap, Award, BookOpen } from 'lucide-react';
import { education, certifications, languages } from '@/data/portfolio';
import { Section, SectionHeading, SectionLabel } from '@/components/ui/Section';
import { useScrollReveal } from '@/hooks/useScrollReveal';

export function Education() {
  const { ref, isVisible } = useScrollReveal<HTMLDivElement>();

  return (
    <Section id="education" className="bg-canvas-2">
      <SectionHeading
        label="Education & Academic Background"
        title="Academic Foundation"
        subtitle="Formal education and continuous professional learning that support my engineering practice."
      />

      <div ref={ref} className={`space-y-10 ${isVisible ? 'reveal is-visible' : 'reveal'}`}>
        <div>
          <div className="relative">
            <div className="absolute left-4 top-2 bottom-2 w-px bg-border sm:left-6" />
            <div className="space-y-8">
              {education.map((edu, i) => (
                <div key={i} className="relative pl-12 sm:pl-16">
                  <div className="absolute left-0 top-1 flex h-8 w-8 items-center justify-center rounded-full border border-border bg-canvas sm:left-2">
                    <GraduationCap size={14} className="text-accent" />
                  </div>
                  <div className="rounded-2xl border border-border bg-canvas p-6 transition-shadow hover:shadow-sm">
                    <div className="flex flex-wrap items-start justify-between gap-2">
                      <div>
                        <h3 className="text-lg font-bold text-ink">{edu.degree}</h3>
                        {(edu.institution || edu.subInstitution) && (
                          <p className="text-sm text-ink-2 mt-0.5">
                            {[edu.institution, edu.subInstitution].filter(Boolean).join(' · ')}
                          </p>
                        )}
                      </div>
                      <div className="flex flex-col items-end gap-1">
                        <span className="text-xs font-medium text-ink-2 bg-canvas-2 border border-border rounded-full px-3 py-1">
                          {edu.period}
                        </span>
                        </div>
                    </div>
                    {edu.coursework.length > 0 && (
                      <div className="mt-4">
                        <p className="text-xs font-semibold uppercase tracking-wider text-ink-2 mb-2">
                          Relevant Coursework
                        </p>
                        <div className="flex flex-wrap gap-2">
                          {edu.coursework.map((c) => (
                            <span
                              key={c}
                              className="inline-flex items-center gap-1.5 rounded-lg border border-border bg-canvas-2 px-2.5 py-1 text-xs font-medium text-ink-2"
                            >
                              <BookOpen size={12} className="text-accent" />
                              {c}
                            </span>
                          ))}
                        </div>
                      </div>
                    )}
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>

        <div className="grid gap-8 lg:grid-cols-2">
          <div>
            <SectionLabel>Certifications & Professional Learning</SectionLabel>
            <h3 className="mt-3 text-xl font-bold text-ink sm:text-2xl">Certifications</h3>
            <div className="mt-5 space-y-3">
              {certifications.map((cert, i) => (
                <div
                  key={i}
                  className="flex items-center gap-4 rounded-xl border border-border bg-canvas p-4 transition-shadow hover:shadow-sm"
                >
                  <span className="flex h-10 w-10 flex-none items-center justify-center rounded-lg bg-accent-50">
                    <Award size={18} className="text-accent" />
                  </span>
                  <div className="flex-1">
                    <p className="text-sm font-semibold text-ink">{cert.name}</p>
                    <p className="text-xs text-ink-2">{cert.org}</p>
                  </div>
                  <span className="text-xs font-medium text-ink-2">{cert.year}</span>
                </div>
              ))}
            </div>
          </div>

          <div>
            <SectionLabel>Languages</SectionLabel>
            <h3 className="mt-3 text-xl font-bold text-ink sm:text-2xl">Spoken Languages</h3>
            <div className="mt-5 grid grid-cols-2 gap-3">
              {languages.map((lang) => (
                <div
                  key={lang.name}
                  className="flex items-center gap-3 rounded-xl border border-border bg-canvas p-4"
                >
                  <span
                    aria-hidden="true"
                    className="flex h-9 w-9 flex-none items-center justify-center rounded-lg bg-accent-50 text-xs font-bold text-accent"
                  >
                    {lang.symbol}
                  </span>
                  <div>
                    <p className="text-sm font-semibold text-ink">{lang.name}</p>
                    <p className="text-xs text-ink-2">{lang.level}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </Section>
  );
}
