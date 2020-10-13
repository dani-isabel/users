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
  status:number;

  constructor( private GetUserService:GetUserService ) {}

  ngOnInit(): void {
    this.getUser();
  }

  handleClick() {
    this.getUser();
  }

  getUser() {
    this.GetUserService
    .getUser()
    .subscribe((response:IUserResponse) => {
      console.log('Hola');
      const {results} = response;
      const [data] = results;
      const {name,gender,profession,knowFor,status}:IUser = data;
      this.name = `${name.first} ${name.last}`;
      this.gender = gender;
      this.profession = profession;
      this.knowFor = knowFor;
      this.status = status;
    })
  }
}


