import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-user',
  templateUrl: './user.component.html',
  styleUrls: ['./user.component.scss']
})
export class UserComponent implements OnInit {
  @Input() name:string;
  @Input() gender:string;
  @Input() profession:string;
  @Input() knowFor:string;
  @Input() status:number;

  constructor() { }

  ngOnInit(): void {
  }

}