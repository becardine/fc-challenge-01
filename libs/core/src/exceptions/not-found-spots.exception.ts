import { HttpException, HttpStatus } from '@nestjs/common';

export class NotFoundSpotsException extends HttpException {
  constructor(spots: string[]) {
    super(
      `Spots not exists: ${spots.join(', ')}`,
      HttpStatus.NOT_FOUND,
    );
  }
}
