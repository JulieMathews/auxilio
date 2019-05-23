'use strict';
module.exports = (sequelize, DataTypes) => {
  const Conversation = sequelize.define('Conversation', {
    user1Uuid: {
      type: DataTypes.UUID,
      allowNull: false
    },
    user2Uuid: {
      type: DataTypes.UUID,
      allowNull: false
    }
  }, {});
  Conversation.associate = function(models) {
    Conversation.belongsTo(models.User, {
      as: "User1",
      foreignKey: "user1Uuid"
    })
    Conversation.belongsTo(models.User, {
      as: "User2",
      foreignKey: "user2Uuid"
    })
  };
  return Conversation;
};