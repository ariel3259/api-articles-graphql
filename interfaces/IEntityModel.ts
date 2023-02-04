export interface IEntityMethods<T> {
    findAll(): Promise<Array<T>>;
    findOne(options: T): Promise<T | null>;
    create(options: T): Promise<T>;
    update(values: T, options: any): Promise<[number, Array<this>]>;
}