import { Injectable } from '@angular/core';
import {
  ActivatedRouteSnapshot,
  Router,
  RouterStateSnapshot,
} from '@angular/router';
import { PlatformService } from './plateform.service';

@Injectable()
export class BrowserGuard {
  constructor(private router: Router, private ps: PlatformService) {}

  canActivate(route: ActivatedRouteSnapshot, state: RouterStateSnapshot) {
    if (this.ps.isServer) {
      this.router.navigateByUrl('/');
      return false;
    }
    return true;
  }
}
