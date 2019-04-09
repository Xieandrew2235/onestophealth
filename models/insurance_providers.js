"use strict";
module.exports = function(sequelize, DataTypes) {
    var insuranceProvider = sequelize.define("insurance_providers", {
      provider_name: {
          type: DataTypes.STRING,
          allowNull: false
      },
      provider_type: {
          type: DataTypes.STRING,
          allowNull: true
      }
    });
  
    insuranceProvider.associate = function(models) {
      // Associating Author with Posts
      // When an Author is deleted, also delete any associated Posts
      insuranceProvider.belongsToMany(models.patients, { through: models.patient_doctors
      });
      insuranceProvider.belongsToMany(models.doctors, { through: models.patient_doctors });
    };
  
    return insuranceProvider;
  };
  