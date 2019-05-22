'use strict';
module.exports = {
  up: (queryInterface, Sequelize) => {
      return queryInterface.sequelize.transaction((t) => {
          return Promise.all([
              queryInterface.addColumn('articles','headerImageUrl', {
                  type: Sequelize.STRING
              }, { transaction: t }),
          ])
      })
  },

  down: (queryInterface, Sequelize) => {
      return queryInterface.sequelize.transaction((t) => {
          return Promise.all([
              queryInterface.articles.removeColumn('articles','headerImageUrl', { transaction: t }),
          ])
      })
  }
};







