
import { Model, Column, Table } from 'sequelize-typescript';
import { randomUUID } from 'node:crypto';

@Table({ tableName: 'users' })
export class User extends Model<User> {

  @Column({ primaryKey: true, defaultValue: randomUUID() })
  id: string;

  @Column({ allowNull: false })
  name: string;

  @Column({ unique: true, allowNull: false })
  email: string;

  @Column({ allowNull: false })
  password: string;
}

