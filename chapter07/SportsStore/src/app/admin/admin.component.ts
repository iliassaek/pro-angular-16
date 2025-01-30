import { Component } from '@angular/core';
import { MaterialFeatures } from './material.module';
import { Router, RouterLink, RouterModule, RouterOutlet } from '@angular/router';
import { AuthService } from '../model/auth.service';
import { CommonModule } from '@angular/common';

@Component({
  imports: [MaterialFeatures, RouterOutlet, CommonModule, RouterModule],
  templateUrl: 'admin.component.html',
})
export class AdminComponent {
  constructor(private auth: AuthService, private router: Router) {}

  logout() {
    this.auth.clear();
    this.router.navigateByUrl('/');
  }
}
