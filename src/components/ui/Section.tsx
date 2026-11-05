import { type ReactNode } from 'react';
import { useScrollReveal } from '@/hooks/useScrollReveal';

interface SectionProps {
  id: string;
  children: ReactNode;
  className?: string;
}

export function Section({ id, children, className = '' }: SectionProps) {
  return (
    <section id={id} className={`scroll-mt-20 py-20 md:py-28 ${className}`}>
      <div className="mx-auto w-full max-w-6xl px-5 sm:px-8">{children}</div>
    </section>
  );
}

interface SectionLabelProps {
  children: ReactNode;
}

export function SectionLabel({ children }: SectionLabelProps) {
  return (
    <span className="text-xs font-semibold uppercase tracking-ultra-wide text-accent">
      {children}
    </span>
  );
}

interface SectionHeadingProps {
  title: string;
  subtitle?: string;
  label?: string;
  align?: 'left' | 'center';
}

export function SectionHeading({ title, subtitle, label, align = 'left' }: SectionHeadingProps) {
  const { ref, isVisible } = useScrollReveal<HTMLDivElement>();

  return (
    <div
      ref={ref}
      className={`mb-12 md:mb-16 reveal ${isVisible ? 'is-visible' : ''} ${align === 'center' ? 'text-center' : ''}`}
    >
      {label && (
        <div className={align === 'center' ? 'flex justify-center mb-3' : 'mb-3'}>
          <SectionLabel>{label}</SectionLabel>
        </div>
      )}
      <h2 className="text-3xl font-bold tracking-tight text-ink sm:text-4xl md:text-5xl text-balance">
        {title}
      </h2>
      {subtitle && (
        <p className="mt-4 text-base text-ink-2 sm:text-lg max-w-2xl text-balance">
          {subtitle}
        </p>
      )}
    </div>
  );
}
