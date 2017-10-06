/**
 * Main application file
 */
'use strict';

class HapiServerHandler {
  constructor(deps, { routes, config }) {
    const {
      Hapi,
    } = deps;
    this.Hapi = Hapi;
    this.routes = routes;
    this.config = config;

    this._setServer(config);
  }

  _setServer(config) {
    this.server = new this.Hapi.Server();
    this.server.connection({ port: config.port, routes: { cors: true } });
  }

  start() {
    return new Promise((resolve, reject) => {
      this.server.register(
        [
          { register: this.routes }
        ],
        {
          routes: { prefix: this.config.routes.prefix }
        },
        (err) => {
          if (err) {
            return reject(err);
          }
          this.server.start(err => {
            if (err) {
              return reject(err);
            }
            return resolve(this.server);
          });
        }
      );
    });
  }

  stop() {
    return new Promise((resolve, reject) => {
      this.server.stop(function (err) {
        if (err) {
          return reject(err);
        }
        console.log('Server stopped');
        return resolve(this.server);
      });
    });
  }
}

module.exports = HapiServerHandler;
