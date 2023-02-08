const { Model, DataTypes } = require('sequelize');
const sequelize = require('../config/connection');

class SkillTag extends Model {}

SkillTag.init(
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
    user_id: {
        type: DataTypes.INTEGER,
        allowNull: false,
        references: {
            model: 'user',
            key: 'id'
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
    modelName:'skill_tag'
  }
);

module.exports = SkillTag;