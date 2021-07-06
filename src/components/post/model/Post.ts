import { DataTypes, Model } from "sequelize";
import { IPostAttr } from "../interface/IPostAttr";
import { IPostCreateAttr } from "../interface/IPostCreateAttr";
import {sequelize} from '../../../db/config';

//documentation: https://sequelize.org/master/manual/typescript.html

class Post extends Model<IPostAttr, IPostCreateAttr> implements IPostAttr{
    id!: number;
    content!: string;

    public readonly createdAt!: Date;
    public readonly updatedAt!: Date;
}

Post.init(
    {
        id:{
            type: DataTypes.INTEGER.UNSIGNED,
            autoIncrement: true,
            primaryKey: true
        },
        content:{
            type: DataTypes.STRING(255),
            allowNull: false
        }
    },{
        sequelize,
        tableName:'posts'
    }
);

export default Post;