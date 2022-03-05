/* eslint-disable max-len */
/* eslint-disable camelcase */
const emailValidator = require('email-validator');
const userDatamapper = require('../../../models/user');
const { ApiError } = require('../../../helpers/errorHandler');

const controller = {
  /**
   * User controller to get an user with REST response
   * ExpressMiddleware signature
   * @param {object} req Express req.object used for url id params
   * @param {object} res Express response object
   * @returns {string} Route API JSON response
   */
  async getOne(req, res) {
    const user = await userDatamapper.findByPk(req.params.id);

    if (!user) {
      throw new ApiError(404, 'Utilisateur introuvable');
    }

    const allColleagues = { colleagues: [] };

    await Promise.all(user.assignements.map(async (assignment) => {
      const { starting_date, ending_date } = assignment;
      const siteId = assignment.site.id;
      const userId = req.params.id;

      const getColleagues = await userDatamapper.findColleagues(starting_date, ending_date, siteId, userId);

      allColleagues.colleagues.push(...getColleagues);
    }));

    console.log('file: index.js ~ line 39 ~ awaitPromise.all ~ allColleagues', allColleagues);

    //! I Keep this in comment for Sprint 03 if necessary
    // const newSet = new Set();

    // const filteredArrOfColleagues = allColleagues.filter((element) => {
    //   const duplicate = newSet.has(element.id, element.site_id, element.starting_date, element.ending_date);
    //   newSet.add(element.id);
    //   return !duplicate;
    // });

    // const userWithColleagues = new Array(user);
    // userWithColleagues.push(filteredArrOfColleagues);

    const userWithColleagues = new Array(user);
    userWithColleagues.push(allColleagues);

    return res.json(userWithColleagues);
  },

  /**
   * User controller to update an user
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

    const userUpdate = await userDatamapper.update(req.params.id, req.body);
    return res.json(userUpdate);
  },
};

module.exports = controller;
