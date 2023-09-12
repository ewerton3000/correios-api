import { DataSource } from "typeorm";
import { utilDB } from "util.DB";
require('custom-env').env(true)
export const databaseProviders = [
    {
        provide: utilDB.dataSource,
        useFactory: async () => {
            const dataSource = new DataSource({
                type:'mysql',
                host: process.env.DOCKER,
                port: utilDB.dbPort,
                username: process.env.BD_username,
                password: process.env.BD_password,
                database: process.env.DATABASE,
                entities: [__dirname + '/../**/*.entity{.ts,.js}'],
                synchronize: true,
            })

            return dataSource.initialize()
        }
    }
]