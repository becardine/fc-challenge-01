import { IsString, IsNotEmpty, MaxLength } from 'class-validator';

export class CreateSpotRequest {
  @IsString()
  @IsNotEmpty()
  @MaxLength(255)
  name: string;
}
