import './util/module-alias';
import app from "./app";
import * as dotenv from 'dotenv';
dotenv.config();



let port = process.env.PORT || 3333;

app.listen(port)