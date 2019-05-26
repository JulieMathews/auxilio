'use strict';
var sequelize = require('sequelize')
var uuidv1 = require("uuid/v1");
var bcrypt = require("bcrypt");


module.exports = (sequelize, DataTypes) => {
  var User = sequelize.define('User', {
    uuid: {
      primaryKey: true,
      type: DataTypes.UUID,
      defaultValue: DataTypes.UUIDV1
    },
    username:{
      type:DataTypes.STRING,
      allowNull: false,
      validate: {
        len: [1, 30]
      }
    },

    email: {
      type: DataTypes.STRING,
      allowNull:  false,
      unique: true,
      validate: {
        len: [1, 100]
      }
  },
    password: {
      type: DataTypes.STRING,
      allowNull: false,
      validate: {
        len: [1, 100]
      }
    }
    });
  User.associate = function(models) {
    // associations can be defined here
    User.hasMany(models.Post,{
      foreignKey: "userUuid",
      onDelete: "cascade"
    });
    User.hasMany(models.Conversation, {
      as: "Conversations1",
      foreignKey: "user1Uuid"
    });
    User.hasMany(models.Conversation, {
      as: "Conversations2",
      foreignKey: "user2Uuid"
    });
  };

// methods ======================
  // generating a hash
  User.generateHash = function(password) {
    return bcrypt.hashSync(password, bcrypt.genSaltSync(8), null);
  };

  // checking if password is valid
  User.prototype.validPassword = function(password) {
    return bcrypt.compareSync(password, this.password);
  };

  return User;
};
