'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class movie extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
    }
  }
  movie.init({
    name: {
      type:DataTypes.STRING,
      allowNull:false,
      unique:true
    },
    runtime: {
      type:DataTypes.DECIMAL,
      allowNull:false
    },
    releaseDate: {
      type:DataTypes.DATEONLY,
      allowNull:false
    },
    director:{
      type:DataTypes.STRING,
      allowNull:false
    }
  }, {
    sequelize,
    modelName: 'movie',
    timestamps:false
  });
  return movie;
};