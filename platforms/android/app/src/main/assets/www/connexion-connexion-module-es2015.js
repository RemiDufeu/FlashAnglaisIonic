(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["connexion-connexion-module"],{

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/connexion/connexion.page.html":
/*!*************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/connexion/connexion.page.html ***!
  \*************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("\n\n\n<ion-content>\n  \n<div id=\"container\">\n\n<ion-item>\n  <ion-label position=\"floating\">E-mail</ion-label>\n  <ion-input color=\"primary\" type=\"email\" autocomplete=\"on\" inputmode=\"email\" spellcheck=false autocomplete=\"on\" placeholder=\"saisissez l'email\" [(ngModel)]=\"user.email\"></ion-input>\n</ion-item>\n\n<ion-item>\n  <ion-label position=\"floating\">Mot de passe</ion-label>\n  <ion-input color=\"primary\" type=\"password\" inputmode=\"password\" min=6 placeholder=\"saisissez le mot de passe\" [(ngModel)]=\"user.password\"></ion-input>\n</ion-item>\n<ion-label color='danger'> {{a}}</ion-label>\n<br>\n<br>\n<ion-button expand=\"block\" fill=\"outline\" (click)=\"login()\">Se connecter <ion-icon color=\"primary\"name=\"chevron-forward-outline\"></ion-icon></ion-button>\n<ion-button expand=\"block\" routerLink=\"/creercompte\">Créer un compte</ion-button>\n</div>\n</ion-content>\n");

/***/ }),

/***/ "./src/app/connexion/connexion-routing.module.ts":
/*!*******************************************************!*\
  !*** ./src/app/connexion/connexion-routing.module.ts ***!
  \*******************************************************/
/*! exports provided: ConnexionPageRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ConnexionPageRoutingModule", function() { return ConnexionPageRoutingModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");
/* harmony import */ var _connexion_page__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./connexion.page */ "./src/app/connexion/connexion.page.ts");




const routes = [
    {
        path: '',
        component: _connexion_page__WEBPACK_IMPORTED_MODULE_3__["ConnexionPage"]
    }
];
let ConnexionPageRoutingModule = class ConnexionPageRoutingModule {
};
ConnexionPageRoutingModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild(routes)],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]],
    })
], ConnexionPageRoutingModule);



/***/ }),

/***/ "./src/app/connexion/connexion.module.ts":
/*!***********************************************!*\
  !*** ./src/app/connexion/connexion.module.ts ***!
  \***********************************************/
/*! exports provided: ConnexionPageModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ConnexionPageModule", function() { return ConnexionPageModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm2015/common.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm2015/forms.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/fesm2015/ionic-angular.js");
/* harmony import */ var _connexion_routing_module__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./connexion-routing.module */ "./src/app/connexion/connexion-routing.module.ts");
/* harmony import */ var _connexion_page__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./connexion.page */ "./src/app/connexion/connexion.page.ts");







let ConnexionPageModule = class ConnexionPageModule {
};
ConnexionPageModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [
            _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"],
            _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["IonicModule"],
            _connexion_routing_module__WEBPACK_IMPORTED_MODULE_5__["ConnexionPageRoutingModule"]
        ],
        declarations: [_connexion_page__WEBPACK_IMPORTED_MODULE_6__["ConnexionPage"]]
    })
], ConnexionPageModule);



/***/ }),

/***/ "./src/app/connexion/connexion.page.scss":
/*!***********************************************!*\
  !*** ./src/app/connexion/connexion.page.scss ***!
  \***********************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("#container {\n  text-align: center;\n  padding-left: 1em;\n  padding-right: 1em;\n  position: absolute;\n  left: 0;\n  right: 0;\n  top: 30%;\n}\n\nion-input {\n  text-align: left;\n  padding-left: 1em;\n  font-size: medium;\n}\n\nion-button {\n  margin-top: 1em;\n}\n\nion-item {\n  background-color: #ffca37fd;\n  color: #ffca37fd;\n}\n\np {\n  color: gray;\n  padding-right: 8px;\n  font-size: medium;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvY29ubmV4aW9uL0M6XFxVc2Vyc1xcZHVmZXVcXGlvbmljX3BcXGZsYXNoL3NyY1xcYXBwXFxjb25uZXhpb25cXGNvbm5leGlvbi5wYWdlLnNjc3MiLCJzcmMvYXBwL2Nvbm5leGlvbi9jb25uZXhpb24ucGFnZS5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0ksa0JBQUE7RUFDQSxpQkFBQTtFQUNBLGtCQUFBO0VBQ0Esa0JBQUE7RUFDQSxPQUFBO0VBQ0EsUUFBQTtFQUNBLFFBQUE7QUNDSjs7QURHQTtFQUNJLGdCQUFBO0VBQ0EsaUJBQUE7RUFDQSxpQkFBQTtBQ0FKOztBREVBO0VBQ0ksZUFBQTtBQ0NKOztBRENBO0VBQ0ksMkJBQUE7RUFDQSxnQkFBQTtBQ0VKOztBREFBO0VBQ0ksV0FBQTtFQUNBLGtCQUFBO0VBQ0EsaUJBQUE7QUNHSiIsImZpbGUiOiJzcmMvYXBwL2Nvbm5leGlvbi9jb25uZXhpb24ucGFnZS5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiI2NvbnRhaW5lciB7XHJcbiAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XHJcbiAgICBwYWRkaW5nLWxlZnQ6IDFlbTtcclxuICAgIHBhZGRpbmctcmlnaHQ6IDFlbTtcclxuICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcclxuICAgIGxlZnQ6IDA7XHJcbiAgICByaWdodDogMDtcclxuICAgIHRvcDogMzAlO1xyXG4gIFxyXG4gIH1cclxuXHJcbmlvbi1pbnB1dCB7XHJcbiAgICB0ZXh0LWFsaWduOiBsZWZ0O1xyXG4gICAgcGFkZGluZy1sZWZ0OiAxZW07XHJcbiAgICBmb250LXNpemU6IG1lZGl1bTtcclxufVxyXG5pb24tYnV0dG9uIHtcclxuICAgIG1hcmdpbi10b3A6IDFlbTtcclxufVxyXG5pb24taXRlbSB7XHJcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjZmZjYTM3ZmQ7XHJcbiAgICBjb2xvcjogI2ZmY2EzN2ZkO1xyXG59XHJcbnAge1xyXG4gICAgY29sb3I6IGdyYXk7XHJcbiAgICBwYWRkaW5nLXJpZ2h0OiA4cHg7XHJcbiAgICBmb250LXNpemU6IG1lZGl1bTtcclxufVxyXG4iLCIjY29udGFpbmVyIHtcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xuICBwYWRkaW5nLWxlZnQ6IDFlbTtcbiAgcGFkZGluZy1yaWdodDogMWVtO1xuICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gIGxlZnQ6IDA7XG4gIHJpZ2h0OiAwO1xuICB0b3A6IDMwJTtcbn1cblxuaW9uLWlucHV0IHtcbiAgdGV4dC1hbGlnbjogbGVmdDtcbiAgcGFkZGluZy1sZWZ0OiAxZW07XG4gIGZvbnQtc2l6ZTogbWVkaXVtO1xufVxuXG5pb24tYnV0dG9uIHtcbiAgbWFyZ2luLXRvcDogMWVtO1xufVxuXG5pb24taXRlbSB7XG4gIGJhY2tncm91bmQtY29sb3I6ICNmZmNhMzdmZDtcbiAgY29sb3I6ICNmZmNhMzdmZDtcbn1cblxucCB7XG4gIGNvbG9yOiBncmF5O1xuICBwYWRkaW5nLXJpZ2h0OiA4cHg7XG4gIGZvbnQtc2l6ZTogbWVkaXVtO1xufSJdfQ== */");

/***/ }),

/***/ "./src/app/connexion/connexion.page.ts":
/*!*********************************************!*\
  !*** ./src/app/connexion/connexion.page.ts ***!
  \*********************************************/
/*! exports provided: User, ConnexionPage */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "User", function() { return User; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ConnexionPage", function() { return ConnexionPage; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var angularfire2_auth__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! angularfire2/auth */ "./node_modules/angularfire2/auth/index.js");
/* harmony import */ var angularfire2_auth__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(angularfire2_auth__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");




class User {
}
let ConnexionPage = class ConnexionPage {
    constructor(fAuth, router) {
        this.fAuth = fAuth;
        this.router = router;
        this.user = new User();
    }
    login() {
        return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0, function* () {
            try {
                var r = yield this.fAuth.auth.signInWithEmailAndPassword(this.user.email, this.user.password);
                if (r) {
                    console.log("Successfully logged in!");
                    this.router.navigate(['/home']);
                }
            }
            catch (err) {
                this.a = 'E-mail ou mot de passe incorrect';
                console.error(err);
            }
        });
    }
};
ConnexionPage.ctorParameters = () => [
    { type: angularfire2_auth__WEBPACK_IMPORTED_MODULE_2__["AngularFireAuth"] },
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_3__["Router"] }
];
ConnexionPage = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-connexion',
        template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./connexion.page.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/connexion/connexion.page.html")).default,
        styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! ./connexion.page.scss */ "./src/app/connexion/connexion.page.scss")).default]
    }),
    tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [angularfire2_auth__WEBPACK_IMPORTED_MODULE_2__["AngularFireAuth"], _angular_router__WEBPACK_IMPORTED_MODULE_3__["Router"]])
], ConnexionPage);



/***/ })

}]);
//# sourceMappingURL=connexion-connexion-module-es2015.js.map