'use strict';

function appInit(deps, { config, routes }) {
  const {
    socketService,
    mongodb,
    GlobalService,
    makeServer,
  } = deps;
  const MongoClient = mongodb.MongoClient;

  const serverInstance = makeServer({ config, routes });

  serverInstance.start().then(() => {
    // Connection URL
    let url = config.mongoUrl;

    // Use connect method to connect to the Server
    MongoClient.connect(url, (err, db) => {
      console.log('Connected correctly to server');
      GlobalService.setConfigValue('db', db);
    });

    socketService.startServer({ port: config.socket_port });
    console.log('Server running at', serverInstance.server.info.uri);
  }).catch(err => {
    throw 'Server start error' +  JSON.stringify(err);
  });
}

module.exports = appInit;
