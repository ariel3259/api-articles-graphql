import ArticlesRequest from "../../../dto/articlesRequest";
import ArticlesResponse from "../../../dto/ArticlesResponse";
import ArticlesUpdate from "../../../dto/ArticlesUpdate";
import BasicService from "../../../services/BasicService";
import Articles from "../../../model/articles";
import ArticlesMapper from "../../../Mappers/ArticlesMapper";
import ArticlesRepository from "../../../repository/ArticlesRepository";

const articlesService: BasicService<Articles, ArticlesRequest, ArticlesResponse, ArticlesUpdate> = new BasicService<Articles, ArticlesRequest, ArticlesResponse, ArticlesUpdate>(new ArticlesMapper(), new ArticlesRepository());

export const articles =  async (): Promise<ArticlesResponse[]> => await  articlesService.getAll();

export const article = async (obj: object,  args: {id: number}): Promise<ArticlesResponse | null> => await articlesService.getOne(args.id)

export const createArticle = async (obj: object, arg: ArticlesRequest): Promise<ArticlesResponse> => await articlesService.save(arg)

export const updateArticle = async (obj: object, arg: ArticlesUpdate): Promise<ArticlesResponse | null> => await articlesService.update(arg, parseInt(`${arg.id}`))

export const deleteArticle = async (obj: object, arg: {id: number}): Promise<boolean> => await articlesService.delete(arg.id)