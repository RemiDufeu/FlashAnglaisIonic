import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { AngularFireAuth } from 'angularfire2/auth';
import { AlertController } from '@ionic/angular';


@Component({
  selector: 'app-objectif',
  templateUrl: './objectif.page.html',
  styleUrls: ['./objectif.page.scss'],
})
export class ObjectifPage implements OnInit {
  motsparjour = 20;
  cUser = this.fAuth.auth.currentUser.uid;


  putmotsparjour() {
    this.httpCLient.put( /*objextif journalier*/, this.motsparjour)
    .subscribe(()=> {
      console.log('objectif modifié');
      this.objectifAlert()
    },
      (error)=> {
        console.log('erreur de sauvegarde');
      }
      )
    }
  constructor(private httpCLient: HttpClient,public fAuth: AngularFireAuth,public alertController: AlertController,) { }

  async objectifAlert() {
    const alert = await this.alertController.create({
      header: 'Objectif modifié',
      message: 'Le changement de votre objectif quotidient a bien été pris en compte.',
      buttons: ['Confirmer']
    });

    await alert.present();
  }

  ngOnInit() {

  }

}
