import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, CanActivate, Router, RouterStateSnapshot, UrlTree } from '@angular/router';
import { Observable } from 'rxjs';
import { TokenStorageService } from '../services/auth/token-storage.service';

@Injectable({
  providedIn: 'root'
})
export class AuthGuard implements CanActivate {
  
  constructor(private tokenStorage: TokenStorageService, private router: Router){}

  canActivate(): boolean {
    if(this.tokenStorage.getToken()){
      return true
    }else {
      this.router.navigate(['/login'])
      return false
    }
  }
  
}
