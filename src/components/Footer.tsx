import { Mail, Phone, Linkedin, Github, MapPin, ArrowUp } from 'lucide-react';
import { personalInfo, navLinks } from '@/data/portfolio';

export function Footer() {
  const scrollTo = (href: string) => {
    document.getElementById(href.slice(1))?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <footer className="border-t border-border bg-canvas">
      <div className="mx-auto w-full max-w-6xl px-5 sm:px-8 py-12">
        <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
          <div>
            <p className="text-sm font-bold tracking-wide text-ink">
              {personalInfo.fullName.toUpperCase()}
            </p>
            <p className="mt-2 text-sm text-ink-2 max-w-xs">
              {personalInfo.title} — {personalInfo.subtitle}
            </p>
            <p className="mt-3 text-sm font-medium text-accent">
              {personalInfo.brandTagline}
            </p>
          </div>

          <div>
            <p className="text-xs font-semibold uppercase tracking-wider text-ink-2 mb-3">
              Navigation
            </p>
            <ul className="grid grid-cols-2 gap-x-4 gap-y-1.5">
              {navLinks.map((link) => (
                <li key={link.href}>
                  <a
                    href={link.href}
                    onClick={(e) => {
                      e.preventDefault();
                      scrollTo(link.href);
                    }}
                    className="text-sm text-ink-2 transition-colors hover:text-accent"
                  >
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <p className="text-xs font-semibold uppercase tracking-wider text-ink-2 mb-3">
              Get In Touch
            </p>
            <ul className="space-y-2">
              <li>
                <a
                  href={`mailto:${personalInfo.email}`}
                  className="flex items-center gap-2 text-sm text-ink-2 transition-colors hover:text-accent"
                >
                  <Mail size={14} className="flex-none" />
                  <span className="break-all">{personalInfo.email}</span>
                </a>
              </li>
              <li>
                <a
                  href={`tel:${personalInfo.phone.replace(/[^+\d]/g, '')}`}
                  className="flex items-center gap-2 text-sm text-ink-2 transition-colors hover:text-accent"
                >
                  <Phone size={14} className="flex-none" />
                  {personalInfo.phone}
                </a>
              </li>
              <li className="flex items-center gap-2 text-sm text-ink-2">
                <MapPin size={14} className="flex-none" />
                {personalInfo.location}
              </li>
              <li className="flex gap-3 pt-2">
                <a
                  href={personalInfo.linkedin}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex h-9 w-9 items-center justify-center rounded-lg border border-border text-ink-2 transition-colors hover:border-accent hover:text-accent"
                  aria-label="LinkedIn"
                >
                  <Linkedin size={16} />
                </a>
                <a
                  href={personalInfo.github}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex h-9 w-9 items-center justify-center rounded-lg border border-border text-ink-2 transition-colors hover:border-accent hover:text-accent"
                  aria-label="GitHub"
                >
                  <Github size={16} />
                </a>
              </li>
            </ul>
          </div>
        </div>

        <div className="mt-10 flex flex-col items-center justify-between gap-4 border-t border-border pt-6 sm:flex-row">
          <p className="text-xs text-ink-2">
            &copy; {new Date().getFullYear()} {personalInfo.fullName}. All rights reserved.
          </p>
          <button
            onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
            className="inline-flex items-center gap-1.5 text-xs font-medium text-ink-2 transition-colors hover:text-accent"
          >
            Back to top
            <ArrowUp size={14} />
          </button>
        </div>
      </div>
    </footer>
  );
}
