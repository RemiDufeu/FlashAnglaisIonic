(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["home-home-module"],{

/***/ "./node_modules/angular-svg-round-progressbar/dist/index.js":
/*!******************************************************************!*\
  !*** ./node_modules/angular-svg-round-progressbar/dist/index.js ***!
  \******************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
function __export(m) {
    for (var p in m) if (!exports.hasOwnProperty(p)) exports[p] = m[p];
}
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
var round_progress_component_1 = __webpack_require__(/*! ./round-progress.component */ "./node_modules/angular-svg-round-progressbar/dist/round-progress.component.js");
var round_progress_ease_1 = __webpack_require__(/*! ./round-progress.ease */ "./node_modules/angular-svg-round-progressbar/dist/round-progress.ease.js");
var round_progress_config_1 = __webpack_require__(/*! ./round-progress.config */ "./node_modules/angular-svg-round-progressbar/dist/round-progress.config.js");
var round_progress_service_1 = __webpack_require__(/*! ./round-progress.service */ "./node_modules/angular-svg-round-progressbar/dist/round-progress.service.js");
var RoundProgressModule = /** @class */ (function () {
    function RoundProgressModule() {
    }
    RoundProgressModule = __decorate([
        core_1.NgModule({
            declarations: [round_progress_component_1.RoundProgressComponent],
            exports: [round_progress_component_1.RoundProgressComponent],
            providers: [round_progress_service_1.RoundProgressService, round_progress_ease_1.RoundProgressEase, round_progress_config_1.ROUND_PROGRESS_DEFAULTS_PROVIDER]
        })
    ], RoundProgressModule);
    return RoundProgressModule;
}());
exports.RoundProgressModule = RoundProgressModule;
__export(__webpack_require__(/*! ./round-progress.component */ "./node_modules/angular-svg-round-progressbar/dist/round-progress.component.js"));
__export(__webpack_require__(/*! ./round-progress.service */ "./node_modules/angular-svg-round-progressbar/dist/round-progress.service.js"));
__export(__webpack_require__(/*! ./round-progress.ease */ "./node_modules/angular-svg-round-progressbar/dist/round-progress.ease.js"));
__export(__webpack_require__(/*! ./round-progress.config */ "./node_modules/angular-svg-round-progressbar/dist/round-progress.config.js"));
//# sourceMappingURL=index.js.map

/***/ }),

/***/ "./node_modules/angular-svg-round-progressbar/dist/round-progress.component.js":
/*!*************************************************************************************!*\
  !*** ./node_modules/angular-svg-round-progressbar/dist/round-progress.component.js ***!
  \*************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var __param = (this && this.__param) || function (paramIndex, decorator) {
    return function (target, key) { decorator(target, key, paramIndex); }
};
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
var round_progress_service_1 = __webpack_require__(/*! ./round-progress.service */ "./node_modules/angular-svg-round-progressbar/dist/round-progress.service.js");
var round_progress_config_1 = __webpack_require__(/*! ./round-progress.config */ "./node_modules/angular-svg-round-progressbar/dist/round-progress.config.js");
var round_progress_ease_1 = __webpack_require__(/*! ./round-progress.ease */ "./node_modules/angular-svg-round-progressbar/dist/round-progress.ease.js");
var RoundProgressComponent = /** @class */ (function () {
    function RoundProgressComponent(_service, _easing, _defaults, _ngZone) {
        this._service = _service;
        this._easing = _easing;
        this._defaults = _defaults;
        this._ngZone = _ngZone;
        /** Radius of the circle. */
        this.radius = this._defaults.radius;
        /** Name of the easing function to use when animating. */
        this.animation = this._defaults.animation;
        /** Time in millisconds by which to delay the animation. */
        this.animationDelay = this._defaults.animationDelay;
        /** Duration of the animation. */
        this.duration = this._defaults.duration;
        /** Width of the circle's stroke. */
        this.stroke = this._defaults.stroke;
        /** Color of the circle. */
        this.color = this._defaults.color;
        /** Background color of the circle. */
        this.background = this._defaults.background;
        /** Whether the circle should take up the width of its parent. */
        this.responsive = this._defaults.responsive;
        /** Whether the circle is filling up clockwise. */
        this.clockwise = this._defaults.clockwise;
        /** Whether to render a semicircle. */
        this.semicircle = this._defaults.semicircle;
        /** Whether the tip of the progress should be rounded off. */
        this.rounded = this._defaults.rounded;
        /** Emits when a new value has been rendered. */
        this.onRender = new core_1.EventEmitter();
        this._lastAnimationId = 0;
    }
    /** Animates a change in the current value. */
    RoundProgressComponent.prototype._animateChange = function (from, to) {
        var _this = this;
        if (typeof from !== 'number') {
            from = 0;
        }
        to = this._clamp(to);
        from = this._clamp(from);
        var self = this;
        var changeInValue = to - from;
        var duration = self.duration;
        // Avoid firing change detection for each of the animation frames.
        self._ngZone.runOutsideAngular(function () {
            var start = function () {
                var startTime = self._service.getTimestamp();
                var id = ++self._lastAnimationId;
                requestAnimationFrame(function animation() {
                    var currentTime = Math.min(self._service.getTimestamp() - startTime, duration);
                    var value = self._easing[self.animation](currentTime, from, changeInValue, duration);
                    self._setPath(value);
                    self.onRender.emit(value);
                    if (id === self._lastAnimationId && currentTime < duration) {
                        requestAnimationFrame(animation);
                    }
                });
            };
            if (_this.animationDelay > 0) {
                setTimeout(start, _this.animationDelay);
            }
            else {
                start();
            }
        });
    };
    /** Sets the path dimensions. */
    RoundProgressComponent.prototype._setPath = function (value) {
        if (this._path) {
            var arc = this._service.getArc(value, this.max, this.radius - this.stroke / 2, this.radius, this.semicircle);
            this._path.nativeElement.setAttribute('d', arc);
        }
    };
    /** Clamps a value between the maximum and 0. */
    RoundProgressComponent.prototype._clamp = function (value) {
        return Math.max(0, Math.min(value || 0, this.max));
    };
    /** Determines the SVG transforms for the <path> node. */
    RoundProgressComponent.prototype.getPathTransform = function () {
        var diameter = this._getDiameter();
        if (this.semicircle) {
            return this.clockwise ?
                "translate(0, " + diameter + ") rotate(-90)" :
                "translate(" + (diameter + ',' + diameter) + ") rotate(90) scale(-1, 1)";
        }
        else if (!this.clockwise) {
            return "scale(-1, 1) translate(-" + diameter + " 0)";
        }
    };
    /** Resolves a color through the service. */
    RoundProgressComponent.prototype.resolveColor = function (color) {
        return this._service.resolveColor(color);
    };
    /** Change detection callback. */
    RoundProgressComponent.prototype.ngOnChanges = function (changes) {
        if (changes.current) {
            this._animateChange(changes.current.previousValue, changes.current.currentValue);
        }
        else {
            this._setPath(this.current);
        }
    };
    /** Diameter of the circle. */
    RoundProgressComponent.prototype._getDiameter = function () {
        return this.radius * 2;
    };
    /** The CSS height of the wrapper element. */
    RoundProgressComponent.prototype._getElementHeight = function () {
        if (!this.responsive) {
            return (this.semicircle ? this.radius : this._getDiameter()) + 'px';
        }
    };
    /** Viewbox for the SVG element. */
    RoundProgressComponent.prototype._getViewBox = function () {
        var diameter = this._getDiameter();
        return "0 0 " + diameter + " " + (this.semicircle ? this.radius : diameter);
    };
    /** Bottom padding for the wrapper element. */
    RoundProgressComponent.prototype._getPaddingBottom = function () {
        if (this.responsive) {
            return this.semicircle ? '50%' : '100%';
        }
    };
    __decorate([
        core_1.ViewChild('path', { static: false }),
        __metadata("design:type", core_1.ElementRef)
    ], RoundProgressComponent.prototype, "_path", void 0);
    __decorate([
        core_1.Input(),
        __metadata("design:type", Number)
    ], RoundProgressComponent.prototype, "current", void 0);
    __decorate([
        core_1.Input(),
        __metadata("design:type", Number)
    ], RoundProgressComponent.prototype, "max", void 0);
    __decorate([
        core_1.Input(),
        __metadata("design:type", Number)
    ], RoundProgressComponent.prototype, "radius", void 0);
    __decorate([
        core_1.Input(),
        __metadata("design:type", String)
    ], RoundProgressComponent.prototype, "animation", void 0);
    __decorate([
        core_1.Input(),
        __metadata("design:type", Number)
    ], RoundProgressComponent.prototype, "animationDelay", void 0);
    __decorate([
        core_1.Input(),
        __metadata("design:type", Number)
    ], RoundProgressComponent.prototype, "duration", void 0);
    __decorate([
        core_1.Input(),
        __metadata("design:type", Number)
    ], RoundProgressComponent.prototype, "stroke", void 0);
    __decorate([
        core_1.Input(),
        __metadata("design:type", String)
    ], RoundProgressComponent.prototype, "color", void 0);
    __decorate([
        core_1.Input(),
        __metadata("design:type", String)
    ], RoundProgressComponent.prototype, "background", void 0);
    __decorate([
        core_1.Input(),
        __metadata("design:type", Boolean)
    ], RoundProgressComponent.prototype, "responsive", void 0);
    __decorate([
        core_1.Input(),
        __metadata("design:type", Boolean)
    ], RoundProgressComponent.prototype, "clockwise", void 0);
    __decorate([
        core_1.Input(),
        __metadata("design:type", Boolean)
    ], RoundProgressComponent.prototype, "semicircle", void 0);
    __decorate([
        core_1.Input(),
        __metadata("design:type", Boolean)
    ], RoundProgressComponent.prototype, "rounded", void 0);
    __decorate([
        core_1.Output(),
        __metadata("design:type", core_1.EventEmitter)
    ], RoundProgressComponent.prototype, "onRender", void 0);
    RoundProgressComponent = __decorate([
        core_1.Component({
            selector: 'round-progress',
            changeDetection: core_1.ChangeDetectionStrategy.OnPush,
            template: "\n    <svg xmlns=\"http://www.w3.org/2000/svg\" [attr.viewBox]=\"_getViewBox()\">\n      <circle\n        fill=\"none\"\n        [attr.cx]=\"radius\"\n        [attr.cy]=\"radius\"\n        [attr.r]=\"radius - stroke / 2\"\n        [style.stroke]=\"resolveColor(background)\"\n        [style.stroke-width]=\"stroke\"/>\n\n      <path\n        #path\n        fill=\"none\"\n        [style.stroke-width]=\"stroke\"\n        [style.stroke]=\"resolveColor(color)\"\n        [style.stroke-linecap]=\"rounded ? 'round' : ''\"\n        [attr.transform]=\"getPathTransform()\"/>\n    </svg>\n  ",
            host: {
                'role': 'progressbar',
                '[attr.aria-valuemin]': 'current',
                '[attr.aria-valuemax]': 'max',
                '[style.width]': "responsive ? '' : _getDiameter() + 'px'",
                '[style.height]': '_getElementHeight()',
                '[style.padding-bottom]': '_getPaddingBottom()',
                '[class.responsive]': 'responsive'
            },
            styles: ["\n    :host {\n      display: block;\n      position: relative;\n      overflow: hidden;\n    }\n    :host(.responsive) {\n      width: 100%;\n      padding-bottom: 100%;\n    }\n    :host(.responsive) > svg {\n      position: absolute;\n      width: 100%;\n      height: 100%;\n      top: 0;\n      left: 0;\n    }\n  "]
        }),
        __param(2, core_1.Inject(round_progress_config_1.ROUND_PROGRESS_DEFAULTS)),
        __metadata("design:paramtypes", [round_progress_service_1.RoundProgressService,
            round_progress_ease_1.RoundProgressEase, Object, core_1.NgZone])
    ], RoundProgressComponent);
    return RoundProgressComponent;
}());
exports.RoundProgressComponent = RoundProgressComponent;
//# sourceMappingURL=round-progress.component.js.map

/***/ }),

/***/ "./node_modules/angular-svg-round-progressbar/dist/round-progress.config.js":
/*!**********************************************************************************!*\
  !*** ./node_modules/angular-svg-round-progressbar/dist/round-progress.config.js ***!
  \**********************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
exports.ROUND_PROGRESS_DEFAULTS = new core_1.InjectionToken('ROUND_PROGRESS_DEFAULTS');
var ɵ0 = {
    radius: 125,
    animation: 'easeOutCubic',
    animationDelay: null,
    duration: 500,
    stroke: 15,
    color: '#45CCCE',
    background: '#EAEAEA',
    responsive: false,
    clockwise: true,
    semicircle: false,
    rounded: false
};
exports.ɵ0 = ɵ0;
exports.ROUND_PROGRESS_DEFAULTS_PROVIDER = {
    provide: exports.ROUND_PROGRESS_DEFAULTS,
    useValue: ɵ0
};
//# sourceMappingURL=round-progress.config.js.map

/***/ }),

/***/ "./node_modules/angular-svg-round-progressbar/dist/round-progress.ease.js":
/*!********************************************************************************!*\
  !*** ./node_modules/angular-svg-round-progressbar/dist/round-progress.ease.js ***!
  \********************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
var RoundProgressEase = /** @class */ (function () {
    function RoundProgressEase() {
    }
    // t: current time (or position) of the neonate. This can be seconds or frames, steps,
    // seconds, ms, whatever – as long as the unit is the same as is used for the total time.
    // b: beginning value of the property.
    // c: change between the beginning and destination value of the property.
    // d: total time of the neonate.
    RoundProgressEase.prototype.linearEase = function (t, b, c, d) {
        return c * t / d + b;
    };
    RoundProgressEase.prototype.easeInQuad = function (t, b, c, d) {
        return c * (t /= d) * t + b;
    };
    RoundProgressEase.prototype.easeOutQuad = function (t, b, c, d) {
        return -c * (t /= d) * (t - 2) + b;
    };
    RoundProgressEase.prototype.easeInOutQuad = function (t, b, c, d) {
        if ((t /= d / 2) < 1) {
            return c / 2 * t * t + b;
        }
        return -c / 2 * ((--t) * (t - 2) - 1) + b;
    };
    RoundProgressEase.prototype.easeInCubic = function (t, b, c, d) {
        return c * (t /= d) * t * t + b;
    };
    RoundProgressEase.prototype.easeOutCubic = function (t, b, c, d) {
        return c * ((t = t / d - 1) * t * t + 1) + b;
    };
    RoundProgressEase.prototype.easeInOutCubic = function (t, b, c, d) {
        if ((t /= d / 2) < 1) {
            return c / 2 * t * t * t + b;
        }
        return c / 2 * ((t -= 2) * t * t + 2) + b;
    };
    RoundProgressEase.prototype.easeInQuart = function (t, b, c, d) {
        return c * (t /= d) * t * t * t + b;
    };
    RoundProgressEase.prototype.easeOutQuart = function (t, b, c, d) {
        return -c * ((t = t / d - 1) * t * t * t - 1) + b;
    };
    RoundProgressEase.prototype.easeInOutQuart = function (t, b, c, d) {
        if ((t /= d / 2) < 1) {
            return c / 2 * t * t * t * t + b;
        }
        return -c / 2 * ((t -= 2) * t * t * t - 2) + b;
    };
    RoundProgressEase.prototype.easeInQuint = function (t, b, c, d) {
        return c * (t /= d) * t * t * t * t + b;
    };
    RoundProgressEase.prototype.easeOutQuint = function (t, b, c, d) {
        return c * ((t = t / d - 1) * t * t * t * t + 1) + b;
    };
    RoundProgressEase.prototype.easeInOutQuint = function (t, b, c, d) {
        if ((t /= d / 2) < 1) {
            return c / 2 * t * t * t * t * t + b;
        }
        return c / 2 * ((t -= 2) * t * t * t * t + 2) + b;
    };
    RoundProgressEase.prototype.easeInSine = function (t, b, c, d) {
        return -c * Math.cos(t / d * (Math.PI / 2)) + c + b;
    };
    RoundProgressEase.prototype.easeOutSine = function (t, b, c, d) {
        return c * Math.sin(t / d * (Math.PI / 2)) + b;
    };
    RoundProgressEase.prototype.easeInOutSine = function (t, b, c, d) {
        return -c / 2 * (Math.cos(Math.PI * t / d) - 1) + b;
    };
    RoundProgressEase.prototype.easeInExpo = function (t, b, c, d) {
        return (t == 0) ? b : c * Math.pow(2, 10 * (t / d - 1)) + b;
    };
    RoundProgressEase.prototype.easeOutExpo = function (t, b, c, d) {
        return (t == d) ? b + c : c * (-Math.pow(2, -10 * t / d) + 1) + b;
    };
    RoundProgressEase.prototype.easeInOutExpo = function (t, b, c, d) {
        if (t == 0) {
            return b;
        }
        if (t == d) {
            return b + c;
        }
        if ((t /= d / 2) < 1) {
            return c / 2 * Math.pow(2, 10 * (t - 1)) + b;
        }
        return c / 2 * (-Math.pow(2, -10 * --t) + 2) + b;
    };
    RoundProgressEase.prototype.easeInCirc = function (t, b, c, d) {
        return -c * (Math.sqrt(1 - (t /= d) * t) - 1) + b;
    };
    RoundProgressEase.prototype.easeOutCirc = function (t, b, c, d) {
        return c * Math.sqrt(1 - (t = t / d - 1) * t) + b;
    };
    RoundProgressEase.prototype.easeInOutCirc = function (t, b, c, d) {
        if ((t /= d / 2) < 1) {
            return -c / 2 * (Math.sqrt(1 - t * t) - 1) + b;
        }
        return c / 2 * (Math.sqrt(1 - (t -= 2) * t) + 1) + b;
    };
    RoundProgressEase.prototype.easeInElastic = function (t, b, c, d) {
        var s = 1.70158;
        var p = d * 0.3;
        var a = c;
        if (t == 0) {
            return b;
        }
        if ((t /= d) == 1) {
            return b + c;
        }
        if (a < Math.abs(c)) {
            a = c;
            s = p / 4;
        }
        else {
            s = p / (2 * Math.PI) * Math.asin(c / a);
        }
        return -(a * Math.pow(2, 10 * (t--)) * Math.sin((t * d - s) * (2 * Math.PI) / p)) + b;
    };
    RoundProgressEase.prototype.easeOutElastic = function (t, b, c, d) {
        var s = 1.70158;
        var p = d * 0.3;
        var a = c;
        if (t == 0) {
            return b;
        }
        if ((t /= d) == 1) {
            return b + c;
        }
        if (a < Math.abs(c)) {
            a = c;
            s = p / 4;
        }
        else {
            s = p / (2 * Math.PI) * Math.asin(c / a);
        }
        return a * Math.pow(2, -10 * t) * Math.sin((t * d - s) * (2 * Math.PI) / p) + c + b;
    };
    RoundProgressEase.prototype.easeInOutElastic = function (t, b, c, d) {
        var s = 1.70158;
        var p = d * (0.3 * 1.5);
        var a = c;
        if (t == 0) {
            return b;
        }
        if ((t /= d / 2) == 2) {
            return b + c;
        }
        if (a < Math.abs(c)) {
            a = c;
            s = p / 4;
        }
        else {
            s = p / (2 * Math.PI) * Math.asin(c / a);
        }
        if (t < 1) {
            return -0.5 * (a * Math.pow(2, 10 * (t -= 1)) *
                Math.sin((t * d - s) * (2 * Math.PI) / p)) + b;
        }
        return a * Math.pow(2, -10 * (t -= 1)) *
            Math.sin((t * d - s) * (2 * Math.PI) / p) * 0.5 + c + b;
    };
    RoundProgressEase.prototype.easeInBack = function (t, b, c, d, s) {
        if (s === void 0) { s = 1.70158; }
        return c * (t /= d) * t * ((s + 1) * t - s) + b;
    };
    RoundProgressEase.prototype.easeOutBack = function (t, b, c, d, s) {
        if (s === void 0) { s = 1.70158; }
        return c * ((t = t / d - 1) * t * ((s + 1) * t + s) + 1) + b;
    };
    RoundProgressEase.prototype.easeInOutBack = function (t, b, c, d, s) {
        if (s === void 0) { s = 1.70158; }
        if ((t /= d / 2) < 1) {
            return c / 2 * (t * t * (((s *= 1.525) + 1) * t - s)) + b;
        }
        return c / 2 * ((t -= 2) * t * (((s *= 1.525) + 1) * t + s) + 2) + b;
    };
    RoundProgressEase.prototype.easeInBounce = function (t, b, c, d) {
        return c - this.easeOutBounce(d - t, 0, c, d) + b;
    };
    RoundProgressEase.prototype.easeOutBounce = function (t, b, c, d) {
        if ((t /= d) < (1 / 2.75)) {
            return c * (7.5625 * t * t) + b;
        }
        else if (t < (2 / 2.75)) {
            return c * (7.5625 * (t -= (1.5 / 2.75)) * t + 0.75) + b;
        }
        else if (t < (2.5 / 2.75)) {
            return c * (7.5625 * (t -= (2.25 / 2.75)) * t + 0.9375) + b;
        }
        return c * (7.5625 * (t -= (2.625 / 2.75)) * t + 0.984375) + b;
    };
    RoundProgressEase.prototype.easeInOutBounce = function (t, b, c, d) {
        if (t < d / 2) {
            return this.easeInBounce(t * 2, 0, c, d) * 0.5 + b;
        }
        return this.easeOutBounce(t * 2 - d, 0, c, d) * 0.5 + c * 0.5 + b;
    };
    RoundProgressEase = __decorate([
        core_1.Injectable()
    ], RoundProgressEase);
    return RoundProgressEase;
}());
exports.RoundProgressEase = RoundProgressEase;
/**
 * TERMS OF USE - EASING EQUATIONS
 * Open source under the BSD License.

 * Copyright © 2001 Robert Penner
 * All rights reserved.
 * Redistribution and use in source and binary forms, with or without modification, are permitted
 * provided that the following conditions are met:

 * Redistributions of source code must retain the above copyright notice, this list of conditions
 * and the following disclaimer.
 *
 * Redistributions in binary form must reproduce the above copyright notice, this list of conditions
 * and the following disclaimer in the documentation and/or other materials provided with the
 * distribution.
 *
 * Neither the name of the author nor the names of contributors may be used to endorse or promote
 * products derived from this software without specific prior written permission.
 *
 * THIS SOFTWARE IS PROVIDED BY THE COPYRIGHT HOLDERS AND CONTRIBUTORS "AS IS" AND ANY EXPRESS OR
 * IMPLIED WARRANTIES, INCLUDING, BUT NOT LIMITED TO, THE IMPLIED WARRANTIES OF MERCHANTABILITY AND
 * FITNESS FOR A PARTICULAR PURPOSE ARE DISCLAIMED. IN NO EVENT SHALL THE COPYRIGHT OWNER OR
 * CONTRIBUTORS BE LIABLE FOR ANY DIRECT, INDIRECT, INCIDENTAL, SPECIAL, EXEMPLARY, OR CONSEQUENTIAL
 * DAMAGES (INCLUDING, BUT NOT LIMITED TO, PROCUREMENT OF SUBSTITUTE GOODS OR SERVICES; LOSS OF USE,
 * DATA, OR PROFITS; OR BUSINESS INTERRUPTION) HOWEVER CAUSED AND ON ANY THEORY OF LIABILITY,
 * WHETHER IN CONTRACT, STRICT LIABILITY, OR TORT (INCLUDING NEGLIGENCE OR OTHERWISE) ARISING IN
 * ANY WAY OUT OF THE USE OF THIS SOFTWARE, EVEN IF ADVISED OF THE POSSIBILITY OF SUCH DAMAGE.
 */
//# sourceMappingURL=round-progress.ease.js.map

/***/ }),

/***/ "./node_modules/angular-svg-round-progressbar/dist/round-progress.service.js":
/*!***********************************************************************************!*\
  !*** ./node_modules/angular-svg-round-progressbar/dist/round-progress.service.js ***!
  \***********************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var __param = (this && this.__param) || function (paramIndex, decorator) {
    return function (target, key) { decorator(target, key, paramIndex); }
};
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
var common_1 = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm2015/common.js");
var DEGREE_IN_RADIANS = Math.PI / 180;
var RoundProgressService = /** @class */ (function () {
    function RoundProgressService(document) {
        this.supportsSvg = !!(document &&
            document.createElementNS &&
            document.createElementNS('http://www.w3.org/2000/svg', 'svg').createSVGRect);
        this._base = document && document.head.querySelector('base');
        this._hasPerf = typeof window !== 'undefined' &&
            window.performance &&
            window.performance.now &&
            typeof window.performance.now() === 'number';
    }
    /**
     * Resolves a SVG color against the page's `base` tag.
     */
    RoundProgressService.prototype.resolveColor = function (color) {
        if (this._base && this._base.href) {
            var hashIndex = color.indexOf('#');
            if (hashIndex > -1 && color.indexOf('url') > -1) {
                return color.slice(0, hashIndex) + location.href + color.slice(hashIndex);
            }
        }
        return color;
    };
    /**
     * Generates a timestamp.
     */
    RoundProgressService.prototype.getTimestamp = function () {
        return this._hasPerf ? window.performance.now() : Date.now();
    };
    /**
     * Generates the value for an SVG arc.
     * @param current       Current value.
     * @param total         Maximum value.
     * @param pathRadius    Radius of the SVG path.
     * @param elementRadius Radius of the SVG container.
     * @param isSemicircle  Whether the element should be a semicircle.
     */
    RoundProgressService.prototype.getArc = function (current, total, pathRadius, elementRadius, isSemicircle) {
        if (isSemicircle === void 0) { isSemicircle = false; }
        var value = Math.max(0, Math.min(current || 0, total));
        var maxAngle = isSemicircle ? 180 : 359.9999;
        var percentage = total === 0 ? maxAngle : (value / total) * maxAngle;
        var start = this._polarToCartesian(elementRadius, pathRadius, percentage);
        var end = this._polarToCartesian(elementRadius, pathRadius, 0);
        var arcSweep = (percentage <= 180 ? 0 : 1);
        return "M " + start + " A " + pathRadius + " " + pathRadius + " 0 " + arcSweep + " 0 " + end;
    };
    /**
     * Converts polar cooradinates to Cartesian.
     * @param elementRadius  Radius of the wrapper element.
     * @param pathRadius     Radius of the path being described.
     * @param angleInDegrees Degree to be converted.
     */
    RoundProgressService.prototype._polarToCartesian = function (elementRadius, pathRadius, angleInDegrees) {
        var angleInRadians = (angleInDegrees - 90) * DEGREE_IN_RADIANS;
        var x = elementRadius + (pathRadius * Math.cos(angleInRadians));
        var y = elementRadius + (pathRadius * Math.sin(angleInRadians));
        return x + ' ' + y;
    };
    RoundProgressService = __decorate([
        core_1.Injectable(),
        __param(0, core_1.Optional()), __param(0, core_1.Inject(common_1.DOCUMENT)),
        __metadata("design:paramtypes", [Object])
    ], RoundProgressService);
    return RoundProgressService;
}());
exports.RoundProgressService = RoundProgressService;
//# sourceMappingURL=round-progress.service.js.map

/***/ }),

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/home/home.page.html":
/*!***************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/home/home.page.html ***!
  \***************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<ion-header [translucent]=\"true\">\n  <ion-toolbar color='primary' >\n  \n        <ion-title id=\"title\">Management</ion-title>\n        <ion-menu-button color='light' slot=\"end\"></ion-menu-button>\n  </ion-toolbar>\n</ion-header>\n\n<ion-content>\n\n   \n\n  <div id=\"container\">\n   \n    <ion-button routerLink='/revisionjour' class=\"buttonc\" color='primary' expand='full'><h2> Révision du jour </h2> </ion-button>\n    \n    <h6>ma progression : {{homeCompteur}}/{{motsparjour}}</h6>\n    <ion-progress-bar value={{compteurjour}} ></ion-progress-bar> \n    \n    <br><br><br>\n    \n    <ion-button class=\"buttonc\" color='primary' expand='full' fill='outline' routerLink='/lexique' ><h2> Mon lexique </h2> </ion-button>\n    <br>\n    <br>\n    <h2 id=\"text-align\">Niveau d'apprentissage : </h2>\n\n    <div id=\"rond\">\n      <round-progress semicircle= true responsive=true duration=\"3000\" rounded=\"true\" stroke=25 color=#ffca37fd [current]=m [max]=100></round-progress>\n      \n    </div>\n   \n    <h3 id=\"pourcentage\"> {{m}}%</h3>\n  </div>\n  \n \n\n  \n\n</ion-content>\n");

/***/ }),

/***/ "./src/app/home/home.module.ts":
/*!*************************************!*\
  !*** ./src/app/home/home.module.ts ***!
  \*************************************/
/*! exports provided: YourModule, HomePageModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "YourModule", function() { return YourModule; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "HomePageModule", function() { return HomePageModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm2015/common.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/fesm2015/ionic-angular.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm2015/forms.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");
/* harmony import */ var angular_svg_round_progressbar__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! angular-svg-round-progressbar */ "./node_modules/angular-svg-round-progressbar/dist/index.js");
/* harmony import */ var angular_svg_round_progressbar__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(angular_svg_round_progressbar__WEBPACK_IMPORTED_MODULE_6__);
/* harmony import */ var _home_page__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./home.page */ "./src/app/home/home.page.ts");







class YourModule {
}
;

let HomePageModule = class HomePageModule {
};
HomePageModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [
            angular_svg_round_progressbar__WEBPACK_IMPORTED_MODULE_6__["RoundProgressModule"],
            _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_4__["FormsModule"],
            _ionic_angular__WEBPACK_IMPORTED_MODULE_3__["IonicModule"],
            _angular_router__WEBPACK_IMPORTED_MODULE_5__["RouterModule"].forChild([
                {
                    path: '',
                    component: _home_page__WEBPACK_IMPORTED_MODULE_7__["HomePage"]
                }
            ])
        ],
        declarations: [_home_page__WEBPACK_IMPORTED_MODULE_7__["HomePage"]]
    })
], HomePageModule);



/***/ }),

/***/ "./src/app/home/home.page.scss":
/*!*************************************!*\
  !*** ./src/app/home/home.page.scss ***!
  \*************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("#container {\n  padding-left: 1em;\n  padding-right: 1em;\n  position: absolute;\n  left: 0;\n  right: 0;\n  top: 8%;\n}\n\n#title {\n  font-size: 26px;\n  text-align: left;\n  position: relative;\n  padding-left: 50px;\n  margin-top: 20px;\n  margin-bottom: 10px;\n}\n\n#text-align {\n  text-align: center;\n}\n\n#pourcentage {\n  text-align: center;\n  font-size: 32px;\n  line-height: 27px;\n  position: relative;\n  top: -50px;\n}\n\n#contenair2 {\n  padding-left: 1em;\n  padding-right: 1em;\n  position: absolute;\n  left: 0;\n  right: 0;\n  bottom: 35%;\n  text-align: center;\n}\n\n#rond {\n  padding: 1em;\n  width: 100%;\n  padding-left: 30%;\n  padding-right: 30%;\n}\n\n.buttonc {\n  height: 4em;\n  --border-width: 5px;\n}\n\nh6 {\n  color: grey;\n  text-align: right;\n}\n\nh2 {\n  margin: 1em;\n}\n\nh1 {\n  text-align: left;\n  position: relative;\n  left: 7%;\n}\n\n#container strong {\n  font-size: 20px;\n  line-height: 26px;\n}\n\n#container p {\n  font-size: 16px;\n  line-height: 22px;\n  color: #8c8c8c;\n  margin: 0;\n}\n\n#container a {\n  text-decoration: none;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvaG9tZS9DOlxcVXNlcnNcXGR1ZmV1XFxpb25pY19wXFxmbGFzaC9zcmNcXGFwcFxcaG9tZVxcaG9tZS5wYWdlLnNjc3MiLCJzcmMvYXBwL2hvbWUvaG9tZS5wYWdlLnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFFRSxpQkFBQTtFQUNBLGtCQUFBO0VBQ0Esa0JBQUE7RUFDQSxPQUFBO0VBQ0EsUUFBQTtFQUNBLE9BQUE7QUNBRjs7QURHQTtFQUNFLGVBQUE7RUFDQSxnQkFBQTtFQUNBLGtCQUFBO0VBQ0Esa0JBQUE7RUFDQSxnQkFBQTtFQUNBLG1CQUFBO0FDQUY7O0FERUE7RUFDRSxrQkFBQTtBQ0NGOztBRENBO0VBQ0Usa0JBQUE7RUFDQSxlQUFBO0VBQ0EsaUJBQUE7RUFDQSxrQkFBQTtFQUNBLFVBQUE7QUNFRjs7QURBQTtFQUNFLGlCQUFBO0VBQ0Esa0JBQUE7RUFDQSxrQkFBQTtFQUNBLE9BQUE7RUFDQSxRQUFBO0VBQ0EsV0FBQTtFQUNBLGtCQUFBO0FDR0Y7O0FEQ0E7RUFDRSxZQUFBO0VBQ0EsV0FBQTtFQUVBLGlCQUFBO0VBQ0Esa0JBQUE7QUNDRjs7QURFQTtFQUNFLFdBQUE7RUFDQSxtQkFBQTtBQ0NGOztBRENBO0VBQ0UsV0FBQTtFQUNBLGlCQUFBO0FDRUY7O0FEQUE7RUFDRSxXQUFBO0FDR0Y7O0FEQUE7RUFDRSxnQkFBQTtFQUNBLGtCQUFBO0VBQ0EsUUFBQTtBQ0dGOztBRERBO0VBQ0UsZUFBQTtFQUNBLGlCQUFBO0FDSUY7O0FEREE7RUFDRSxlQUFBO0VBQ0EsaUJBQUE7RUFFQSxjQUFBO0VBRUEsU0FBQTtBQ0VGOztBRENBO0VBQ0UscUJBQUE7QUNFRiIsImZpbGUiOiJzcmMvYXBwL2hvbWUvaG9tZS5wYWdlLnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyIjY29udGFpbmVyIHtcbiAgXG4gIHBhZGRpbmctbGVmdDogMWVtO1xuICBwYWRkaW5nLXJpZ2h0OiAxZW07XG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgbGVmdDogMDtcbiAgcmlnaHQ6IDA7XG4gIHRvcDogOCU7XG5cbn1cbiN0aXRsZSB7XG4gIGZvbnQtc2l6ZTogMjZweDtcbiAgdGV4dC1hbGlnbjogbGVmdDtcbiAgcG9zaXRpb246IHJlbGF0aXZlO1xuICBwYWRkaW5nLWxlZnQ6IDUwcHg7XG4gIG1hcmdpbi10b3A6IDIwcHg7XG4gIG1hcmdpbi1ib3R0b206IDEwcHg7XG59XG4jdGV4dC1hbGlnbiB7XG4gIHRleHQtYWxpZ246IGNlbnRlcjtcbn1cbiNwb3VyY2VudGFnZSB7XG4gIHRleHQtYWxpZ246IGNlbnRlcjtcbiAgZm9udC1zaXplOiAzMnB4O1xuICBsaW5lLWhlaWdodDogMjdweDtcbiAgcG9zaXRpb246IHJlbGF0aXZlO1xuICB0b3A6IC01MHB4O1xufVxuI2NvbnRlbmFpcjIge1xuICBwYWRkaW5nLWxlZnQ6IDFlbTtcbiAgcGFkZGluZy1yaWdodDogMWVtO1xuICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gIGxlZnQ6IDA7XG4gIHJpZ2h0OiAwO1xuICBib3R0b206IDM1JTtcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xuXG5cbn1cbiNyb25kIHtcbiAgcGFkZGluZzogMWVtO1xuICB3aWR0aDogMTAwJTtcbiAgXG4gIHBhZGRpbmctbGVmdDogMzAlO1xuICBwYWRkaW5nLXJpZ2h0OiAzMCU7XG59XG5cbi5idXR0b25jIHtcbiAgaGVpZ2h0OiA0ZW07XG4gIC0tYm9yZGVyLXdpZHRoOiA1cHg7XG59XG5oNiB7XG4gIGNvbG9yOiBncmV5O1xuICB0ZXh0LWFsaWduOiByaWdodDtcbn1cbmgyIHtcbiAgbWFyZ2luOiAxZW07XG4gIFxufVxuaDEge1xuICB0ZXh0LWFsaWduOiBsZWZ0O1xuICBwb3NpdGlvbjogcmVsYXRpdmU7XG4gIGxlZnQ6IDclO1xufVxuI2NvbnRhaW5lciBzdHJvbmcge1xuICBmb250LXNpemU6IDIwcHg7XG4gIGxpbmUtaGVpZ2h0OiAyNnB4O1xufVxuXG4jY29udGFpbmVyIHAge1xuICBmb250LXNpemU6IDE2cHg7XG4gIGxpbmUtaGVpZ2h0OiAyMnB4O1xuICBcbiAgY29sb3I6ICM4YzhjOGM7XG5cbiAgbWFyZ2luOiAwO1xufVxuXG4jY29udGFpbmVyIGEge1xuICB0ZXh0LWRlY29yYXRpb246IG5vbmU7XG59IiwiI2NvbnRhaW5lciB7XG4gIHBhZGRpbmctbGVmdDogMWVtO1xuICBwYWRkaW5nLXJpZ2h0OiAxZW07XG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgbGVmdDogMDtcbiAgcmlnaHQ6IDA7XG4gIHRvcDogOCU7XG59XG5cbiN0aXRsZSB7XG4gIGZvbnQtc2l6ZTogMjZweDtcbiAgdGV4dC1hbGlnbjogbGVmdDtcbiAgcG9zaXRpb246IHJlbGF0aXZlO1xuICBwYWRkaW5nLWxlZnQ6IDUwcHg7XG4gIG1hcmdpbi10b3A6IDIwcHg7XG4gIG1hcmdpbi1ib3R0b206IDEwcHg7XG59XG5cbiN0ZXh0LWFsaWduIHtcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xufVxuXG4jcG91cmNlbnRhZ2Uge1xuICB0ZXh0LWFsaWduOiBjZW50ZXI7XG4gIGZvbnQtc2l6ZTogMzJweDtcbiAgbGluZS1oZWlnaHQ6IDI3cHg7XG4gIHBvc2l0aW9uOiByZWxhdGl2ZTtcbiAgdG9wOiAtNTBweDtcbn1cblxuI2NvbnRlbmFpcjIge1xuICBwYWRkaW5nLWxlZnQ6IDFlbTtcbiAgcGFkZGluZy1yaWdodDogMWVtO1xuICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gIGxlZnQ6IDA7XG4gIHJpZ2h0OiAwO1xuICBib3R0b206IDM1JTtcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xufVxuXG4jcm9uZCB7XG4gIHBhZGRpbmc6IDFlbTtcbiAgd2lkdGg6IDEwMCU7XG4gIHBhZGRpbmctbGVmdDogMzAlO1xuICBwYWRkaW5nLXJpZ2h0OiAzMCU7XG59XG5cbi5idXR0b25jIHtcbiAgaGVpZ2h0OiA0ZW07XG4gIC0tYm9yZGVyLXdpZHRoOiA1cHg7XG59XG5cbmg2IHtcbiAgY29sb3I6IGdyZXk7XG4gIHRleHQtYWxpZ246IHJpZ2h0O1xufVxuXG5oMiB7XG4gIG1hcmdpbjogMWVtO1xufVxuXG5oMSB7XG4gIHRleHQtYWxpZ246IGxlZnQ7XG4gIHBvc2l0aW9uOiByZWxhdGl2ZTtcbiAgbGVmdDogNyU7XG59XG5cbiNjb250YWluZXIgc3Ryb25nIHtcbiAgZm9udC1zaXplOiAyMHB4O1xuICBsaW5lLWhlaWdodDogMjZweDtcbn1cblxuI2NvbnRhaW5lciBwIHtcbiAgZm9udC1zaXplOiAxNnB4O1xuICBsaW5lLWhlaWdodDogMjJweDtcbiAgY29sb3I6ICM4YzhjOGM7XG4gIG1hcmdpbjogMDtcbn1cblxuI2NvbnRhaW5lciBhIHtcbiAgdGV4dC1kZWNvcmF0aW9uOiBub25lO1xufSJdfQ== */");

/***/ }),

/***/ "./src/app/home/home.page.ts":
/*!***********************************!*\
  !*** ./src/app/home/home.page.ts ***!
  \***********************************/
/*! exports provided: HomePage */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "HomePage", function() { return HomePage; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var angularfire2_auth__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! angularfire2/auth */ "./node_modules/angularfire2/auth/index.js");
/* harmony import */ var angularfire2_auth__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(angularfire2_auth__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm2015/http.js");




let HomePage = class HomePage {
    constructor(fAuth, httpCLient) {
        this.fAuth = fAuth;
        this.httpCLient = httpCLient;
        this.cUser = this.fAuth.auth.currentUser.uid;
        this.homeCompteur = 0;
        this.compteurjour = 0;
        this.a = 0;
        this.datejour = new Date();
        this.date2 = this.datejour.toDateString();
        this.dateobject = [{ date1: this.date2 }];
    }
    getMotsparjourToServeur() {
        this.httpCLient.get('https://flash-2ad53.firebaseio.com/' + this.cUser + '/compteur.json')
            .subscribe((response) => {
            this.homeCompteur = response;
            console.log('compteur du jour a' + this.homeCompteur);
            this.httpCLient.get('https://flash-2ad53.firebaseio.com/' + this.cUser + '/motsparjour.json')
                .subscribe((response) => {
                this.motsparjour = response;
                console.log('progression chargé');
                if (this.homeCompteur >= this.motsparjour) {
                    this.compteurjour = 1;
                    this.homeCompteur = this.motsparjour;
                }
                else {
                    this.compteurjour = this.homeCompteur / this.motsparjour;
                }
                ;
                console.log(this.compteurjour);
                console.log(this.homeCompteur);
            }, (error) => {
                console.log('erreur de chargement de la progression' + error);
            });
        }, (error) => {
            console.log('erreur de chargement de la progression' + error);
        });
    }
    /*getCompteur() {
      this.httpCLient.get<any>( 'https://flash-2ad53.firebaseio.com/'+ this.cUser +'/compteur.json' )
      .subscribe ( (response) => {
        this.homeCompteur = response;
        console.log ('compteur du jour a'+this.homeCompteur);
      },
          (error) => {
            console.log ('erreur de chargement de la progression' + error);
          }
      );
    }
  */
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
    //logout non encore intégré
    logout() {
        this.fAuth.auth.signOut();
    }
    progressionG() {
        this.httpCLient.get('https://flash-2ad53.firebaseio.com/' + this.cUser + '/fiches.json')
            .subscribe((response) => {
            var fiches = response;
            console.log('progression en cours de chargement' + fiches.length);
            this.m = 0;
            for (let i = 0; i < fiches.length; i++) {
                this.m = this.m + fiches[i].lvl;
            }
            ;
            this.m = Math.floor((this.m * 10) / fiches.length);
            console.log(this.m);
            ;
        });
    }
    ;
    ngOnInit() {
        // this.getCompteur();
        this.progressionG();
        this.getMotsparjourToServeur();
        this.SuiviProgressionJournalière();
    }
    ionViewWillEnter() {
        this.progressionG();
        this.getMotsparjourToServeur();
        this.SuiviProgressionJournalière();
    }
};
HomePage.ctorParameters = () => [
    { type: angularfire2_auth__WEBPACK_IMPORTED_MODULE_2__["AngularFireAuth"] },
    { type: _angular_common_http__WEBPACK_IMPORTED_MODULE_3__["HttpClient"] }
];
HomePage = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-home',
        template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./home.page.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/home/home.page.html")).default,
        styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! ./home.page.scss */ "./src/app/home/home.page.scss")).default]
    }),
    tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [angularfire2_auth__WEBPACK_IMPORTED_MODULE_2__["AngularFireAuth"], _angular_common_http__WEBPACK_IMPORTED_MODULE_3__["HttpClient"]])
], HomePage);



/***/ })

}]);
//# sourceMappingURL=home-home-module-es2015.js.map