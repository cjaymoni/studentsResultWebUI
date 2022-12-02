import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path: 'signup',
    loadChildren: () =>
      import('./modules/auth/views/signup/signup.module').then(
        m => m.SignupModule
      ),
  },
  {
    path: 'login',
    loadChildren: () =>
      import('./modules/auth/views/login/login.module').then(
        m => m.LoginModule
      ),
  },
  {
    path: 'dashboard',
    loadChildren: () =>
      import('./modules/dashboard/dashboard.module').then(
        m => m.DashboardModule
      ),
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}

