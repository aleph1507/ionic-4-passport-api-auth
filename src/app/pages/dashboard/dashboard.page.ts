import { Component, OnInit } from '@angular/core';
import {User} from '../../models/user';
import {MenuController} from '@ionic/angular';
import {AuthService} from '../../services/auth.service';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.page.html',
  styleUrls: ['./dashboard.page.scss'],
})
export class DashboardPage implements OnInit {

  user: User;

  constructor(
      private menu: MenuController,
      private authService: AuthService,
  ) {
    this.menu.enable(true);
  }

  ngOnInit() {
  }

  ionViewWillEnter() {
    this.authService.user().subscribe(user => {
      this.user = user;
    });
  }

}
