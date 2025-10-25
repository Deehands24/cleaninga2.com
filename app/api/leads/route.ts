import { NextRequest, NextResponse } from 'next/server';
import nodemailer from 'nodemailer';
import { CLEANING_SERVICES } from '@/lib/services';

export async function POST(request: NextRequest) {
  try {
    const data = await request.json();

    // Get selected services details
    const selectedServices = CLEANING_SERVICES.filter(s =>
      data.services.includes(s.id)
    );

    // Create email HTML
    const emailHTML = `
      <!DOCTYPE html>
      <html>
      <head>
        <style>
          body { font-family: Arial, sans-serif; line-height: 1.6; color: #333; }
          .container { max-width: 600px; margin: 0 auto; padding: 20px; }
          .header { background: #0284c7; color: white; padding: 20px; text-align: center; }
          .content { background: #f9fafb; padding: 20px; }
          .section { background: white; padding: 15px; margin: 10px 0; border-radius: 8px; }
          .service-item { padding: 10px; border-left: 4px solid #0284c7; margin: 5px 0; background: #f0f9ff; }
          .total { background: #0284c7; color: white; padding: 20px; text-align: center; font-size: 24px; font-weight: bold; }
          .label { font-weight: bold; color: #666; }
        </style>
      </head>
      <body>
        <div class="container">
          <div class="header">
            <h1>New Cleaning Quote Request</h1>
            <p>CleaningA2.com</p>
          </div>

          <div class="content">
            <div class="section">
              <h2>Customer Information</h2>
              <p><span class="label">Name:</span> ${data.name}</p>
              <p><span class="label">Phone:</span> ${data.phone}</p>
              <p><span class="label">Email:</span> ${data.email}</p>
              <p><span class="label">ZIP Code:</span> ${data.zipCode}</p>
              <p><span class="label">Property Type:</span> ${data.propertyType}</p>
              ${data.squareFootage ? `<p><span class="label">Square Footage:</span> ${data.squareFootage} sq ft</p>` : ''}
            </div>

            <div class="section">
              <h2>Requested Services</h2>
              ${selectedServices.map(service => `
                <div class="service-item">
                  <strong>${service.name}</strong> - $${service.basePrice}
                  <br><small>${service.description}</small>
                </div>
              `).join('')}
            </div>

            ${data.additionalNotes ? `
            <div class="section">
              <h2>Additional Notes</h2>
              <p>${data.additionalNotes}</p>
            </div>
            ` : ''}

            <div class="total">
              Estimated Total: $${data.estimatedTotal}
            </div>

            <div class="section">
              <p style="color: #666; font-size: 12px;">
                This quote was generated on ${new Date().toLocaleString()}
              </p>
            </div>
          </div>
        </div>
      </body>
      </html>
    `;

    // Configure email transporter
    // NOTE: In production, use environment variables for credentials
    const transporter = nodemailer.createTransport({
      host: process.env.SMTP_HOST || 'smtp.gmail.com',
      port: parseInt(process.env.SMTP_PORT || '587'),
      secure: false,
      auth: {
        user: process.env.SMTP_USER,
        pass: process.env.SMTP_PASS,
      },
    });

    // Send email to management
    await transporter.sendMail({
      from: process.env.SMTP_FROM || 'noreply@cleaninga2.com',
      to: 'management@ges-development.com',
      subject: `New Cleaning Quote Request - $${data.estimatedTotal} - ${data.name}`,
      html: emailHTML,
    });

    // Send confirmation email to customer
    const customerEmailHTML = `
      <!DOCTYPE html>
      <html>
      <head>
        <style>
          body { font-family: Arial, sans-serif; line-height: 1.6; color: #333; }
          .container { max-width: 600px; margin: 0 auto; padding: 20px; }
          .header { background: #0284c7; color: white; padding: 20px; text-align: center; }
          .content { background: #f9fafb; padding: 20px; }
          .section { background: white; padding: 15px; margin: 10px 0; border-radius: 8px; }
        </style>
      </head>
      <body>
        <div class="container">
          <div class="header">
            <h1>Thank You for Your Quote Request!</h1>
          </div>
          <div class="content">
            <div class="section">
              <p>Hi ${data.name},</p>
              <p>Thank you for requesting a quote from CleaningA2.com!</p>
              <p>Your estimated total is <strong>$${data.estimatedTotal}</strong></p>
              <p>We'll contact you at ${data.phone} shortly to discuss your cleaning needs and schedule a service.</p>
              <p>If you have any questions, feel free to reply to this email.</p>
              <p>Best regards,<br>The CleaningA2 Team</p>
            </div>
          </div>
        </div>
      </body>
      </html>
    `;

    await transporter.sendMail({
      from: process.env.SMTP_FROM || 'noreply@cleaninga2.com',
      to: data.email,
      subject: 'Your Cleaning Quote Request - CleaningA2.com',
      html: customerEmailHTML,
    });

    return NextResponse.json({ success: true, message: 'Quote submitted successfully' });

  } catch (error) {
    console.error('Error processing quote:', error);
    return NextResponse.json(
      { success: false, message: 'Error submitting quote' },
      { status: 500 }
    );
  }
}
