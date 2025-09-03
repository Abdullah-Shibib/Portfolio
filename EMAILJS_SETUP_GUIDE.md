# EmailJS Setup Guide - Direct Email to abdullahshibib@yahoo.com

This guide will help you set up EmailJS so that when visitors fill out your contact form, you receive the messages directly at abdullahshibib@yahoo.com.

## Step 1: Create EmailJS Account
1. Go to [https://www.emailjs.com/](https://www.emailjs.com/)
2. Click "Sign Up" and create a free account
3. Verify your email address

## Step 2: Add Email Service
1. In your EmailJS dashboard, go to "Email Services"
2. Click "Add New Service"
3. Choose "Gmail" (since you're using Yahoo, you can use Gmail as the service)
4. Click "Connect Account" and sign in with a Gmail account
5. Note down your **Service ID** (e.g., "service_abc123")

## Step 3: Create Email Template
1. Go to "Email Templates" in your dashboard
2. Click "Create New Template"
3. Use these settings:

**Template ID**: `template_contact`

**Subject**: `New Contact Form Message: {{subject}}`

**Content**:
```
You have received a new message from your portfolio contact form:

From: {{from_name}}
Email: {{from_email}}
Subject: {{subject}}

Message:
{{message}}

---
This message was sent from your portfolio website.
```

4. Click "Save"

## Step 4: Get Your Public Key
1. Go to "Account" in your EmailJS dashboard
2. Copy your **Public Key** (starts with something like "user_abc123")

## Step 5: Update Your Code
1. Open `src/components/Contact.js`
2. Replace `'YOUR_EMAILJS_PUBLIC_KEY'` on line 71 with your actual public key
3. Replace `'service_portfolio'` on line 69 with your actual service ID
4. Save the file

## Step 6: Test the Form
1. Start your development server: `npm run dev`
2. Go to the contact section
3. Fill out and submit the form
4. Check abdullahshibib@yahoo.com for the message

## Alternative: Use Yahoo Email Service
If you prefer to use Yahoo directly:
1. In Email Services, choose "Yahoo"
2. Connect your Yahoo account
3. Follow the same template setup

## Free Tier Limits
- EmailJS free tier allows 200 emails per month
- Perfect for a personal portfolio

## Troubleshooting
- Make sure your public key is correct
- Check that the service ID matches your EmailJS service
- Verify the template ID is exactly "template_contact"
- Check your spam folder if emails aren't arriving

## Security Note
Your public key is safe to use in client-side code. EmailJS handles the security for you.
