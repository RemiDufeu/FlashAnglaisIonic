import { Component, OnInit } from '@angular/core';
import { AngularFireAuth } from 'angularfire2/auth';
import { Router } from '@angular/router';

export class User {
  email: string;
  password: string;
}

@Component({
  selector: 'app-creercompte',
  templateUrl: './creercompte.page.html',
  styleUrls: ['./creercompte.page.scss'],
})
export class CreercomptePage {

  public user:User = new User();
  a : string;
  constructor(public fAuth: AngularFireAuth, private router: Router) { }

  async register() {
    try {
      var r = await this.fAuth.auth.createUserWithEmailAndPassword(
        this.user.email,
        this.user.password
      );
      if (r) {
        console.log("Successfully registered!");
        this.router.navigate(['/programme'])
      }

    } catch (err) {
      this.a = 'Erreur, le mot de passe doit contenir au moins 6 caractères ou le mail a un format incorrect';
      console.error(err);
    } 
  }

}
