import { Component, OnInit, Input } from '@angular/core';
import { AngularFireAuth } from 'angularfire2/auth';
import { HttpClient } from '@angular/common/http';
import {Router, NavigationExtras} from '@angular/router'

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})


export class HomePage implements OnInit{
  cUser = this.fAuth.auth.currentUser.uid;
  motsparjour : number;
  homeCompteur=0;
  compteurjour =0;
  

  getMotsparjourToServeur() {
    this.httpCLient.get<any>( /*addresse firebase du compteur de l'utilisateur*/ )
    .subscribe ( (response) => {
      this.homeCompteur = response;
      console.log ('compteur du jour a'+this.homeCompteur);
      this.httpCLient.get<any>( /*addresse firebase de l'objectif journalier*/ )
    .subscribe ( (response) => {
      this.motsparjour = response;
      console.log ('progression chargé');
      if (this.homeCompteur >= this.motsparjour)
      {this.compteurjour=1;
      this.homeCompteur=this.motsparjour}
      else {this.compteurjour = this.homeCompteur /this.motsparjour};
      console.log (this.compteurjour)
      console.log (this.homeCompteur)
    },
        (error) => {
          console.log ('erreur de chargement de la progression' + error);
        }
    );
    },
        (error) => {
          console.log ('erreur de chargement de la progression' + error);
        }
    );
  }
  
  fiches= [];
  
  onClickDetails(fich){
    this.router.navigate(['revisionjour',fich])
    }

  getFichesToServeurUser() {
    this.httpCLient.get<any>( /*addresse firebase des fiches de l'utilisateur*/ )
    .subscribe ( (response) => {
      this.fiches = response;
      console.log ("fiches de l'utilisateur chargé");
    },
        (error) => {
          console.log ("erreur de chargement des fiches de l'utilisateur" + error);
        }
    );
  }
  
  getCompteur() {
    this.httpCLient.get<any>( /*compteur de l'utilisateur*/ )
    .subscribe ( (response) => {
      this.homeCompteur = response;
      console.log ('compteur du jour a'+this.homeCompteur);
    },
        (error) => {
          console.log ('erreur de chargement de la progression' + error);
        }
    );
  }

  putdate2() {
    this.httpCLient.put( /*date du jour*/ , this.dateobject)
    .subscribe(()=> {
        console.log('enregistrement terminé');
    },
      (error)=> {
        console.log('erreur de sauvegarde');
      }
      )
  }

  
  compteura0() {
  this.httpCLient.put( /*compteur journalier utilisateur*/ , 0 )
  .subscribe(()=> {
    console.log('enregistrement terminé');
  },
    (error)=> {
      console.log('erreur de sauvegarde');
    }
    )
  }

  datejour= new Date();
  date2 = this.datejour.toDateString();
  dateobject = [{date1 : this.date2}];

  SuiviProgressionJournalière() {
    this.httpCLient.get<any>( /*date de la derniere session*/)
    .subscribe ( (response) => {
      var dateBD = new Array;
      dateBD = response;
      console.log ('date BD chargé');
      console.log(dateBD[0].date1);
      console.log(this.dateobject[0].date1);
      if (dateBD[0].date1 != this.dateobject[0].date1) {
        console.log('nouvelle date!')
        this.putdate2();
        this.compteura0();
  }
    },
        (error) => {
          console.log ('erreur de chargement de la progression' + error);
        }
    );
  
}

  constructor(public fAuth: AngularFireAuth, private httpCLient: HttpClient,private router: Router) {}
 //logout non encore intégré
  logout() {
    this.fAuth.auth.signOut();}
 
 
 
       

ngOnInit() {
// this.getCompteur();
this.getFichesToServeurUser()
this.getMotsparjourToServeur();
this.SuiviProgressionJournalière();
}
ionViewWillEnter(){
  this.getFichesToServeurUser();
  this.getMotsparjourToServeur();
  this.SuiviProgressionJournalière();
}
}
    
