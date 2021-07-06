"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const sequelize_1 = require("sequelize");
const config_1 = __importDefault(require("../config/config"));
const sequelize = new sequelize_1.Sequelize(config_1.default.DB_NAME, config_1.default.DB_USERNAME, config_1.default.DB_PASSWORD, {
    host: config_1.default.DB_HOST,
    dialect: config_1.default.DB_DIALECT
});
