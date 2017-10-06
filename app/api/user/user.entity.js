'use strict';


const config = require('./../../config/environment');
const _ = require('lodash');
const UserDAO = require('./user.DAO');


class UserEntity {

  constructor({userResponses}) {
    this.userResponses = userResponses;
    this.userDAO = new UserDAO();
    this.nationalities;
    this.userStatus;
  }

  _setAllNationalities(nationalities){
    this.nationalities = nationalities;
  }

  _setUserStatus(status){
    this.userStatus = status;
  }

  async getAllNationalities() {
    let nationalities = await this.userDAO.getAllNationalities();
    this._setAllNationalities(nationalities.dbData.result);
    return this._getNationalitiesFormatted();
  }

  async getUserStatus() {
    let userStatus = await this.userDAO.getUserActivity();
    this._setUserStatus(userStatus.dbData.result);
    return this._getUserStatusFormatted();
  }

  _getUserStatusFormatted() {
    return this.userStatus.reduce((previous, current) => {
      previous[this._realUserStatus(current._id)] = current.total;
      return previous;
    }, {});
  }

  _getNationalitiesFormatted() {
    return this.nationalities.reduce((previous, current) => {
      previous[current._id] = current.total;
      return previous;
    }, {});
  }

  _realUserStatus(index) {
    let myObj = {
      0: 'PENDING_ONBOARDING_INCOMPLETE_USER',
      1: 'PENDING_REVISION',
      2: 'PENDING_USER_ACTION',
      3: 'APPROVED_WITH_ERRORS',
      4: 'APPROVED',
    };
    return myObj[index];
  }


}

module.exports = UserEntity;
