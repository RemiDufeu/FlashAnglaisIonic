import { Component, OnInit } from '@angular/core';

import { AngularFireAuth } from 'angularfire2/auth';
import { Router } from '@angular/router';
import { AlertController } from '@ionic/angular';

@Component({
  selector: 'app-mdpoublie',
  templateUrl: './mdpoublie.page.html',
  styleUrls: ['./mdpoublie.page.scss'],
})
export class MdpoubliePage implements OnInit {



  constructor(
    private authService: AngularFireAuth,
    private alertCtrl: AlertController,
    private router: Router
  ) {}
  
  resetPassword(email:string): void {
    this.authService.auth.sendPasswordResetEmail(email).then(
      async () => {
        const alert = await this.alertCtrl.create({
          message: "Un lien a été transmis à l'email indiqué",
          buttons: [
            {
              text: 'Ok',
              role: 'cancel',
              handler: () => {
                this.router.navigateByUrl('connexion');
              },
            },
          ],
        });
        await alert.present();
      },
      async error => {
        const errorAlert = await this.alertCtrl.create({
          message: error.message,
          buttons: [{ text: 'Ok', role: 'cancel' }],
        });
        await errorAlert.present();
      }
    );
  }

  ngOnInit() {
  }

}
