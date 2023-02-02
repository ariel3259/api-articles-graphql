import IMapper from "../interfaces/IMapper";
import Articles from "../model/articles";
import ArticlesRequest from "../dto/articlesRequest";
import ArticlesResponse from "../dto/ArticlesResponse";
import ArticlesUpdate from "../dto/ArticlesUpdate";

export default class ArticesMapper implements IMapper<Articles, ArticlesRequest, ArticlesResponse, ArticlesUpdate> {
    mapRequest(req: ArticlesRequest): Articles {
        return new Articles(undefined, req.name, req.price, req.stock, new Date(), new Date());
    }
    mapResponse(ent: Articles): ArticlesResponse {
        return new ArticlesResponse(ent.id, ent.name, ent.price, ent.stock);
    }
    mapResponses(ents: Articles[]): ArticlesResponse[] {
        return ents.map<ArticlesResponse>((x: Articles) => new ArticlesResponse(x.id, x.name, x.price, x.stock));
    }
    mapUpdate(update: ArticlesUpdate): Articles {
        return new Articles(undefined, update.name, update.price, update.stock, undefined, new Date());
    }
}