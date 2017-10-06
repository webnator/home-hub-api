'use strict';

const container = require('./../../boot');
const userController = container.resolve('userController');

module.exports = (server) => {
  server.route({
    method: 'GET',
    path: '/user/nationality',
    config: {
      tags: ['api', 'dshb', 'user', 'nationalities']
    },
    handler: userController.getAllNationalities
  });

};
