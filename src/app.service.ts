import { Injectable } from '@nestjs/common';
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
    const scopes = [
      'https://www.googleapis.com/auth/drive.metadata.readonly',
      'https://www.googleapis.com/auth/userinfo.email',
    ];
    // Generate a secure random state value.
    const state = crypto.randomBytes(32).toString('hex');
    request.session.state = state;

    const authorizationUrl = this.oauth2Client.generateAuthUrl({
      // 'online' (default) or 'offline' (gets refresh_token)
      access_type: 'offline',
      scope: scopes,
      // Enable incremental authorization. Recommended as a best practice.
      include_granted_scopes: true,
      // Include the state parameter to reduce the risk of CSRF attacks.
      state: state
    });
    response.redirect(authorizationUrl);
  }

  async oAuth2Callback(request, response: Response) {
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
  }

  async getPersonalDetails() {
    const googleAuth = google.oauth2({ version: "v2", auth: this.oauth2Client });
    const googleUserInfo = await googleAuth.userinfo.get();
    return googleUserInfo.data;
  }

  async getDriveFiles() {
    const drive = google.drive('v3');
    drive.files.list({
      auth: this.oauth2Client,
      pageSize: 10,
      fields: 'nextPageToken, files(id, name)',
    }, (err1, res1) => {
      if (err1) return console.log('The API returned an error: ' + err1);
      const files = res1.data.files;
      if (files.length) {
        console.log('Files:');
        files.map((file) => {
          console.log(`${file.name} (${file.id})`);
        });
      } else {
        console.log('No files found.');
      }
    });
  }
}
