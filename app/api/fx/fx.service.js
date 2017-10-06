'use strict';


function makeUserService({
  FxEntity
}) {
  return {
    async getLastFx() {
      try {
        let myFx = FxEntity();
        let myLastFx = await myFx.getLastFx();
        return myLastFx;
      } catch (error) {
        return error;
      }
    },
  };
}

module.exports = makeUserService;
