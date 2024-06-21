import { IsString, IsNotEmpty, IsISO8601, IsNumber, Min, MaxLength } from 'class-validator';


export class CreateEventRequest {
  @IsString()
  @IsNotEmpty()
  @MaxLength(255)
  name: string;

  @IsString()
  @IsNotEmpty()
  @MaxLength(255)
  description: string;

  @IsString()
  @IsISO8601()
  date: string;

  @IsNumber()
  @Min(0)
  price: number;
}
