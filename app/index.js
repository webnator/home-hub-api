'use strict';

const container = require('./boot');
const config = require('./config/environment/index');
const routes = require('./routes');

container.resolve('appInit')({ config, routes });
