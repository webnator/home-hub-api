'use strict';

const config = require('./../../config/environment');
const DBService = require('./../services/lib/index');

class FxDAO extends DBService {

  constructor() {
    super();
    this.COLLECTION_NAME = 'rates';
  }

  getCollectionName() {
    return this.COLLECTION_NAME;
  }

  getLastFx() {
    let data = {
      dbData: {
        query: {},
        projection: {
          dateTime: 1,
          baseCurrency: 1,
          rates: 1,
          _id: 0,
        },
        options: {
          sort: {
            dateTime: -1
          },
          limit: config.fx.defaultLastFxLimit
        }
      }
    };

    return super.find(data);
  };


}

module.exports = FxDAO;
