require("dotenv").config();

const { Resend } = require("resend");

console.log("RESEND_API_KEY =", process.env.RESEND_API_KEY);

const resend = new Resend(process.env.RESEND_API_KEY);

const sendEmail = async (to, subject, html) => {
  try {
    const data = await resend.emails.send({
      from: "onboarding@resend.dev",
      to,
      subject,
      html,
    });

    console.log("✅ Email Sent:", data);
  } catch (error) {
    console.error("❌ Email Error:", error);
  }
};

module.exports = sendEmail;