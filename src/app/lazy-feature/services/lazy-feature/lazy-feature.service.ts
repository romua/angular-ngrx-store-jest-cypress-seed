import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class LazyFeatureService {

  public API_URL = `https://api.github.com/users?per_page`;

  constructor(private http: HttpClient) {
  }

  getUsers(perPage: number = 100) {
    console.log(perPage);
    return this.http.get(`${this.API_URL}=${perPage}`);
  }

}
