import { Component, OnInit } from '@angular/core';
import { ProfileserviceService } from '../service/profileservice.service';

@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.css']
})
export class ProfileComponent implements OnInit
{
  profile: any;


  constructor(private profileservice: ProfileserviceService) {}

  ngOnInit(): void {

    this.profileservice.getProfile().subscribe((profile) => {
      this.profile = profile;
    });
  }
}
