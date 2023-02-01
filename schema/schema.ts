import { typeDefs } from './typeDefs';
import resolvers from './resolvers';
import { createSchema } from 'graphql-yoga';

export default createSchema({
    typeDefs,
    resolvers,
});