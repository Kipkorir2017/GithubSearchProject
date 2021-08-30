import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http'
import { Repository } from '../repository';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class UserRequestService {


  repo!: Repository;
  username: string | any;


  constructor(private http: HttpClient) {

  }

  getRepos(username: any) {
    return this.http.get("https://api.github.com/users/" + username + "/repos?access_token=" + environment.ApiKey)
      .pipe(((response: any) => response));
  }




  ngOnInit() { }

}


