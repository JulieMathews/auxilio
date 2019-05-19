'use strict';
module.exports = (sequelize, DataTypes) => {
  const Post = sequelize.define('Post', {
    name: {
        type: DataTypes.STRING,
        allowNull: false,
        validate: {
          len: [1, 255]
        },
      }, 
    message: {
        allowNull: false,
        type: DataTypes.TEXT
    }
  }, {});
  Post.associate = function(models) {
    Post.belongsTo(models.User);
    foreignKey: "ownerUuid"
  };
  return Post;
};