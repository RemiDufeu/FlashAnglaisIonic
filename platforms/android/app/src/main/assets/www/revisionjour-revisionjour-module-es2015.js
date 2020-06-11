(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["revisionjour-revisionjour-module"],{

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/revisionjour/revisionjour.page.html":
/*!*******************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/revisionjour/revisionjour.page.html ***!
  \*******************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<ion-header [translucent]=\"true\">\n  <ion-toolbar color='primary' > \n        <ion-back-button id=\"backb\" color='light' defaultHref='/home' slot='start'></ion-back-button>\n        <ion-title id=\"title\">Mes révisions </ion-title>  \n  </ion-toolbar>\n\n</ion-header>\n\n<ion-content *ngIf=\"ojectifaccompli\">\n\n  \n\n  <ion-card>\n    <ion-item>\n      <h1 >  {{fiches[0].frw}} </h1>\n    </ion-item>\n  \n    <ion-card-content>\n      <h2 *ngIf=\"!hide\"> {{fiches[0].engw}}  </h2>\n    </ion-card-content>\n  </ion-card>\n  <br>\n  <br>\n  <br>\n  <br>\n\n</ion-content>\n\n<ion-content *ngIf=\"!ojectifaccompli\"t>\n<ion-card >\n  <p>Félicitaions vous avez atteint votre objectif quotidien !</p>\n  <div class=\"boutonsdroite\">\n    <ion-button (click)=continuezserie() color='success'> Continuez vos révisions<ion-icon slot=\"end\" name=\"chevron-forward-outline\"></ion-icon> </ion-button>\n  </div>\n</ion-card>\n</ion-content>\n\n<ion-grid id=\"boutonsbas\" *ngIf=\"ojectifaccompli\" >\n  <ion-row *ngIf=\"!hide\">\n    <ion-col>\n      <ion-button class=\"basb\" expand=\"full\" color=\"success\" (click)=\"ngIfCtrl()\" (click)=\"ficheVrai ()\">VRAI</ion-button>\n    </ion-col>\n    <ion-col>\n      <ion-button class=\"basb\" expand=\"full\" color=\"danger\" (click)=\"ngIfCtrl()\" (click)=\"ficheFaux ()\">FAUX</ion-button>\n    </ion-col>\n  </ion-row>\n</ion-grid>\n\n<ion-grid *ngIf=\"ojectifaccompli\" id=\"boutonsbas\" >\n  <ion-row *ngIf=\"hide\">\n    <ion-col>\n      <ion-button class=\"basb\" expand=\"full\" color=\"primary\"(click)=\"ngIfCtrl()\" > AFFICHER LA SOLUTION</ion-button>\n    </ion-col>\n  </ion-row>\n</ion-grid>\n \n");

/***/ }),

/***/ "./src/app/revisionjour/revisionjour-routing.module.ts":
/*!*************************************************************!*\
  !*** ./src/app/revisionjour/revisionjour-routing.module.ts ***!
  \*************************************************************/
/*! exports provided: RevisionjourPageRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "RevisionjourPageRoutingModule", function() { return RevisionjourPageRoutingModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");
/* harmony import */ var _revisionjour_page__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./revisionjour.page */ "./src/app/revisionjour/revisionjour.page.ts");




const routes = [
    {
        path: '',
        component: _revisionjour_page__WEBPACK_IMPORTED_MODULE_3__["RevisionjourPage"]
    }
];
let RevisionjourPageRoutingModule = class RevisionjourPageRoutingModule {
};
RevisionjourPageRoutingModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild(routes)],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]],
    })
], RevisionjourPageRoutingModule);



/***/ }),

/***/ "./src/app/revisionjour/revisionjour.module.ts":
/*!*****************************************************!*\
  !*** ./src/app/revisionjour/revisionjour.module.ts ***!
  \*****************************************************/
/*! exports provided: RevisionjourPageModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "RevisionjourPageModule", function() { return RevisionjourPageModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm2015/common.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm2015/forms.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/fesm2015/ionic-angular.js");
/* harmony import */ var _revisionjour_routing_module__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./revisionjour-routing.module */ "./src/app/revisionjour/revisionjour-routing.module.ts");
/* harmony import */ var _revisionjour_page__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./revisionjour.page */ "./src/app/revisionjour/revisionjour.page.ts");







let RevisionjourPageModule = class RevisionjourPageModule {
};
RevisionjourPageModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [
            _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"],
            _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["IonicModule"],
            _revisionjour_routing_module__WEBPACK_IMPORTED_MODULE_5__["RevisionjourPageRoutingModule"],
        ],
        declarations: [_revisionjour_page__WEBPACK_IMPORTED_MODULE_6__["RevisionjourPage"]]
    })
], RevisionjourPageModule);



/***/ }),

/***/ "./src/app/revisionjour/revisionjour.page.scss":
/*!*****************************************************!*\
  !*** ./src/app/revisionjour/revisionjour.page.scss ***!
  \*****************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("#title {\n  font-size: 26px;\n  text-align: left;\n  position: relative;\n  padding-left: 30px;\n  margin-top: 20px;\n  margin-bottom: 10px;\n}\n\n#backb {\n  margin-top: 10px;\n}\n\n#boutonsbas {\n  position: absolute;\n  bottom: 0%;\n  margin: 0px;\n  padding: 0px;\n  border: 0px;\n  right: 0%;\n  left: 0%;\n}\n\n#boutonsbas2 {\n  position: absolute;\n  bottom: 0%;\n  margin: 0px;\n  padding: 0px;\n  border: 0px;\n  right: 0%;\n  left: 0%;\n}\n\nion-col {\n  margin: 0px;\n  padding: 0px;\n}\n\nion-row {\n  margin: 0px;\n  padding: 0px;\n}\n\n.basb {\n  margin: 0px;\n  padding: 0px;\n  height: 80px;\n  font-size: 25px;\n}\n\n#bas {\n  margin: 0px;\n  padding: 0px;\n  height: 80px;\n  font-size: 25px;\n}\n\n.boutonsdroite {\n  text-align: end;\n  margin: 1em;\n}\n\np {\n  margin: 2em;\n  font-size: larger;\n  text-align: left;\n}\n\nion-content {\n  position: relative;\n  bottom: 80px;\n  top: 0px;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvcmV2aXNpb25qb3VyL0M6XFxVc2Vyc1xcZHVmZXVcXGlvbmljX3BcXGZsYXNoL3NyY1xcYXBwXFxyZXZpc2lvbmpvdXJcXHJldmlzaW9uam91ci5wYWdlLnNjc3MiLCJzcmMvYXBwL3JldmlzaW9uam91ci9yZXZpc2lvbmpvdXIucGFnZS5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0ksZUFBQTtFQUNBLGdCQUFBO0VBQ0Esa0JBQUE7RUFDQSxrQkFBQTtFQUNBLGdCQUFBO0VBQ0EsbUJBQUE7QUNDSjs7QURDQTtFQUNJLGdCQUFBO0FDRUo7O0FEQUE7RUFDSSxrQkFBQTtFQUNBLFVBQUE7RUFDQSxXQUFBO0VBQ0EsWUFBQTtFQUNBLFdBQUE7RUFDQSxTQUFBO0VBQ0EsUUFBQTtBQ0dKOztBRERBO0VBQ0ksa0JBQUE7RUFDQSxVQUFBO0VBQ0EsV0FBQTtFQUNBLFlBQUE7RUFDQSxXQUFBO0VBQ0EsU0FBQTtFQUNBLFFBQUE7QUNJSjs7QUREQTtFQUNJLFdBQUE7RUFDQSxZQUFBO0FDSUo7O0FERkE7RUFDSSxXQUFBO0VBQ0EsWUFBQTtBQ0tKOztBREhBO0VBQ0ksV0FBQTtFQUNBLFlBQUE7RUFDQSxZQUFBO0VBQ0EsZUFBQTtBQ01KOztBREpBO0VBQ0ksV0FBQTtFQUNBLFlBQUE7RUFDQSxZQUFBO0VBQ0EsZUFBQTtBQ09KOztBRExBO0VBQ0ksZUFBQTtFQUNBLFdBQUE7QUNRSjs7QUROQTtFQUNJLFdBQUE7RUFDQSxpQkFBQTtFQUNBLGdCQUFBO0FDU0o7O0FEUEE7RUFDSSxrQkFBQTtFQUNBLFlBQUE7RUFDQSxRQUFBO0FDVUoiLCJmaWxlIjoic3JjL2FwcC9yZXZpc2lvbmpvdXIvcmV2aXNpb25qb3VyLnBhZ2Uuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIiN0aXRsZSB7XHJcbiAgICBmb250LXNpemU6IDI2cHg7XHJcbiAgICB0ZXh0LWFsaWduOiBsZWZ0O1xyXG4gICAgcG9zaXRpb246IHJlbGF0aXZlO1xyXG4gICAgcGFkZGluZy1sZWZ0OiAzMHB4O1xyXG4gICAgbWFyZ2luLXRvcDogMjBweDtcclxuICAgIG1hcmdpbi1ib3R0b206IDEwcHg7XHJcbn1cclxuI2JhY2tiIHtcclxuICAgIG1hcmdpbi10b3A6IDEwcHg7XHJcbn1cclxuI2JvdXRvbnNiYXMge1xyXG4gICAgcG9zaXRpb246IGFic29sdXRlO1xyXG4gICAgYm90dG9tOiAwJTtcclxuICAgIG1hcmdpbjogMHB4O1xyXG4gICAgcGFkZGluZzowcHg7XHJcbiAgICBib3JkZXI6IDBweDtcclxuICAgIHJpZ2h0OiAwJTtcclxuICAgIGxlZnQ6IDAlO1xyXG59XHJcbiNib3V0b25zYmFzMiB7XHJcbiAgICBwb3NpdGlvbjogYWJzb2x1dGU7XHJcbiAgICBib3R0b206IDAlO1xyXG4gICAgbWFyZ2luOiAwcHg7XHJcbiAgICBwYWRkaW5nOjBweDtcclxuICAgIGJvcmRlcjogMHB4O1xyXG4gICAgcmlnaHQ6IDAlO1xyXG4gICAgbGVmdDogMCU7XHJcbiAgICBcclxufVxyXG5pb24tY29sIHtcclxuICAgIG1hcmdpbjogMHB4O1xyXG4gICAgcGFkZGluZzogMHB4O1xyXG59XHJcbmlvbi1yb3cge1xyXG4gICAgbWFyZ2luOiAwcHg7XHJcbiAgICBwYWRkaW5nOiAwcHg7XHJcbn1cclxuLmJhc2Ige1xyXG4gICAgbWFyZ2luOiAwcHg7XHJcbiAgICBwYWRkaW5nOiAwcHg7XHJcbiAgICBoZWlnaHQ6IDgwcHg7XHJcbiAgICBmb250LXNpemU6IDI1cHg7XHJcbn1cclxuI2JhcyB7XHJcbiAgICBtYXJnaW46IDBweDtcclxuICAgIHBhZGRpbmc6IDBweDtcclxuICAgIGhlaWdodDogODBweDtcclxuICAgIGZvbnQtc2l6ZTogMjVweDtcclxufVxyXG4uYm91dG9uc2Ryb2l0ZSB7XHJcbiAgICB0ZXh0LWFsaWduOiBlbmQ7XHJcbiAgICBtYXJnaW46IDFlbTtcclxufVxyXG5wIHtcclxuICAgIG1hcmdpbjogMmVtO1xyXG4gICAgZm9udC1zaXplOiBsYXJnZXI7XHJcbiAgICB0ZXh0LWFsaWduOiBsZWZ0O1xyXG59XHJcbmlvbi1jb250ZW50IHtcclxuICAgIHBvc2l0aW9uOiByZWxhdGl2ZTtcclxuICAgIGJvdHRvbTogODBweDtcclxuICAgIHRvcDogMHB4O1xyXG59XHJcbiIsIiN0aXRsZSB7XG4gIGZvbnQtc2l6ZTogMjZweDtcbiAgdGV4dC1hbGlnbjogbGVmdDtcbiAgcG9zaXRpb246IHJlbGF0aXZlO1xuICBwYWRkaW5nLWxlZnQ6IDMwcHg7XG4gIG1hcmdpbi10b3A6IDIwcHg7XG4gIG1hcmdpbi1ib3R0b206IDEwcHg7XG59XG5cbiNiYWNrYiB7XG4gIG1hcmdpbi10b3A6IDEwcHg7XG59XG5cbiNib3V0b25zYmFzIHtcbiAgcG9zaXRpb246IGFic29sdXRlO1xuICBib3R0b206IDAlO1xuICBtYXJnaW46IDBweDtcbiAgcGFkZGluZzogMHB4O1xuICBib3JkZXI6IDBweDtcbiAgcmlnaHQ6IDAlO1xuICBsZWZ0OiAwJTtcbn1cblxuI2JvdXRvbnNiYXMyIHtcbiAgcG9zaXRpb246IGFic29sdXRlO1xuICBib3R0b206IDAlO1xuICBtYXJnaW46IDBweDtcbiAgcGFkZGluZzogMHB4O1xuICBib3JkZXI6IDBweDtcbiAgcmlnaHQ6IDAlO1xuICBsZWZ0OiAwJTtcbn1cblxuaW9uLWNvbCB7XG4gIG1hcmdpbjogMHB4O1xuICBwYWRkaW5nOiAwcHg7XG59XG5cbmlvbi1yb3cge1xuICBtYXJnaW46IDBweDtcbiAgcGFkZGluZzogMHB4O1xufVxuXG4uYmFzYiB7XG4gIG1hcmdpbjogMHB4O1xuICBwYWRkaW5nOiAwcHg7XG4gIGhlaWdodDogODBweDtcbiAgZm9udC1zaXplOiAyNXB4O1xufVxuXG4jYmFzIHtcbiAgbWFyZ2luOiAwcHg7XG4gIHBhZGRpbmc6IDBweDtcbiAgaGVpZ2h0OiA4MHB4O1xuICBmb250LXNpemU6IDI1cHg7XG59XG5cbi5ib3V0b25zZHJvaXRlIHtcbiAgdGV4dC1hbGlnbjogZW5kO1xuICBtYXJnaW46IDFlbTtcbn1cblxucCB7XG4gIG1hcmdpbjogMmVtO1xuICBmb250LXNpemU6IGxhcmdlcjtcbiAgdGV4dC1hbGlnbjogbGVmdDtcbn1cblxuaW9uLWNvbnRlbnQge1xuICBwb3NpdGlvbjogcmVsYXRpdmU7XG4gIGJvdHRvbTogODBweDtcbiAgdG9wOiAwcHg7XG59Il19 */");

/***/ }),

/***/ "./src/app/revisionjour/revisionjour.page.ts":
/*!***************************************************!*\
  !*** ./src/app/revisionjour/revisionjour.page.ts ***!
  \***************************************************/
/*! exports provided: RevisionjourPage */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "RevisionjourPage", function() { return RevisionjourPage; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm2015/http.js");
/* harmony import */ var angularfire2_auth__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! angularfire2/auth */ "./node_modules/angularfire2/auth/index.js");
/* harmony import */ var angularfire2_auth__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(angularfire2_auth__WEBPACK_IMPORTED_MODULE_3__);




let RevisionjourPage = class RevisionjourPage {
    constructor(httpCLient, fAuth) {
        this.httpCLient = httpCLient;
        this.fAuth = fAuth;
        this.hide = true;
        this.cUser = this.fAuth.auth.currentUser.uid;
        this.auteurs = [
            { engw: "La réflexion stratégique. Un des premiers auteurs à avoir étudié les stratégies d’entreprise dans les années 1960, Ansoff distingue les activités stratégiques des activités opérationnelles et de gestion. Les activités stratégiques : Les décisions prises en avenir incertain et qui engagent l’entreprise à long terme. Les activités opérationnelles et de gestion : Elles concernent des décisions prises en avenir certain ou aléatoire (c’est à dire probabilisable) et pour le court terme. Les décisions stratégiques concernent principalement le choix des produits et services que l’entreprise veut offrir et des moyens qu’elle va mettre en œuvre pour les réaliser. Les moyens concernent les structures à mettre en place et les technologies à maîtriser. Les offres sont définies par rapport à une demande correspondant à un marché. Les couples produits-marchés définissent des domaines d’activité stratégique. La stratégie de domaine (business strategy) est une composante de la stratégie globale de l’entreprise (corporate strrategy). L’entreprise peut poursuivre sa croissance dans ses activités actuelles, ou bien se diversifier. Cette diversification peut concerner les marchés, les produits et/ou les technologies. Plus la diversification est forte (totale ou conglomérale) plus le risque est important. L’analyse de l’entreprise (forces/faiblesses) et celle de l’environnement (menaces/opportunités) permettent de préciser les options stratégiques à retenir. Ansoff souligne l’importance de la prise en compte de l’environnement et critique la planification stratégique essentiellement basée sur l’analyse du passé. L’entreprise doit être réactive et accroître sa flexibilité.",
                frw: "Harry Igor ANSOFF",
                lvl: 0,
            },
            { engw: "C. Argyris s’inscrit dans le prolongement de l’école des relations humaines. Il a travaillé avec K. Lewin et D. Mac Gregor. Il s'est intéressé à la motivation des individus dans l'organisation. Ses analyses portent sur le fonctionnement des organisations et leur capacité de changement. Il met en évidence la tension qui existe entre les besoins psychologiques des individus et la logique de fonctionnement des organisations tayloriennes. L'organisation pour être performante doit mobiliser les énergies. Sa réussite dépend de sa capacité à prendre en compte les besoins psychologiques de ses membres. Il faut donc analyser ces besoins pour mieux les comprendre et réformer l’organisation pour la rendre compatible avec les besoins des individus.Dans les années 1980, il s’est intéressé aux conditions de l'apprentissage organisationnel, en collaboration avec Donald Schön. Dans une organisation, il existe un décalage entre les principes d’action affirmés par l’organisation et ceux qui sont réellement mis en œuvre. Les choix sont effectués au niveau des individus. Ceux-ci reproduisent les choix dont ils ont jugé les conséquences satisfaisantes dans des circonstances analogues ou vont au contraire faire des choix différents compte tenu de l'expérience passée. Ceci correspond à un processus d'apprentissage à l'échelle individuelle. Le problème de l'organisation est de capitaliser ces apprentissages individuels pour modifier le comportement de tous ses membres. Il faut donc s'interroger sur les valeurs directrices mises en place dans l’organisation, c'est à dire les règles de fonctionnement et les modes de pensée qui guident les choix. Argyris distingue deux modalités d'apprentissage :-L'apprentissage en simple boucle consiste, lorsqu’une action ne donne pas le résultat escompté, à répéter l’action sans modifier les principes d’action, en restant dans la même logique. Dans ce mode d'apprentissage, l'individu apprend à mieux appliquer les principes, mais l'organisation ne progresse pas. - L'apprentissage en double boucle consiste à 'changer le programme maître, c'est à dire à remettre en cause les valeurs directrices du comportement des individus. Ceux-ci doivent être en mesure d'expliquer leurs choix et de partager leurs solutions avec les autres. Seul l'apprentissage en double boucle est facteur d'apprentissage organisationnel. La direction doit mettre en place les conditions favorables au changement et au partage des connaissances. L'apprentissage organisationnel nécessite la participation active des membres de l'organisation et des relations de confiance à tous les niveaux.",
                frw: "Chris ARGYRIS",
                lvl: 0,
            },
        ];
        this.ojectifaccompli = true;
        this.fiches = [
            { engw: "",
                frw: "",
                lvl: 0,
            },
        ];
        this.Position = 4;
        this.positionVrai = 0;
        this.datejour = new Date();
        this.date2 = this.datejour.toDateString();
        this.dateobject = [{ date1: this.date2 }];
    }
    objectifAcompli() {
        if (this.compteur === this.motsparjour) {
            this.ojectifaccompli = false;
        }
    }
    bougerFiches(p) {
        p = this.Position;
        var length = this.fiches.length - p;
        var a = this.fiches[0];
        this.fiches.shift();
        var removedItems = this.fiches.splice(p - 1, length);
        this.fiches.push(a);
        removedItems.forEach(Object => {
            this.fiches.push(Object);
        });
    }
    ficheVrai() {
        if (this.fiches[0].lvl < 2) {
            this.fiches[0].lvl = this.fiches[0].lvl + 2;
            this.positionVrai = 8;
        }
        else if (this.fiches[0].lvl < 4) {
            this.fiches[0].lvl = this.fiches[0].lvl + 2;
            this.positionVrai = 16;
        }
        else if (this.fiches[0].lvl < 6) {
            this.fiches[0].lvl = this.fiches[0].lvl + 2;
            this.positionVrai = 32;
        }
        else if (this.fiches[0].lvl < 8) {
            this.fiches[0].lvl = this.fiches[0].lvl + 2;
            this.positionVrai = 50;
        }
        else if (this.fiches[0].lvl < 10) {
            this.fiches[0].lvl = 10;
            this.positionVrai = 3000;
        }
        else {
            this.positionVrai = 10000;
        }
        ;
        if (this.positionVrai > this.fiches.length) {
            this.positionVrai = this.fiches.length;
        }
        ;
        var length = this.fiches.length - this.positionVrai;
        var a = this.fiches[0];
        this.fiches.shift();
        var removedItems = this.fiches.splice(this.positionVrai - 1, length);
        this.fiches.push(a);
        removedItems.forEach(Object => {
            this.fiches.push(Object);
        });
        this.httpCLient.get('https://flash-2ad53.firebaseio.com/' + this.cUser + '/compteur.json')
            .subscribe((response) => {
            this.compteur = response;
            this.compteur = this.compteur + 1;
            this.httpCLient.put('https://flash-2ad53.firebaseio.com/' + this.cUser + '/compteur.json', this.compteur)
                .subscribe(() => {
                console.log('enregistrement terminé du compteur');
                this.objectifAcompli();
                this.saveFichesToServeurUser();
                console.log(this.compteur);
            }, (error) => {
                console.log('erreur de sauvegarde');
            });
            console.log('progression chargé');
        }, (error) => {
            console.log('erreur de chargement de la progression' + error);
        });
    }
    ficheFaux() {
        if (this.fiches[0].lvl < 2) {
            this.fiches[0].lvl = this.fiches[0].lvl + 1;
            this.positionFaux = 4;
        }
        else if (this.fiches[0].lvl < 4) {
            this.fiches[0].lvl = this.fiches[0].lvl + 1;
            this.positionFaux = 8;
        }
        else if (this.fiches[0].lvl < 6) {
            this.fiches[0].lvl = this.fiches[0].lvl + 1;
            this.positionFaux = 12;
        }
        else if (this.fiches[0].lvl < 8) {
            this.fiches[0].lvl = this.fiches[0].lvl + 1;
            this.positionFaux = 18;
        }
        else if (this.fiches[0].lvl < 10) {
            this.fiches[0].lvl = this.fiches[0].lvl + 1;
            this.positionFaux = 22;
        }
        else {
            this.positionFaux = 26;
        }
        ;
        if (this.positionFaux > this.fiches.length) {
            this.positionFaux = this.fiches.length;
        }
        ;
        var length = this.fiches.length - this.positionFaux;
        var a = this.fiches[0];
        this.fiches.shift();
        var removedItems = this.fiches.splice(this.positionFaux - 1, length);
        this.fiches.push(a);
        removedItems.forEach(Object => {
            this.fiches.push(Object);
        });
        this.httpCLient.get('https://flash-2ad53.firebaseio.com/' + this.cUser + '/compteur.json')
            .subscribe((response) => {
            this.compteur = response;
            this.compteur = this.compteur + 1;
            this.httpCLient.put('https://flash-2ad53.firebaseio.com/' + this.cUser + '/compteur.json', this.compteur)
                .subscribe(() => {
                console.log('enregistrement terminé du compteur');
                this.saveFichesToServeurUser();
                this.objectifAcompli();
            }, (error) => {
                console.log('erreur de sauvegarde');
            });
            console.log('progression chargé');
        }, (error) => {
            console.log('erreur de chargement de la progression' + error);
        });
    }
    continuezserie() {
        this.ojectifaccompli = true;
    }
    ngIfCtrl() {
        this.hide = !this.hide;
    }
    saveFichesToServeur() {
        this.httpCLient.put('https://flash-2ad53.firebaseio.com/Fiches/.json', this.auteurs)
            .subscribe(() => {
            console.log('enregistrement auteurs terminé');
        }, (error) => {
            console.log('erreur de sauvegarde');
        });
    }
    saveFichesToServeurUser() {
        this.httpCLient.put('https://flash-2ad53.firebaseio.com/' + this.cUser + '/fiches.json', this.fiches)
            .subscribe(() => {
            console.log('enregistrement terminé');
        }, (error) => {
            console.log('erreur de sauvegarde');
        });
    }
    getFichesToServeur() {
        this.httpCLient.get('https://flash-2ad53.firebaseio.com/Fiches/.json')
            .subscribe((response) => {
            this.fiches = response;
            console.log('chargement effectué');
        }, (error) => {
            console.log('erreur de chargement' + error);
        });
    }
    getFichesToServeurUser() {
        this.httpCLient.get('https://flash-2ad53.firebaseio.com/' + this.cUser + '/fiches.json')
            .subscribe((response) => {
            this.fiches = response;
            console.log('chargement effectué');
        }, (error) => {
            console.log('erreur de chargement' + error);
        });
    }
    getMotsparjourToServeur() {
        this.httpCLient.get('https://flash-2ad53.firebaseio.com/' + this.cUser + '/motsparjour.json')
            .subscribe((response) => {
            this.motsparjour = response;
            console.log('mots par jour' + this.motsparjour);
        }, (error) => {
            console.log('erreur de chargement de la progression' + error);
        });
    }
    getcompter() {
        this.httpCLient.get('https://flash-2ad53.firebaseio.com/' + this.cUser + '/compteur.json')
            .subscribe((response) => {
            this.compteur = response;
            console.log('progression chargé compeur');
        }, (error) => {
            console.log('erreur de chargement de la progression' + error);
        });
    }
    putdate2() {
        this.httpCLient.put('https://flash-2ad53.firebaseio.com/' + this.cUser + '/date1.json', this.dateobject)
            .subscribe(() => {
            console.log('enregistrement terminé');
        }, (error) => {
            console.log('erreur de sauvegarde');
        });
    }
    compteura0() {
        this.httpCLient.put('https://flash-2ad53.firebaseio.com/' + this.cUser + '/compteur.json', this.a)
            .subscribe(() => {
            console.log('enregistrement terminé');
        }, (error) => {
            console.log('erreur de sauvegarde');
        });
    }
    SuiviProgressionJournalière() {
        this.httpCLient.get('https://flash-2ad53.firebaseio.com/' + this.cUser + '/date1.json')
            .subscribe((response) => {
            var dateBD = new Array;
            dateBD = response;
            console.log('date BD chargé');
            console.log(dateBD[0].date1);
            console.log(this.dateobject[0].date1);
            if (dateBD[0].date1 != this.dateobject[0].date1) {
                console.log('nouvelle date!');
                this.putdate2();
                this.compteura0();
            }
        }, (error) => {
            console.log('erreur de chargement de la progression' + error);
        });
    }
    compteurplus1() {
        this.httpCLient.get('https://flash-2ad53.firebaseio.com/motsparjour/' + this.cUser + '/compteur.json')
            .subscribe((response) => {
            this.compteur = response;
            this.compteur = this.compteur + 1;
            this.httpCLient.put('https://flash-2ad53.firebaseio.com/' + this.cUser + '/compteur.json', this.compteur)
                .subscribe(() => {
                console.log('enregistrement terminé');
            }, (error) => {
                console.log('erreur de sauvegarde');
            });
            console.log('progression chargé');
        }, (error) => {
            console.log('erreur de chargement de la progression' + error);
        });
    }
    ngOnInit() {
        this.getFichesToServeurUser();
        this.getMotsparjourToServeur();
        this.SuiviProgressionJournalière();
        this.getcompter();
    }
};
RevisionjourPage.ctorParameters = () => [
    { type: _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpClient"] },
    { type: angularfire2_auth__WEBPACK_IMPORTED_MODULE_3__["AngularFireAuth"] }
];
RevisionjourPage = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])(),
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-revisionjour',
        template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./revisionjour.page.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/revisionjour/revisionjour.page.html")).default,
        styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! ./revisionjour.page.scss */ "./src/app/revisionjour/revisionjour.page.scss")).default]
    }),
    tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpClient"], angularfire2_auth__WEBPACK_IMPORTED_MODULE_3__["AngularFireAuth"]])
], RevisionjourPage);



/***/ })

}]);
//# sourceMappingURL=revisionjour-revisionjour-module-es2015.js.map