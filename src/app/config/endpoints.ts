import { environment } from 'src/environments/environment';

export const LoginEndpoint = environment.API_URL + 'auth/login/';
export const LogoutEndpoint = environment.API_URL + 'auth/logout/';
export const SignupEndpoint = environment.API_URL + 'auth/register/';

