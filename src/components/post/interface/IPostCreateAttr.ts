import { Optional } from "sequelize/types";
import {IPostAttr} from './IPostAttr';

export interface IPostCreateAttr extends Optional<IPostAttr, "id"> {}