import { Column, Entity, PrimaryGeneratedColumn } from 'typeorm';

@Entity({ name: 'posts' })
export class PostEntity {
  @Column()
  @PrimaryGeneratedColumn()
  uuid: string;

  @Column()
  name: string;

  @Column({ nullable: true })
  descriprion: string;

  @Column()
  creator_id: string;
}
