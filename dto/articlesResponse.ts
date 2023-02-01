export default class ArticlesResponse {
    id: number;
    name: string;
    price: number;
    stock: number;

    constructor(i: number, n: string, p: number, s: number) {
        this.id = i;
        this.name = n;
        this.price = p;
        this.stock = s;
     }
}