import { useState } from 'react';
import { X, ArrowUpRight, Github, CheckCircle2, AlertTriangle, Wrench, Target, ChevronRight } from 'lucide-react';
import { featuredProjects, independentProjects } from '@/data/portfolio';
import { Section, SectionHeading, SectionLabel } from '@/components/ui/Section';
import { useScrollReveal } from '@/hooks/useScrollReveal';

function updateProjectPointer(event: React.MouseEvent<HTMLElement>) {
  const bounds = event.currentTarget.getBoundingClientRect();
  const x = (event.clientX - bounds.left) / bounds.width;
  const y = (event.clientY - bounds.top) / bounds.height;

  event.currentTarget.style.setProperty('--pointer-x', `${x * 100}%`);
  event.currentTarget.style.setProperty('--pointer-y', `${y * 100}%`);
  event.currentTarget.style.setProperty('--tilt-x', `${(x - 0.5) * 4}deg`);
  event.currentTarget.style.setProperty('--tilt-y', `${(0.5 - y) * 4}deg`);
}

function resetProjectPointer(event: React.MouseEvent<HTMLElement>) {
  event.currentTarget.style.setProperty('--tilt-x', '0deg');
  event.currentTarget.style.setProperty('--tilt-y', '0deg');
}

export function Projects() {
  const { ref, isVisible } = useScrollReveal<HTMLDivElement>();
  const [selectedProject, setSelectedProject] = useState<number | null>(null);

  return (
    <Section id="projects">
      <SectionHeading
        label="Featured Projects"
        title="Real-world engineering, automation, and production systems."
        subtitle="Detailed case studies of production platforms, ETL pipelines, and data engineering work."
      />

      <div ref={ref} className={`space-y-6 reveal-stagger ${isVisible ? 'is-visible' : ''}`}>
        {featuredProjects.map((project, i) => (
          <article
            key={project.id}
            style={{ '--stagger-index': i } as React.CSSProperties}
            onMouseMove={updateProjectPointer}
            onMouseLeave={resetProjectPointer}
            className="project-card pointer-glow-card group rounded-2xl border border-border bg-canvas p-6 sm:p-8 hover:border-accent-200 hover:shadow-lg"
          >
            <div className="grid gap-6 lg:grid-cols-[1fr_auto] lg:items-start">
              <div>
                <div className="flex flex-wrap items-center gap-2 mb-3">
                  <span className={`rounded-full px-3 py-1 text-xs font-semibold ${
                    project.status === 'Ongoing'
                      ? 'bg-amber-50 text-amber-700 border border-amber-200'
                      : 'bg-accent-50 text-accent border border-accent-100'
                  }`}>
                    {project.status}
                  </span>
                </div>
                <h3 className="text-xl font-bold text-ink sm:text-2xl">{project.title}</h3>
                <p className="text-sm text-ink-2 mt-1">{project.organization}</p>
                <p className="mt-4 text-sm leading-relaxed text-ink-2 max-w-2xl">{project.overview}</p>
                <div className="mt-4 flex flex-wrap gap-2">
                  {project.technologies.map((tech) => (
                    <span
                      key={tech}
                      className="rounded-lg border border-border bg-canvas-2 px-2.5 py-1 text-xs font-medium text-ink-2"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
              </div>
              <button
                onClick={() => setSelectedProject(i)}
                className="inline-flex flex-none items-center gap-1.5 rounded-xl border border-border px-4 py-2.5 text-sm font-semibold text-ink transition-colors hover:border-accent hover:text-accent lg:mt-2"
              >
                View Case Study
                <ArrowUpRight size={15} />
              </button>
            </div>
          </article>
        ))}
      </div>

      <div className="mt-16">
        <SectionLabel>Independent Data Engineering Projects</SectionLabel>
        <h3 className="mt-3 text-2xl font-bold text-ink sm:text-3xl">
          Personal Data Engineering Work
        </h3>

        <div className="mt-8 grid gap-5 sm:grid-cols-2 reveal-stagger is-visible">
          {independentProjects.map((project, index) => (
            <article
              key={project.id}
              style={{ '--stagger-index': index } as React.CSSProperties}
              className="motion-card pointer-glow-card flex flex-col rounded-2xl border border-border bg-canvas p-6 hover:border-accent-200 hover:shadow-md"
            >
              <div className="flex items-start justify-between gap-3 mb-2">
                <h4 className="text-base font-bold text-ink">{project.title}</h4>
                <span className="flex-none rounded-full bg-canvas-2 border border-border px-2.5 py-0.5 text-xs font-medium text-ink-2">
                  {project.category}
                </span>
              </div>
              <p className="text-sm leading-relaxed text-ink-2">{project.description}</p>

              {project.features.length > 0 && (
                <ul className="mt-4 space-y-1.5">
                  {project.features.map((feat, j) => (
                    <li key={j} className="flex items-start gap-2 text-xs text-ink-2">
                      <CheckCircle2 size={14} className="mt-0.5 flex-none text-accent" />
                      {feat}
                    </li>
                  ))}
                </ul>
              )}

              <div className="mt-4 flex flex-wrap gap-2">
                {project.technologies.map((tech) => (
                  <span
                    key={tech}
                    className="rounded-lg border border-border bg-canvas-2 px-2.5 py-1 text-xs font-medium text-ink-2"
                  >
                    {tech}
                  </span>
                ))}
              </div>

              <div className="mt-auto pt-4">
                {project.githubUrl ? (
                  <a
                    href={project.githubUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-1.5 text-sm font-semibold text-accent transition-colors hover:text-accent-600"
                  >
                    <Github size={15} />
                    View on GitHub
                    <ArrowUpRight size={14} />
                  </a>
                ) : (
                  <span className="inline-flex items-center gap-1.5 text-sm font-medium text-ink-2">
                    <Github size={15} />
                    Private / No public repository
                  </span>
                )}
              </div>
            </article>
          ))}
        </div>
      </div>

      {selectedProject !== null && (
        <ProjectModal
          project={featuredProjects[selectedProject]}
          onClose={() => setSelectedProject(null)}
        />
      )}
    </Section>
  );
}

interface ProjectModalProps {
  project: typeof featuredProjects[number];
  onClose: () => void;
}

function ProjectModal({ project, onClose }: ProjectModalProps) {
  const cs = project.caseStudy;

  return (
    <div
      className="fixed inset-0 z-[60] flex items-start justify-center overflow-y-auto bg-ink/40 backdrop-blur-sm p-4 sm:p-8"
      onClick={onClose}
    >
      <div
        className="modal-enter relative my-auto w-full max-w-3xl rounded-2xl border border-border bg-canvas p-6 sm:p-10 shadow-xl"
        onClick={(e) => e.stopPropagation()}
      >
        <button
          onClick={onClose}
          className="absolute right-4 top-4 flex h-9 w-9 items-center justify-center rounded-lg text-ink-2 transition-colors hover:bg-canvas-2 hover:text-ink"
          aria-label="Close case study"
        >
          <X size={20} />
        </button>

        <span className={`rounded-full px-3 py-1 text-xs font-semibold ${
          project.status === 'Ongoing'
            ? 'bg-amber-50 text-amber-700 border border-amber-200'
            : 'bg-accent-50 text-accent border border-accent-100'
        }`}>
          {project.status}
        </span>

        <h3 className="mt-4 text-2xl font-bold text-ink">{project.title}</h3>
        <p className="text-sm text-ink-2 mt-1">{project.organization}</p>
        <p className="mt-4 text-sm leading-relaxed text-ink-2">{project.overview}</p>

        <div className="mt-4 flex flex-wrap gap-2">
          {project.technologies.map((tech) => (
            <span
              key={tech}
              className="rounded-lg border border-border bg-canvas-2 px-2.5 py-1 text-xs font-medium text-ink-2"
            >
              {tech}
            </span>
          ))}
        </div>

        <div className="mt-8 space-y-6">
          <CaseStudyBlock icon={<Target size={16} />} title="Business Problem" body={cs.businessProblem} />
          <CaseStudyBlock icon={<AlertTriangle size={16} />} title="Legacy System Limitations" body={cs.legacyLimitations} />
          <CaseStudyBlock icon={<Wrench size={16} />} title="Architecture Overview" body={cs.architecture} />
          <CaseStudyBlock icon={<Wrench size={16} />} title="ETL Pipeline" body={cs.etlPipeline} />
          <CaseStudyBlock icon={<CheckCircle2 size={16} />} title="Validation Methodology" body={cs.validation} />

          <div>
            <h4 className="flex items-center gap-2 text-sm font-bold text-ink mb-2">
              <AlertTriangle size={16} className="text-accent" />
              Engineering Challenges
            </h4>
            <ul className="space-y-2">
              {cs.challenges.map((ch, j) => (
                <li key={j} className="flex items-start gap-2.5 text-sm text-ink-2">
                  <ChevronRight size={16} className="mt-0.5 flex-none text-accent" />
                  {ch}
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h4 className="flex items-center gap-2 text-sm font-bold text-ink mb-2">
              <CheckCircle2 size={16} className="text-accent" />
              Outcomes
            </h4>
            <ul className="space-y-2">
              {cs.outcomes.map((outcome, j) => (
                <li key={j} className="flex items-start gap-2.5 text-sm text-ink-2">
                  <CheckCircle2 size={16} className="mt-0.5 flex-none text-accent" />
                  {outcome}
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
}

function CaseStudyBlock({ icon, title, body }: { icon: React.ReactNode; title: string; body: string }) {
  return (
    <div>
      <h4 className="flex items-center gap-2 text-sm font-bold text-ink mb-2">
        <span className="text-accent">{icon}</span>
        {title}
      </h4>
      <p className="text-sm leading-relaxed text-ink-2">{body}</p>
    </div>
  );
}
