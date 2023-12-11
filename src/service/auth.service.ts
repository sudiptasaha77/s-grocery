import { Injectable } from '@angular/core';
import { Router } from '@angular/router';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  private currentUser: { username: string; password: string; role: string } | null = null;
  session: any;

  constructor(private router: Router) { }

  login(username: string, password: string, role: string): boolean {
    if (role === 'admin' && username === 'Tirth' && password === 'Great') {
      this.currentUser = { username, password, role };
      this.session = this.currentUser;
      localStorage.setItem('session', JSON.stringify(this.session));
      return true;
    } else if (role === 'user') {
      this.currentUser = { username, password, role };
      this.session = this.currentUser;
      localStorage.setItem('session', JSON.stringify(this.session));
      return true;
    } else {
      return false;
    }
  }
  getCurrentUser(): { username: string; password: string; role: string } | null {
    return this.currentUser;
  }
  
  logout(){
    this.session = undefined;
    localStorage.removeItem('session');
    this.router.navigateByUrl('/');
  }
}
