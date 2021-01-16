import { Component, OnInit,Input,Output,EventEmitter } from '@angular/core';
import { User } from '../user.interface';


@Component({
  selector: 'app-usercard',
  templateUrl: './usercard.component.html',
  styleUrls: ['./usercard.component.scss']
})
export class UsercardComponent implements OnInit {
  
  @Input()
  user:User

  @Input()
  userIndex: number;

//   user:User={
//  name:'anant',
//  handle:'@anant',
//  description:'this is anant'
//   }

//   userIndex=1;

  @Output()
  userViewed = new EventEmitter<User>();

  @Output()
  userDeleted = new EventEmitter<number>();


  constructor() {
   }

  handleView() {
    this.userViewed.emit(this.user);
  }

  handleDeleteUser() {
    this.userDeleted.emit(this.userIndex);
  }

  ngOnInit(): void {
  }

}
