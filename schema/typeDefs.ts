export const typeDefs: string = `
    type Query {
        hello: String
        articles: [ArticlesResponse]
        article(id: ID!): ArticlesResponse
    }

    type ArticlesResponse {
        id: ID
        name: String
        price: Float
        stock: Int
    }

    type Mutation {
        createArticle(name: String!, price: Float!, stock: Int!): ArticlesResponse
        updateArticle(id: ID!, name: String, price: Float, stock: Int): ArticlesResponse
        deleteArticle(id: ID!): Boolean
    }
`