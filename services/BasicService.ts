import { InferAttributes, InferCreationAttributes, Model } from "sequelize";
import IMapper from "../interfaces/IMapper";
import IRepository from "../interfaces/IRepository";

export default class BasicService<Ent extends Model , Req, Res, Upd> {
    private mapper: IMapper<Ent, Req, Res, Upd>;
    private repository: IRepository<Ent>;

    constructor(mapper: IMapper<Ent, Req, Res, Upd>, repository: IRepository<Ent>) {
        this.mapper = mapper;
        this.repository = repository;
    }

    async getAll(): Promise<Res[]> {
        return this.mapper.mapResponses(await this.repository.findAll());
    }

    async getOne(id: number): Promise<Res | null> {
        const entity: Ent | null = await this.repository.findOne(id);
        if(!entity) return null;
        else return this.mapper.mapResponse(entity);
    }

    async save(request: Req): Promise<Res> {
        const entity: Ent = this.mapper.mapRequest(request);
        const entityCreated: Ent = await this.repository.create(entity)
        return this.mapper.mapResponse(entity);
    }

    async update(update: Upd, id: number): Promise<Res | null> {
        const entity: Ent | null = await this.repository.findOne(id);
        if(!entity) return null;
        const entityToUpdate: Ent = this.mapper.mapUpdate(update, entity);
        const entityUpdated: Ent = await this.repository.update(entityToUpdate, id);
        return this.mapper.mapResponse(entityUpdated);
    }

    async delete(id: number): Promise<boolean> {
        return await this.repository.delete(id);
    }
}