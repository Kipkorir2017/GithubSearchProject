import { Component, OnInit } from '@angular/core';
import { UserRequestService } from '../user-http/user-request.service';
import { ViewProfileRequestService } from '../viewProfile-http/view-profile-request.service';

@Component({
  selector: 'app-landing',
  templateUrl: './landing.component.html',
  styleUrls: ['./landing.component.css']
})
export class LandingComponent implements OnInit {
  title = 'GitHub Search';

  username !: string;
  profiles: any;
  repo: any;

  constructor(private viewProfile: ViewProfileRequestService, private repository: UserRequestService) { };
  getProfile() {
    this.viewProfile.getProfileData(this.username).subscribe((response) => {
      console.log("We are picking up some response", response)
      return this.profiles = response;
    },
      (error) => console.log("Picking and error on fetching user profile data", error)
    );
  }

  getRepository() {
    this.repository.getRepos(this.username).subscribe((data) => {
      console.log(data)
      return this.repo = data;
    },
      (error) => console.log("Picking and error on fetching user profile data", error)
    )
  };
  ngOnInit(): void {

  }




}
