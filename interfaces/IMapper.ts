import { Model } from "sequelize";
/**
 * Ent is entity
 * Req is Request
 * Res is Response
 * Upd is Update
 */
export default interface IMapper<Ent extends Model, Req, Res, Upd> {
  mapRequest(req: Req): Ent;
  mapResponse(ent: Ent): Res;
  mapResponses(ents: Ent[]): Res[];
  mapUpdate(update: Upd, entity: Ent): Ent;
}