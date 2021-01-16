import { Component, OnInit } from '@angular/core';
import { User } from '../user.interface';



@Component({
  selector: 'app-components-demo',
  templateUrl: './components-demo.component.html',
  styleUrls: ['./components-demo.component.scss']
})

export class ComponentsDemoComponent implements OnInit {
name:string
  users:User[]=[
    {
      name: 'Anant',
      handle: '@An',
      description:'desc of Anie',

    },
    {
      name: 'shivi',
      handle: '@Shivi',
      description:'desc of shivi',

    },
    {
      name: 'rony',
      handle: '@rony',
      description:'desc of rony',

    }
  ];
  constructor() { }
  

  ngOnInit(): void {
  }
  handleUserViewed(user: User) {
    this.name = user.name;
  }

  handleUserDeleted(userIndex: number) {
    this.users.splice(userIndex, 1);
  }
}
