# EmailJS Setup Instructions

To enable the contact form to send emails, follow these steps:

## 1. Create EmailJS Account

- Go to [EmailJS](https://www.emailjs.com/)
- Sign up for a free account

## 2. Add Email Service

- Go to "Email Services" and add your email provider (Gmail, Outlook, etc.)
- Follow the setup instructions for your provider

## 3. Create Email Template

- Go to "Email Templates"
- Create a new template with the following variables:
  - `{{from_name}}` - Sender's name
  - `{{from_email}}` - Sender's email
  - `{{subject}}` - Email subject
  - `{{message}}` - Email message
  - `{{to_name}}` - Your name

## 4. Configure Environment Variables

- Copy your Service ID, Template ID, and Public Key from EmailJS dashboard
- Update the `.env.local` file in the `client/` folder:

```env
VITE_EMAILJS_SERVICE_ID=your_service_id_here
VITE_EMAILJS_TEMPLATE_ID=your_template_id_here
VITE_EMAILJS_PUBLIC_KEY=your_public_key_here
```

## 5. Restart Development Server

```bash
npm run dev
```

## Fallback Behavior

If EmailJS is not configured, the contact form will automatically open the user's default email client with pre-filled information as a fallback.

## Sample EmailJS Template

```html
<p>New message from {{from_name}} ({{from_email}})</p>
<p><strong>Subject:</strong> {{subject}}</p>
<p><strong>Message:</strong></p>
<p>{{message}}</p>
```
