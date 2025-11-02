import { PartialType } from '@nestjs/mapped-types';
import { CreatePostDto } from './create-post.dto';

export class UpdatePostDto extends PartialType(CreatePostDto) {
  name?: string | undefined;
  description?: string | undefined;
  creator_id?: string | undefined;
}
