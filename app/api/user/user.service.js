'use strict';


function makeUserService({
  UserEntity
}) {
  return {
    async getAllNationalities() {
      try {
        let myUser = UserEntity();
        let myNationalities = await myUser.getAllNationalities();
        return myNationalities;
      } catch (error) {
        return error;
      }
    },

    async getUsersStatus() {
      try {
        let myUser = UserEntity();
        let myUserStatus = await myUser.getUserStatus();
        return myUserStatus;
      } catch (error) {
        return error;
      }
    }
  };
}

module.exports = makeUserService;
