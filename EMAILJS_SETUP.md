# Contact form email setup

The contact form and the **Resume** request modal send email through EmailJS directly from the browser. Supabase is not involved in sending or storing contact messages. EmailJS's public key is intended for browser use; never put a private email or SMTP password in a `VITE_` variable.

The resume modal uses the same service and template as the contact form. It submits `full_name`, `email`, `reply_to`, `subject`, and `message`; the visitor's browser may suggest a saved email address, but the visitor must choose or enter it.

## 1. Configure EmailJS

1. Create an EmailJS account and connect the email service that should send notifications.
2. Create an email template with these settings:
   - **To Email:** your inbox, `dubeysaurabhrajendra@gmail.com`. Keep this fixed; do not use a visitor-provided template variable for the recipient.
   - **From Name:** `{{full_name}}`
   - **Reply-To:** `{{reply_to}}`
   - **Subject:** `New portfolio message: {{subject}}`
   - **Body:**

     ```text
     New message from your portfolio

     Name: {{full_name}}
     Email: {{email}}
     Subject: {{subject}}

     Message:
     {{message}}
     ```

3. Copy the EmailJS **Service ID**, **Template ID**, and **Public Key**.

## 2. Configure local development

Add these values to the root `.env` file (or `.env.local`):

```env
VITE_EMAILJS_SERVICE_ID=your_service_id
VITE_EMAILJS_TEMPLATE_ID=your_template_id
VITE_EMAILJS_PUBLIC_KEY=your_public_key
```

Restart `npm run dev` after saving the environment variables.

## 3. Configure the live site

Add the same three variables under **Repository settings → Secrets and variables → Actions → Variables**, then rerun the deploy workflow. Vite embeds `VITE_` values into the public frontend bundle, so use only EmailJS's browser **Public Key** here—never an SMTP password, OAuth client secret, or other private credential.

In EmailJS account security settings, restrict allowed origins to your own site domain and configure available CAPTCHA/anti-abuse protections. EmailJS sends the email; it does not save submissions in this project.
