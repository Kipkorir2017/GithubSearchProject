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
  
 
  constructor(private showProfile: ViewProfileRequestService) {
    this.showProfile = showProfile;
    this.user=this.showProfile.user;
    this.repos = this.showProfile.repo;
  }

  search(username: string) {
    this.showProfile.findUser(username);
    this.showProfile.getProfileData(username)
      .subscribe(profile => {

        this.userProfile = profile;
      }, error => {
        (error)
      });
    this.username = '';
    this.showProfile.getProfileData(username)
      .subscribe(repos => {
        this.repos = repos;
        console.log(repos)
      });
  }

  ngOnInit(): void {
    
    this.search('Kipkorir2017')
  }

}
