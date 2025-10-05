import nodemailer from "nodemailer";
import path from "path";

export default async function handler(req, res) {
  if (req.method !== "POST") {
    return res.status(405).json({ error: "Method not allowed" });
  }

  const { name, email } = req.body;
  if (!name || !email) {
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
    subject: `Requested a meeting`,
    html: `<div style="font-family:sans-serif;font-size:16px;color:#111;">
      <h2>Consultation Meeting Request</h2>
      <p><b>Name:</b> ${name}</p>
      <p><b>Email:</b> ${email}</p>
    </div>`,
  };

  try {
    await transporter.sendMail(adminMailOptions);
    return res.status(200).json({ success: true });
  } catch (error) {
    console.error("Email error:", error);
    return res.status(500).json({ error: "Failed to send email." });
  }
}
