import { createYoga } from "graphql-yoga";
import {createServer} from 'http';
import schema from "./schema/schema";
createServer(
    createYoga({
        schema
    })
).listen(4000, () => console.log('Server online on http://localhost:4000/graphql'))