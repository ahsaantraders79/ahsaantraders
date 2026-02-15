'use server'
import nodemailer from 'nodemailer';

export interface ContactState {
    success?: boolean;
    message?: string;
    errors?: {
        name?: string;
        email?: string;
        phone?: string;
        service?: string;
        message?: string;
        root?: string;
    };
}

export async function submitContactForm(prevState: any, formData: FormData): Promise<ContactState> {
    // No artificial delay needed for real email sending

    const name = formData.get('name') as string;
    const email = formData.get('email') as string;
    const phone = formData.get('phone') as string;
    const service = formData.get('service') as string;
    const message = formData.get('message') as string;
    const honeypot = formData.get('website_url') as string; // Honeypot field

    // Spam check
    if (honeypot) {
        return { success: true, message: 'Message sent successfully!' }; // Silently fail for bots
    }

    // Validation
    const errors: ContactState['errors'] = {};

    if (!name || name.trim().length < 2) {
        errors.name = 'Name is required (min 2 characters).';
    }

    if (!email || !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) {
        errors.email = 'Please provide a valid email address.';
    }

    if (!phone || phone.trim().length < 10) {
        errors.phone = 'Please provide a valid phone number.';
    }

    if (!service) {
        errors.service = 'Please select a service.';
    }

    if (Object.keys(errors).length > 0) {
        return { success: false, errors };
    }

    try {
        const transporter = nodemailer.createTransport({
            host: process.env.SMTP_HOST || 'smtp.zoho.com', // Default to standard host
            port: parseInt(process.env.SMTP_PORT || '465'),
            secure: true,
            auth: {
                user: process.env.SMTP_USER,
                pass: process.env.SMTP_PASSWORD,
            },
        });

        // Verify connection configuration
        await transporter.verify();
        console.log('SMTP Connection Established Successfully');

        const mailOptions = {
            from: `"Ahsaan Traders Website" <${process.env.SMTP_USER}>`,
            to: process.env.CONTACT_EMAIL || process.env.SMTP_USER,
            replyTo: email, // Allow reply directly to customer
            subject: `New Service Inquiry: ${service}`,
            html: `
                <h2>New Contact Form Submission</h2>
                <div style="font-family: Arial, sans-serif; color: #333;">
                    <p><strong>Name:</strong> ${name}</p>
                    <p><strong>Email:</strong> ${email}</p>
                    <p><strong>Phone:</strong> ${phone}</p>
                    <p><strong>Service:</strong> ${service}</p>
                    <p><strong>Message:</strong></p>
                    <blockquote style="background: #f9f9f9; padding: 15px; border-left: 4px solid #007bff; margin: 0;">${message || 'No message provided.'}</blockquote>
                </div>
            `,
        };

        await transporter.sendMail(mailOptions);
        console.log('Email sent successfully via Zoho SMTP');

    } catch (error: any) {
        console.error('------- SMTP ERROR DETAILS -------');
        console.error('Message:', error.message);
        console.error('Code:', error.code);
        console.error('Response:', error.response);
        console.error('----------------------------------');

        return {
            success: false,
            errors: { root: 'Failed to send message. Please try again later or contact us directly at 0300-8235699.' }
        };
    }

    return { success: true, message: 'Thank you! We will contact you within 24 hours.' };
}
