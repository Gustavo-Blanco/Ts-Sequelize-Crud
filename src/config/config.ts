import * as env from 'dotenv';
import { Sequelize,Dialect } from 'sequelize/types';
env.config();

export default {
    PORT: process.env.PORT as string,
    DB_NAME: process.env.DB_NAME as string,
    DB_USERNAME: process.env.DB_USERNAME as string,
    DB_PASSWORD: process.env.DB_PASSWORD as string,
    DB_HOST: process.env.DB_HOST as string,
    DB_DIALECT: process.env.DB_DIALECT as Dialect
}