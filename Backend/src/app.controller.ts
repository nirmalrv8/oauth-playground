import { Controller, Get, InternalServerErrorException, Req, Res } from '@nestjs/common';
import { AppService } from './app.service';
import { Response } from 'express';

@Controller()
export class AppController {
  constructor(private readonly appService: AppService) {}

  @Get('/login')
  loginToGoogle(@Req() request, @Res() response): void {
    try {
      this.appService.loginToGoogle(request, response);
    } catch (error) {
      throw new InternalServerErrorException(error);
    }
  }

  @Get('oauth2-callback')
  oAuth2Callback(@Req() request, @Res() response: Response) {
    try {
      this.appService.oAuth2Callback(request, response);
    } catch (error) {
      throw new InternalServerErrorException(error);
    }
  }

  @Get('/get-personal-details')
  getPersonalDetails() {
    try {
      return this.appService.getPersonalDetails();
    } catch (error) {
      throw new InternalServerErrorException(error);
    }
  }

  @Get('/get-drive-files')
  getDriveFiles() {
    try {
      return this.appService.getDriveFiles();
    } catch (error) {
      throw new InternalServerErrorException(error);
    }
  }
}
