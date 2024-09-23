import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  private validEmail = 'test@gmail.com';
  private validPassword = '123';

  constructor() { }

  // Método de login que verifica se o email e a senha fornecidos correspondem aos valores válidos
  login(email: string, password: string): boolean {
    // Retorna true se o email e a senha forem válidos, caso contrário, retorna false
    return email === this.validEmail && password === this.validPassword;
  }
}