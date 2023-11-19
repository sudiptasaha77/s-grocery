import { Injectable } from '@angular/core';
import { Router } from '@angular/router';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  users : any[] = [
    {
      id: 1,
      username: 'admin1',
      password: 'b',
      role: 'admin'
    },
    {
    id: 2,
    username: 'admin2',
    password: 'b',
    role: 'admin'
  }, {
    id: 3,
    username: 'user1',
    password: 'c',
    role: 'user'
  }, {
    id: 4,
    username: 'a',
    password: 'a',
    role: 'admin'
  }, {
    id: 5,
    username: 'q',
    password: 'q',
    role: 'user'
  }];

  session: any;

  constructor(private router: Router) { }

  login(userName: string, password: string, role: string){
    let user = this.users.find(u => u.username === userName && u.password === password && u.role === role)
    if(user){
      this.session = user;
      localStorage.setItem('session', JSON.stringify(this.session));

    }
    return user;
  }

  logout(){
    this.session = undefined;
    localStorage.removeItem('session');
    this.router.navigateByUrl('/');
  }
}
