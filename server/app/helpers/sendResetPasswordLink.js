const nodemailer = require('nodemailer');

// async..await is not allowed in global scope, must use a wrapper
module.exports = async function main(email, firstname, lastname, link) {
  // create reusable transporter object using the default SMTP transport
  // TODO : Utiliser DOTENV
  // console.log('DOTENV ==>', process.env.NODE_ENV);
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
      <h3>Bonjour, <strong>${firstname} ${lastname}</strong></h3>
      <h2>À vous de jouer !</h2>
      <h1>Votre nouveau mot de passe :</h1>
      <br>
      <div>Vous avez souhaité changer de mot de passe.</div>
      <br>
      <h2>Pour le modifier, nous vous invitons à cliquer sur le lien ci-dessous :</h2>
      <a href=${link} target="_blank" style="text-decoration:none;color:#000000;">Changer mon mot de passe</a>
      <br>
      <br>
      <div>Ce lien est valide pendant <em>15 minutes<em>. Passé ce délai, veuillez renouveler l’opération « Mot de passe oublié » sur notre site.</div>
      <div><em>Si vous n’êtes pas à l’origine de cette demande, vous pouvez ignorer cet e-mail : votre mot de passe actuel ne sera pas modifié.<em></div>
      `, // html body
  });

  // ? console.log('Message sent: %s', info.messageId);
  // Message sent: <b658f8ca-6296-ccf4-8306-87d57a0b4321@example.com>

  // Preview only available when sending through an Ethereal account
  // ? console.log('Preview URL: %s', nodemailer.getTestMessageUrl(info));
  // Preview URL: https://ethereal.email/message/WaQKMgKddxQDoou...
};

// ? main().catch(console.error);
