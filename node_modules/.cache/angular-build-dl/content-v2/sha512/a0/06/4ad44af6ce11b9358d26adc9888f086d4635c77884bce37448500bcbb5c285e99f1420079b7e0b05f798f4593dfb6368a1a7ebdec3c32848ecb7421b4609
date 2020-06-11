(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["lexique-lexique-module"],{

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/lexique/lexique.page.html":
/*!*********************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/lexique/lexique.page.html ***!
  \*********************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<ion-header [translucent]=\"true\">\n  <ion-toolbar color='primary' > \n        <ion-back-button id=\"backb\" color='light' defaultHref='/home' slot='start'></ion-back-button>\n        <ion-title id=\"title\">Mon lexique </ion-title>  \n  </ion-toolbar>\n</ion-header>\n\n<ion-content >\n  \n  <ion-searchbar\n  showcancelbutton=\"\"\n    (ionInput)=\"filterList($event)\">\n  </ion-searchbar>\n  \n  <ion-list>\n  <ion-card *ngFor=\"let fich of fiches\">\n    <ion-item>\n      <h1 >  {{fich.frw}} </h1>\n    </ion-item>\n  \n    <ion-card-content>\n      <h2 > {{fich.engw}}  </h2>\n    </ion-card-content>\n  </ion-card>\n\n</ion-list>\n\n</ion-content>\n");

/***/ }),

/***/ "./src/app/lexique/lexique-routing.module.ts":
/*!***************************************************!*\
  !*** ./src/app/lexique/lexique-routing.module.ts ***!
  \***************************************************/
/*! exports provided: LexiquePageRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LexiquePageRoutingModule", function() { return LexiquePageRoutingModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");
/* harmony import */ var _lexique_page__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./lexique.page */ "./src/app/lexique/lexique.page.ts");




const routes = [
    {
        path: '',
        component: _lexique_page__WEBPACK_IMPORTED_MODULE_3__["LexiquePage"]
    }
];
let LexiquePageRoutingModule = class LexiquePageRoutingModule {
};
LexiquePageRoutingModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild(routes)],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]],
    })
], LexiquePageRoutingModule);



/***/ }),

/***/ "./src/app/lexique/lexique.module.ts":
/*!*******************************************!*\
  !*** ./src/app/lexique/lexique.module.ts ***!
  \*******************************************/
/*! exports provided: LexiquePageModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LexiquePageModule", function() { return LexiquePageModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm2015/common.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm2015/forms.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/fesm2015/ionic-angular.js");
/* harmony import */ var _lexique_routing_module__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./lexique-routing.module */ "./src/app/lexique/lexique-routing.module.ts");
/* harmony import */ var _lexique_page__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./lexique.page */ "./src/app/lexique/lexique.page.ts");







let LexiquePageModule = class LexiquePageModule {
};
LexiquePageModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [
            _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"],
            _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["IonicModule"],
            _lexique_routing_module__WEBPACK_IMPORTED_MODULE_5__["LexiquePageRoutingModule"]
        ],
        declarations: [_lexique_page__WEBPACK_IMPORTED_MODULE_6__["LexiquePage"]]
    })
], LexiquePageModule);



/***/ }),

/***/ "./src/app/lexique/lexique.page.scss":
/*!*******************************************!*\
  !*** ./src/app/lexique/lexique.page.scss ***!
  \*******************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("#title {\n  font-size: 26px;\n  text-align: left;\n  position: relative;\n  padding-left: 30px;\n  margin-top: 20px;\n  margin-bottom: 10px;\n}\n\n#backb {\n  margin-top: 10px;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvbGV4aXF1ZS9DOlxcVXNlcnNcXGR1ZmV1XFxpb25pY19wXFxmbGFzaC9zcmNcXGFwcFxcbGV4aXF1ZVxcbGV4aXF1ZS5wYWdlLnNjc3MiLCJzcmMvYXBwL2xleGlxdWUvbGV4aXF1ZS5wYWdlLnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDSSxlQUFBO0VBQ0EsZ0JBQUE7RUFDQSxrQkFBQTtFQUNBLGtCQUFBO0VBQ0EsZ0JBQUE7RUFDQSxtQkFBQTtBQ0NKOztBRENBO0VBQ0ksZ0JBQUE7QUNFSiIsImZpbGUiOiJzcmMvYXBwL2xleGlxdWUvbGV4aXF1ZS5wYWdlLnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyIjdGl0bGUge1xyXG4gICAgZm9udC1zaXplOiAyNnB4O1xyXG4gICAgdGV4dC1hbGlnbjogbGVmdDtcclxuICAgIHBvc2l0aW9uOiByZWxhdGl2ZTtcclxuICAgIHBhZGRpbmctbGVmdDogMzBweDtcclxuICAgIG1hcmdpbi10b3A6IDIwcHg7XHJcbiAgICBtYXJnaW4tYm90dG9tOiAxMHB4O1xyXG59XHJcbiNiYWNrYiB7XHJcbiAgICBtYXJnaW4tdG9wOiAxMHB4O1xyXG59XHJcbiIsIiN0aXRsZSB7XG4gIGZvbnQtc2l6ZTogMjZweDtcbiAgdGV4dC1hbGlnbjogbGVmdDtcbiAgcG9zaXRpb246IHJlbGF0aXZlO1xuICBwYWRkaW5nLWxlZnQ6IDMwcHg7XG4gIG1hcmdpbi10b3A6IDIwcHg7XG4gIG1hcmdpbi1ib3R0b206IDEwcHg7XG59XG5cbiNiYWNrYiB7XG4gIG1hcmdpbi10b3A6IDEwcHg7XG59Il19 */");

/***/ }),

/***/ "./src/app/lexique/lexique.page.ts":
/*!*****************************************!*\
  !*** ./src/app/lexique/lexique.page.ts ***!
  \*****************************************/
/*! exports provided: LexiquePage */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LexiquePage", function() { return LexiquePage; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm2015/http.js");



let LexiquePage = class LexiquePage {
    constructor(httpCLient) {
        this.httpCLient = httpCLient;
    }
    getFichesToServeur() {
        this.httpCLient.get('https://flash-2ad53.firebaseio.com/Fiches/.json')
            .subscribe((response) => {
            this.fiches = response;
            console.log('chargement effectué');
            this.loadedfiches = response;
        }, (error) => {
            console.log('erreur de chargement' + error);
        });
    }
    initializeItems() {
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
        this.getFichesToServeur();
    }
};
LexiquePage.ctorParameters = () => [
    { type: _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpClient"] }
];
LexiquePage = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-lexique',
        template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./lexique.page.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/lexique/lexique.page.html")).default,
        styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! ./lexique.page.scss */ "./src/app/lexique/lexique.page.scss")).default]
    }),
    tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpClient"]])
], LexiquePage);



/***/ })

}]);
//# sourceMappingURL=lexique-lexique-module-es2015.js.map