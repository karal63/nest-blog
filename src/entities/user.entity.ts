import { Column, Entity, PrimaryGeneratedColumn } from 'typeorm';

@Entity({ name: 'users' })
export class UserEntity {
  @Column()
  @PrimaryGeneratedColumn()
  uuid: number;

  @Column()
  email: string;

  @Column({ nullable: true })
  password: string;
}
