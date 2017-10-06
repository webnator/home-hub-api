'use strict';

module.exports = function(server, container) {
  server.route({
    method: 'GET',
    path: '/fx',
    config: {
      tags: ['api', 'dshb', 'fx', 'fx']
    },
    handler: container.resolve('fxController').getLastFx
  });

};
