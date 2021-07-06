"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const sequelize_1 = require("sequelize");
const config_1 = require("../../../db/config");
//documentation: https://sequelize.org/master/manual/typescript.html
class Post extends sequelize_1.Model {
}
Post.init({
    id: {
        type: sequelize_1.DataTypes.INTEGER.UNSIGNED,
        autoIncrement: true,
        primaryKey: true
    },
    content: {
        type: sequelize_1.DataTypes.STRING(255),
        allowNull: false
    }
}, {
    sequelize: config_1.sequelize,
    tableName: 'posts'
});
exports.default = Post;
