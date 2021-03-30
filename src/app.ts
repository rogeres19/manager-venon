import express from 'express';
//import database from './database';
// import cors from 'cors'
import { router } from './routers';



class App {
    public express: express.Application

    public constructor() {

        this.express = express()

        this.middlewares()
        //this.database()
        this.routes()

    }

    private middlewares(): void {
        this.express.use(express.json())
        // this.express.use(cors())
    }

    private database(): void {
        //database.init();

    }

    private routes(): void {
        this.express.use(router)
    }
}

export default new App().express