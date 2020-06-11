import { Component, OnInit, Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { AngularFireAuth } from 'angularfire2/auth';
import { ActivatedRoute, Router } from '@angular/router';
import { analytics } from 'firebase';


@Injectable()
@Component({
  selector: 'app-revisionjour',
  templateUrl: './revisionjour.page.html',
  styleUrls: ['./revisionjour.page.scss'],
})
export class RevisionjourPage implements OnInit {
  cUser = this.fAuth.auth.currentUser.uid;

  //gestion de la date
  datejour= new Date();
  date2 = this.datejour.toDateString();
  dateobject = [{date1 : this.date2}];

  //hide et unhide
  hide:boolean = true;
  continuezserie() {this.ojectifaccompli = true;}
  ngIfCtrl(){this.hide = !this.hide;}

  //suivi progression
  motsparjour : number;
  compteur:number;
  ojectifaccompli = true

  //propriété de la fiche
  sub
  theme :any;
  lvl;
  id:number;
  lexique=[ {en :'', fr : ''}]
  
  //pop up objectif accompli  
  objectifAcompli(){
    if (this.compteur === this.motsparjour)
    {this.ojectifaccompli =false}
  }

  constructor(private httpCLient: HttpClient, public fAuth: AngularFireAuth,
    private route: ActivatedRoute, private router: Router) { }

  ficheVrai () {
    var a = this.lexique[0];
    this.lexique.shift();
    this.lexique.push(a);
    this.compteurplus1()
    this.lvlplus1()
    this.saveLexiqueToServeurUser()
    this.objectifAcompli()
  }
  ficheFaux () {
    //10 = la position quand c'est faux
    var a = this.lexique[0];
    var length =this.lexique.length - 10;
    this.lexique.shift();
    var removedItems = this.lexique.splice(10 - 1, length);
    this.lexique.push(a);
    removedItems.forEach(Object => {
      this.lexique.push(Object)
      
    });
    this.compteurplus1()
    this.saveLexiqueToServeurUser()
    this.objectifAcompli()
  }

  //echanges avec BD
  saveLexiqueToServeurUser() {
    this.httpCLient.put( /*emplacement du paquet à reviser*/ , this.lexique)
    .subscribe(()=> {
      console.log('enregistrement terminé');
    },
      (error)=> {
        console.log('erreur de sauvegarde');
      }
      )
    }

  getMotsparjourToServeur() {
    this.httpCLient.get<any>( /*emplacement de l'objectif journalier*/ )
    .subscribe ( (response) => {
      this.motsparjour = response;
      console.log ('mots par jour' + this.motsparjour);
    },
        (error) => {
          console.log ('erreur de chargement de la progression' + error);
        }
    );
  }

  getcompter() {
    this.httpCLient.get<any>( /*emplacement du compteur journalier de revision*/ )
    .subscribe ( (response) => {
      this.compteur = response;
      console.log ('progression chargé compeur');
    },
        (error) => {
          console.log ('erreur de chargement de la progression' + error);
        }
    );
  }

  getlexique() {
    this.httpCLient.get<any>( /*emplacement du theme choisi*/ )
    .subscribe ( (response) => {
      this.lexique = response;
      console.log ('lexique chargé');
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
  this.httpCLient.put( /*met le compteur a 0*/ , 0 )
  .subscribe(()=> {
    console.log('enregistrement terminé');
  },
    (error)=> {
      console.log('erreur de sauvegarde');
    }
    )
  }

  SuiviProgressionJournalière() {
      this.httpCLient.get<any>( /* récupère la derniere date enregistré pour savoir si on doit renitialiser le compteur*/)
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
      
      

  lvlplus1() {
    this.httpCLient.get<any>( /*progression du theme révisé*/ )
    .subscribe ( (response) => {
      this.lvl = response;
      this.lvl= this.lvl +0.002
      if (this.lvl > 0.998) {this.lvl = 1}
      this.httpCLient.put( /*progression du theme révisé*/ , this.lvl )
    .subscribe(()=> {
      console.log('lvl mis à jour');
    },
      (error)=> {
        console.log('erreur de sauvegarde lvl');
      })
      console.log ('progression chargé');
    },
        (error) => {
          console.log ('erreur de chargement de la progression' + error);
        }
    );

  }

  compteurplus1() {
    this.httpCLient.get<any>( /*compteur de l'utilisateur */ )
    .subscribe ( (response) => {
      this.compteur = response;
      this.compteur =this.compteur + 1;
      this.httpCLient.put( /*compteur de l'utilisateur */ , this.compteur )
    .subscribe(()=> {
      console.log('enregistrement terminé');
    },
      (error)=> {
        console.log('erreur de sauvegarde');
      }
      )
      console.log ('progression chargé');
    },
        (error) => {
          console.log ('erreur de chargement de la progression' + error);
        }
    );

  }

  
  ngOnInit() {
    
    this.getMotsparjourToServeur()
    this.SuiviProgressionJournalière()
    this.getcompter()
    

    this.sub = this.route.params.subscribe(params => {
      
      this.theme = params['theme'];
      this.id = params['id'];
      console.log(this.id)
      this.getlexique()
    });
  }
}
