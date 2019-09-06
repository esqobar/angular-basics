import { Component, OnInit, ViewChild } from '@angular/core';
import { UserService } from '../../services/user.service';
import { User } from '../../models/User';

@Component({
  selector: 'app-users',
  templateUrl: './users.component.html',
  styleUrls: ['./users.component.css']
})
export class UsersComponent implements OnInit {
  user: User= {
    firstName: '',
    lastName: '',
    email: ''
  }
  users: User[];
  showExtended: boolean = true;
  loaded: boolean = false;
  enableAdd: boolean = false;
  showUserForm: boolean = false;
  @ViewChild('userForm', {static: false})  form: any;
  data:any;
  // currentClasses = {};
  // currentStyles = {};

  constructor(private userService: UserService) { }

  ngOnInit() {

    this.userService.getData().subscribe(data => {
      console.log(data);
    });
    
    this.userService.getUsers().subscribe(users => {
      this.users = users;
      this.loaded = true;
    });

   this.loaded = true;

}



  onSubmit({value, valid}: {value: User, valid: boolean}) {
    if(!valid){
      console.log('Form is not valid');
    } else {
      value.isActive = true;
      value.date = new Date();
      value.hide= true;

      this.userService.addUser(value);

      this.form.reset();
    }

  }

  // setCurrentClasses(){
  //   this.currentClasses = {
  //     'btn-success': this.enableAdd,
  //     'big-text': this.showExtended
  //   }
  // }

  // setCurrentStyles() {
  //   this.currentStyles = {
  //     'padding-top': this.showExtended ? '0' : '40px',
  //     'font-size': this.showExtended ? '0' : '40px'
      
  //   }
  // }


  // click event
  fireEvent(e) {
    //console.log('button Clicked');
    //console.log(e);
    console.log(e.type);
  }

  // toggleHide(user: User) {
  //   user.hide = !user.hide;
  // }
}