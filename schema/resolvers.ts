import ArticlesResponse from "../dto/ArticlesResponse";
import BasicService from "../services/BasicService";
import Articles from "../model/articles";
import ArticlesRequest from "../dto/articlesRequest";
import ArticlesUpdate from "../dto/ArticlesUpdate";
import ArticlesMapper from "../Mappers/ArticlesMapper";

const articlesResponses: ArticlesResponse[] = [new ArticlesResponse(1, 'Javon Dave', 12.4, 5)]

const articlesService: BasicService<Articles, ArticlesRequest, ArticlesResponse, ArticlesUpdate> = new BasicService<Articles, ArticlesRequest, ArticlesResponse, ArticlesUpdate>(new ArticlesMapper(), []);

export default {
    Query: {
        hello: (): string => 'Hi word',
        articles: (): ArticlesResponse[] =>  articlesService.getAll(),
        article: (obj: object,  args: {id: number}): ArticlesResponse | undefined => articlesService.getOne(args.id)
    },  
    Mutation: {
        createArticle: (obj: object, arg: ArticlesRequest): ArticlesResponse => articlesService.save(arg),
        updateArticle: (obj: object, arg: ArticlesUpdate): ArticlesResponse | null => articlesService.update(arg, arg.id),
        deleteArticle: (obj: object, arg: {id: number}): boolean => articlesService.delete(arg.id)
    }
}