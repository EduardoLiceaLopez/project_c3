import { Component, OnInit } from '@angular/core';
import { RestService } from 'src/app/services/rest.service';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-add-user-types',
  templateUrl: './add-user-types.page.html',
  styleUrls: ['./add-user-types.page.scss'],
})
export class AddUserTypesPage implements OnInit {
  userType= {
    name: '',
  };

  constructor(private restService: RestService) { }

  ngOnInit() {
  }

  public addUserType() {
    const mutation = `
    mutation{
      createUserType(createUserTypeInput: {
        name: "${this.userType.name}",
      })
      {
        id
        name
      }
    }`;
    this.restService.add(mutation).subscribe((answer: any) => {
      Swal.fire({
        title: 'Usuario creado correctamente',
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
      this.userType = {
        name: ''
      };
    });    
  }
}