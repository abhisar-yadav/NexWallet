const nodemailer = require("nodemailer");

// Create a transporter using JSON transport for mocking emails
const transporter = nodemailer.createTransport({
  jsonTransport: true,
});

/**
 * Sends a mock alert email to the specified user.
 * 
 * @param {string} recipientEmail - The email address of the user.
 * @param {string} emailSubject - Subject of the alert email.
 * @param {string} emailBody - Body content of the alert email.
 */
const sendAlert = async (recipientEmail, emailSubject, emailBody) => {
  const mailOptions = {
    from: "alerts@nexwallet.com",
    to: recipientEmail,
    subject: emailSubject,
    text: emailBody,
  };

  const result = await transporter.sendMail(mailOptions);
  console.log("Mock Alert Email Sent:", result.message);
};

module.exports = sendAlert;