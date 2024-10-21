import { Controller, Get, Req, Res } from '@nestjs/common';
import { AppService } from './app.service';
import { Response } from 'express';

@Controller()
export class AppController {
  constructor(private readonly appService: AppService) {}

  @Get('/login')
  loginToGoogle(@Req() request, @Res() response): void {
    this.appService.loginToGoogle(request, response);
  }

  @Get('oauth2-callback')
  oAuth2Callback(@Req() request, @Res() response: Response) {
    this.appService.oAuth2Callback(request, response);
  }

  @Get('/get-personal-details')
  getPersonalDetails() {
    return this.appService.getPersonalDetails();
  }

  @Get('/get-drive-files')
  getDriveFiles() {
    return this.appService.getDriveFiles();
  }
}
