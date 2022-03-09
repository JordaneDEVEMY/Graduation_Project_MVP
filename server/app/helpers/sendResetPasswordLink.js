const nodemailer = require('nodemailer');

// async..await is not allowed in global scope, must use a wrapper
module.exports = async function main(email, firstname, lastname, link) {
  // create reusable transporter object using the default SMTP transport
  // TODO : Utiliser DOTENV
  const transporter = nodemailer.createTransport({
    host: 'smtp.gmail.com',
    port: 587,
    secure: false, // true for 465, false for other ports
    auth: {
      user: 'olleks.planning@gmail.com', // generated ethereal user
      pass: 'hduqzddpdzuvsqwa', // generated ethereal password
    },
  });

  // send mail with defined transport object
  const info = await transporter.sendMail({
    from: '"Olleks 🗓" <olleks.planning@gmail.com>', // sender address
    to: email, // list of receivers
    subject: `Hello ${firstname}`, // Subject line
    // text: 'Hello ?', // plain text body
    html:
      `
      <b>Bonjour, ${firstname} ${lastname}</b>
      <br>
      <br>
      <b>Ci-joint le lien pour modifier ton mot de passe :<b>
      <br>
      ${link}
      `, // html body
  });

  console.log('Message sent: %s', info.messageId);
  // Message sent: <b658f8ca-6296-ccf4-8306-87d57a0b4321@example.com>

  // Preview only available when sending through an Ethereal account
  console.log('Preview URL: %s', nodemailer.getTestMessageUrl(info));
  // Preview URL: https://ethereal.email/message/WaQKMgKddxQDoou...
};

// main().catch(console.error);
