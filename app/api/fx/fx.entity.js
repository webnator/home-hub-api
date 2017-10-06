'use strict';


const config = require('./../../config/environment');
const _ = require('lodash');
const FxDAO = require('./fx.DAO');


class FxEntity {

  constructor({fxResponses}) {
    this.fxResponses = fxResponses;
    this.fxDAO = new FxDAO();
    this.lastFx;
  }

  _setLastFx(lastFx){
    this.lastFx = lastFx;
  }

  async getLastFx() {
    let lastFx = await this.fxDAO.getLastFx();
    this._setLastFx(lastFx.dbData.result);
    return this.lastFx;
  }


}

module.exports = FxEntity;
