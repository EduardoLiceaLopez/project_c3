import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-forgot-password',
  templateUrl: './forgot-password.page.html',
  styleUrls: ['./forgot-password.page.scss'],
})
export class ForgotPasswordPage implements OnInit {

  constructor(private router: Router) { }

  ngOnInit() {
    
  }

  ionViewWillEnter() {
    const menu = document.querySelector('ion-menu');
    if (menu) {
      menu.hidden = true;
    }
  }

  recoverPassword() {
    this.router.navigate(['/login']);
  }
  
}