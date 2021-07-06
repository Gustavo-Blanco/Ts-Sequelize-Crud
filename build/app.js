"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.App = void 0;
const express_1 = __importDefault(require("express"));
const morgan_1 = __importDefault(require("morgan"));
const config_1 = __importDefault(require("./config/config"));
class App {
    constructor() {
        this.middlewares = () => {
            this.app.use(morgan_1.default('dev'));
            this.app.use(express_1.default.json());
        };
        this.settings = () => {
            this.app.set('port', this.port);
        };
        this.start = async () => {
            await this.app.listen(this.app.get('port'));
            console.log(`Listen on port ${this.app.get('port')}`);
        };
        this.app = express_1.default();
        this.port = config_1.default.PORT;
        this.middlewares();
        this.settings();
    }
}
exports.App = App;
