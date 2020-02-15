import { Component, OnInit } from '@angular/core';
import { AuthStatusService } from 'src/app/services/auth-status.service';
import { Router } from '@angular/router';
import { TokenService } from 'src/app/services/token.service';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.scss']
})
export class NavbarComponent implements OnInit {
  public loggedIn: boolean;

  constructor(
    private status: AuthStatusService,
    private router: Router,
    private token : TokenService
  ) { }

  ngOnInit() {
    this.status.authStatus.subscribe(value => this.loggedIn = value);
  }

  logout(event: MouseEvent) {
    event.preventDefault();
    this.token.remove();
    this.status.changeAuthStatus(false);
    this.router.navigateByUrl('/login');
  }

}
