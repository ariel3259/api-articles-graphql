import IMapper from "../interfaces/IMapper";
import Articles from "../model/articles";
import ArticlesRequest from "../dto/articlesRequest";
import ArticlesResponse from "../dto/ArticlesResponse";
import ArticlesUpdate from "../dto/ArticlesUpdate";

export default class ArticlesMapper implements IMapper<Articles, ArticlesRequest, ArticlesResponse, ArticlesUpdate> {
    mapRequest(req: ArticlesRequest): Articles {
        return new Articles(undefined, req.name, req.price, req.stock);
    }
    mapResponse(ent: Articles): ArticlesResponse {
        console.log(new ArticlesResponse(ent.id, ent.name, ent.price, ent.stock))
        return new ArticlesResponse(ent.id, ent.name, ent.price, ent.stock);
    }
    mapResponses(ents: Articles[]): ArticlesResponse[] {
        return ents.map<ArticlesResponse>((x: Articles) => new ArticlesResponse(x.id, x.name, x.price, x.stock));
    }
    mapUpdate(update: ArticlesUpdate, entity: Articles): Articles {
        if(update.name) entity.name = update.name;
        if(update.price) entity.price = update.price;
        if(update.stock) entity.stock = update.stock
        entity.updatedAt = new Date();
        return entity;
    }
}