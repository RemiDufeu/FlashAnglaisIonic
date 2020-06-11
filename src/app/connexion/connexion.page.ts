import { Component, OnInit } from '@angular/core';
import { AngularFireAuth } from 'angularfire2/auth';
import { Router } from '@angular/router';

 
export class User {
  email: string;
  password: string;
}


@Component({
  selector: 'app-connexion',
  templateUrl: './connexion.page.html',
  styleUrls: ['./connexion.page.scss'],
})
export class ConnexionPage {
  public user:User = new User();
  a :string;
  
  constructor( public fAuth: AngularFireAuth, private router: Router) { 

  }
  
  async login() {
    try {
      var r = await this.fAuth.auth.signInWithEmailAndPassword(
        this.user.email,
        this.user.password
      );
      if (r) {
        this.router.navigate(['/home']);
      }

    } catch (err) {
      this.a ='E-mail ou mot de passe incorrect'
      console.error(err);
    }
  }
}