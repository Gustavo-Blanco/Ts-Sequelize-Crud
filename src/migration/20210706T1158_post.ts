import {DataTypes,Sequelize} from 'sequelize';
import {sequelize} from '../db/config';

const queryInterface = sequelize.getQueryInterface();

queryInterface.createTable('posts', {
    id:{
        type: DataTypes.INTEGER.UNSIGNED,
        autoIncrement: true,
        primaryKey: true
    },
    content:{
        type: DataTypes.STRING(255),
        allowNull: false
    },
    createdAt:{
        type: DataTypes.DATE,
        defaultValue: Sequelize.fn('now')
    },
    updatedAt:{
        type: DataTypes.DATE,
        defaultValue: Sequelize.fn('now')
    }
});