'use strict';


function makeUserResponses({ responsesService }) {
  return {
    get_nationalities_ok: responsesService.createInternalResponse(200, 'USR000', 'Get all nationalities successfully!'),
    get_user_status_ok: responsesService.createInternalResponse(200, 'USR2001', 'User status retrieved successfully!'),
  };
}

module.exports = makeUserResponses;
