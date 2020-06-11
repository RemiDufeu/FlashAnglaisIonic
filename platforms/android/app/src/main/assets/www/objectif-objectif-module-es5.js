function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["objectif-objectif-module"], {
  /***/
  "./node_modules/raw-loader/dist/cjs.js!./src/app/objectif/objectif.page.html":
  /*!***********************************************************************************!*\
    !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/objectif/objectif.page.html ***!
    \***********************************************************************************/

  /*! exports provided: default */

  /***/
  function node_modulesRawLoaderDistCjsJsSrcAppObjectifObjectifPageHtml(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "<ion-header>\n  <ion-toolbar color='primary' > \n        <ion-back-button id=\"backb\" color='light' defaultHref='/home' slot='start'></ion-back-button>\n        <ion-title id=\"title\">Objectif</ion-title>  \n  </ion-toolbar>\n</ion-header>\n\n<ion-content>\n  <ion-card >\n    <p>Combien de mots souhaitez-vous réviser par jour ? Le nombre doit être le plus proche possible de la réalité. De plus nous vous recommandons de réviser un nombre de mots fixe chaque jour.</p>\n    <ion-label>Nombre de mots :</ion-label>\n    <ion-range min=\"1\" max=\"20\" step=\"1\" pin=\"true\" [(ngModel)]=\"motsparjour\">\n    </ion-range>\n    <div class=\"boutonsdroite\">\n    <ion-button (click)=\"putmotsparjour()\" shape=\"round\">suivant<ion-icon slot=\"end\" name=\"chevron-forward-outline\"></ion-icon></ion-button>\n    </div>\n  </ion-card>\n</ion-content>";
    /***/
  },

  /***/
  "./src/app/objectif/objectif-routing.module.ts":
  /*!*****************************************************!*\
    !*** ./src/app/objectif/objectif-routing.module.ts ***!
    \*****************************************************/

  /*! exports provided: ObjectifPageRoutingModule */

  /***/
  function srcAppObjectifObjectifRoutingModuleTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "ObjectifPageRoutingModule", function () {
      return ObjectifPageRoutingModule;
    });
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "./node_modules/tslib/tslib.es6.js");
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/fesm2015/core.js");
    /* harmony import */


    var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! @angular/router */
    "./node_modules/@angular/router/fesm2015/router.js");
    /* harmony import */


    var _objectif_page__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! ./objectif.page */
    "./src/app/objectif/objectif.page.ts");

    var routes = [{
      path: '',
      component: _objectif_page__WEBPACK_IMPORTED_MODULE_3__["ObjectifPage"]
    }];

    var ObjectifPageRoutingModule = function ObjectifPageRoutingModule() {
      _classCallCheck(this, ObjectifPageRoutingModule);
    };

    ObjectifPageRoutingModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
      imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild(routes)],
      exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]]
    })], ObjectifPageRoutingModule);
    /***/
  },

  /***/
  "./src/app/objectif/objectif.module.ts":
  /*!*********************************************!*\
    !*** ./src/app/objectif/objectif.module.ts ***!
    \*********************************************/

  /*! exports provided: ObjectifPageModule */

  /***/
  function srcAppObjectifObjectifModuleTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "ObjectifPageModule", function () {
      return ObjectifPageModule;
    });
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "./node_modules/tslib/tslib.es6.js");
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/fesm2015/core.js");
    /* harmony import */


    var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! @angular/common */
    "./node_modules/@angular/common/fesm2015/common.js");
    /* harmony import */


    var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! @angular/forms */
    "./node_modules/@angular/forms/fesm2015/forms.js");
    /* harmony import */


    var _ionic_angular__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! @ionic/angular */
    "./node_modules/@ionic/angular/fesm2015/ionic-angular.js");
    /* harmony import */


    var _objectif_routing_module__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
    /*! ./objectif-routing.module */
    "./src/app/objectif/objectif-routing.module.ts");
    /* harmony import */


    var _objectif_page__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
    /*! ./objectif.page */
    "./src/app/objectif/objectif.page.ts");

    var ObjectifPageModule = function ObjectifPageModule() {
      _classCallCheck(this, ObjectifPageModule);
    };

    ObjectifPageModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
      imports: [_angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"], _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["IonicModule"], _objectif_routing_module__WEBPACK_IMPORTED_MODULE_5__["ObjectifPageRoutingModule"]],
      declarations: [_objectif_page__WEBPACK_IMPORTED_MODULE_6__["ObjectifPage"]]
    })], ObjectifPageModule);
    /***/
  },

  /***/
  "./src/app/objectif/objectif.page.scss":
  /*!*********************************************!*\
    !*** ./src/app/objectif/objectif.page.scss ***!
    \*********************************************/

  /*! exports provided: default */

  /***/
  function srcAppObjectifObjectifPageScss(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "#title {\n  font-size: 26px;\n  text-align: left;\n  position: relative;\n  padding-left: 30px;\n  margin-top: 20px;\n  margin-bottom: 10px;\n}\n\n#backb {\n  margin-top: 10px;\n}\n\np {\n  margin: 2em;\n  font-size: larger;\n  text-align: left;\n}\n\nion-range {\n  margin-left: 1em;\n  margin-right: 1em;\n}\n\nion-label {\n  margin-left: 1em;\n  margin-right: 1em;\n}\n\n.boutonsdroite {\n  text-align: end;\n  margin: 1em;\n}\n\nion-content {\n  position: absolut;\n  top: 10%;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvb2JqZWN0aWYvQzpcXFVzZXJzXFxkdWZldVxcaW9uaWNfcFxcZmxhc2gvc3JjXFxhcHBcXG9iamVjdGlmXFxvYmplY3RpZi5wYWdlLnNjc3MiLCJzcmMvYXBwL29iamVjdGlmL29iamVjdGlmLnBhZ2Uuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNJLGVBQUE7RUFDQSxnQkFBQTtFQUNBLGtCQUFBO0VBQ0Esa0JBQUE7RUFDQSxnQkFBQTtFQUNBLG1CQUFBO0FDQ0o7O0FEQ0E7RUFDSSxnQkFBQTtBQ0VKOztBREFBO0VBQ0ksV0FBQTtFQUNBLGlCQUFBO0VBQ0EsZ0JBQUE7QUNHSjs7QUREQTtFQUNHLGdCQUFBO0VBQ0EsaUJBQUE7QUNJSDs7QURGQTtFQUNHLGdCQUFBO0VBQ0EsaUJBQUE7QUNLSDs7QURIQTtFQUNHLGVBQUE7RUFDQSxXQUFBO0FDTUg7O0FESEE7RUFDRyxpQkFBQTtFQUNBLFFBQUE7QUNNSCIsImZpbGUiOiJzcmMvYXBwL29iamVjdGlmL29iamVjdGlmLnBhZ2Uuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIiN0aXRsZSB7XHJcbiAgICBmb250LXNpemU6IDI2cHg7XHJcbiAgICB0ZXh0LWFsaWduOiBsZWZ0O1xyXG4gICAgcG9zaXRpb246IHJlbGF0aXZlO1xyXG4gICAgcGFkZGluZy1sZWZ0OiAzMHB4O1xyXG4gICAgbWFyZ2luLXRvcDogMjBweDtcclxuICAgIG1hcmdpbi1ib3R0b206IDEwcHg7XHJcbn1cclxuI2JhY2tiIHtcclxuICAgIG1hcmdpbi10b3A6IDEwcHg7XHJcbn1cclxucCB7XHJcbiAgICBtYXJnaW46IDJlbTtcclxuICAgIGZvbnQtc2l6ZTogbGFyZ2VyO1xyXG4gICAgdGV4dC1hbGlnbjogbGVmdDtcclxufVxyXG5pb24tcmFuZ2Uge1xyXG4gICBtYXJnaW4tbGVmdDogMWVtOyAgXHJcbiAgIG1hcmdpbi1yaWdodDogMWVtO1xyXG59XHJcbmlvbi1sYWJlbCB7XHJcbiAgIG1hcmdpbi1sZWZ0OiAxZW07ICBcclxuICAgbWFyZ2luLXJpZ2h0OiAxZW07XHJcbn1cclxuLmJvdXRvbnNkcm9pdGUge1xyXG4gICB0ZXh0LWFsaWduOiBlbmQ7XHJcbiAgIG1hcmdpbjogMWVtO1xyXG59XHJcblxyXG5pb24tY29udGVudCB7XHJcbiAgIHBvc2l0aW9uOiBhYnNvbHV0O1xyXG4gICB0b3A6IDEwJTtcclxufSIsIiN0aXRsZSB7XG4gIGZvbnQtc2l6ZTogMjZweDtcbiAgdGV4dC1hbGlnbjogbGVmdDtcbiAgcG9zaXRpb246IHJlbGF0aXZlO1xuICBwYWRkaW5nLWxlZnQ6IDMwcHg7XG4gIG1hcmdpbi10b3A6IDIwcHg7XG4gIG1hcmdpbi1ib3R0b206IDEwcHg7XG59XG5cbiNiYWNrYiB7XG4gIG1hcmdpbi10b3A6IDEwcHg7XG59XG5cbnAge1xuICBtYXJnaW46IDJlbTtcbiAgZm9udC1zaXplOiBsYXJnZXI7XG4gIHRleHQtYWxpZ246IGxlZnQ7XG59XG5cbmlvbi1yYW5nZSB7XG4gIG1hcmdpbi1sZWZ0OiAxZW07XG4gIG1hcmdpbi1yaWdodDogMWVtO1xufVxuXG5pb24tbGFiZWwge1xuICBtYXJnaW4tbGVmdDogMWVtO1xuICBtYXJnaW4tcmlnaHQ6IDFlbTtcbn1cblxuLmJvdXRvbnNkcm9pdGUge1xuICB0ZXh0LWFsaWduOiBlbmQ7XG4gIG1hcmdpbjogMWVtO1xufVxuXG5pb24tY29udGVudCB7XG4gIHBvc2l0aW9uOiBhYnNvbHV0O1xuICB0b3A6IDEwJTtcbn0iXX0= */";
    /***/
  },

  /***/
  "./src/app/objectif/objectif.page.ts":
  /*!*******************************************!*\
    !*** ./src/app/objectif/objectif.page.ts ***!
    \*******************************************/

  /*! exports provided: ObjectifPage */

  /***/
  function srcAppObjectifObjectifPageTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "ObjectifPage", function () {
      return ObjectifPage;
    });
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "./node_modules/tslib/tslib.es6.js");
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/fesm2015/core.js");
    /* harmony import */


    var _angular_common_http__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! @angular/common/http */
    "./node_modules/@angular/common/fesm2015/http.js");
    /* harmony import */


    var angularfire2_auth__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! angularfire2/auth */
    "./node_modules/angularfire2/auth/index.js");
    /* harmony import */


    var angularfire2_auth__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(angularfire2_auth__WEBPACK_IMPORTED_MODULE_3__);
    /* harmony import */


    var _ionic_angular__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! @ionic/angular */
    "./node_modules/@ionic/angular/fesm2015/ionic-angular.js");

    var ObjectifPage = /*#__PURE__*/function () {
      function ObjectifPage(httpCLient, fAuth, alertController) {
        _classCallCheck(this, ObjectifPage);

        this.httpCLient = httpCLient;
        this.fAuth = fAuth;
        this.alertController = alertController;
        this.motsparjour = 10;
        this.cUser = this.fAuth.auth.currentUser.uid;
      }

      _createClass(ObjectifPage, [{
        key: "putmotsparjour",
        value: function putmotsparjour() {
          var _this = this;

          this.httpCLient.put('https://flash-2ad53.firebaseio.com/' + this.cUser + '/motsparjour.json', this.motsparjour).subscribe(function () {
            console.log('objectif modifié');

            _this.objectifAlert();
          }, function (error) {
            console.log('erreur de sauvegarde');
          });
        }
      }, {
        key: "objectifAlert",
        value: function objectifAlert() {
          return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0, /*#__PURE__*/regeneratorRuntime.mark(function _callee() {
            var alert;
            return regeneratorRuntime.wrap(function _callee$(_context) {
              while (1) {
                switch (_context.prev = _context.next) {
                  case 0:
                    _context.next = 2;
                    return this.alertController.create({
                      header: 'Objectif modifié',
                      message: 'Le changement de votre objectif quotidient a bien été pris en compte.',
                      buttons: ['Confirmer']
                    });

                  case 2:
                    alert = _context.sent;
                    _context.next = 5;
                    return alert.present();

                  case 5:
                  case "end":
                    return _context.stop();
                }
              }
            }, _callee, this);
          }));
        }
      }, {
        key: "ngOnInit",
        value: function ngOnInit() {}
      }]);

      return ObjectifPage;
    }();

    ObjectifPage.ctorParameters = function () {
      return [{
        type: _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpClient"]
      }, {
        type: angularfire2_auth__WEBPACK_IMPORTED_MODULE_3__["AngularFireAuth"]
      }, {
        type: _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["AlertController"]
      }];
    };

    ObjectifPage = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
      selector: 'app-objectif',
      template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! raw-loader!./objectif.page.html */
      "./node_modules/raw-loader/dist/cjs.js!./src/app/objectif/objectif.page.html"))["default"],
      styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! ./objectif.page.scss */
      "./src/app/objectif/objectif.page.scss"))["default"]]
    }), tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpClient"], angularfire2_auth__WEBPACK_IMPORTED_MODULE_3__["AngularFireAuth"], _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["AlertController"]])], ObjectifPage);
    /***/
  }
}]);
//# sourceMappingURL=objectif-objectif-module-es5.js.map