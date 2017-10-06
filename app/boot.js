'use strict';

const { createContainer, asValue, asFunction, asClass } = require('awilix');
const container = createContainer();

// Init
const makeAppInit = require('./server/init');
const Server = require('./server/HapiServerHandler');

// Libraries
const WebSocketLib = require('ws');
const mongodb = require('mongodb');
const Hapi = require('hapi');

// Services
const ErrorService = require('./api/services/errors.service');
const ResponsesService = require('./api/services/responses.service');
const SchemaService = require('./api/services/schema.service');
const SocketService = require('./api/services/socket.service');
const GlobalService = require('./api/services/global.service');

// user entity
const makeUserController = require('./api/user/user.controller');
const makeUserService = require('./api/user/user.service');
const makeUserResponses = require('./api/user/user.responses');
const UserEntity = require('./api/user/user.entity');

// fx entity
const makeFxController = require('./api/fx/fx.controller');
const makeFxService = require('./api/fx/fx.service');
const makeFxResponses = require('./api/fx/fx.responses');
const FxEntity = require('./api/fx/fx.entity');

// queries entity
const makeQueriesController = require('./api/queries/queries.controller');
const makeQueriesService = require('./api/queries/queries.service');
const makeQueriesResponses = require('./api/queries/queries.responses');
const QueriesEntity = require('./api/queries/queries.entity');

container.register({
  // Libs
  WebSocket: asValue(WebSocketLib),
  mongodb: asValue(mongodb),
  Hapi: asValue(Hapi),

  // Initial
  makeServer: asFunction(instantiateEntityWithDependencies(Server)).singleton(),
  appInit: asFunction(instantiateEntityWithDependencies(makeAppInit)).singleton(),

  // config

  // services
  errorService: asFunction(() => ErrorService).singleton(),
  responsesService: asFunction(() => ResponsesService).singleton(),
  schemaService: asFunction(() => SchemaService).singleton(),
  socketService: asClass(SocketService).singleton(),
  GlobalService: asFunction(() => GlobalService).singleton(),

  // user entity
  userController: asFunction(makeUserController).singleton(),
  userService: asFunction(makeUserService).singleton(),
  userResponses: asFunction(makeUserResponses).singleton(),
  UserEntity: asFunction((opts) => () => new UserEntity(opts)).singleton(),

  // fx entity
  fxController: asFunction(makeFxController).singleton(),
  fxService: asFunction(makeFxService).singleton(),
  fxResponses: asFunction(makeFxResponses).singleton(),
  FxEntity: asFunction((opts) => () => new FxEntity(opts)).singleton(),

  // queries entity
  queriesController: asFunction(makeQueriesController).singleton(),
  queriesService: asFunction(makeQueriesService).singleton(),
  queriesResponses: asFunction(makeQueriesResponses).singleton(),
  QueriesEntity: asFunction(instantiateEntityWithDependencies(QueriesEntity)).singleton(),

});

function instantiateEntityWithDependencies(entity) {
  try {
    return (deps) => (...args) => new entity(deps, ...args);
  } catch(err) {
    console.log('Heyyy', err);
  }

}

module.exports = container;
