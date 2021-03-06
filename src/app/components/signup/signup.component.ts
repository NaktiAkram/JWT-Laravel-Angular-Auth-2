import { Component, OnInit } from '@angular/core';
import { AuthServiceService } from 'src/app/services/auth-service.service';
import { TokenService } from 'src/app/services/token.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.scss']
})
export class SignupComponent implements OnInit {

  public form = {
    name: null,
    email: null,
    password: null,
  };

  public error = [];

  constructor(
    private auth:AuthServiceService,
    private token:TokenService,
    private router:Router) { }

  ngOnInit() {
  }

  onSubmit() {
    return this.auth.signup(this.form).subscribe(
        data => this.handleResponse(data),
        error => this.handleError(error)
    );
  }

  handleResponse(data) {
    this.token.handle(data.access_token);
    this.router.navigateByUrl('/profile');
  }

  handleError(error){
    this.error = error.error.errors;
  }

}
