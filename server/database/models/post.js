'use strict';
module.exports = (sequelize, DataTypes) => {
  const Post = sequelize.define('Post', {
    title: {
        type: DataTypes.STRING,
        allowNull: false
      },
    message: {
        allowNull: false,
        type: DataTypes.TEXT
    }
  }, {});
  Post.associate = function(models) {
    Post.belongsTo(models.User, {
      foreignKey: "userUuid"
    });
    Post.belongsTo(models.Post, {
      foreignKey: "parentId"
    });
    Post.hasMany(models.Post, {
      as: "childPosts",
      foreignKey: "id"
    })
  };

  return Post;
};
