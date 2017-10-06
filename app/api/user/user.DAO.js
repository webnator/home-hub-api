'use strict';

const DBService = require('./../services/lib/index');

class UserDAO extends DBService {

  constructor() {
    super();
    this.COLLECTION_NAME = 'users';
  }

  getCollectionName() {
    return this.COLLECTION_NAME
  }

  getAllNationalities() {
    let data = {
      dbData: {
        query: [
          {
            $match: {
              "nationality": {
                $exists: true,
                $ne: null
              }
            }
          },
          {
            $group: {
              _id: "$nationality",
              total: {
                $sum: 1
              }
            }
          }
        ]
      }
    };

    return super.aggregate(data);
  };

  getUserActivity() {
    let data = {
      dbData: {
        query: {
          $group: {
            _id: "$status",
            total: {
              $sum: 1
            }
          }
        }
      }
    };

    return super.aggregate(data);
  }


}

module.exports = UserDAO;