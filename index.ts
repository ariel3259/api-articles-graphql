import * as dotenv from 'dotenv';
dotenv.config();
import { createYoga } from "graphql-yoga";
import {createServer} from 'http';
import schema from "./schema/schema";
import { sequelize } from './utils/dbCon';

const port: number = parseInt(`${process.env.PORT}`) | 4000;

createServer(
    createYoga({
        schema
    })
).listen(port, async () => {
    console.log(`Server online on http://localhost:${port}/graphql`);
    try {
        await sequelize.sync();
        console.log('conected to Database');
    } catch(err) {
        console.log(err)
    }
});