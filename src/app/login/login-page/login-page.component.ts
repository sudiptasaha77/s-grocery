import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from '../../../service/auth.service';
import { FormBuilder, FormGroup, Validators  } from '@angular/forms';

@Component({
  selector: 'app-login-page',
  templateUrl: './login-page.component.html',
  styleUrls: ['./login-page.component.scss']
})
export class LoginPageComponent implements OnInit{
  form:FormGroup = this.formBuilder.group({
    userId:['', Validators.required],
    password: ['', Validators.required],
    role:['', Validators.required],
  })
  roleList = ['user','admin'];
  constructor(private router: Router, private authService: AuthService, private formBuilder: FormBuilder ){}
  ngOnInit(): void {
    console.log("this is the value for login ")
  }

  signIn(){
    let user = this.authService.login(this.form.value.userId, this.form.value.password, this.form.value.role);
 console.log("this is the value of the user111111111", user )
    if(!user){
      alert("Invalid user name")
    }else{
      this.router.navigate(['/home']);
    }

    
  }

}
