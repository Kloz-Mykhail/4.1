import { BasicStrategy as Strategy } from 'passport-http';
import { Injectable, UnauthorizedException } from '@nestjs/common';
import { PassportStrategy } from '@nestjs/passport';
import { ConfigService } from '@nestjs/config';

@Injectable()
export class BasicStrategy extends PassportStrategy(Strategy) {
  constructor(private readonly configService: ConfigService) {
    super({
      passReqToCallback: true,
    });
  }

  public async validate(req, username, password): Promise<boolean> {
    console.log(username, password);
    if (
      this.configService.get<string>('ADMIN_NAME') === username &&
      this.configService.get<string>('ADMIN_PASS') === password
    ) {
      return true;
    }
    throw new UnauthorizedException();
  }
}
