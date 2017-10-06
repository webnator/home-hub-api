'use strict';

// All configurations will extend these options
// ============================================
const all = {
  host: process.env.HOST || process.env.HOSTNAME || 'localhost',
  appName: 'home-hub-api',

  env: process.env.NODE_ENV,

  routes: {
    prefix: '/v1/home-hub',
  },

};

// Export the config object based on the NODE_ENV
// ==============================================
module.exports = Object.assign(all, require('./' + process.env.NODE_ENV), {});
