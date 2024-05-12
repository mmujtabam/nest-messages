import { IsString } from 'class-validator';

export class CreateMessageDto {
  @IsString()
  content: string;
}

// I am update