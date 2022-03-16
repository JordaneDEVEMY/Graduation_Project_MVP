const emailValidator = require('email-validator');
const userAdminDatamapper = require('../../../models/userAdmin/user');
const { ApiError } = require('../../../helpers/errorHandler');

const controller = {
  /**
   * UserAdmin controller to get all users
   * ExpressMiddleware signature
   * @param {object} req Express req.object used for url id params
   * @param {object} res Express response object
   * @returns {string} Route API JSON response
   */
  async getAll(req, res) {
    const users = await userAdminDatamapper.findAll();

    if (!users) {
      throw new ApiError(404, 'Utilisateurs introuvables');
    }

    return res.json(users);
  },

  /**
   * UserAdmin controller to get an user
   * ExpressMiddleware signature
   * @param {object} req Express req.object used for url id params
   * @param {object} res Express response object
   * @returns {string} Route API JSON response
   */
  async getOne(req, res) {
    const user = await userAdminDatamapper.findByPk(req.params.id);

    if (!user) {
      throw new ApiError(404, 'Utilisateur introuvable');
    }

    return res.json(user);
  },

  /**
   * UserAdmin controller to create an user
   * ExpressMiddleware signature
   * @param {object} req Express req.object used for url id and body params
   * @param {object} res Express response object
   * @returns {string} Route API JSON response
   */
  async create(req, res) {
    const isEmailValid = emailValidator.validate(req.body.email);

    if (!isEmailValid) {
      throw new ApiError(400, 'Cet email n\'est pas valide');
    }

    const isSsnAvailable = await userAdminDatamapper.getSsn(req.body.social_security_number);

    if (!isSsnAvailable) {
      throw new ApiError(400, 'Le numéro de sécurité social est déjà affecté à un autre salarié');
    }

    const isEmailAvailable = await userAdminDatamapper.findByEmail(req.body.email);

    if (!isEmailAvailable) {
      throw new ApiError(400, 'L\'email est déjà affecté à un autre salarié');
    }

    const userCreate = await userAdminDatamapper.insert(req.body);
    return res.json(userCreate);
  },

  /**
   * UserAdmin controller to update an user
   * ExpressMiddleware signature
   * @param {object} req Express req.object used for url id and body params
   * @param {object} res Express response object
   * @returns {string} Route API JSON response
   */
  async update(req, res) {
    const isEmailValid = emailValidator.validate(req.body.email);

    if (!isEmailValid) {
      throw new ApiError(400, 'Cet email n\'est pas valide');
    }

    const userUpdate = await userAdminDatamapper.update(req.params.id, req.body);
    return res.json(userUpdate);
  },

  /**
   * UserAdmin controller to delete an user
   * ExpressMiddleware signature
   * @param {object} req Express req.object used for url id
   * @param {object} res Express response object
   * @returns {object} Route API JSON response
   */
  async delete(req, res) {
    const userDelete = await userAdminDatamapper.delete(req.params.id);

    return res.status(200).json({
      isDeleted: userDelete,
      statusCode: 200,
      message: 'Utilisateur supprimé',
    });
  },
};

module.exports = controller;
