import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AuthRoutesModule } from './auth-routes.module';
import { LoginModule } from './views/login/login.module';
import { SignupModule } from './views/signup/signup.module';

@NgModule({
  imports: [CommonModule, AuthRoutesModule, LoginModule, SignupModule],
  declarations: [],
})
export class AuthModule {}

