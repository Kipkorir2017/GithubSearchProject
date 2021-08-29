import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';


@Injectable({
  providedIn: 'root'
})
export class ViewProfileRequestService {


  username: any;

  constructor(private http: HttpClient) {}


  getProfileData(username: any) {
    return this.http.get("https://api.github.com/users/" + username + "?access_token=" + environment.ApiKey)
      .pipe(((response: any) => response));
  }
}
