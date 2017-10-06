'use strict';


function makeFxResponses({ responsesService }) {
  return {
    get_last_fx_ok: responsesService.createInternalResponse(200, 'FX2000', 'Get all fx successfully!'),
  };
}

module.exports = makeFxResponses;
