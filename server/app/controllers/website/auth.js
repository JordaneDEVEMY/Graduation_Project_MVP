const emailValidator = require('email-validator');

const controller = {

  login(_, res) {
    res.send('Auth à gérer');
  },

  loginAction(req, res) {
    const isEmailValid = emailValidator.validate(req.body.email);

    if (!isEmailValid) {
      return res.render('login', { error: 'Cet email n\'est pas valide' });
    }

    if (!req.body.password) {
      return res.render('login', { error: 'Le mot de passe est obligatoire' });
    }

    User.findOne({
      where: {
        email: req.body.email,
      },
    }).then((user) => {
      const error = 'Informations de connexion invalides';

      // Utilisateur non-trouvé
      if (!user) {
        //! Attention on ne doit jamais être trop précis dans les messages d'erreur d'un formulaire de connexion.
        // return res.render('login', { error: `Aucun utilisateur n'a été trouvé avec cet email` });
        return res.render('login', { error });
      }

      // bcrypt.compareSync(<mot de passe en clair du formulaire>, <mot de passe stocké en BDD>)
      const isPasswordValid = bcrypt.compareSync(req.body.password, user.password);

      // Mot de passe invalide
      if (!isPasswordValid) {
        // return res.render('login', { error: `Ce n'est pas le bon mot de passe` });
        return res.render('login', { error });
      }
      // on ne vérifie pas les 2 en même temps car on optimise le temps machine en evitant de comparer les mots de passe si le user n'existe pas

      // Si les informations de connexion sont correctes, on stocke l'utilisateur en session
      // En session on ne peut stocker que des objets litéraux, pas d'instances
      const {
        firstname, lastname, email, role,
      } = user;
      req.session.user = {
        firstname,
        lastname,
        email,
        role,
      };

      return res.redirect('/');
    });
  },
};

module.exports = controller;
