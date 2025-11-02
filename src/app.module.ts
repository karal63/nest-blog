import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { ConfigModule } from '@nestjs/config';
import { PostEntity } from './entities/post.entity';
import { PostsModule } from './http/posts/posts.module';
import { UsersModule } from './http/users/users.module';
import { UserEntity } from './entities/user.entity';

@Module({
  imports: [
    ConfigModule.forRoot({
      envFilePath: `.${process.env.NODE_ENV}.env`,
    }),
    TypeOrmModule.forRoot({
      type: 'postgres',
      host: process.env.POSTGRES_HOST,
      port: Number(process.env.POSTGRES_PORT),
      username: process.env.POSTGRES_USER,
      password: process.env.POSTGRES_PASSWORD,
      database: process.env.POSTGRES_DB,
      entities: [PostEntity, UserEntity],
      synchronize: process.env.NODE_ENV === 'development',
    }),
    PostsModule,
    UsersModule,
  ],
})
export class AppModule {}
