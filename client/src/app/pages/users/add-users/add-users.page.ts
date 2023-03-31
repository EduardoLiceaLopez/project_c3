import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { RestService } from 'src/app/services/rest.service';
import  Swal  from 'sweetalert2';

@Component({
  selector: 'app-add-users',
  templateUrl: './add-users.page.html',
  styleUrls: ['./add-users.page.scss'],
})
export class AddUsersPage implements OnInit {
  userData = {
    name: '',
    middle_name: '',
    last_name: '',
    curp: '',
    rfc: '',
    phone_number: '',
    email: '',
    user_type_id: 0
  };
  
  constructor(private restService: RestService, private router: Router) {}

  ngOnInit() {}

  public addUser() {
    if (!this.userData.name ||
        !this.userData.middle_name ||
        !this.userData.last_name ||
        !this.userData.curp ||
        !this.userData.rfc ||
        !this.userData.phone_number ||
        !this.userData.email ||
        !this.userData.user_type_id) {
      Swal.fire({
        title: 'Por favor completa todos los campos',
        icon: 'error',
        confirmButtonText: 'Aceptar',
        width: '100%',
        padding: '2em',
        background: '#f6f6f6'
      });
      return;
    }
    if (this.userData.curp.length !== 18) {
      alert('La CURP debe tener 18 caracteres');
      return;
    }
    if (this.userData.rfc.length !== 13) {
      alert('La RFC debe tener 13 caracteres');
      return;
    }
    const mutation = `
      mutation {
        createUser(userInput: {
          name: "${this.userData.name}",
          middle_name: "${this.userData.middle_name}",
          last_name: "${this.userData.last_name}",
          curp: "${this.userData.curp}",
          rfc: "${this.userData.rfc}",
          phone_number: "${this.userData.phone_number}",
          email: "${this.userData.email}",
          user_type_id: ${this.userData.user_type_id}
        }) {
          id
          name
          middle_name
          last_name
          curp
          rfc
          phone_number
          email
          user_type_id
        }
      }
    `;
    this.restService.add(mutation).subscribe((answer: any) => {
      Swal.fire({
        title: 'Usuario creado correctamente',
        icon: 'success',
        confirmButtonText: 'Aceptar',
        width: '100%',
        padding: '2em',
        background: '#f6f6f6',
        backdrop: `
          rgba(0,0,123,0.4)
          url("https://media.giphy.com/media/3oEjI6SIIHBdRxXI40/giphy.gif")
          center top
          no-repeat
        `
      });
      this.userData = {
        name: '',
        middle_name: '',
        last_name: '',
        curp: '',
        rfc: '',
        phone_number: '',
        email: '',
        user_type_id: 0
  
      };
      this.router.navigateByUrl('/users');
    });    
  }
}