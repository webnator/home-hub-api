'use strict';


function makeUserController({
  errorService,
  responsesService,
  userService,
  userResponses,
  schemaService,
}) {
  return {
    async getAllNationalities(request, reply) {
      try {
        let nationalities = await userService.getAllNationalities();
        let response = responsesService.createResponseData(
          userResponses.get_nationalities_ok,
          { nationalities }
        );
        reply(response.body).code(response.statusCode);
      } catch (error) {
        let response = errorService.createGeneralError(error);
        reply(response.body).code(response.statusCode);
      }
    },

    async getUserStatus(request, reply) {
      try {
        let userStatus = await userService.getUsersStatus();
        let response = responsesService.createResponseData(
          userResponses.get_user_status_ok,
          { userStatus }
        );
        reply(response.body).code(response.statusCode);
      } catch (error) {
        let response = errorService.createGeneralError(error);
        reply(response.body).code(response.statusCode);
      }
    }
  };
}

module.exports = makeUserController;
