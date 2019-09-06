import { Component, OnInit } from '@angular/core';
import { THIS_EXPR } from '@angular/compiler/src/output/output_ast';
import { User } from '../models/User';

@Component({
  selector: 'app-sandbox',
  templateUrl: './sandbox.component.html',
  styleUrls: ['./sandbox.component.css']
})
export class SandboxComponent implements OnInit {

  user: User;

  

  constructor() { 
   
}
ngOnInit() {
  this.user = {
    firstName: "collins",
    lastName: 'juma',
    email: 'coll@gmail.com'
  } 
}


  
  
}