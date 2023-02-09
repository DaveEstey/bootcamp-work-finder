const { Model, DataTypes } = require('sequelize');
const sequelize = require('../config/connection');

class JobTag extends Model {}

JobTag.init(
  {
    id: {
        type: DataTypes.INTEGER,
        allowNull: false,
        primaryKey: true,
        autoIncrement: true
    },
    posting_id: {
            type: DataTypes.INTEGER,
            allowNull: false,
            references: {
                model:'posting',
                key:'id'
            }
    },
    tag_id: {
        type: DataTypes.INTEGER,
        allowNull: false,
        references: {
            model: 'tag',
            key: 'id'
        }
    },
    },
  {
    sequelize,
    timestamps: false,
    freezeTableName: true,
    underscored: true,
    modelName:'job_tag'
  }
);

module.exports = JobTag;