import { Component, OnInit } from '@angular/core';
import { RestService } from 'src/app/services/rest.service';
import { UserData, User} from '../../interfaces';

@Component({
  selector: 'app-users',
  templateUrl: './users.page.html',
  styleUrls: ['./users.page.scss'],
})

export class UsersPage implements OnInit {
  users: UserData[] = [];
  searchedUser: User = { users: [] };

  constructor(private restService: RestService) {}

  ngOnInit() {
    this.showData();
  }

searchUser(event: any) {
  const text = event.target.value;
    if (text && text.trim() != '') {
      const filteredUsers = this.users.filter(user => {
        return user.name.toLowerCase().includes(text.toLowerCase());
    });
      this.searchedUser = { users: filteredUsers };
    } else {
      this.searchedUser = { users: [] };
    }
}
    
  public showData() {
    const query = `
      query {
        users {
          id
          name
          middle_name
          last_name
        }
      }
    `;
    this.restService.getAll<User>(query).subscribe((answer) => {
        this.users = answer.data.users;
      });
  }
  
}