"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.destroy = exports.update = exports.create = exports.list = void 0;
const Post_1 = __importDefault(require("../model/Post"));
const list = async (req, res) => {
    try {
        const posts = await Post_1.default.findAll();
        return res.json(posts);
    }
    catch (error) {
        console.log(error);
    }
};
exports.list = list;
const create = async (req, res) => {
    try {
        const post = req.body;
        return res.json(await Post_1.default.create(post));
    }
    catch (error) {
        console.log(error);
    }
};
exports.create = create;
const update = async (req, res) => {
    try {
        const id = req.params.id;
        const post = await Post_1.default.findByPk(id);
        const reqPost = req.body;
        post.content = reqPost.content;
        return res.json(await post.save());
    }
    catch (error) {
        console.log(error);
    }
};
exports.update = update;
const destroy = async (req, res) => {
    try {
        const id = req.params.id;
        return res.json(await Post_1.default.destroy({
            where: {
                id: id
            }
        }));
    }
    catch (error) {
        console.log(error);
    }
};
exports.destroy = destroy;
