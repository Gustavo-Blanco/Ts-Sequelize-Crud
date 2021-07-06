import Post from '../model/Post';
import { Request, Response } from 'express';
import { IPostAttr } from '../interface/IPostAttr';

export const list = async (req: Request, res: Response) : Promise<Response | void> => {
    try {
        const posts = await Post.findAll();
        return res.json(posts);
    } catch (error) {
        console.log(error);
    }
}

export const create = async (req: Request, res: Response) : Promise<Response | void> => {
    try {        
        const post : IPostAttr = req.body;
        return res.json(await Post.create(post));
    } catch (error) {
        console.log(error);
    }
}

export const update = async (req: Request, res: Response) : Promise<Response | void> => {
    try {        
        const id = req.params.id ;
        const post = await Post.findByPk(id);
        const reqPost : IPostAttr = req.body;
        
        post!.content = reqPost.content;
        
        return res.json(await post!.save());

    } catch (error) {
        console.log(error);
    }
}

export const destroy = async (req: Request, res: Response) : Promise<Response | void> => {
    try {        
        const id = req.params.id ;
        
        return res.json(await Post.destroy({
            where:{
                id: id
            }
        }));

    } catch (error) {
        console.log(error);
    }
}