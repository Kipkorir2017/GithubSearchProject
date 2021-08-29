import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';
import { Repository } from '../repository';
import { User } from '../user';

@Injectable({
  providedIn: 'root'
})
export class ViewProfileRequestService {

  user: User;
  repo: Repository;
  username: string | any;

  constructor(private http: HttpClient) {
    this.user = new User("", "", 0, 0, "", "", "", new Date());
    this.repo = new Repository("", "", "", new Date());
  }


  getProfileData(username: string) {
    return this.http.get("https://api.github.com/users/" + username + "?access_token=" + environment.ApiKey)
      .pipe(((response: any) => response));
  }
  getRepos(username: string) {
    return this.http.get("https://api.github.com/users/" + username + "?access_token=" + environment.ApiKey)
      .pipe(((response: any) => response));
  }
  findUser(username: string) {
    interface ApiResponse {

      //user
      login: string,
      avatar_url: string,
      followers: number,
      following: number,
      repos_url: string,
      bio: string,
      location: string,
      created_at: Date
      //repository
      name: string
      description: string,
      html_url: string,
      updated_at: Date
    }

    let promise = new Promise<void>((resolve, reject) => {
      this.http.get<ApiResponse>(`https://api.github.com/users/${username}?`)
        .toPromise().then(response => {
          this.user.login = response.login
          this.user.avatar_url = response.avatar_url
          this.user.followers = response.followers
          this.user.following = response.following
          this.user.repos_url = response.repos_url
          this.user.bio = response.bio
          this.user.location = response.location
          this.user.created_at = response.created_at
          resolve()
        },
          error => {
            reject(error)
          })

      this.http.get<ApiResponse>(`https://api.github.com/users/${username}/repos`)
        .toPromise().then(response => {
          this.repo.name = response.name
          this.repo.description = response.description
          this.repo.html_url = response.html_url
          this.repo.updated_at = response.updated_at
          resolve()
        },
          error => {
            reject(error)
          })

    })
    return promise

  }

  updateFields(username: string) {
    this.username = username;
  }
}
