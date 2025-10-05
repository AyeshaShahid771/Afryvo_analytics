import nodemailer from "nodemailer";
import path from "path";

export default async function handler(req, res) {
  if (req.method !== "POST") {
    return res.status(405).json({ error: "Method not allowed" });
  }

  const { name, email, message } = req.body;
  if (!name || !email || !message) {
    return res.status(400).json({ error: "Missing required fields" });
  }

  // Setup Nodemailer transporter with GoDaddy SMTP
  const transporter = nodemailer.createTransport({
    host: "smtpout.secureserver.net",
    port: 465,
    secure: true, // Use SSL
    auth: {
      user: process.env.BUSINESS_EMAIL, // Your full GoDaddy business email
      pass: process.env.BUSINESS_EMAIL_PASSWORD, // Your regular email password
    },
  });

  // Admin email
  const adminMailOptions = {
    from: `Afryvo Analytics <${process.env.BUSINESS_EMAIL}>`,
    to: process.env.BUSINESS_EMAIL,
    subject: `New Client Message`,
    html: `<div style="font-family:sans-serif;font-size:16px;color:#111;">
      <h2>New Client Message</h2>
      <p><b>Name:</b> ${name}</p>
      <p><b>Email:</b> ${email}</p>
      <p><b>Message:</b></p>
      <blockquote style="background:#f5f5f5;padding:12px;border-left:4px solid #222;">${message}</blockquote>
    </div>`,
  };

  // User auto-reply email (simple, black and white, logo on top)
  const userMailOptions = {
    from: `Afryvo Analytics <${process.env.BUSINESS_EMAIL}>`,
    to: email,
    subject: "Thank you for reaching out",
    html: `
      <div style="max-width:600px;margin:auto;font-family:sans-serif;background:#fff;color:#111;padding:32px;">
        <img src="cid:afryvo-logo" alt="Afryvo Analytics Logo" style="height:48px;margin-bottom:24px;display:block;margin-left:auto;margin-right:auto;" />
        <h2 style="font-size:22px;font-weight:600;margin-bottom:16px;color:#111;">Thank you for reaching out</h2>
        <p style="font-size:16px;color:#111;">Hi ${name},</p>
        <p style="font-size:16px;color:#111;">Thank you for contacting Afryvo Analytics.<br />Our team has received your message and will get back to you shortly.</p>
        <p style="font-size:16px;margin-top:32px;color:#111;">Best regards,<br />Afryvo Analytics Team</p>
      </div>
    `,
    attachments: [
      {
        filename: "afryvoanalytics.png",
        path: path.join(process.cwd(), "public", "afryvoanalytics.png"),
        cid: "afryvo-logo",
      },
    ],
  };

  try {
    await transporter.sendMail(adminMailOptions);
    await transporter.sendMail(userMailOptions);
    return res.status(200).json({ success: true });
  } catch (error) {
    console.error("Email error:", error);
    return res.status(500).json({ error: "Failed to send email." });
  }
}
