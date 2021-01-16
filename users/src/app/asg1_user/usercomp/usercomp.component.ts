import { Component, OnInit } from '@angular/core';
import { User } from '../user.interface';

@Component({
  selector: 'app-usercomp',
  templateUrl: './usercomp.component.html',
  styleUrls: ['./usercomp.component.scss']
})
export class UsercompComponent implements OnInit {

  users:User[]=[
    {
      name:'Amar',
      username:'Amar1',
      email:'amar@gmail.com'
    },
    {
      name:'Anant',
      username:'AnantJ',
      email:'anant@gmail.com'
    },
    {
      name:'Ajay',
      username:'AjayGupta',
      email:'ajay@gmail.com'
    },
    {
      name:'Aditi',
      username:'Aditi',
      email:'aditi@gmail.com'
    }
  ];
  constructor() { }
handleDelete(userIndex:number){
this.users.splice(userIndex,1);
}
  ngOnInit(): void {
  }

}
