import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { RestService } from 'src/app/services/rest.service';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-register',
  templateUrl: './register.page.html',
  styleUrls: ['./register.page.scss'],
})
export class RegisterPage implements OnInit {
  userAccess = {
    user_id: 0,
    user_name: '',
    password: '',
    user_role: ''
  }

  constructor(private router: Router, private restService: RestService) { }

  ngOnInit() {
  }

  public addUserAccess() {
    const mutation = `
    mutation {
      createUserAccess( userAccessInput: {
      user_id: ${this.userAccess.user_id},
      user_name: "${this.userAccess.user_name}",
      password: "${this.userAccess.password}",
      user_role: "${this.userAccess.user_role}"
    }) {
      id
      user_id
      user_name
      password
      user_role
    }
  }
`;
    this.restService.add(mutation).subscribe(
      (answer: any) => {
        Swal.fire({
          title: 'El acceso se ha creado de forma exitosa',
          icon: 'success',
          confirmButtonText: 'Aceptar',
          width: '30%',
          padding: '2em',
          background: '#f6f6f6',
          backdrop: `
            rgba(0,0,123,0.4)
            url("https://media.giphy.com/media/3oEjI6SIIHBdRxXI40/giphy.gif")
            center top
            no-repeat
          `
        });
        this.userAccess = {
          user_id: 0,
          user_name: '',
          password: '',
          user_role: ''
        };
      },
    );
    this.router.navigate(['/login']);
  }


  ionViewWillEnter() {
    const menu = document.querySelector('ion-menu');
    if (menu) {
      menu.hidden = true;
    }
  }
}