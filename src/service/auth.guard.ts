
import { Injectable } from '@angular/core';
import { CanActivate, ActivatedRouteSnapshot, RouterStateSnapshot, UrlTree, Router } from '@angular/router';
import { Observable } from 'rxjs';
import { AuthService } from './auth.service';

@Injectable({
  providedIn: 'root',
})
export class AuthGuard implements CanActivate {
  constructor(private authService: AuthService, private router: Router) {}

  canActivate(
    next: ActivatedRouteSnapshot,
    state: RouterStateSnapshot
  ): boolean | UrlTree | Observable<boolean | UrlTree> | Promise<boolean | UrlTree> {
    const currentUser = this.authService.getCurrentUser();

    if (currentUser) {
      // Check if the user is admin or user
      if (currentUser.role === 'admin') {
        return true; // Admin can access the route
      } else if (currentUser.role === 'user') {
        return true; // User can access the route
      }else{
        this.router.navigate(['/404']);
        return false;
      }
    }else{
      this.router.navigate(['/login']);
      return false;
    }
  }
}
