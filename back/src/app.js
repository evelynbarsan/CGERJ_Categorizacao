import cors from "cors";
import express from "express";
import "./database";
import routes from "./route";

class App {
    constructor(){
        this.server = express();
        this.middlewares();
        this.routes();
    }
    middlewares(){
        this.server.use(express.json());
        this.server.use(cors());
    }

    routes(){
        this.server.use(routes)
    }
}
export default new App().server;