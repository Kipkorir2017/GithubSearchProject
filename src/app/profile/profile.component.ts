import { Component, OnInit } from '@angular/core';
import { User } from '../user';
import { ViewProfileRequestService } from '../viewProfile-http/view-profile-request.service';
;



@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.css']
})
export class ProfileComponent implements OnInit {

  user: User;
  username: string | any;
  repos: any;
  userProfile: any;
  followers: any;
  following: any;
  
 
  constructor(private viewProfile: ViewProfileRequestService) {
    this.viewProfile = viewProfile;
    this.user=this.viewProfile.user;
    this.repos = this.viewProfile.repo;
  }

  search(username: string) {
    this.viewProfile.findUser(username);
    this.viewProfile.getProfileData(username)
      .subscribe(profile => {

        this.userProfile = profile;
      }, (error) => {
       console.log ("cannot find what you want", error)
      });
    this.username = '';
    this.viewProfile. getRepos(username)
      .subscribe(repos => {
        this.repos = repos;
        console.log(repos)
      });
  }

  ngOnInit(): void {
    
    this.search('Kipkorir2017')
  }

}
