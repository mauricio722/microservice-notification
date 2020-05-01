const nodemailer = require('nodemailer');

const transporter = nodemailer.createTransport({
  service: 'Hotmail',
  auth: {
    user: 'easybuy37@outlook.es',
    pass: 'easybuy12345',
  }
});
const Emailsend = async (email, passnew) => {
  const mailOptions = {
    from: 'easybuy37@outlook.es',
    to: email,
    subject: 'EasyBuy',
    text: `Tu nueva contraseña es: ${passnew}`,
  };
  // send email
  const info = await transporter.sendMail(mailOptions).catch((err) => {
  });

  return info;
};
module.exports = Emailsend;
