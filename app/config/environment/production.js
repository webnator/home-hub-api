'use strict';

// Production specific configuration
// ==================================
module.exports = {
  ip: process.env.HOMEHUB_IP,
  port: process.env.HOMEHUB_PORT,
  socket_port: process.env.HOMEHUB_SOCKET_PORT,
  mongoUrl: process.env.HOMEHUB_MONGO_URL,
};
