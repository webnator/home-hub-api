'use strict';


function makeFxController({
  errorService,
  responsesService,
  fxService,
  fxResponses,
  schemaService,
}) {
  return {
    async getLastFx(request, reply) {
      try {
        let fx = await fxService.getLastFx();
        let response = responsesService.createResponseData(
          fxResponses.get_last_fx_ok,
          { fx }
        );
        reply(response.body).code(response.statusCode);
      } catch (error) {
        let response = errorService.createGeneralError(error);
        reply(response.body).code(response.statusCode);
      }
    },
  };
}

module.exports = makeFxController;
