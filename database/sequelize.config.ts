import { SequelizeModuleOptions } from '@nestjs/sequelize';

export const sequelizeConfig: SequelizeModuleOptions = {
  dialect: 'mysql',
  host: process.env.DB_HOST || 'localhost',
  port: parseInt(process.env.DB_PORT, 10) || 3306,
  username: process.env.DB_USER || 'root',
  password: process.env.DB_PASSWORD || 'password',
  database: process.env.DB_NAME || 'store_database',
  autoLoadModels: true, // Carrega automaticamente os modelos da pasta 'models'
  synchronize: true, // Sincroniza automaticamente os modelos com o banco de dados (use com cautela em produção)
};
