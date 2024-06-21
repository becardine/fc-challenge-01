import { HttpException, HttpStatus } from '@nestjs/common';

export class ReservedSpotsException extends HttpException {
  constructor(spot: string) {
    super(
      `Spot ${spot} is not available for reservation`,
      HttpStatus.BAD_REQUEST,
    );
  }
}
