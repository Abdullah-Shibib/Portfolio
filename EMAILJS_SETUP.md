# EmailJS Setup Guide

To make the contact form work and send emails to abdullahshibib@yahoo.com, you need to set up EmailJS:

## Step 1: Create EmailJS Account
1. Go to [https://www.emailjs.com/](https://www.emailjs.com/)
2. Sign up for a free account
3. Verify your email address

## Step 2: Create Email Service
1. In your EmailJS dashboard, go to "Email Services"
2. Click "Add New Service"
3. Choose your email provider (Gmail, Yahoo, etc.)
4. Follow the setup instructions for your provider
5. Note down your Service ID (e.g., "service_portfolio")

## Step 3: Create Email Template
1. Go to "Email Templates" in your dashboard
2. Click "Create New Template"
3. Use this template content:

**Template ID**: `template_contact`

**Subject**: `New Contact Form Message: {{subject}}`

**Content**:
```
From: {{from_name}} ({{from_email}})
Subject: {{subject}}

Message:
{{message}}

---
This message was sent from your portfolio contact form.
```

## Step 4: Get Your Public Key
1. Go to "Account" in your EmailJS dashboard
2. Copy your Public Key

## Step 5: Update the Code
1. Open `src/components/Contact.js`
2. Replace `'your_public_key'` on line 71 with your actual EmailJS public key
3. Update the `serviceId` and `templateId` if you used different names

## Step 6: Test the Form
1. Start your development server: `npm run dev`
2. Go to the contact section
3. Fill out and submit the form
4. Check your email (abdullahshibib@yahoo.com) for the message

## Free Tier Limits
- EmailJS free tier allows 200 emails per month
- This should be sufficient for a personal portfolio

## Alternative: Direct Mailto Link
If you prefer not to use EmailJS, you can replace the form with a simple mailto link that opens the user's email client.
