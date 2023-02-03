import IBaseEntity from "../interfaces/BaseEntity";
import IMapper from "../interfaces/IMapper";

export default class BasicService<Ent extends IBaseEntity, Req, Res, Upd> {
    private mapper: IMapper<Ent, Req, Res, Upd>;
    private entities: Ent[];

    constructor(mapper: IMapper<Ent, Req, Res, Upd>, entities: Ent[]) {
        this.mapper = mapper;
        this.entities = entities;
    }

    getAll(): Res[] {
        return this.mapper.mapResponses(this.entities);
    }

    getOne(id: number): Res | undefined {
        const entity: Ent | undefined = this.entities.find((x: Ent) => x.id === id && x.status);
        if(!entity) return undefined;
        else return this.mapper.mapResponse(entity);
    }

    save(request: Req): Res {
        const entity: Ent = this.mapper.mapRequest(request);
        entity.id = this.entities.length + 1;
        this.entities.push(entity);
        return this.mapper.mapResponse(entity);
    }

    update(update: Upd, id: number): Res | null {
        const entity: Ent | undefined = this.entities.find((x: Ent) => x.id === id && x.status);
        if(!entity) return null;
        const entityModified: Ent = this.mapper.mapUpdate(update, entity);
        this.entities[id - 1] = entityModified;
        return this.mapper.mapResponse(entityModified);
    }

    delete(id: number): boolean {
        const entity: Ent | undefined = this.entities.find((x: Ent) => x.id === id && x.status);
        if(!entity) return false;
        this.entities[entity.id - 1].status = false;
        return true
    }
}