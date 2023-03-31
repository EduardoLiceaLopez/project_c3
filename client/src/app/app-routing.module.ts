import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path: 'login',
    loadChildren: () => import('./pages/login/login.module').then( m => m.LoginPageModule)
  },
  {
    path: '',
    redirectTo: 'login',
    pathMatch: 'full'
  },
  {
    path: 'folder/:id',
    loadChildren: () => import('./folder/folder.module').then( m => m.FolderPageModule)
  },
  {
    path: 'home',
    loadChildren: () => import('./pages/home/home.module').then( m => m.HomePageModule)
  },
  {
    path: 'users',
    children: [
      {
        path: "",
        loadChildren: () => import('./pages/users/users.module').then( m => m.UsersPageModule)
      },
      {
        path: ':userId',
        loadChildren: () => import('./pages/users/user-details/user-details.module').then(m => m.UserDetailsPageModule)
      }      
    ]
  },
  {
    path: 'forgot-password',
    loadChildren: () => import('./pages/login/forgot-password/forgot-password.module').then( m => m.ForgotPasswordPageModule)
  },
  {
    path: 'register',
    loadChildren: () => import('./pages/login/register/register.module').then( m => m.RegisterPageModule)
  },
  {
    path: "addUsers",
    loadChildren: () => import('./pages/users/add-users/add-users.module').then( m => m.AddUsersPageModule)
  },
  {
    path: 'user-types',
    loadChildren: () => import('./pages/user-types/user-types.module').then( m => m.UserTypesPageModule)
  },
  {
    path: 'add-user-types',
    loadChildren: () => import('./pages/user-types/add-user-types/add-user-types.module').then( m => m.AddUserTypesPageModule)
  },

];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule {}
