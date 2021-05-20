const nodemailer = require("nodemailer");

const message = {
  from: process.env.MAIL_USER,
  to: process.env.MAIL_USER_TO,
  subject: "Message from krychaxp.pl",
  text: "Simple text",
};

const mailOptions = {
  host: process.env.MAIL_HOST,
  port: process.env.MAIL_PORT,
  auth: {
    user: process.env.MAIL_LOGIN,
    pass: process.env.MAIL_PASS,
  },
  tls: {
    rejectUnauthorized: false,
  },
};

export const sendEmail = (options) => {
  return new Promise(async (resolve, reject) => {
    try {
      const transport = nodemailer.createTransport(mailOptions);
      const fullMessage = { ...message, ...options };
      const info = await transport.sendMail(fullMessage);
      resolve(info);
    } catch (e) {
      reject(e);
    }
  });
};
