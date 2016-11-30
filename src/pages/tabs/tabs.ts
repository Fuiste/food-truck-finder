import { Component } from '@angular/core';
import { Auth } from '@ionic/cloud-angular';
import { ModalController } from 'ionic-angular';

import { HomePage } from '../home/home';
import { AboutPage } from '../about/about';
import { LoginPage } from '../login/login'
import { SettingsPage } from '../settings/settings';

@Component({
  templateUrl: 'tabs.html'
})
export class TabsPage {
  // this tells the tabs component which Pages
  // should be each tab's root Page
  tab1Root: any = HomePage;
  tab2Root: any = AboutPage;
  tab3Root: any = SettingsPage;

  constructor(public modalCtrl: ModalController, public auth: Auth) {
    if (!this.auth.isAuthenticated()) {
      this.openLoginModal();
    }
  };

  openLoginModal() {
    let modal = this.modalCtrl.create(LoginPage, {}, {'enableBackdropDismiss': false});
    modal.present();
  };
}
