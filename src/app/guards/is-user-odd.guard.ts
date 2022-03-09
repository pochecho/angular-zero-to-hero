import { Injectable } from '@angular/core';
import {
  ActivatedRouteSnapshot,
  CanActivate,
  RouterStateSnapshot,
  UrlTree,
} from '@angular/router';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class IsUserOddGuard implements CanActivate {
  canActivate(
    route: ActivatedRouteSnapshot,
    state: RouterStateSnapshot
  ):
    | Observable<boolean | UrlTree>
    | Promise<boolean | UrlTree>
    | boolean
    | UrlTree {
    const id = route.params['id'];

    const isPrimo = (id: any) => {
      return true;
    };
   
    // if (id % 2 == 0) {
    //   return false;
    // }
    // if (!isPrimo(id)) {
    //   return false;
    // }
    // if ((id) <= 24) {
    //   return false;
    // }
    return true;
  }
}
