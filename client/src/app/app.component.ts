import { Component } from '@angular/core';
@Component({
  selector: 'app-root',
  templateUrl: 'app.component.html',
  styleUrls: ['app.component.scss'],
})
export class AppComponent {
  public appPages = [
    { title: 'Página principal', url: '/home', icon: 'home' },
    { title: 'Usuarios', url: '/users', icon: 'person' },
    { title: 'Tipos de usuario', url: '/user-types', icon: 'people' },
  ];
  constructor() {}
}
