'use strict';
module.exports = {
  up: (queryInterface, Sequelize) => {
      return queryInterface.sequelize.transaction((t) => {
          return Promise.all([
              queryInterface.addColumn('Articles', 'headerImageUrl', {
                  type: Sequelize.STRING
              }, { transaction: t }),
          ])
      })
  },

  down: (queryInterface, Sequelize) => {
      return queryInterface.sequelize.transaction((t) => {
          return Promise.all([
              queryInterface.removeColumn('Articles', 'headerImageUrl', { transaction: t }),
          ])
      })
  }
};
