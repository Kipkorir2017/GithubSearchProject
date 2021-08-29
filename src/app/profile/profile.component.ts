import { Component, OnInit } from '@angular/core';
import { UserRequestService } from '../user-http/user-request.service';
import { ViewProfileRequestService } from '../viewProfile-http/view-profile-request.service';




@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.css']
})
export class ProfileComponent implements OnInit {

   name!:any
  username !: string;
  profiles : any;
  repo : any;
  
  constructor(private viewProfile  :ViewProfileRequestService, private repository:UserRequestService  ) { };
  getProfiles() {
    this.viewProfile.getProfileData(this.username).subscribe((response) => {
      console.log("We are picking up some response", response)
      return this.profiles = response;
    },
    (error) =>console.log("Picking and error on fetching user profile data", error)
    );
  }
  
  getRepositories(){
    this.repository.getRepos(this.username).subscribe((data) =>{
      console.log(data)
      return this.repo = data;
    },
      (error) => console.log("Picking and error on fetching user profile data", error)
    )
  };
  ngOnInit() : void {
    }

}
