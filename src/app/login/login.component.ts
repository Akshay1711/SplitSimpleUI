import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, FormBuilder, Validators } from '@angular/forms';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  hide = true;
  loginForm = this.fb.group({
    emailId: ['', [Validators.required, Validators.minLength(3),
    Validators.maxLength(25),
    Validators.email]],
    password: ['', [Validators.required,
    Validators.minLength(3),
    Validators.maxLength(12),
    Validators.pattern(/^(?=.*\d)(?=.*[a-z])(?=.*[A-Z])(?=.*[a-zA-Z]).{8,}$/)]]
  });

  constructor(private fb: FormBuilder) { }

  ngOnInit(): void {
  }

  getEmailErr() {
    let errors = this.loginForm.controls['emailId'].errors ? this.loginForm.controls['emailId'].errors : false
    if (errors) {
      if (errors.required) {
        return "Email ID is required"
      } else if (errors.minLength) {
        return "Email ID does not match the minimum length requirements."
      } else if (errors.maxLength) {
        return "Email ID does not match the maximum length requirements."
      } else if (errors.pattern) {
        return "Please enter a valid Email ID."
      }
    }
    return "Invalid Email ID";
  }

  getPasswordErr() {
    let errors = this.loginForm.controls['password'].errors;
    if (errors) {
      if (errors.required) {
        return "Password is required."
      } else if (errors.minLength) {
        return "Password must contain a minimum of 8 characters"
      } else if (errors.maxLength) {
        return "Password must contain a maximum of 12 characters"
      } else if (errors.pattern) {
        return "Password must contain at least one Uppercase letter one lower case letter a number and a special character."
      }
    }
    return "Invalid password";
  }

  submitLoginForm(data: any) {
    console.log("Data to be submitted", data)
  }


}
