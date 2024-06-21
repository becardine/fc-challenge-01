import { TicketKind } from '@prisma/client';
import { IsArray, IsString, ArrayNotEmpty, IsIn } from 'class-validator';

export class ReserveSpotRequest {
  @IsArray()
  @ArrayNotEmpty()
  @IsString({ each: true })
  spots: string[]; 

  @IsString()
  @IsIn(['full', 'half'])
  ticket_kind: TicketKind;
  email: string;
}
