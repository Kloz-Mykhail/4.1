import {
  ArgumentsHost,
  Catch,
  ExceptionFilter,
  UnauthorizedException,
} from '@nestjs/common';
import { Response } from 'express';

@Catch(UnauthorizedException)
export class AuthFilter implements ExceptionFilter {
  catch(exception: UnauthorizedException, host: ArgumentsHost) {
    const res = host.switchToHttp().getResponse<Response>();
    res.status(401).setHeader('WWW-Authenticate', 'Basic realm="foo"');
    res.end('<script>history.back()</script>');
  }
}
