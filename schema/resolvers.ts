import ArticlesResponse from "../dto/ArticlesResponse";

const articlesResponses: ArticlesResponse[] = [new ArticlesResponse(1, 'Javon Dave', 12.4, 5)]

export default {
    Query: {
        hello: (): string => 'Hi word',
        articles: (): ArticlesResponse[] =>  articlesResponses,
        article: (obj: object,  args: {id: number}): ArticlesResponse | undefined => articlesResponses.find((x: ArticlesResponse) => x.id == args.id)
    },  
    Mutation: {
        createArticle: (obj: object, arg: { msg: string }): string => arg.msg
    }
}