# Formspree Setup Guide - Easy Contact Form

This guide will help you set up Formspree so that when visitors fill out your contact form, you receive the messages directly at abdullahshibib@yahoo.com.

## Step 1: Create Formspree Account
1. Go to [https://formspree.io/](https://formspree.io/)
2. Click "Get Started" and create a free account
3. Verify your email address

## Step 2: Create a New Form
1. After logging in, click "New Form"
2. Enter your email: `abdullahshibib@yahoo.com`
3. Give your form a name: "Portfolio Contact Form"
4. Click "Create Form"

## Step 3: Get Your Form ID
1. After creating the form, you'll see a form endpoint URL
2. It will look like: `https://formspree.io/f/xpzgkqwe`
3. Copy the form ID part: `xpzgkqwe` (this is your form ID)

## Step 4: Update Your Code
1. Open `src/components/Contact.js`
2. Find line 69: `const response = await fetch('https://formspree.io/f/YOUR_FORM_ID', {`
3. Replace `YOUR_FORM_ID` with your actual form ID
4. Example: `const response = await fetch('https://formspree.io/f/xpzgkqwe', {`

## Step 5: Test the Form
1. Start your development server: `npm run dev`
2. Go to the contact section
3. Fill out and submit the form
4. Check abdullahshibib@yahoo.com for the message

## Free Tier Features
- 50 submissions per month (free)
- Email notifications
- Spam protection
- No coding required

## What Happens When Someone Submits
1. User fills out your contact form
2. Formspree receives the data
3. You get an email at abdullahshibib@yahoo.com
4. User sees success message

## Troubleshooting
- Make sure your form ID is correct
- Check your spam folder
- Verify your email address in Formspree settings

This is much simpler than EmailJS and will work immediately once you get your form ID!
