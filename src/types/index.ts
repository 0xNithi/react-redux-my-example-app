export interface IFormLogin {
  username: string;
  password: string;
}

export interface IFormRegister extends IFormLogin {
  confirmPassword: string;
}
