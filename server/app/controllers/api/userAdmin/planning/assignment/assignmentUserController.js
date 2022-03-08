const userAssignmentDatamapper = require('../../../../../models/userAdmin/planning/assignment/user');
const { ApiError } = require('../../../../../helpers/errorHandler');

const controller = {
  /**
   * UserAdmin controller to create an user
   * ExpressMiddleware signature
   * @param {object} req Express req.object used for url id and body params
   * @param {object} res Express response object
   * @returns {string} Route API JSON response
   */
  async create(req, res) {
    // const isEmailValid = emailValidator.validate(req.body.email);

    // if (!isEmailValid) {
    //   throw new ApiError(400, 'Cet email n\'est pas valide');
    // }

    // const isSsnAvailable = await userAdminDatamapper.getSsn(req.body.social_security_number);

    // if (!isSsnAvailable) {
    //   throw new ApiError(400, 'Le numéro de sécurité social est déjà affecté à un autre salarié');
    // }

    // const isEmailAvailable = await userAdminDatamapper.getEmail(req.body.email);

    // if (!isEmailAvailable) {
    //   throw new ApiError(400, 'L\'email est déjà affecté à un autre salarié');
    // }

    // const userCreate = await userAdminDatamapper.insert(req.body);
    // return res.json(userCreate);
  },

};

module.exports = controller;
