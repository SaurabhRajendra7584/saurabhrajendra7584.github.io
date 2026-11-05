import { useState } from 'react';
import { Mail, Phone, MapPin, Linkedin, Github, Send, Loader2, CheckCircle2, AlertCircle } from 'lucide-react';
import { personalInfo } from '@/data/portfolio';
import { isEmailJsConfigured, sendContactEmail } from '@/lib/emailjs';
import { Section, SectionHeading } from '@/components/ui/Section';
import { useScrollReveal } from '@/hooks/useScrollReveal';

type Status = 'idle' | 'loading' | 'success' | 'error';

export function Contact() {
  const { ref, isVisible } = useScrollReveal<HTMLDivElement>();
  const [form, setForm] = useState({ full_name: '', email: '', subject: '', message: '' });
  const [status, setStatus] = useState<Status>('idle');
  const [errorMsg, setErrorMsg] = useState('');

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setForm((prev) => ({ ...prev, [e.target.name]: e.target.value }));
    if (status === 'success' || status === 'error') {
      setStatus('idle');
    }
  };

  const validate = (): string | null => {
    if (!form.full_name.trim()) return 'Please enter your full name.';
    if (!form.email.trim()) return 'Please enter your email address.';
    if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(form.email)) return 'Please enter a valid email address.';
    if (!form.subject.trim()) return 'Please enter a subject.';
    if (form.message.trim().length < 10) return 'Please enter a message with at least 10 characters.';
    return null;
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    const validationError = validate();
    if (validationError) {
      setStatus('error');
      setErrorMsg(validationError);
      return;
    }

    if (!isEmailJsConfigured) {
      setStatus('error');
      setErrorMsg(`The contact form is not configured yet. Please email me at ${personalInfo.email}.`);
      return;
    }

    setStatus('loading');
    setErrorMsg('');

    try {
      await sendContactEmail({
        full_name: form.full_name.trim(),
        email: form.email.trim(),
        reply_to: form.email.trim(),
        subject: form.subject.trim(),
        message: form.message.trim(),
      });

      setStatus('success');
      setForm({ full_name: '', email: '', subject: '', message: '' });
    } catch (error) {
      console.error('Could not connect to EmailJS.', error);
      setStatus('error');
      setErrorMsg(
        `Could not connect to the email service. Please try again or email me at ${personalInfo.email}.`,
      );
    }
  };

  const contactItems = [
    { icon: Mail, label: 'Email', value: personalInfo.email, href: `mailto:${personalInfo.email}` },
    { icon: Phone, label: 'Phone', value: personalInfo.phone, href: `tel:${personalInfo.phone.replace(/[^+\d]/g, '')}` },
    { icon: MapPin, label: 'Location', value: personalInfo.location, href: null },
    { icon: Linkedin, label: 'LinkedIn', value: 'saurabhrajendradubey', href: personalInfo.linkedin },
    { icon: Github, label: 'GitHub', value: 'SaurabhRajendra7584', href: personalInfo.github },
  ];

  return (
    <Section id="contact" className="bg-canvas-2">
      <SectionHeading
        label="Contact"
        title="Let's Build Something Meaningful."
        subtitle="Have a project, an automation challenge, or an opportunity to collaborate? I'd be happy to connect and discuss how practical engineering and intelligent automation can help."
      />

      <div ref={ref} className={`grid gap-8 lg:grid-cols-[0.8fr_1.2fr] lg:gap-12 ${isVisible ? 'reveal is-visible' : 'reveal'}`}>
        <div className="space-y-3">
          {contactItems.map((item) => {
            const content = (
              <div className="flex items-center gap-4 rounded-xl border border-border bg-canvas p-4 transition-shadow hover:shadow-sm">
                <span className="flex h-10 w-10 flex-none items-center justify-center rounded-lg bg-accent-50">
                  <item.icon size={18} className="text-accent" />
                </span>
                <div>
                  <p className="text-xs font-semibold uppercase tracking-wider text-ink-2">{item.label}</p>
                  <p className="text-sm font-medium text-ink break-all">{item.value}</p>
                </div>
              </div>
            );
            return item.href ? (
              <a key={item.label} href={item.href} target={item.href.startsWith('http') ? '_blank' : undefined} rel="noopener noreferrer" className="block">
                {content}
              </a>
            ) : (
              <div key={item.label}>{content}</div>
            );
          })}
        </div>

        <form
          onSubmit={handleSubmit}
          className="rounded-2xl border border-border bg-canvas p-6 sm:p-8"
          noValidate
        >
          {!isEmailJsConfigured && (
            <div className="mb-5 flex items-start gap-2.5 rounded-xl border border-amber-200 bg-amber-50 p-4">
              <AlertCircle size={18} className="mt-0.5 flex-none text-amber-700" />
              <p className="text-sm text-amber-800">
                The contact form needs EmailJS configuration. Until then, email me at{' '}
                <a className="font-semibold underline" href={`mailto:${personalInfo.email}`}>
                  {personalInfo.email}
                </a>
                .
              </p>
            </div>
          )}
          <div className="grid gap-4 sm:grid-cols-2">
            <Field
              label="Full Name"
              name="full_name"
              value={form.full_name}
              onChange={handleChange}
              placeholder="Saurabh Dubey"
              required
            />
            <Field
              label="Email Address"
              name="email"
              type="email"
              value={form.email}
              onChange={handleChange}
              placeholder={personalInfo.email}
              required
            />
          </div>
          <div className="mt-4">
            <Field
              label="Subject"
              name="subject"
              value={form.subject}
              onChange={handleChange}
              placeholder="Project inquiry"
              required
            />
          </div>
          <div className="mt-4">
            <label className="mb-1.5 block text-sm font-semibold text-ink">
              Message <span className="text-accent">*</span>
            </label>
            <textarea
              name="message"
              value={form.message}
              onChange={handleChange}
              placeholder="Tell me about your project or opportunity..."
              rows={5}
              required
              className="w-full rounded-xl border border-border bg-canvas-2 px-4 py-3 text-sm text-ink placeholder:text-ink-2/60 transition-colors focus:border-accent focus:bg-canvas focus:outline-none focus:ring-1 focus:ring-accent"
            />
          </div>

          {status === 'error' && (
            <div className="mt-4 flex items-start gap-2.5 rounded-xl border border-red-200 bg-red-50 p-4">
              <AlertCircle size={18} className="mt-0.5 flex-none text-red-600" />
              <p className="text-sm text-red-700">{errorMsg}</p>
            </div>
          )}

          {status === 'success' && (
            <div className="mt-4 flex items-start gap-2.5 rounded-xl border border-green-200 bg-green-50 p-4">
              <CheckCircle2 size={18} className="mt-0.5 flex-none text-green-600" />
              <div>
                <p className="text-sm font-semibold text-green-700">Email sent successfully.</p>
                <p className="text-sm text-green-600">Thank you for reaching out. I'll get back to you soon.</p>
              </div>
            </div>
          )}

          <button
            type="submit"
            disabled={status === 'loading'}
            className="mt-6 inline-flex w-full items-center justify-center gap-2 rounded-xl bg-accent px-6 py-3.5 text-sm font-semibold text-white transition-colors hover:bg-accent-600 disabled:cursor-not-allowed disabled:opacity-60"
          >
            {status === 'loading' ? (
              <>
                <Loader2 size={16} className="animate-spin" />
                Sending...
              </>
            ) : (
              <>
                <Send size={16} />
                Send Message
              </>
            )}
          </button>

          <p className="mt-3 text-center text-xs text-ink-2">
            Your message will be sent securely to my inbox.
          </p>
        </form>
      </div>
    </Section>
  );
}

interface FieldProps {
  label: string;
  name: string;
  value: string;
  onChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
  placeholder?: string;
  type?: string;
  required?: boolean;
}

function Field({ label, name, value, onChange, placeholder, type = 'text', required }: FieldProps) {
  return (
    <div>
      <label className="mb-1.5 block text-sm font-semibold text-ink">
        {label} {required && <span className="text-accent">*</span>}
      </label>
      <input
        type={type}
        name={name}
        value={value}
        onChange={onChange}
        placeholder={placeholder}
        required={required}
        className="w-full rounded-xl border border-border bg-canvas-2 px-4 py-3 text-sm text-ink placeholder:text-ink-2/60 transition-colors focus:border-accent focus:bg-canvas focus:outline-none focus:ring-1 focus:ring-accent"
      />
    </div>
  );
}
