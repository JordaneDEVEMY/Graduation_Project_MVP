const nodemailer = require('nodemailer');
// require('dotenv').config();

// async..await is not allowed in global scope, must use a wrapper
// module.exports =
async function main() {
  // create reusable transporter object using the default SMTP transport
  console.log(process.env.NODE_ENV);
  console.log('file: sendResetPasswordLink.js ~ line 17 ~ main ~ process.env.MAILER_PASS', process.env.MAILER_PASS);
  console.log('file: sendResetPasswordLink.js ~ line 9 ~ main ~ process.env.MAILER_HOST', process.env.MAILER_HOST);
  console.log('file: sendResetPasswordLink.js ~ line 11 ~ main ~ process.env.MAILER_PORT', process.env.MAILER_PORT);
  console.log('file: sendResetPasswordLink.js ~ line 15 ~ main ~ process.env.MAILER_USER', process.env.MAILER_USER);
  const transporter = nodemailer.createTransport({
    host: process.env.MAILER_HOST,
    port: process.env.MAILER_PORT,
    secure: false, // true for 465, false for other ports
    auth: {
      user: process.env.MAILER_USER, // generated ethereal user
      pass: process.env.MAILER_PASS, // generated ethereal password
    },
  });

  // send mail with defined transport object
  const info = await transporter.sendMail({
    from: '"Olleks 🗓" <olleks.planning@gmail.com>', // sender address
    to: 'olleks.planning@gmail.com', // list of receivers
    subject: 'Hello ✔', // Subject line
    text: 'Hello world?', // plain text body
    html: '<b>Hello world?</b>', // html body
  });

  console.log('Message sent: %s', info.messageId);
  // Message sent: <b658f8ca-6296-ccf4-8306-87d57a0b4321@example.com>

  // Preview only available when sending through an Ethereal account
  console.log('Preview URL: %s', nodemailer.getTestMessageUrl(info));
  // Preview URL: https://ethereal.email/message/WaQKMgKddxQDoou...
}

main().catch(console.error);
