import { ValidationErrorItem } from "sequelize";
import IRepository from "../interfaces/IRepository";
import Articles from '../model/articles';

export default class ArticlesRepository implements IRepository<Articles> {
    async findAll(): Promise<Articles[]> {
        return await Articles.findAll({
            where: {
                status: true
            }
        });
    }
    async findOne(id: number): Promise<Articles | null> {
        return await Articles.findOne({
            where: {
                id,
                status: true,
            }
        });
    }
    async create(element: Articles): Promise<Articles> {
        try {
        return await Articles.create({...element});
        } catch(err) {
            console.log(err)
            return new Articles();
        }
    }
    async update(element: Articles, id: number): Promise<Articles> {
        await Articles.update(element, {
            where: {
                id,
                status: true,
            }
        });
        element.id = id;
        return element;
    }
    async delete(id: number): Promise<boolean> {
        const entityCounter: number = await Articles.count({
            where: {
                id,
                status: true
            }
        });
        if (entityCounter < 1) return false
        await Articles.update({
            status: false,
        }, {
            where: {
                id,
                status: true
            }
        });
        return true;
    }

}