import { Entity, Column, ObjectId, ObjectIdColumn } from 'typeorm';
@Entity('users')
export class User {
  @ObjectIdColumn()
  _id: ObjectId;

  @Column()
  name: string;

  @Column()
  age: number;
}
