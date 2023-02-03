import IBaseEntity from "../interfaces/BaseEntity";

export default class Articles implements IBaseEntity {
   id: number;
   name: string;
   price: number;
   stock: number;
   public createdAt: Date;
   public updatedAt: Date;
   public status: boolean;
   constructor(i?: number, n?: string, p?: number, s?: number, st?: boolean) {
      this.id = i ? i : 0;
      this.name = n ? n : '';
      this.price = p ? p : 0;
      this.stock = s ? s : 0;
      this.createdAt = new Date();
      this.updatedAt = new Date();
      this.status = true;
   }
}