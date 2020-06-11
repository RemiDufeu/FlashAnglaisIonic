import { Component } from '@angular/core';

import { Platform } from '@ionic/angular';
import { SplashScreen } from '@ionic-native/splash-screen/ngx';
import { StatusBar } from '@ionic-native/status-bar/ngx';

import { AngularFireAuth } from 'angularfire2/auth';
import { AlertController } from '@ionic/angular';
import { HttpClient } from '@angular/common/http';


@Component({
  selector: 'app-root',
  templateUrl: 'app.component.html',
  styleUrls: ['app.component.scss']
})
export class AppComponent {
  navigate : any;
  cUser;
  fiches;
  
  constructor(
    private httpCLient: HttpClient,
    public alertController: AlertController,
    public fAuth: AngularFireAuth,
    private platform: Platform,
    private splashScreen: SplashScreen,
    private statusBar: StatusBar
  ) {
    this.initializeApp();
  }
  

  initializeApp() {
    this.platform.ready().then(() => {
      this.splashScreen.hide();
    });
  }
  async progression0Alert() {
    const alert = await this.alertController.create({
      header: 'Attention',
      message: 'Vous allez perdre votre progression, souhaitez-vous continuer?',
      buttons: [{text :'Effacer',
      handler: () => {
        this.getFichesToServeur()}
      },'Annuler']
    });

    await alert.present();
  }
  getFichesToServeur() {
    this.httpCLient.get<any>( /*addresse firebase des fiches*/ )
    .subscribe ( (response) => {
      this.fiches = response;
      this.cUser = this.fAuth.auth.currentUser.uid;
      this.saveFichesToServeurUser()
      this.compteura0()
      console.log ('remise a 0 effectué');
    },
        (error) => {
          console.log ('erreur de chargement' + error);
        }
    );
  }
  compteura0(){
    this.httpCLient.put( /*addresse firebase du compteur*/ , 0)
    .subscribe(()=> {
      console.log('compteur a zero');
    },
      (error)=> {
        console.log('erreur de sauvegarde');
      }
      )
    }
  saveFichesToServeurUser() {
    this.httpCLient.put( /*addresse firebase du lexique de l'utilisateur*/ , this.fiches)
    .subscribe(()=> {
      console.log('fiches reset');
    },
      (error)=> {
        console.log('erreur de sauvegarde');
      }
      )
    }


  logout() {
    this.fAuth.auth.signOut()
  }

    sideMenu()
  {
}
}
