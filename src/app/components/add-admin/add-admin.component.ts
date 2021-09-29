import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { UserService } from 'src/app/services/user.service';

@Component({
  selector: 'app-add-admin',
  templateUrl: './add-admin.component.html',
  styleUrls: ['./add-admin.component.css']
})
export class AddAdminComponent implements OnInit {
  addAdminForm:FormGroup;
  constructor(private formBuilder : FormBuilder, private userService : UserService) { }

  ngOnInit() {
    //Création des inputs
    this.addAdminForm = this.formBuilder.group({
      firstName: [''],
      lastName: [''],
      email: [''],
      password: [''],
      confirmPassword: [''],
      tel: [''],

    });
  }

  addAdmin(u:any){
    this.userService.addAdmin(u).subscribe(
      (data)=>{
          console.log(data.message);
      }
    )
  }

}
