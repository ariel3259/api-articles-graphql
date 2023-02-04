import { Model } from "sequelize";

export default interface IRepository<T extends Model> {
    findAll(): Promise<T[]>;
    findOne(id: number): Promise<T | null>;
    create(element: T): Promise<T>;
    update(element: T, id: number): Promise<T>;
    delete(id: number): Promise<boolean>
}