import {Sequelize} from 'sequelize';
import env from '../config/config';

export const sequelize = new Sequelize(env.DB_NAME,env.DB_USERNAME,env.DB_PASSWORD,{
    host: env.DB_HOST,
    dialect: env.DB_DIALECT
});

