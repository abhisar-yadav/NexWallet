const nodemailer = require("nodemailer");

const transporter = nodemailer.createTransport({
  jsonTransport: true, 
});

const sendAlert = async (userEmail, subject, message) => {
  const mailOptions = {
    from: "alerts@nexwallet.com",
    to: userEmail,
    subject,
    text: message,
  };

  const result = await transporter.sendMail(mailOptions);
  console.log("Mock Email Alert Sent:", result.message);
};

module.exports = sendAlert;
