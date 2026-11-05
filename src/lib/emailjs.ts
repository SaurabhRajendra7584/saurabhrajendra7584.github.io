const emailJsConfig = {
  serviceId: import.meta.env.VITE_EMAILJS_SERVICE_ID,
  templateId: import.meta.env.VITE_EMAILJS_TEMPLATE_ID,
  publicKey: import.meta.env.VITE_EMAILJS_PUBLIC_KEY,
};

export const isEmailJsConfigured = Object.values(emailJsConfig).every(Boolean);

interface ContactEmailParams {
  full_name: string;
  email: string;
  reply_to: string;
  subject: string;
  message: string;
}

export async function sendContactEmail(templateParams: ContactEmailParams): Promise<void> {
  if (!isEmailJsConfigured) {
    throw new Error('EmailJS is not configured.');
  }

  const response = await fetch('https://api.emailjs.com/api/v1.0/email/send', {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify({
      service_id: emailJsConfig.serviceId,
      template_id: emailJsConfig.templateId,
      user_id: emailJsConfig.publicKey,
      template_params: templateParams,
    }),
  });

  if (!response.ok) {
    const providerMessage = await response.text();
    console.error('EmailJS rejected the contact message.', {
      status: response.status,
      message: providerMessage,
    });
    throw new Error(`EmailJS request failed with status ${response.status}.`);
  }
}
