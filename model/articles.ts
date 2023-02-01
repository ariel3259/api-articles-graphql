export default class Articles {
   id: number;
   name: string;
   price: number;
   stock: number;
   createdAt: Date;

   constructor(i: number, n: string, p: number, s: number, ct: Date) {
      this.id = i;
      this.name = n;
      this.price = p;
      this.stock = s;
      this.createdAt = ct;
   }
}