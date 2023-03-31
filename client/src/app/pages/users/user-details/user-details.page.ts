import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { User } from 'src/app/interfaces';
import { RestService } from 'src/app/services/rest.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-user-details',
  templateUrl: './user-details.page.html',
  styleUrls: ['./user-details.page.scss'],
})
export class UserDetailsPage implements OnInit {

  id!: string;
  user: any; 
  
  constructor(private activatedRoute: ActivatedRoute, private restService: RestService, private router:Router) {
  }

  ngOnInit() {
    this.activatedRoute.paramMap.subscribe(params => {
      const id = params.get('userId');
      if (id !== null) {
        this.id = id;
        const query = `
          query GetUser($id: Int!) {
            user(id: $id) {
              id
              name
              middle_name
              last_name
              curp
              rfc
              phone_number
              email
            }
          }
        `;
    
        this.restService.getAll<{ user: any }>(query, { id: parseInt(id) })
          .subscribe(response => {
            this.user = response.data.user;
          });
      }
    });
  }

  deleteUser() {
    const mutation = `
    mutation DeleteUser($id: Int!) {
      removeUser(id: $id)
    }    
    `;
    const variables = { id: parseInt(this.id) };
    this.restService.delete<any>(mutation, variables).subscribe(response => {
      this.router.navigateByUrl('/users');
    });
  }
  
}
