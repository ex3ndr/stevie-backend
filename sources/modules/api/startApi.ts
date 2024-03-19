import express from 'express';
import bodyParser from 'body-parser';
import cors from 'cors';
import { Manager } from '../manager';
import { log } from '../../utils/log';

export async function startApi(manager: Manager) {

    // Create the express app
    const app = express();
    app.use(bodyParser.json());
    app.use(cors());
    app.get("/", (req, res) => { res.send("Welcome to Stevie Backend!"); });

    // Routes
    // TODO: Add routes here

    // Start
    await new Promise((resolve) => app.listen(3000, '0.0.0.0', () => resolve(undefined)))
    log("API started at http://0.0.0.0:3000");
}