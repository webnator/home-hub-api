/**
 * Main application routes
 */

'use strict';

exports.register = (server, options, next) => {
  require('./api/user/index')(server);
  next();
};

exports.register.attributes = {
  name: 'home-hub-routes',
  version: '1.0.0'
};
