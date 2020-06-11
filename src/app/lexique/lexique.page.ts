import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-lexique',
  templateUrl: './lexique.page.html',
  styleUrls: ['./lexique.page.scss'],
})
export class LexiquePage implements OnInit {

  public fiches: any [];
  public loadedfiches: any[];

  constructor(private httpCLient: HttpClient) { }

  getFichesToServeur() {
    this.httpCLient.get<any>( /*adresse des fiches à copier*/ )
    .subscribe ( (response) => {
      this.fiches = response;
      console.log ('chargement effectué');
      this.loadedfiches = response;
      
    },
        (error) => {
          console.log ('erreur de chargement' + error);
        }
    );
  }
  
  initializeItems(): void {
    this.fiches = this.loadedfiches;
  }
  filterList(event) {

    this.initializeItems();
    const searchTerm = event.srcElement.value;
  
    if (!searchTerm) {
      return;
    }
  
    this.fiches = this.fiches.filter(currentFiche => {
      if (currentFiche.frw && searchTerm) {
        if (currentFiche.frw.toLowerCase().indexOf(searchTerm.toLowerCase()) > -1) {
          return true;
        }
        return false;
      }
    });
  }

  ngOnInit() {
    this.getFichesToServeur()
  }

}
