import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { UserService } from 'src/app/services/user.service';

@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.css']
})
export class SignupComponent implements OnInit {
  signupForm : FormGroup;
  constructor(private formBuilder : FormBuilder, private router: Router, private userService : UserService) { }

  ngOnInit() {
    //Création des inputs
    this.signupForm = this.formBuilder.group({
      firstName: ['',[Validators.minLength(3),Validators.required]],
      lastName: ['',[Validators.minLength(5),Validators.required]],
      email: ['',,[Validators.email,Validators.required]],
      password: ['',[Validators.minLength(8),Validators.required]],
      confirmPassword: ['',[Validators.required]],
      tel: ['',[Validators.minLength(8),Validators.required]],

    });
  }

  signup(c:any){
    // let users= JSON.parse(localStorage.getItem("users") || "[]");
    // let idUser = JSON.parse(localStorage.getItem("idUser") || "1");

    // c.id = idUser;
    // c.role = "user";

    // users.push(c);
    // localStorage.setItem("users",JSON.stringify(users));
    // localStorage.setItem("idUser", idUser+1);

    // // vers home
    // this.router.navigate(['']);

    this.userService.signup(c).subscribe(
      (data)=>{
          console.log(data.message);
      }
    )

  }

}
