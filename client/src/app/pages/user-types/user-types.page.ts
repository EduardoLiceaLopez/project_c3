import { Component, OnInit } from '@angular/core';
import { RestService } from 'src/app/services/rest.service';
import { UserTypes, UserType } from '../../interfaces';

@Component({
  selector: 'app-user-types',
  templateUrl: './user-types.page.html',
  styleUrls: ['./user-types.page.scss'],
})
export class UserTypesPage implements OnInit {
  userTypesList: UserTypes[] = [];

  constructor(private restService: RestService) { }

  ngOnInit() {
    const query = `
      query {
        userTypes {
          id
          name
        }
      }
    `;
    this.restService.getAll<UserType>(query).subscribe((response) => {
      this.userTypesList = response.data.userTypes;
    });
  }
}