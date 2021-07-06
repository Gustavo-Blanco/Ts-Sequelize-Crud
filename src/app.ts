import express, { Application } from 'express';
import morgan from 'morgan';
import env from './config/config';
import postRouter from './components/post/router/index';

export class App {

    private app: Application;
    private port: string ;

    constructor() {
        this.app = express();
        this.port = env.PORT;
        this.middlewares();
        this.settings();
        this.router();
    }

    middlewares = () => {
        this.app.use(morgan('dev'));
        this.app.use(express.json());
        this.app.use(express.urlencoded({extended:true}));
    }

    settings = () => {
        this.app.set('port', this.port);        
    }

    router = () => {
        this.app.use('/posts',postRouter);
    }

    start = async () => {
        await this.app.listen(this.app.get('port'));
        console.log(`Listen on port ${this.app.get('port')}`);
    }


}