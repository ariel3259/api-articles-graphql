import { Sequelize } from 'sequelize';

export const sequelize: Sequelize = new Sequelize({
    dialect: 'postgres',
    host: process.env.HOST,
    username: process.env.USERNAME_DB,
    password: process.env.PASSWORD,
    port: parseInt(`${process.env.PORT_DB}`),
    database: process.env.DATABASE,
    schema: 'articles_s'
});
