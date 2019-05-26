'use strict';

module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.sequelize.transaction(t => {
      return Promise.all([
        queryInterface.addColumn('Posts', 'title', {
          type: Sequelize.STRING,
          allowNull: false
        }, { transaction: t }),
        queryInterface.addColumn('Posts', 'userUuid', {
          type: Sequelize.UUID,
          allowNull: true,
          references: {
            model: "Users",
            key: "uuid"
          }
        }, { transaction: t }),
        queryInterface.addColumn('Posts', 'parentId', {
          type: Sequelize.INTEGER,
          allowNull: true,
          references: {
            model: "Posts",
            key: "id"
          }
        }, { transaction: t })
      ]);
    })
    return ;
  },

  down: (queryInterface, Sequelize) => {
    return queryInterface.sequelize.transaction(t => {
      return Promise.all([
        queryInterface.removeColumn('Posts', 'title', { transaction: t }),
        queryInterface.removeColumn('Posts', 'userUuid', { transaction: t }),
        queryInterface.removeColumn('Posts', 'parentId', { transaction: t })
      ])
    })
  }
};
