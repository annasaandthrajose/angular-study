import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  aim="Your Perfect Banking Partner"
  acno="Account Number Please"
  pswd=""
  accountDetails={
    1000:{acno:1000,username:"userone",balance:5000,password:"user1"},
    1001:{acno:1001,username:"usertwo",balance:3000,password:"user2"},
    1002:{acno:1002,username:"userthree",balance:3000,password:"user3"},
    1003:{acno:1003,username:"userfour",balance:3000,password:"user4"}
    

    }
  constructor() { }
  

  ngOnInit(): void {
  }

accchange(event:any){
this.acno=event.target.value;
console.log(this.acno);

}
pswdchange(event:any){
  this.pswd=event.target.value;
  console.log(this.pswd);
  
  }
  login()

{
  var acno=this.acno
  var pswd=this.pswd
  let users=this.accountDetails
  if(acno in users){
    if(pswd==users[acno]["password"])//entered acno ku corresponding ayitulla password users il undo
    //the acno is user entered not in database
    {
      alert("Login sucessful")
    }

else{
  alert("incorrect Password")
}
  
  }
else{
  alert("Invalid Account")
}
}
}