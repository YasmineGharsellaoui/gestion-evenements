import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { UserService } from 'src/app/services/user.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  user : any = {};
  findedUser:any;
  constructor(private userService: UserService, private router :Router) { }

  ngOnInit() {
  }

  login(){
    console.log("user from ts",this.user);
    
    this.userService.login(this.user).subscribe(
      (data)=> {
          console.log(data.findedUser);
          this.findedUser = data.findedUser;

          localStorage.setItem("userConnect",JSON.stringify(this.findedUser));

          if (this.findedUser.role == "user") {
            this.router.navigate(['']);
          }
          else{
            this.router.navigate(['addAdmin']);

          }
          
      })

  }

}
