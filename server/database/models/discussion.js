'use strict';
module.exports = (sequelize, DataTypes) => {
  const Discussion = sequelize.define('Discussion', {
    discussion: {
      type: DataTypes.TEXT,
      allowNull: false,
      validate: {
        len: [1, 255]
      },
    },
  });
  Discussion.associate = function(models) {
    //Discussion.belongsTo(models.User);
    //foreignKey: "ownerUuid"
  };
  return Discussion;
};