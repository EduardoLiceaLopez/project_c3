import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { RestService } from 'src/app/services/rest.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.page.html',
  styleUrls: ['./login.page.scss'],
})
export class LoginPage implements OnInit {
  username = '';
  password = '';

  constructor(private router: Router, private restService: RestService, private http: HttpClient) { }

  ngOnInit() { }

  ionViewWillEnter() {
    const menu = document.querySelector('ion-menu');
    if (menu) {
      menu.hidden = true;
    }
  }

  onLoginClick() {
    const loginUserInput = {
      user_name: this.username,
      password: this.password,
    };

    const query = `
      mutation Login($loginUserInput: LoginUserInput!) {
        login(loginUserInput: $loginUserInput) {
          userAccess {
            user_name
            user_role
            user {
              name
              middle_name
            }
          }
        }
      }
    `;

    this.http.post('/api/login', { query, variables: { loginUserInput } }).subscribe(
      (response: any) => {
        if (response.login && response.login.userAccess && response.login.userAccess.user_name === this.username) {
          console.log('si pasaste');
          this.router.navigate(['/home']);
        } else {
          console.log('no coinciden');
        }
      },
      (error) => {
        console.log(error);
      }
    );
  }

  
  
  
  
  
  
}