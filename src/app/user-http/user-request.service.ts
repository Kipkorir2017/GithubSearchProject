import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http'
import { User } from '../user';
import { Repository } from '../repository';

@Injectable({
  providedIn: 'root'
})
export class UserRequestService {

  user: User;
  repo: Repository;

  username: string|any;
  newUserDetails: any = []
  constructor(private http: HttpClient) {
    this.user = new User( "","", 0, 0, "", "", "", new Date())
    this.repo = new Repository("", "", "", new Date())
  }
  showDetails(username: string) {
    interface ApiResponse {
      login:string,
      avatar_url: string,
      followers: number,
      following: number,
      repos_url: string,
      bio: string,
      location: string,
      created_at: Date
    }
    let promise = new Promise((resolve, reject) => {
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

          resolve(response)
        },
          error => {
            reject(error)
          })
    })
    return promise;
  }

  showMyRepo(username: string) {
  }
  ngOnInit() { }
    
  }
  

