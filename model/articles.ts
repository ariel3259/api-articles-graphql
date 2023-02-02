export default class Articles {
   id: number;
   name: string;
   price: number;
   stock: number;
   createdAt: Date;
   updatedAt: Date;
   constructor(i?: number, n?: string, p?: number, s?: number, ct?: Date, ut?: Date) {
      if(i) this.id = i;
      if(n) this.name = n;
      if(p) this.price = p;
      if(s) this.stock = s;
      if(ct) this.createdAt = ct;
      if(ut) this.updatedAt = ut;
   }
}