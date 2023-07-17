import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable()
export class LoginService {
  constructor(private http: HttpClient) {}

  login(data: any) {
    return this.http.post(
      'https://klocknow-api.abitech.a2hosted.com/api/login',
      data,
      {
        headers: {
          Accept: 'application/json',
          'Content-Type': 'application/json',
          'Access-Control-Allow-Origin': 'http://localhost:4200',
        },
      }
    );
  }
}
