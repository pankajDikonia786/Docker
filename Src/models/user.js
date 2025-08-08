module.exports = (sequelize) => {
    const { DataTypes } = require('sequelize');
    return sequelize.define('User', {
      name: {
        type: DataTypes.STRING,
        allowNull: false,
      },
    }, {
        paranoid: true,
        timestamps: true,
        freezeTableName: true,
        schema: "common",
        createdAt: "created_date",
        updatedAt: "updated_date",
        deletedAt: "deleted_date",

    });
  };
  