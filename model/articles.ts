import { DataTypes, Model } from "sequelize";
import {sequelize} from '../utils/dbCon';

class Articles extends Model{
   declare id: number;
   declare name: string;
   declare price: number;
   declare stock: number;
   declare createdAt: Date;
   declare updatedAt: Date;
   declare status: boolean;
   constructor(i?: number, n?: string, p?: number, s?: number, st?: boolean) {
      super();
      this.id = i ? i : 0;
      this.name = n ? n : '';
      this.price = p ? p : 0;
      this.stock = s ? s : 0;
      this.createdAt = new Date();
      this.updatedAt = new Date();
      this.status = true;
   }
}
Articles.init({
   id: {
      primaryKey: true,
      field: 'articles_id',
      autoIncrement: true,
      type: DataTypes.INTEGER
   },
   name: new DataTypes.STRING(150),
   price: DataTypes.FLOAT,
   stock: DataTypes.INTEGER,
   createdAt: DataTypes.DATE,
   updatedAt: DataTypes.DATE,
   status: DataTypes.BOOLEAN
}, {
   underscored: true,
   sequelize
});

export default Articles