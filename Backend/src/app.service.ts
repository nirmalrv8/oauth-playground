import { Injectable, InternalServerErrorException } from '@nestjs/common';
import { Response } from 'express';
import { google } from 'googleapis';
const crypto = require('crypto');
const url = require('url');

@Injectable()
export class AppService {

  private readonly oauth2Client = new google.auth.OAuth2
  (
    process.env.CLIENT_ID,
    process.env.CLIENT_SECRET,
    process.env.REDIRECT_URL
  );

  loginToGoogle(request, response: Response): void {
    try {
      const scopes = [
        'https://www.googleapis.com/auth/userinfo.email',
        'https://www.googleapis.com/auth/drive.metadata.readonly',
      ];
      const state = crypto.randomBytes(32).toString('hex');
      request.session.state = state;
  
      const authorizationUrl = this.oauth2Client.generateAuthUrl({
        access_type: 'offline',
        scope: scopes,
        include_granted_scopes: true,
        state: state
      });
      response.redirect(authorizationUrl);
    } catch (error) {
      console.log('Error occurred ' + error);
      throw new InternalServerErrorException(error);
    }
  }

  async oAuth2Callback(request, response: Response) {
    try {
      let query = url.parse(request.url, true).query;

      if (query.error) {
        console.log('Error:' + query.error);
      } else if (query.state !== request.session.state) {
        console.log('State mismatch. Possible CSRF attack');
        response.end('State mismatch. Possible CSRF attack');
      } else {
        let { tokens } = await this.oauth2Client.getToken(query.code as string);
        this.oauth2Client.setCredentials(tokens);
        response.sendStatus(200);
      }
    } catch (error) {
      console.log('Error occurred ' + error);
      throw new InternalServerErrorException(error);
    }
  }

  async getPersonalDetails() {
    try {
      const googleAuth = google.oauth2({ version: "v2", auth: this.oauth2Client });
      const googleUserInfo = await googleAuth.userinfo.get();
      return googleUserInfo.data;
    } catch (error) {
      console.log('Error occurred ' + error);
      throw new InternalServerErrorException(error);
    }
  }

  async getDriveFiles() {
    try {
      const drive = google.drive('v3');
      const response = await drive.files.list({
        auth: this.oauth2Client,
        pageSize: 10,
        fields: 'nextPageToken, files(id, name)',
      });
      const files = response.data.files;
      if (files.length == 0) {
        console.log('No files found.');
      }
      files.map((file) => {
        console.log(`${file.name} (${file.id})`);
      });
    } catch (error) {
      console.log('Error occurred ' + error);
      throw new InternalServerErrorException(error);
    }
  }
}
