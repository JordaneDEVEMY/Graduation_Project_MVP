const expressJSDocSwagger = require('express-jsdoc-swagger');

const options = {
  info: {
    version: '1.0.0 - Sprint 01',
    title: "O'lleks",
    description: 'Application de gestion de planning fiche en T',
  },
  baseDir: __dirname,
  filesPattern: ['../routes/**/*.js', '../models/*.js', '../errors/*.js'],
  // URL Documentation define on variable environnement
  swaggerUIPath: process.env.API_DOCUMENTATION_ROUTE,
  // Activate API through server router
  // Visible
  exposeApiDocs: true,
  // On this URL
  //apiDocsPath: '/olleks/docs',
};

/**
 *
 * @param {object} app Express application
 * @returns {object} Express JSDoc Swagger middleware that create web documentation
 */
module.exports = (app) => expressJSDocSwagger(app)(options);
