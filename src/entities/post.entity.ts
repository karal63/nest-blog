import { Column, Entity, ManyToOne, PrimaryGeneratedColumn } from 'typeorm';
import { UserEntity } from './user.entity';

@Entity({ name: 'posts' })
export class PostEntity {
  @Column()
  @PrimaryGeneratedColumn()
  uuid: number;

  @Column()
  name: string;

  @Column({ nullable: true })
  description: string;

  @ManyToOne(() => UserEntity)
  @Column()
  creator_id: string;
}
