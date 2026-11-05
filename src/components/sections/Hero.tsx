import { useCallback, useEffect, useRef, useState } from 'react';
import { ArrowRight, Mail, Download, MapPin, X, Send, Loader2, CheckCircle2, AlertCircle } from 'lucide-react';
import { personalInfo } from '@/data/portfolio';
import { isEmailJsConfigured, sendContactEmail } from '@/lib/emailjs';
import { useScrollReveal } from '@/hooks/useScrollReveal';

const portraitUrl = '/saurabh-dubey-portrait.webp';

export function Hero() {
  const { ref, isVisible } = useScrollReveal<HTMLElement>();
  const [resumeModalOpen, setResumeModalOpen] = useState(false);
  const closeResumeModal = useCallback(() => setResumeModalOpen(false), []);

  const handlePointerMove = (event: React.MouseEvent<HTMLElement>) => {
    const bounds = event.currentTarget.getBoundingClientRect();
    event.currentTarget.style.setProperty('--pointer-x', `${event.clientX - bounds.left}px`);
    event.currentTarget.style.setProperty('--pointer-y', `${event.clientY - bounds.top}px`);
  };

  const resetPointer = (event: React.MouseEvent<HTMLElement>) => {
    event.currentTarget.style.setProperty('--pointer-x', '50%');
    event.currentTarget.style.setProperty('--pointer-y', '45%');
  };

  const scrollTo = (href: string) => {
    document.getElementById(href.slice(1))?.scrollIntoView({ behavior: 'smooth' });
  };

  const handleResume = () => {
    setResumeModalOpen(true);
  };

  return (
    <>
      <section
        id="home"
        ref={ref}
        onMouseMove={handlePointerMove}
        onMouseLeave={resetPointer}
        className="hero-pointer-surface relative flex min-h-screen items-center overflow-hidden pt-16"
      >
      <div className="pointer-events-none absolute inset-0 z-0 overflow-hidden">
        <div className="hero-grid absolute inset-0 opacity-60" />
        <div className="hero-pointer-glow absolute inset-0" />
        <div className="hero-ambient-orb absolute left-1/2 top-0 h-[400px] w-[600px] -translate-x-1/2 rounded-full bg-accent-50 blur-3xl opacity-60" />
        <div className="hero-ambient-orb hero-ambient-orb-delay absolute -right-36 bottom-0 h-[340px] w-[420px] rounded-full bg-accent-100/60 blur-3xl" />
      </div>

      <div className="relative z-10 mx-auto w-full max-w-6xl px-5 py-12 sm:px-8 md:py-20">
        <div className="grid items-center gap-10 lg:grid-cols-[1fr_0.8fr] lg:gap-16">
          <div
            className={`hero-copy flex flex-col ${isVisible ? 'animate-fade-up' : 'opacity-0'}`}
          >
            <span className="text-xs font-semibold uppercase tracking-ultra-wide text-accent mb-5">
              Hello, I&apos;m Saurabh Dubey
            </span>

            <h1 className="text-4xl font-bold leading-[1.1] tracking-tight text-ink sm:text-5xl md:text-6xl lg:text-[3.75rem] text-balance">
              {personalInfo.heroHeadline}
            </h1>

            <p className="mt-6 text-base text-ink-2 sm:text-lg leading-relaxed max-w-xl">
              {personalInfo.heroSupporting}
            </p>

            <div className="mt-6 flex flex-wrap items-center gap-4 text-sm text-ink-2">
              <span className="font-semibold text-ink">{personalInfo.title}</span>
              <span className="h-1 w-1 rounded-full bg-border" />
              <span>{personalInfo.subtitle}</span>
              <span className="h-1 w-1 rounded-full bg-border" />
              <span className="inline-flex items-center gap-1">
                <MapPin size={14} className="text-accent" />
                {personalInfo.location}
              </span>
            </div>

            <div className="mt-8 flex flex-wrap gap-3">
              <button
                onClick={() => scrollTo('#projects')}
                className="inline-flex items-center gap-2 rounded-xl bg-accent px-6 py-3 text-sm font-semibold text-white transition-all hover:bg-accent-600 hover:gap-3"
              >
                Explore My Projects
                <ArrowRight size={16} />
              </button>
              <button
                onClick={() => scrollTo('#contact')}
                className="inline-flex items-center gap-2 rounded-xl border border-border bg-canvas px-6 py-3 text-sm font-semibold text-ink transition-colors hover:border-ink"
              >
                <Mail size={16} />
                Get In Touch
              </button>
              <button
                onClick={handleResume}
                className="inline-flex items-center gap-2 rounded-xl border border-border bg-canvas px-6 py-3 text-sm font-semibold text-ink-2 transition-colors hover:border-ink hover:text-ink"
              >
                <Download size={16} />
                Resume
              </button>
            </div>
          </div>

          <div
            className={`hero-portrait relative ${isVisible ? 'is-visible' : 'opacity-0'}`}
            style={{ animationDelay: '0.2s' }}
          >
            <div className="relative mx-auto max-w-sm lg:max-w-none">
              <div className="absolute -inset-3 rounded-3xl border border-border" />
              <div className="absolute -right-4 -top-4 h-20 w-20 rounded-2xl bg-accent-50" />
              <div className="absolute -bottom-4 -left-4 h-16 w-16 rounded-full border-2 border-accent-200" />
              <img
                src={portraitUrl}
                alt="Portrait of Saurabh Dubey"
                className="relative z-10 w-full rounded-2xl border border-border object-cover aspect-[4/5] bg-canvas-2"
                loading="eager"
                fetchPriority="high"
                decoding="async"
                width={768}
                height={1145}
              />
              <div className="absolute -bottom-5 left-1/2 z-20 -translate-x-1/2 rounded-xl border border-border bg-canvas px-4 py-2 shadow-sm">
                <p className="text-xs font-semibold text-ink">{personalInfo.brandTagline}</p>
              </div>
            </div>
          </div>
        </div>
        </div>
      </section>
      {resumeModalOpen && <ResumeRequestModal onClose={closeResumeModal} />}
    </>
  );
}

interface ResumeRequestModalProps {
  onClose: () => void;
}

function ResumeRequestModal({ onClose }: ResumeRequestModalProps) {
  const [fullName, setFullName] = useState('');
  const [email, setEmail] = useState('');
  const [message, setMessage] = useState(
    `Hi Saurabh,\n\nI’m interested in your profile and would appreciate it if you could share your latest resume. Please send it to this email address. I’d also be happy to discuss your projects or a possible opportunity.\n\nThank you.`,
  );
  const [status, setStatus] = useState<'idle' | 'loading' | 'success' | 'error'>('idle');
  const statusRef = useRef(status);
  const [errorMessage, setErrorMessage] = useState('');
  statusRef.current = status;

  useEffect(() => {
    const previousOverflow = document.body.style.overflow;
    document.body.style.overflow = 'hidden';

    const handleKeyDown = (event: KeyboardEvent) => {
      if (event.key === 'Escape' && statusRef.current !== 'loading') onClose();
    };

    window.addEventListener('keydown', handleKeyDown);
    return () => {
      document.body.style.overflow = previousOverflow;
      window.removeEventListener('keydown', handleKeyDown);
    };
  }, [onClose]);

  const handleSubmit = async (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();

    if (!isEmailJsConfigured) {
      setStatus('error');
      setErrorMessage(`The email service is not configured yet. Please email me at ${personalInfo.email}.`);
      return;
    }

    setStatus('loading');
    setErrorMessage('');

    try {
      await sendContactEmail({
        full_name: fullName.trim() || 'Resume request',
        email: email.trim(),
        reply_to: email.trim(),
        subject: 'Resume request',
        message: message.trim(),
      });
      setStatus('success');
    } catch (error) {
      console.error('Resume request could not be sent.', error);
      setStatus('error');
      setErrorMessage(`Could not send your request. Please email me at ${personalInfo.email}.`);
    }
  };

  return (
    <div
      className="modal-enter fixed inset-0 z-[70] flex items-center justify-center overflow-y-auto bg-ink/50 p-4 backdrop-blur-sm"
      onMouseDown={(event) => {
        if (event.target === event.currentTarget && status !== 'loading') onClose();
      }}
    >
      <section
        role="dialog"
        aria-modal="true"
        aria-labelledby="resume-request-title"
        className="w-full max-w-lg rounded-2xl border border-border bg-canvas p-6 shadow-2xl sm:p-8"
      >
        <div className="flex items-start justify-between gap-4">
          <div>
            <p className="text-xs font-semibold uppercase tracking-ultra-wide text-accent">Resume request</p>
            <h2 id="resume-request-title" className="mt-2 text-2xl font-bold text-ink">
              Request my resume
            </h2>
            <p className="mt-2 text-sm leading-relaxed text-ink-2">
              Add your email so I can reply with the latest resume.
            </p>
          </div>
          <button
            type="button"
            onClick={onClose}
            disabled={status === 'loading'}
            aria-label="Close resume request"
            className="flex h-9 w-9 flex-none items-center justify-center rounded-lg text-ink-2 transition-colors hover:bg-canvas-2 hover:text-ink disabled:opacity-50"
          >
            <X size={20} />
          </button>
        </div>

        {!isEmailJsConfigured && (
          <div className="mt-5 flex items-start gap-2.5 rounded-xl border border-amber-200 bg-amber-50 p-4">
            <AlertCircle size={18} className="mt-0.5 flex-none text-amber-700" />
            <p className="text-sm text-amber-800">
              Email service setup is needed first. You can contact me at{' '}
              <a className="font-semibold underline" href={`mailto:${personalInfo.email}`}>
                {personalInfo.email}
              </a>
              .
            </p>
          </div>
        )}

        <form onSubmit={handleSubmit} className="mt-6 space-y-4">
          <div>
            <label htmlFor="resume-request-name" className="mb-1.5 block text-sm font-semibold text-ink">
              Your name <span className="font-normal text-ink-2">(optional)</span>
            </label>
            <input
              id="resume-request-name"
              type="text"
              autoComplete="name"
              value={fullName}
              onChange={(event) => setFullName(event.target.value)}
              placeholder="Your name"
              maxLength={120}
              className="w-full rounded-xl border border-border bg-canvas-2 px-4 py-3 text-sm text-ink placeholder:text-ink-2/60 focus:border-accent focus:bg-canvas focus:outline-none focus:ring-1 focus:ring-accent"
            />
          </div>

          <div>
            <label htmlFor="resume-request-email" className="mb-1.5 block text-sm font-semibold text-ink">
              Email address <span className="text-accent">*</span>
            </label>
            <input
              id="resume-request-email"
              type="email"
              autoComplete="email"
              autoFocus
              required
              maxLength={254}
              value={email}
              onChange={(event) => setEmail(event.target.value)}
              placeholder="you@example.com"
              className="w-full rounded-xl border border-border bg-canvas-2 px-4 py-3 text-sm text-ink placeholder:text-ink-2/60 focus:border-accent focus:bg-canvas focus:outline-none focus:ring-1 focus:ring-accent"
            />
            <p className="mt-1.5 text-xs text-ink-2">
              Your browser may suggest an email address saved on this device.
            </p>
          </div>

          <div>
            <label htmlFor="resume-request-message" className="mb-1.5 block text-sm font-semibold text-ink">
              Message
            </label>
            <textarea
              id="resume-request-message"
              required
              minLength={10}
              maxLength={2000}
              rows={6}
              value={message}
              onChange={(event) => setMessage(event.target.value)}
              className="w-full resize-y rounded-xl border border-border bg-canvas-2 px-4 py-3 text-sm leading-relaxed text-ink focus:border-accent focus:bg-canvas focus:outline-none focus:ring-1 focus:ring-accent"
            />
          </div>

          {status === 'error' && (
            <div role="alert" className="flex items-start gap-2.5 rounded-xl border border-red-200 bg-red-50 p-4">
              <AlertCircle size={18} className="mt-0.5 flex-none text-red-600" />
              <p className="text-sm text-red-700">{errorMessage}</p>
            </div>
          )}

          {status === 'success' && (
            <div role="status" className="flex items-start gap-2.5 rounded-xl border border-green-200 bg-green-50 p-4">
              <CheckCircle2 size={18} className="mt-0.5 flex-none text-green-600" />
              <div>
                <p className="text-sm font-semibold text-green-700">Request sent successfully.</p>
                <p className="text-sm text-green-600">Thank you. I’ll reply to the email address you provided.</p>
              </div>
            </div>
          )}

          <div className="flex flex-col-reverse gap-3 pt-1 sm:flex-row sm:justify-end">
            <button
              type="button"
              onClick={onClose}
              disabled={status === 'loading'}
              className="rounded-xl border border-border px-5 py-3 text-sm font-semibold text-ink-2 transition-colors hover:border-ink hover:text-ink disabled:opacity-50"
            >
              Close
            </button>
            <button
              type="submit"
              disabled={status === 'loading' || status === 'success'}
              className="inline-flex items-center justify-center gap-2 rounded-xl bg-accent px-5 py-3 text-sm font-semibold text-white transition-colors hover:bg-accent-600 disabled:cursor-not-allowed disabled:opacity-60"
            >
              {status === 'loading' ? (
                <>
                  <Loader2 size={16} className="animate-spin" />
                  Sending...
                </>
              ) : (
                <>
                  <Send size={16} />
                  Send Request
                </>
              )}
            </button>
          </div>
        </form>
      </section>
    </div>
  );
}
