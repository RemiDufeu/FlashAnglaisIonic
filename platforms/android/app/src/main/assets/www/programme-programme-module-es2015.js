(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["programme-programme-module"],{

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/programme/programme.page.html":
/*!*************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/programme/programme.page.html ***!
  \*************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("\n<ion-content>\n\n<ion-card *ngIf= \"diapo1\">\n  <p>Bonjour et bienvenue sur fishy ! Pour commencer nous allons vous génerer un programme qui vous convient.</p>\n  <div class=\"boutonsdroite\">\n  <ion-button (click)=\"btndiapo1()\" shape=\"round\">suivant<ion-icon slot=\"end\" name=\"chevron-forward-outline\"></ion-icon></ion-button>\n  </div>\n</ion-card>\n\n<ion-card *ngIf= \"diapo2\">\n  <p>Combien de mots souhaitez-vous réviser par jour ? Le nombre doit être le plus proche possible de la réalité. De plus nous vous recommandons de réviser un nombre de mots fixe chaque jour.</p>\n  <ion-label>Nombre de mots :</ion-label>\n  <ion-range min=\"1\" max=\"20\" step=\"1\" pin=\"true\" [(ngModel)]=\"motsparjour\">\n  </ion-range>\n  <div class=\"boutonsdroite\">\n  <ion-button  (click)=\"btndiapo2()\" shape=\"round\">suivant<ion-icon slot=\"end\" name=\"chevron-forward-outline\"></ion-icon></ion-button>\n  </div>\n</ion-card> \n\n<ion-card *ngIf= \"diapo3\">\n  <p>Bien nous pouvons maintenant commencer votre apprentissage. Vous allez maintenant être redirigé vers votre page de suivi en vous souhaitant de bonnes révisions !</p>\n  <div class=\"boutonsdroite\">\n  <ion-button routerLink=\"/home\" shape=\"round\">commencer<ion-icon slot=\"end\" name=\"chevron-forward-outline\"></ion-icon></ion-button>\n  </div>\n</ion-card>\n\n\n</ion-content>\n");

/***/ }),

/***/ "./src/app/programme/programme-routing.module.ts":
/*!*******************************************************!*\
  !*** ./src/app/programme/programme-routing.module.ts ***!
  \*******************************************************/
/*! exports provided: ProgrammePageRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ProgrammePageRoutingModule", function() { return ProgrammePageRoutingModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");
/* harmony import */ var _programme_page__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./programme.page */ "./src/app/programme/programme.page.ts");




const routes = [
    {
        path: '',
        component: _programme_page__WEBPACK_IMPORTED_MODULE_3__["ProgrammePage"]
    }
];
let ProgrammePageRoutingModule = class ProgrammePageRoutingModule {
};
ProgrammePageRoutingModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild(routes)],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]],
    })
], ProgrammePageRoutingModule);



/***/ }),

/***/ "./src/app/programme/programme.module.ts":
/*!***********************************************!*\
  !*** ./src/app/programme/programme.module.ts ***!
  \***********************************************/
/*! exports provided: ProgrammePageModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ProgrammePageModule", function() { return ProgrammePageModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm2015/common.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm2015/forms.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/fesm2015/ionic-angular.js");
/* harmony import */ var _programme_routing_module__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./programme-routing.module */ "./src/app/programme/programme-routing.module.ts");
/* harmony import */ var _programme_page__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./programme.page */ "./src/app/programme/programme.page.ts");







let ProgrammePageModule = class ProgrammePageModule {
};
ProgrammePageModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [
            _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"],
            _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["IonicModule"],
            _programme_routing_module__WEBPACK_IMPORTED_MODULE_5__["ProgrammePageRoutingModule"]
        ],
        declarations: [_programme_page__WEBPACK_IMPORTED_MODULE_6__["ProgrammePage"]]
    })
], ProgrammePageModule);



/***/ }),

/***/ "./src/app/programme/programme.page.scss":
/*!***********************************************!*\
  !*** ./src/app/programme/programme.page.scss ***!
  \***********************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("p {\n  margin: 2em;\n  font-size: larger;\n  text-align: left;\n}\n\nion-range {\n  margin-left: 1em;\n  margin-right: 1em;\n}\n\nion-label {\n  margin-left: 1em;\n  margin-right: 1em;\n}\n\n.boutonsdroite {\n  text-align: end;\n  margin: 1em;\n}\n\nion-content {\n  position: absolut;\n  top: 20%;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvcHJvZ3JhbW1lL0M6XFxVc2Vyc1xcZHVmZXVcXGlvbmljX3BcXGZsYXNoL3NyY1xcYXBwXFxwcm9ncmFtbWVcXHByb2dyYW1tZS5wYWdlLnNjc3MiLCJzcmMvYXBwL3Byb2dyYW1tZS9wcm9ncmFtbWUucGFnZS5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFDO0VBQ0ksV0FBQTtFQUNBLGlCQUFBO0VBQ0EsZ0JBQUE7QUNDTDs7QURDQTtFQUNJLGdCQUFBO0VBQ0EsaUJBQUE7QUNFSjs7QURBQTtFQUNJLGdCQUFBO0VBQ0EsaUJBQUE7QUNHSjs7QUREQTtFQUNJLGVBQUE7RUFDQSxXQUFBO0FDSUo7O0FEREE7RUFDSSxpQkFBQTtFQUNBLFFBQUE7QUNJSiIsImZpbGUiOiJzcmMvYXBwL3Byb2dyYW1tZS9wcm9ncmFtbWUucGFnZS5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiIHAge1xyXG4gICAgIG1hcmdpbjogMmVtO1xyXG4gICAgIGZvbnQtc2l6ZTogbGFyZ2VyO1xyXG4gICAgIHRleHQtYWxpZ246IGxlZnQ7XHJcbiB9XHJcbmlvbi1yYW5nZSB7XHJcbiAgICBtYXJnaW4tbGVmdDogMWVtOyAgXHJcbiAgICBtYXJnaW4tcmlnaHQ6IDFlbTtcclxufVxyXG5pb24tbGFiZWwge1xyXG4gICAgbWFyZ2luLWxlZnQ6IDFlbTsgIFxyXG4gICAgbWFyZ2luLXJpZ2h0OiAxZW07XHJcbn1cclxuLmJvdXRvbnNkcm9pdGUge1xyXG4gICAgdGV4dC1hbGlnbjogZW5kO1xyXG4gICAgbWFyZ2luOiAxZW07XHJcbn1cclxuXHJcbmlvbi1jb250ZW50IHtcclxuICAgIHBvc2l0aW9uOiBhYnNvbHV0O1xyXG4gICAgdG9wOiAyMCU7XHJcbn0iLCJwIHtcbiAgbWFyZ2luOiAyZW07XG4gIGZvbnQtc2l6ZTogbGFyZ2VyO1xuICB0ZXh0LWFsaWduOiBsZWZ0O1xufVxuXG5pb24tcmFuZ2Uge1xuICBtYXJnaW4tbGVmdDogMWVtO1xuICBtYXJnaW4tcmlnaHQ6IDFlbTtcbn1cblxuaW9uLWxhYmVsIHtcbiAgbWFyZ2luLWxlZnQ6IDFlbTtcbiAgbWFyZ2luLXJpZ2h0OiAxZW07XG59XG5cbi5ib3V0b25zZHJvaXRlIHtcbiAgdGV4dC1hbGlnbjogZW5kO1xuICBtYXJnaW46IDFlbTtcbn1cblxuaW9uLWNvbnRlbnQge1xuICBwb3NpdGlvbjogYWJzb2x1dDtcbiAgdG9wOiAyMCU7XG59Il19 */");

/***/ }),

/***/ "./src/app/programme/programme.page.ts":
/*!*********************************************!*\
  !*** ./src/app/programme/programme.page.ts ***!
  \*********************************************/
/*! exports provided: ProgrammePage */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ProgrammePage", function() { return ProgrammePage; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm2015/http.js");
/* harmony import */ var angularfire2_auth__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! angularfire2/auth */ "./node_modules/angularfire2/auth/index.js");
/* harmony import */ var angularfire2_auth__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(angularfire2_auth__WEBPACK_IMPORTED_MODULE_3__);




let ProgrammePage = class ProgrammePage {
    constructor(httpCLient, fAuth) {
        this.httpCLient = httpCLient;
        this.fAuth = fAuth;
        this.motsparjour = 20;
        this.a = 0;
        this.datejour = new Date();
        this.date1 = this.datejour.toDateString();
        this.dateobject = [{ date: this.date1 }];
        this.cUser = this.fAuth.auth.currentUser.uid;
    }
    btndiapo1() {
        this.diapo1 = false;
        this.diapo2 = true;
    }
    ;
    btndiapo2() {
        this.diapo2 = false;
        this.diapo3 = true;
        this.httpCLient.put('https://flash-2ad53.firebaseio.com/' + this.cUser + '/motsparjour.json', this.motsparjour)
            .subscribe(() => {
            console.log('enregistrement terminé');
        }, (error) => {
            console.log('erreur de sauvegarde');
        });
        this.httpCLient.put('https://flash-2ad53.firebaseio.com/' + this.cUser + '/compteur.json', this.a)
            .subscribe(() => {
            console.log('enregistrement terminé');
        }, (error) => {
            console.log('erreur de sauvegarde');
        });
        this.httpCLient.put('https://flash-2ad53.firebaseio.com/' + this.cUser + '/date1.json', this.dateobject)
            .subscribe(() => {
            console.log('enregistrement terminé');
        }, (error) => {
            console.log('erreur de sauvegarde');
        });
    }
    CopyFichesToServeur() {
        this.httpCLient.get('https://flash-2ad53.firebaseio.com/Fiches.json')
            .subscribe((response) => {
            this.fiches = response;
            console.log('copie effectuée');
            this.httpCLient.put('https://flash-2ad53.firebaseio.com/' + this.cUser + '/fiches.json', this.fiches)
                .subscribe(() => {
                console.log('enregistrement terminé');
            }, (error) => {
                console.log('erreur de sauvegarde');
            });
        }, (error) => {
            console.log('erreur de chargement' + error);
        });
    }
    ngOnInit() {
        this.diapo1 = true;
        this.CopyFichesToServeur();
        console.log();
    }
};
ProgrammePage.ctorParameters = () => [
    { type: _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpClient"] },
    { type: angularfire2_auth__WEBPACK_IMPORTED_MODULE_3__["AngularFireAuth"] }
];
ProgrammePage = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-programme',
        template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./programme.page.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/programme/programme.page.html")).default,
        styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! ./programme.page.scss */ "./src/app/programme/programme.page.scss")).default]
    }),
    tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpClient"], angularfire2_auth__WEBPACK_IMPORTED_MODULE_3__["AngularFireAuth"]])
], ProgrammePage);



/***/ })

}]);
//# sourceMappingURL=programme-programme-module-es2015.js.map