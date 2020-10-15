import { Component, OnInit } from '@angular/core';
import { GetUserService } from './services/get-user.service';
import { IUser, IUserResponse } from './modules/user';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit{
  title = 'users';
  name:string;
  gender:string;
  profession:string;
  knowFor:string;

  constructor( private GetUserService:GetUserService ) {}

  ngOnInit(): void {
    this.getUser();
  }

  getUser() {
    this.GetUserService
    .getUser()
    .subscribe((response:IUserResponse) => {
      console.log(response);
      const {data} = response;
      console.log(data.name);
      const {name,gender,profession,knowFor}:IUser = data;
      this.name = `${name.first} ${name.last}`;
      this.gender = gender;
      this.profession = profession;
      this.knowFor = knowFor;
    })
  }
}


