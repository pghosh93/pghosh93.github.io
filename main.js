(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["main"],{

/***/ "./src/$$_lazy_route_resource lazy recursive":
/*!**********************************************************!*\
  !*** ./src/$$_lazy_route_resource lazy namespace object ***!
  \**********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

function webpackEmptyAsyncContext(req) {
	// Here Promise.resolve().then() is used instead of new Promise() to prevent
	// uncaught exception popping up in devtools
	return Promise.resolve().then(function() {
		var e = new Error("Cannot find module '" + req + "'");
		e.code = 'MODULE_NOT_FOUND';
		throw e;
	});
}
webpackEmptyAsyncContext.keys = function() { return []; };
webpackEmptyAsyncContext.resolve = webpackEmptyAsyncContext;
module.exports = webpackEmptyAsyncContext;
webpackEmptyAsyncContext.id = "./src/$$_lazy_route_resource lazy recursive";

/***/ }),

/***/ "./src/app/app-routing.module.ts":
/*!***************************************!*\
  !*** ./src/app/app-routing.module.ts ***!
  \***************************************/
/*! exports provided: AppRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppRoutingModule", function() { return AppRoutingModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");



var routes = [];
var AppRoutingModule = /** @class */ (function () {
    function AppRoutingModule() {
    }
    AppRoutingModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
            imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forRoot(routes)],
            exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]]
        })
    ], AppRoutingModule);
    return AppRoutingModule;
}());



/***/ }),

/***/ "./src/app/app.component.css":
/*!***********************************!*\
  !*** ./src/app/app.component.css ***!
  \***********************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".menu-content{\n    display: inline-block;\n    width: 75%;\n}\n.action-content{\n    display: inline-block;\n    width: 25%;\n    text-align: right;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFwcC9hcHAuY29tcG9uZW50LmNzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtJQUNJLHFCQUFxQjtJQUNyQixVQUFVO0FBQ2Q7QUFDQTtJQUNJLHFCQUFxQjtJQUNyQixVQUFVO0lBQ1YsaUJBQWlCO0FBQ3JCIiwiZmlsZSI6ImFwcC9hcHAuY29tcG9uZW50LmNzcyIsInNvdXJjZXNDb250ZW50IjpbIi5tZW51LWNvbnRlbnR7XG4gICAgZGlzcGxheTogaW5saW5lLWJsb2NrO1xuICAgIHdpZHRoOiA3NSU7XG59XG4uYWN0aW9uLWNvbnRlbnR7XG4gICAgZGlzcGxheTogaW5saW5lLWJsb2NrO1xuICAgIHdpZHRoOiAyNSU7XG4gICAgdGV4dC1hbGlnbjogcmlnaHQ7XG59Il19 */"

/***/ }),

/***/ "./src/app/app.component.html":
/*!************************************!*\
  !*** ./src/app/app.component.html ***!
  \************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<mat-toolbar color=\"primary\">\n    <span><span style=\"color:#fff;font-weight:bold\">the</span>muse Job Portal</span>\n</mat-toolbar>\n    \n<router-outlet></router-outlet>"

/***/ }),

/***/ "./src/app/app.component.ts":
/*!**********************************!*\
  !*** ./src/app/app.component.ts ***!
  \**********************************/
/*! exports provided: AppComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppComponent", function() { return AppComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _modules_authentication_authentication_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./modules/authentication/authentication.service */ "./src/app/modules/authentication/authentication.service.ts");




var AppComponent = /** @class */ (function () {
    function AppComponent(authenticationService, routes) {
        this.authenticationService = authenticationService;
        this.routes = routes;
        this.title = 'the muse Job Portal';
    }
    AppComponent.prototype.Logout = function () {
        this.authenticationService.deleteToken();
        this.routes.navigate(['/login']);
    };
    AppComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-root',
            template: __webpack_require__(/*! ./app.component.html */ "./src/app/app.component.html"),
            styles: [__webpack_require__(/*! ./app.component.css */ "./src/app/app.component.css")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_modules_authentication_authentication_service__WEBPACK_IMPORTED_MODULE_3__["AuthenticationService"],
            _angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"]])
    ], AppComponent);
    return AppComponent;
}());



/***/ }),

/***/ "./src/app/app.module.ts":
/*!*******************************!*\
  !*** ./src/app/app.module.ts ***!
  \*******************************/
/*! exports provided: AppModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppModule", function() { return AppModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/platform-browser */ "./node_modules/@angular/platform-browser/fesm5/platform-browser.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/platform-browser/animations */ "./node_modules/@angular/platform-browser/fesm5/animations.js");
/* harmony import */ var _angular_material_toolbar__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/material/toolbar */ "./node_modules/@angular/material/esm5/toolbar.es5.js");
/* harmony import */ var _angular_material_button__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/material/button */ "./node_modules/@angular/material/esm5/button.es5.js");
/* harmony import */ var _angular_material_dialog__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/material/dialog */ "./node_modules/@angular/material/esm5/dialog.es5.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _angular_material_input__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @angular/material/input */ "./node_modules/@angular/material/esm5/input.es5.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm5/http.js");
/* harmony import */ var _angular_material_autocomplete__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! @angular/material/autocomplete */ "./node_modules/@angular/material/esm5/autocomplete.es5.js");
/* harmony import */ var ngx_pagination__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ngx-pagination */ "./node_modules/ngx-pagination/dist/ngx-pagination.js");
/* harmony import */ var _app_routing_module__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ./app-routing.module */ "./src/app/app-routing.module.ts");
/* harmony import */ var _app_component__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! ./app.component */ "./src/app/app.component.ts");
/* harmony import */ var _auth_guard_service__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! ./auth-guard.service */ "./src/app/auth-guard.service.ts");
/* harmony import */ var _general_service__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! ./general.service */ "./src/app/general.service.ts");
/* harmony import */ var _modules_authentication_authentication_module__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! ./modules/authentication/authentication.module */ "./src/app/modules/authentication/authentication.module.ts");
/* harmony import */ var _modules_job_job_module__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(/*! ./modules/job/job.module */ "./src/app/modules/job/job.module.ts");



















var appRoutes = [
    {
        path: '',
        redirectTo: '/login',
        pathMatch: 'full'
    }
];
var AppModule = /** @class */ (function () {
    function AppModule() {
    }
    AppModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["NgModule"])({
            declarations: [
                _app_component__WEBPACK_IMPORTED_MODULE_14__["AppComponent"]
            ],
            imports: [
                _angular_platform_browser__WEBPACK_IMPORTED_MODULE_1__["BrowserModule"],
                _app_routing_module__WEBPACK_IMPORTED_MODULE_13__["AppRoutingModule"],
                _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_4__["BrowserAnimationsModule"],
                _angular_material_toolbar__WEBPACK_IMPORTED_MODULE_5__["MatToolbarModule"],
                _angular_material_button__WEBPACK_IMPORTED_MODULE_6__["MatButtonModule"],
                _angular_material_dialog__WEBPACK_IMPORTED_MODULE_7__["MatDialogModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_8__["FormsModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_8__["ReactiveFormsModule"],
                _angular_material_input__WEBPACK_IMPORTED_MODULE_9__["MatInputModule"],
                _angular_common_http__WEBPACK_IMPORTED_MODULE_10__["HttpClientModule"],
                _angular_material_autocomplete__WEBPACK_IMPORTED_MODULE_11__["MatAutocompleteModule"],
                ngx_pagination__WEBPACK_IMPORTED_MODULE_12__["NgxPaginationModule"],
                _modules_authentication_authentication_module__WEBPACK_IMPORTED_MODULE_17__["AuthenticationModule"],
                _modules_job_job_module__WEBPACK_IMPORTED_MODULE_18__["JobModule"],
                _angular_router__WEBPACK_IMPORTED_MODULE_3__["RouterModule"].forRoot(appRoutes)
            ],
            providers: [_auth_guard_service__WEBPACK_IMPORTED_MODULE_15__["AuthguardService"], _general_service__WEBPACK_IMPORTED_MODULE_16__["GeneralService"]],
            bootstrap: [_app_component__WEBPACK_IMPORTED_MODULE_14__["AppComponent"]],
            schemas: [_angular_core__WEBPACK_IMPORTED_MODULE_2__["CUSTOM_ELEMENTS_SCHEMA"]]
        })
    ], AppModule);
    return AppModule;
}());



/***/ }),

/***/ "./src/app/auth-guard.service.ts":
/*!***************************************!*\
  !*** ./src/app/auth-guard.service.ts ***!
  \***************************************/
/*! exports provided: AuthguardService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AuthguardService", function() { return AuthguardService; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _modules_authentication_authentication_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./modules/authentication/authentication.service */ "./src/app/modules/authentication/authentication.service.ts");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");




var AuthguardService = /** @class */ (function () {
    function AuthguardService(router, authenticationService) {
        this.router = router;
        this.authenticationService = authenticationService;
    }
    AuthguardService.prototype.canActivate = function () {
        if (!this.authenticationService.isTokenExpired()) {
            return true;
        }
        this.router.navigate(['/login']);
        return false;
    };
    AuthguardService = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["Injectable"])(),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_router__WEBPACK_IMPORTED_MODULE_3__["Router"],
            _modules_authentication_authentication_service__WEBPACK_IMPORTED_MODULE_1__["AuthenticationService"]])
    ], AuthguardService);
    return AuthguardService;
}());



/***/ }),

/***/ "./src/app/general.service.ts":
/*!************************************!*\
  !*** ./src/app/general.service.ts ***!
  \************************************/
/*! exports provided: GeneralService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "GeneralService", function() { return GeneralService; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");


var GeneralService = /** @class */ (function () {
    function GeneralService() {
    }
    GeneralService.prototype.setSearchParamValue = function (searchParamVal) {
        this.searchParam = searchParamVal;
    };
    GeneralService = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])(),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [])
    ], GeneralService);
    return GeneralService;
}());



/***/ }),

/***/ "./src/app/modules/authentication/User.ts":
/*!************************************************!*\
  !*** ./src/app/modules/authentication/User.ts ***!
  \************************************************/
/*! exports provided: User */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "User", function() { return User; });
var User = /** @class */ (function () {
    function User() {
    }
    return User;
}());



/***/ }),

/***/ "./src/app/modules/authentication/authentication-router.module.ts":
/*!************************************************************************!*\
  !*** ./src/app/modules/authentication/authentication-router.module.ts ***!
  \************************************************************************/
/*! exports provided: AuthenticationRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AuthenticationRoutingModule", function() { return AuthenticationRoutingModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _login_login_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./login/login.component */ "./src/app/modules/authentication/login/login.component.ts");
/* harmony import */ var _register_register_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./register/register.component */ "./src/app/modules/authentication/register/register.component.ts");





var authenticationRoutes = [
    {
        path: '',
        children: [
            {
                path: '',
                redirectTo: '/login',
                pathMatch: 'full'
            },
            {
                path: 'register',
                component: _register_register_component__WEBPACK_IMPORTED_MODULE_4__["RegisterComponent"]
            },
            {
                path: 'login',
                component: _login_login_component__WEBPACK_IMPORTED_MODULE_3__["LoginComponent"]
            }
        ]
    }
];
var AuthenticationRoutingModule = /** @class */ (function () {
    function AuthenticationRoutingModule() {
    }
    AuthenticationRoutingModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
            imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forRoot(authenticationRoutes)],
            exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]]
        })
    ], AuthenticationRoutingModule);
    return AuthenticationRoutingModule;
}());



/***/ }),

/***/ "./src/app/modules/authentication/authentication.module.ts":
/*!*****************************************************************!*\
  !*** ./src/app/modules/authentication/authentication.module.ts ***!
  \*****************************************************************/
/*! exports provided: AuthenticationModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AuthenticationModule", function() { return AuthenticationModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _angular_material_button__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/material/button */ "./node_modules/@angular/material/esm5/button.es5.js");
/* harmony import */ var _angular_material_icon__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/material/icon */ "./node_modules/@angular/material/esm5/icon.es5.js");
/* harmony import */ var _angular_material__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/material */ "./node_modules/@angular/material/esm5/material.es5.js");
/* harmony import */ var _angular_material_card__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/material/card */ "./node_modules/@angular/material/esm5/card.es5.js");
/* harmony import */ var _register_register_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./register/register.component */ "./src/app/modules/authentication/register/register.component.ts");
/* harmony import */ var _authentication_service__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./authentication.service */ "./src/app/modules/authentication/authentication.service.ts");
/* harmony import */ var _authentication_router_module__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./authentication-router.module */ "./src/app/modules/authentication/authentication-router.module.ts");
/* harmony import */ var _login_login_component__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ./login/login.component */ "./src/app/modules/authentication/login/login.component.ts");














var AuthenticationModule = /** @class */ (function () {
    function AuthenticationModule() {
    }
    AuthenticationModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
            imports: [
                _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"],
                _authentication_router_module__WEBPACK_IMPORTED_MODULE_10__["AuthenticationRoutingModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_6__["MatFormFieldModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_6__["MatInputModule"],
                _angular_material_button__WEBPACK_IMPORTED_MODULE_4__["MatButtonModule"],
                _angular_material_icon__WEBPACK_IMPORTED_MODULE_5__["MatIconModule"],
                _angular_material_card__WEBPACK_IMPORTED_MODULE_7__["MatCardModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_6__["MatToolbarModule"]
            ],
            declarations: [
                _login_login_component__WEBPACK_IMPORTED_MODULE_11__["LoginComponent"],
                _register_register_component__WEBPACK_IMPORTED_MODULE_8__["RegisterComponent"]
            ],
            providers: [_authentication_service__WEBPACK_IMPORTED_MODULE_9__["AuthenticationService"]],
            exports: [
                _register_register_component__WEBPACK_IMPORTED_MODULE_8__["RegisterComponent"],
                _login_login_component__WEBPACK_IMPORTED_MODULE_11__["LoginComponent"]
            ]
            //// schemas: [CUSTOM_ELEMENTS_SCHEMA ] 
        })
    ], AuthenticationModule);
    return AuthenticationModule;
}());



/***/ }),

/***/ "./src/app/modules/authentication/authentication.service.ts":
/*!******************************************************************!*\
  !*** ./src/app/modules/authentication/authentication.service.ts ***!
  \******************************************************************/
/*! exports provided: TOKEN_NAME, AuthenticationService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "TOKEN_NAME", function() { return TOKEN_NAME; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AuthenticationService", function() { return AuthenticationService; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm5/http.js");
/* harmony import */ var jwt_decode__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! jwt-decode */ "./node_modules/jwt-decode/lib/index.js");
/* harmony import */ var jwt_decode__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(jwt_decode__WEBPACK_IMPORTED_MODULE_3__);




var TOKEN_NAME = 'jwt_token';
var AuthenticationService = /** @class */ (function () {
    function AuthenticationService(httpClient) {
        this.httpClient = httpClient;
        this.springEndPoint = 'http://localhost:8085/museauth/api/v1/userservice';
    }
    AuthenticationService.prototype.registerUser = function (newUser) {
        var url = this.springEndPoint + "/register";
        return this.httpClient.post(url, newUser, { responseType: 'text' });
    };
    AuthenticationService.prototype.loginUser = function (newUser) {
        var url = this.springEndPoint + "/login";
        return this.httpClient.post(url, newUser);
    };
    AuthenticationService.prototype.setToken = function (token) {
        return localStorage.setItem(TOKEN_NAME, token);
    };
    AuthenticationService.prototype.getToken = function () {
        return localStorage.getItem(TOKEN_NAME);
    };
    AuthenticationService.prototype.deleteToken = function () {
        return localStorage.removeItem(TOKEN_NAME);
    };
    AuthenticationService.prototype.getTokenExpirationDate = function (token) {
        var decoded = jwt_decode__WEBPACK_IMPORTED_MODULE_3__(token);
        if (decoded.exp === undefined)
            return null;
        var date = new Date(0);
        date.setUTCSeconds(decoded.exp);
        return date;
    };
    AuthenticationService.prototype.isTokenExpired = function (token) {
        if (!token)
            token = this.getToken();
        if (!token)
            return true;
        var date = this.getTokenExpirationDate(token);
        if (date === undefined || date === null)
            return false;
        return !(date.valueOf() > new Date().valueOf());
    };
    AuthenticationService = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])(),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpClient"]])
    ], AuthenticationService);
    return AuthenticationService;
}());



/***/ }),

/***/ "./src/app/modules/authentication/login/login.component.css":
/*!******************************************************************!*\
  !*** ./src/app/modules/authentication/login/login.component.css ***!
  \******************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".login-content {\n\tmargin: auto;\n\twidth: 50%;\n\tpadding: 10px;\n\tpadding-top: 50px;\n\tdisplay: flex;\n\talign-content: center;\n\tjustify-content: center;\n\tflex-flow:column nowrap;\n\talign-items: center;\n\t}\n\n.input-field {\n\twidth: 100%;\n}\n\n.header {\n\ttext-align: center;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFwcC9tb2R1bGVzL2F1dGhlbnRpY2F0aW9uL2xvZ2luL2xvZ2luLmNvbXBvbmVudC5jc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7Q0FDQyxZQUFZO0NBQ1osVUFBVTtDQUNWLGFBQWE7Q0FDYixpQkFBaUI7Q0FDakIsYUFBYTtDQUNiLHFCQUFxQjtDQUNyQix1QkFBdUI7Q0FDdkIsdUJBQXVCO0NBQ3ZCLG1CQUFtQjtDQUNuQjs7QUFFRDtDQUNDLFdBQVc7QUFDWjs7QUFFQTtDQUNDLGtCQUFrQjtBQUNuQiIsImZpbGUiOiJhcHAvbW9kdWxlcy9hdXRoZW50aWNhdGlvbi9sb2dpbi9sb2dpbi5jb21wb25lbnQuY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLmxvZ2luLWNvbnRlbnQge1xuXHRtYXJnaW46IGF1dG87XG5cdHdpZHRoOiA1MCU7XG5cdHBhZGRpbmc6IDEwcHg7XG5cdHBhZGRpbmctdG9wOiA1MHB4O1xuXHRkaXNwbGF5OiBmbGV4O1xuXHRhbGlnbi1jb250ZW50OiBjZW50ZXI7XG5cdGp1c3RpZnktY29udGVudDogY2VudGVyO1xuXHRmbGV4LWZsb3c6Y29sdW1uIG5vd3JhcDtcblx0YWxpZ24taXRlbXM6IGNlbnRlcjtcblx0fVxuXG4uaW5wdXQtZmllbGQge1xuXHR3aWR0aDogMTAwJTtcbn1cblxuLmhlYWRlciB7XG5cdHRleHQtYWxpZ246IGNlbnRlcjtcbn0iXX0= */"

/***/ }),

/***/ "./src/app/modules/authentication/login/login.component.html":
/*!*******************************************************************!*\
  !*** ./src/app/modules/authentication/login/login.component.html ***!
  \*******************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<form class=\"login-form\" #loginForm=\"ngForm\" (ngSubmit)=\"loginUser()\" [style.fontSize.px]=\"20\">\n\t<div class=\"login-content\">\n\t\t<div class=\"row\">\n\t\t\t<h3 class=\"header\">Login User</h3>\n\t\t</div>\n\t\t<div class=\"row\">\n\t\t\t<mat-form-field class=\"input-field\">\n\t\t\t\t<input id=\"userId\" matInput placeholder=\"User Id\" [(ngModel)]=\"newUser.userId\" name=\"userId\" required minlength=\"5\" maxlength=\"10\"\n\t\t\t\t #userId=\"ngModel\">\n\t\t\t</mat-form-field>\n\t\t\t<mat-form-field class=\"input-field\">\n\t\t\t\t<input id=\"password\" matInput placeholder=\"Password\" type=\"password\" [(ngModel)]=\"newUser.password\" name=\"password\" required minlength=\"5\" maxlength=\"10\">\n\t\t\t</mat-form-field>\n\t\t</div>\n\t\t<div class=\"row\">\n\t\t\t<button class=\"login-user\" mat-raised-button color=\"primary\" type=\"submit\">Login</button>\n\t\t\t<button class=\"register-button\" mat-raised-button color=\"primary\" [routerLink]=\"['/register']\">Register</button>\n\t\t</div>\n\t</div>\n</form>"

/***/ }),

/***/ "./src/app/modules/authentication/login/login.component.ts":
/*!*****************************************************************!*\
  !*** ./src/app/modules/authentication/login/login.component.ts ***!
  \*****************************************************************/
/*! exports provided: LoginComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LoginComponent", function() { return LoginComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_material__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/material */ "./node_modules/@angular/material/esm5/material.es5.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _authentication_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./../authentication.service */ "./src/app/modules/authentication/authentication.service.ts");
/* harmony import */ var _general_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../../general.service */ "./src/app/general.service.ts");
/* harmony import */ var _User__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./../User */ "./src/app/modules/authentication/User.ts");







var LoginComponent = /** @class */ (function () {
    function LoginComponent(authService, router, generalService, snackbar) {
        this.authService = authService;
        this.router = router;
        this.generalService = generalService;
        this.snackbar = snackbar;
        this.newUser = new _User__WEBPACK_IMPORTED_MODULE_6__["User"]();
    }
    LoginComponent.prototype.ngOnInit = function () {
    };
    LoginComponent.prototype.loginUser = function () {
        var _this = this;
        if (this.newUser.userId == null || this.newUser.userId.trim().length == 0) {
            this.snackbar.open("User Id is required", "", {
                duration: 1000,
            });
        }
        else if (this.newUser.password == null || this.newUser.password.trim().length == 0) {
            this.snackbar.open("Password is required", "", {
                duration: 1000,
            });
        }
        else {
            this.authService.loginUser(this.newUser).subscribe(function (data) {
                if (data['token']) {
                    _this.authService.setToken(data['token']);
                    console.log('token', data['token']);
                    _this.router.navigate(['/job/search']);
                }
            }, function (error) {
                if (!!error && !!error.error) {
                    _this.snackbar.open(error.error, "", {
                        duration: 1000,
                    });
                }
            });
        }
    };
    LoginComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-login',
            template: __webpack_require__(/*! ./login.component.html */ "./src/app/modules/authentication/login/login.component.html"),
            styles: [__webpack_require__(/*! ./login.component.css */ "./src/app/modules/authentication/login/login.component.css")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_authentication_service__WEBPACK_IMPORTED_MODULE_4__["AuthenticationService"],
            _angular_router__WEBPACK_IMPORTED_MODULE_3__["Router"],
            _general_service__WEBPACK_IMPORTED_MODULE_5__["GeneralService"],
            _angular_material__WEBPACK_IMPORTED_MODULE_2__["MatSnackBar"]])
    ], LoginComponent);
    return LoginComponent;
}());



/***/ }),

/***/ "./src/app/modules/authentication/register/register.component.css":
/*!************************************************************************!*\
  !*** ./src/app/modules/authentication/register/register.component.css ***!
  \************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".register-content {\n\tmargin: auto;\n\twidth: 50%;\n\tpadding: 10px;\n\tpadding-top: 1px;\n\tdisplay: flex;\n\talign-content: center;\n\tjustify-content: center;\n\tflex-flow:column nowrap;\n\talign-items: center;\n}\n\n.input-field {\n\twidth: 100%;\n}\n\n.header{\n\ttext-align: center;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFwcC9tb2R1bGVzL2F1dGhlbnRpY2F0aW9uL3JlZ2lzdGVyL3JlZ2lzdGVyLmNvbXBvbmVudC5jc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7Q0FDQyxZQUFZO0NBQ1osVUFBVTtDQUNWLGFBQWE7Q0FDYixnQkFBZ0I7Q0FDaEIsYUFBYTtDQUNiLHFCQUFxQjtDQUNyQix1QkFBdUI7Q0FDdkIsdUJBQXVCO0NBQ3ZCLG1CQUFtQjtBQUNwQjs7QUFFQTtDQUNDLFdBQVc7QUFDWjs7QUFFQTtDQUNDLGtCQUFrQjtBQUNuQiIsImZpbGUiOiJhcHAvbW9kdWxlcy9hdXRoZW50aWNhdGlvbi9yZWdpc3Rlci9yZWdpc3Rlci5jb21wb25lbnQuY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLnJlZ2lzdGVyLWNvbnRlbnQge1xuXHRtYXJnaW46IGF1dG87XG5cdHdpZHRoOiA1MCU7XG5cdHBhZGRpbmc6IDEwcHg7XG5cdHBhZGRpbmctdG9wOiAxcHg7XG5cdGRpc3BsYXk6IGZsZXg7XG5cdGFsaWduLWNvbnRlbnQ6IGNlbnRlcjtcblx0anVzdGlmeS1jb250ZW50OiBjZW50ZXI7XG5cdGZsZXgtZmxvdzpjb2x1bW4gbm93cmFwO1xuXHRhbGlnbi1pdGVtczogY2VudGVyO1xufVxuXG4uaW5wdXQtZmllbGQge1xuXHR3aWR0aDogMTAwJTtcbn1cblxuLmhlYWRlcntcblx0dGV4dC1hbGlnbjogY2VudGVyO1xufSJdfQ== */"

/***/ }),

/***/ "./src/app/modules/authentication/register/register.component.html":
/*!*************************************************************************!*\
  !*** ./src/app/modules/authentication/register/register.component.html ***!
  \*************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<form class=\"register-form\" #registerForm=\"ngForm\" (ngSubmit)=\"registerNewUser()\" [style.fontSize.px]=\"20\">\n\t<div class=\"register-content\">\n\t\t<div class=\"row\">\n\t\t\t<h3 class=\"header\">Register User</h3>\n\t\t</div>\n\t\t<div class=\"row\">\n\t\t\t<mat-form-field class=\"input-field\">\n\t\t\t\t<input id=\"firstName\" matInput placeholder=\"First Name\" [(ngModel)]=\"newUser.firstName\" name=\"firstName\">\n\t\t\t</mat-form-field>\n\t\t\t<mat-form-field class=\"input-field\">\n\t\t\t\t<input id=\"lastName\" matInput placeholder=\"Last Name\" [(ngModel)]=\"newUser.lastName\" name=\"lastName\">\n\t\t\t</mat-form-field>\n\t\t\t<mat-form-field class=\"input-field\">\n\t\t\t\t<input matInput id=\"userId\" matInput placeholder=\"User Id\" [(ngModel)]=\"newUser.userId\" name=\"userId\" required minlength=\"5\"\n\t\t\t\t maxlength=\"10\" #userId=\"ngModel\">\n\t\t\t</mat-form-field>\n\t\t\t<mat-form-field class=\"input-field\">\n\t\t\t\t<input matInput id=\"password\" matInput placeholder=\"Password\" type=\"password\" [(ngModel)]=\"newUser.password\" name=\"password\"  required minlength=\"5\"\n\t\t\t\tmaxlength=\"10\">\n\t\t\t</mat-form-field>\n\t\t\t<div class=\"row\">\n\t\t\t\t<button class=\"register-user\" mat-raised-button color=\"primary\" type=\"submit\">Save</button>\n            </div>\n\t\t</div>\n\t</div>\n</form>"

/***/ }),

/***/ "./src/app/modules/authentication/register/register.component.ts":
/*!***********************************************************************!*\
  !*** ./src/app/modules/authentication/register/register.component.ts ***!
  \***********************************************************************/
/*! exports provided: RegisterComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "RegisterComponent", function() { return RegisterComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_material__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/material */ "./node_modules/@angular/material/esm5/material.es5.js");
/* harmony import */ var _authentication_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./../authentication.service */ "./src/app/modules/authentication/authentication.service.ts");
/* harmony import */ var _User__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./../User */ "./src/app/modules/authentication/User.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");






var RegisterComponent = /** @class */ (function () {
    function RegisterComponent(authenticationService, router, snackbar) {
        this.authenticationService = authenticationService;
        this.router = router;
        this.snackbar = snackbar;
        this.newUser = new _User__WEBPACK_IMPORTED_MODULE_4__["User"]();
    }
    RegisterComponent.prototype.ngOnInit = function () {
    };
    RegisterComponent.prototype.registerNewUser = function () {
        var _this = this;
        if (this.newUser.userId == null || this.newUser.userId.trim().length == 0) {
            this.snackbar.open("User Id is required", "", {
                duration: 1000,
            });
        }
        else if (this.newUser.password == null || this.newUser.password.trim().length == 0) {
            this.snackbar.open("Password is required", "", {
                duration: 1000,
            });
        }
        else {
            this.authenticationService.registerUser(this.newUser).subscribe(function (data) {
                _this.snackbar.open("User registered successfully", "", {
                    duration: 1000,
                });
                _this.router.navigate(['/login']);
            }, function (error) {
                if (!!error && !!error.error) {
                    _this.snackbar.open(error.error, "", {
                        duration: 1000,
                    });
                }
            });
        }
    };
    RegisterComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-register',
            template: __webpack_require__(/*! ./register.component.html */ "./src/app/modules/authentication/register/register.component.html"),
            styles: [__webpack_require__(/*! ./register.component.css */ "./src/app/modules/authentication/register/register.component.css")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_authentication_service__WEBPACK_IMPORTED_MODULE_3__["AuthenticationService"],
            _angular_router__WEBPACK_IMPORTED_MODULE_5__["Router"],
            _angular_material__WEBPACK_IMPORTED_MODULE_2__["MatSnackBar"]])
    ], RegisterComponent);
    return RegisterComponent;
}());



/***/ }),

/***/ "./src/app/modules/job/dashboard/dashboard.component.css":
/*!***************************************************************!*\
  !*** ./src/app/modules/job/dashboard/dashboard.component.css ***!
  \***************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJhcHAvbW9kdWxlcy9qb2IvZGFzaGJvYXJkL2Rhc2hib2FyZC5jb21wb25lbnQuY3NzIn0= */"

/***/ }),

/***/ "./src/app/modules/job/dashboard/dashboard.component.html":
/*!****************************************************************!*\
  !*** ./src/app/modules/job/dashboard/dashboard.component.html ***!
  \****************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<mat-toolbar color=\"primary\">\n  <button mat-button [routerLink] = \"['/job/search']\" >Search</button>\n  <button mat-button [routerLink] = \"['/job/watchlist']\" >Watchlist</button>\n  <button mat-button (click)=\"Logout()\">Logout</button>\n</mat-toolbar>\n"

/***/ }),

/***/ "./src/app/modules/job/dashboard/dashboard.component.ts":
/*!**************************************************************!*\
  !*** ./src/app/modules/job/dashboard/dashboard.component.ts ***!
  \**************************************************************/
/*! exports provided: DashboardComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DashboardComponent", function() { return DashboardComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _authentication_authentication_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../authentication/authentication.service */ "./src/app/modules/authentication/authentication.service.ts");




var DashboardComponent = /** @class */ (function () {
    function DashboardComponent(authenticationService, routes) {
        this.authenticationService = authenticationService;
        this.routes = routes;
    }
    DashboardComponent.prototype.ngOnInit = function () {
    };
    DashboardComponent.prototype.Logout = function () {
        this.authenticationService.deleteToken();
        this.routes.navigate(['/login']);
    };
    DashboardComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-dashboard',
            template: __webpack_require__(/*! ./dashboard.component.html */ "./src/app/modules/job/dashboard/dashboard.component.html"),
            styles: [__webpack_require__(/*! ./dashboard.component.css */ "./src/app/modules/job/dashboard/dashboard.component.css")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_authentication_authentication_service__WEBPACK_IMPORTED_MODULE_3__["AuthenticationService"],
            _angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"]])
    ], DashboardComponent);
    return DashboardComponent;
}());



/***/ }),

/***/ "./src/app/modules/job/detailsmodal/detailsmodal.component.css":
/*!*********************************************************************!*\
  !*** ./src/app/modules/job/detailsmodal/detailsmodal.component.css ***!
  \*********************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJhcHAvbW9kdWxlcy9qb2IvZGV0YWlsc21vZGFsL2RldGFpbHNtb2RhbC5jb21wb25lbnQuY3NzIn0= */"

/***/ }),

/***/ "./src/app/modules/job/detailsmodal/detailsmodal.component.html":
/*!**********************************************************************!*\
  !*** ./src/app/modules/job/detailsmodal/detailsmodal.component.html ***!
  \**********************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "﻿<h1 mat-dialog-title>Job Details</h1>\n<ng-container  *ngIf=\"actionType == 'add'; then addComponent; else updateComponent\">\n\n</ng-container>\n\n<ng-template #addComponent>\n  <table mat-dialog-content>\n    <tr>\n      <td>Job ID </td><td>: {{jobDetails.id}}</td>\n    </tr>\n    <tr>\n      <td>Job Name</td><td> : {{jobDetails.name}}</td>\n    </tr>\n    <tr>\n      <td>Company</td><td> : {{jobDetails.company}}</td>\n    </tr>\n    <tr>\n      <td>Locations</td><td> : {{jobDetails.locations}}</td>\n    </tr>\n    <tr>\n      <td>Categories</td><td> : {{jobDetails.categories}}</td>\n    </tr>\n    <tr>\n      <td>Levels</td><td> : {{jobDetails.levels}}</td>\n    </tr>\n  </table>\n  <div mat-dialog-actions>\n    <button mat-raised-button color=\"primary\" (click)=\"closeDialog()\">Cancel</button>\n    <button mat-raised-button color=\"primary\"  (click)=\"addToWatchList(jobDetails)\">Add to watchlist</button>\n  </div>\n</ng-template>\n<ng-template #updateComponent>\n  <span> Update the comments for the Job : {{jobDetails.name}}</span>\n  <div mat-dialog-content>\n      <p>Comments</p>\n      <mat-form-field>\n          <textarea matInput [(ngModel)]=\"comments\"></textarea>\n      </mat-form-field>\n  </div>\n  <div mat-dialog-actions>\n      <button mat-raised-button  color=primary (click)=\"closeDialog()\" align=\"left\">Cancel</button>\n      <button mat-raised-button  color=warn (click)=\"updateJobComments()\" align=\"left\">Update Comment</button>\n  </div>\n</ng-template>\n"

/***/ }),

/***/ "./src/app/modules/job/detailsmodal/detailsmodal.component.ts":
/*!********************************************************************!*\
  !*** ./src/app/modules/job/detailsmodal/detailsmodal.component.ts ***!
  \********************************************************************/
/*! exports provided: DetailsmodalComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DetailsmodalComponent", function() { return DetailsmodalComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_material__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/material */ "./node_modules/@angular/material/esm5/material.es5.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _job_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../job.service */ "./src/app/modules/job/job.service.ts");





var DetailsmodalComponent = /** @class */ (function () {
    function DetailsmodalComponent(jobService, dialogRef, data, snackbar, router) {
        this.jobService = jobService;
        this.dialogRef = dialogRef;
        this.data = data;
        this.snackbar = snackbar;
        this.router = router;
        this.jobDetails = data.obj;
        this.actionType = data.actionType;
        this.comments = data.obj.comments;
    }
    DetailsmodalComponent.prototype.ngOnInit = function () { };
    DetailsmodalComponent.prototype.addToWatchList = function (jobDetails) {
        var _this = this;
        this.dialogRef.close();
        this.jobService.addJobToWatchlist(jobDetails).subscribe(function (jobDetails) {
            _this.snackbar.open("Job added to watchList successfully", "", {
                duration: 2000,
            });
        }, function (error) {
            if (!!error && !!error.error) {
                _this.snackbar.open(error.error, "", {
                    duration: 2000,
                });
            }
        });
    };
    DetailsmodalComponent.prototype.updateJobComments = function () {
        var _this = this;
        this.jobDetails.comments = this.comments;
        this.dialogRef.close();
        this.jobService.updateJobComments(this.jobDetails).subscribe(function (job) {
            _this.snackbar.open("Job's comment updated successfully", "", {
                duration: 2000,
            });
            _this.router.navigate(['/job/watchlist']);
        }, function (error) {
            if (!!error && !!error.error) {
                _this.snackbar.open(error.error, "", {
                    duration: 2000,
                });
            }
        });
    };
    DetailsmodalComponent.prototype.closeDialog = function () {
        this.dialogRef.close();
    };
    DetailsmodalComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-detailsmodal',
            template: __webpack_require__(/*! ./detailsmodal.component.html */ "./src/app/modules/job/detailsmodal/detailsmodal.component.html"),
            styles: [__webpack_require__(/*! ./detailsmodal.component.css */ "./src/app/modules/job/detailsmodal/detailsmodal.component.css")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__param"](2, Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Inject"])(_angular_material__WEBPACK_IMPORTED_MODULE_2__["MAT_DIALOG_DATA"])),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_job_service__WEBPACK_IMPORTED_MODULE_4__["JobService"], _angular_material__WEBPACK_IMPORTED_MODULE_2__["MatDialogRef"], Object, _angular_material__WEBPACK_IMPORTED_MODULE_2__["MatSnackBar"], _angular_router__WEBPACK_IMPORTED_MODULE_3__["Router"]])
    ], DetailsmodalComponent);
    return DetailsmodalComponent;
}());



/***/ }),

/***/ "./src/app/modules/job/interceptor.service.ts":
/*!****************************************************!*\
  !*** ./src/app/modules/job/interceptor.service.ts ***!
  \****************************************************/
/*! exports provided: TokenInterceptor */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "TokenInterceptor", function() { return TokenInterceptor; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _authentication_authentication_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./../authentication/authentication.service */ "./src/app/modules/authentication/authentication.service.ts");



var TokenInterceptor = /** @class */ (function () {
    function TokenInterceptor(authenticationService) {
        this.authenticationService = authenticationService;
    }
    TokenInterceptor.prototype.intercept = function (request, next) {
        console.log('In Intercept');
        if (request.url.includes('localhost')) {
            request = request.clone({
                setHeaders: {
                    Authorization: "Bearer " + ("" + this.authenticationService.getToken())
                }
            });
        }
        else {
            request = request.clone();
        }
        return next.handle(request);
    };
    TokenInterceptor = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])(),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_authentication_authentication_service__WEBPACK_IMPORTED_MODULE_2__["AuthenticationService"]])
    ], TokenInterceptor);
    return TokenInterceptor;
}());



/***/ }),

/***/ "./src/app/modules/job/job-router.module.ts":
/*!**************************************************!*\
  !*** ./src/app/modules/job/job-router.module.ts ***!
  \**************************************************/
/*! exports provided: JobRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "JobRoutingModule", function() { return JobRoutingModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _auth_guard_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../auth-guard.service */ "./src/app/auth-guard.service.ts");
/* harmony import */ var _search_search_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./search/search.component */ "./src/app/modules/job/search/search.component.ts");
/* harmony import */ var _tabularview_tabularview_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./tabularview/tabularview.component */ "./src/app/modules/job/tabularview/tabularview.component.ts");
/* harmony import */ var _watchlist_watchlist_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./watchlist/watchlist.component */ "./src/app/modules/job/watchlist/watchlist.component.ts");
/* harmony import */ var _job_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./job.component */ "./src/app/modules/job/job.component.ts");








var jobRoutes = [
    {
        path: 'job',
        component: _job_component__WEBPACK_IMPORTED_MODULE_7__["JobComponent"],
        children: [
            {
                path: '',
                redirectTo: '/search',
                pathMatch: 'full',
                canActivate: [_auth_guard_service__WEBPACK_IMPORTED_MODULE_3__["AuthguardService"]]
            },
            {
                path: 'search',
                component: _search_search_component__WEBPACK_IMPORTED_MODULE_4__["SearchComponent"],
                canActivate: [_auth_guard_service__WEBPACK_IMPORTED_MODULE_3__["AuthguardService"]]
            },
            {
                path: 'tabularview',
                component: _tabularview_tabularview_component__WEBPACK_IMPORTED_MODULE_5__["TabularviewComponent"],
                canActivate: [_auth_guard_service__WEBPACK_IMPORTED_MODULE_3__["AuthguardService"]]
            },
            {
                path: 'watchlist',
                component: _watchlist_watchlist_component__WEBPACK_IMPORTED_MODULE_6__["WatchlistComponent"],
                canActivate: [_auth_guard_service__WEBPACK_IMPORTED_MODULE_3__["AuthguardService"]]
            }
        ]
    }
];
var JobRoutingModule = /** @class */ (function () {
    function JobRoutingModule() {
    }
    JobRoutingModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
            imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild(jobRoutes)],
            exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]],
        })
    ], JobRoutingModule);
    return JobRoutingModule;
}());



/***/ }),

/***/ "./src/app/modules/job/job.component.css":
/*!***********************************************!*\
  !*** ./src/app/modules/job/job.component.css ***!
  \***********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "app-dashboard {\n    position: absolute;\n    top: 0;\n    right: 0;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFwcC9tb2R1bGVzL2pvYi9qb2IuY29tcG9uZW50LmNzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtJQUNJLGtCQUFrQjtJQUNsQixNQUFNO0lBQ04sUUFBUTtBQUNaIiwiZmlsZSI6ImFwcC9tb2R1bGVzL2pvYi9qb2IuY29tcG9uZW50LmNzcyIsInNvdXJjZXNDb250ZW50IjpbImFwcC1kYXNoYm9hcmQge1xuICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgICB0b3A6IDA7XG4gICAgcmlnaHQ6IDA7XG59Il19 */"

/***/ }),

/***/ "./src/app/modules/job/job.component.html":
/*!************************************************!*\
  !*** ./src/app/modules/job/job.component.html ***!
  \************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"container\">\n    <app-dashboard></app-dashboard>\n    \n    <router-outlet></router-outlet>\n</div>"

/***/ }),

/***/ "./src/app/modules/job/job.component.ts":
/*!**********************************************!*\
  !*** ./src/app/modules/job/job.component.ts ***!
  \**********************************************/
/*! exports provided: JobComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "JobComponent", function() { return JobComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");


var JobComponent = /** @class */ (function () {
    function JobComponent() {
    }
    JobComponent.prototype.ngOnInit = function () {
    };
    JobComponent.prototype.getSearch = function ($event) {
        console.log($event);
        console.log("In job");
        this.searchKey = $event;
    };
    JobComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-job',
            template: __webpack_require__(/*! ./job.component.html */ "./src/app/modules/job/job.component.html"),
            styles: [__webpack_require__(/*! ./job.component.css */ "./src/app/modules/job/job.component.css")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [])
    ], JobComponent);
    return JobComponent;
}());



/***/ }),

/***/ "./src/app/modules/job/job.module.ts":
/*!*******************************************!*\
  !*** ./src/app/modules/job/job.module.ts ***!
  \*******************************************/
/*! exports provided: JobModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "JobModule", function() { return JobModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm5/http.js");
/* harmony import */ var _angular_material_card__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/material/card */ "./node_modules/@angular/material/esm5/card.es5.js");
/* harmony import */ var _angular_material_button__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/material/button */ "./node_modules/@angular/material/esm5/button.es5.js");
/* harmony import */ var _angular_material__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/material */ "./node_modules/@angular/material/esm5/material.es5.js");
/* harmony import */ var _angular_material_snack_bar__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/material/snack-bar */ "./node_modules/@angular/material/esm5/snack-bar.es5.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _angular_material_input__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @angular/material/input */ "./node_modules/@angular/material/esm5/input.es5.js");
/* harmony import */ var _angular_material_dialog__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @angular/material/dialog */ "./node_modules/@angular/material/esm5/dialog.es5.js");
/* harmony import */ var _angular_material_autocomplete__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! @angular/material/autocomplete */ "./node_modules/@angular/material/esm5/autocomplete.es5.js");
/* harmony import */ var ngx_pagination__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ngx-pagination */ "./node_modules/ngx-pagination/dist/ngx-pagination.js");
/* harmony import */ var _interceptor_service__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ./interceptor.service */ "./src/app/modules/job/interceptor.service.ts");
/* harmony import */ var _job_service__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! ./job.service */ "./src/app/modules/job/job.service.ts");
/* harmony import */ var _job_router_module__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! ./job-router.module */ "./src/app/modules/job/job-router.module.ts");
/* harmony import */ var _job_component__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! ./job.component */ "./src/app/modules/job/job.component.ts");
/* harmony import */ var _dashboard_dashboard_component__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! ./dashboard/dashboard.component */ "./src/app/modules/job/dashboard/dashboard.component.ts");
/* harmony import */ var _search_search_component__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(/*! ./search/search.component */ "./src/app/modules/job/search/search.component.ts");
/* harmony import */ var _tabularview_tabularview_component__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__(/*! ./tabularview/tabularview.component */ "./src/app/modules/job/tabularview/tabularview.component.ts");
/* harmony import */ var _detailsmodal_detailsmodal_component__WEBPACK_IMPORTED_MODULE_20__ = __webpack_require__(/*! ./detailsmodal/detailsmodal.component */ "./src/app/modules/job/detailsmodal/detailsmodal.component.ts");
/* harmony import */ var _watchlist_watchlist_component__WEBPACK_IMPORTED_MODULE_21__ = __webpack_require__(/*! ./watchlist/watchlist.component */ "./src/app/modules/job/watchlist/watchlist.component.ts");






















var JobModule = /** @class */ (function () {
    function JobModule() {
    }
    JobModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
            declarations: [
                _job_component__WEBPACK_IMPORTED_MODULE_16__["JobComponent"],
                _dashboard_dashboard_component__WEBPACK_IMPORTED_MODULE_17__["DashboardComponent"],
                _search_search_component__WEBPACK_IMPORTED_MODULE_18__["SearchComponent"],
                _tabularview_tabularview_component__WEBPACK_IMPORTED_MODULE_19__["TabularviewComponent"],
                _detailsmodal_detailsmodal_component__WEBPACK_IMPORTED_MODULE_20__["DetailsmodalComponent"],
                _watchlist_watchlist_component__WEBPACK_IMPORTED_MODULE_21__["WatchlistComponent"]
            ],
            imports: [
                _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
                _angular_common_http__WEBPACK_IMPORTED_MODULE_3__["HttpClientModule"],
                _angular_material_card__WEBPACK_IMPORTED_MODULE_4__["MatCardModule"],
                _angular_material_button__WEBPACK_IMPORTED_MODULE_5__["MatButtonModule"],
                _angular_material_snack_bar__WEBPACK_IMPORTED_MODULE_7__["MatSnackBarModule"],
                _angular_material_dialog__WEBPACK_IMPORTED_MODULE_10__["MatDialogModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_8__["FormsModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_8__["ReactiveFormsModule"],
                _angular_material_input__WEBPACK_IMPORTED_MODULE_9__["MatInputModule"],
                _angular_material_snack_bar__WEBPACK_IMPORTED_MODULE_7__["MatSnackBarModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_6__["MatToolbarModule"],
                _angular_material_autocomplete__WEBPACK_IMPORTED_MODULE_11__["MatAutocompleteModule"],
                ngx_pagination__WEBPACK_IMPORTED_MODULE_12__["NgxPaginationModule"],
                _job_router_module__WEBPACK_IMPORTED_MODULE_15__["JobRoutingModule"]
            ],
            providers: [_job_service__WEBPACK_IMPORTED_MODULE_14__["JobService"], {
                    provide: _angular_common_http__WEBPACK_IMPORTED_MODULE_3__["HTTP_INTERCEPTORS"],
                    useClass: _interceptor_service__WEBPACK_IMPORTED_MODULE_13__["TokenInterceptor"],
                    multi: true
                }
            ],
            exports: [
                _search_search_component__WEBPACK_IMPORTED_MODULE_18__["SearchComponent"],
                _tabularview_tabularview_component__WEBPACK_IMPORTED_MODULE_19__["TabularviewComponent"],
                _detailsmodal_detailsmodal_component__WEBPACK_IMPORTED_MODULE_20__["DetailsmodalComponent"],
                _watchlist_watchlist_component__WEBPACK_IMPORTED_MODULE_21__["WatchlistComponent"]
            ],
            schemas: [_angular_core__WEBPACK_IMPORTED_MODULE_1__["CUSTOM_ELEMENTS_SCHEMA"]],
            entryComponents: [_detailsmodal_detailsmodal_component__WEBPACK_IMPORTED_MODULE_20__["DetailsmodalComponent"]]
        })
    ], JobModule);
    return JobModule;
}());



/***/ }),

/***/ "./src/app/modules/job/job.service.ts":
/*!********************************************!*\
  !*** ./src/app/modules/job/job.service.ts ***!
  \********************************************/
/*! exports provided: JobService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "JobService", function() { return JobService; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm5/http.js");
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! rxjs/operators */ "./node_modules/rxjs/_esm5/operators/index.js");





var JobService = /** @class */ (function () {
    function JobService(http) {
        this.http = http;
        this.companyEndpoint = 'https://www.themuse.com/api/public/companies?page=1';
        this.jobListApiEndpoint = 'https://www.themuse.com/api/public/jobs?page=1';
        this.jobDetailsApiEndpoint = 'https://www.themuse.com/api/public/jobs/';
        this.watchlistEndpoint = 'http://localhost:8082/musejob/api/job/';
    }
    JobService.prototype.loadCompnies = function () {
        var url = "" + this.companyEndpoint;
        return this.http.get(url).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["retry"])(1), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["map"])(this.pickCompanyResults));
    };
    JobService.prototype.pickCompanyResults = function (response) {
        return response['results'];
    };
    JobService.prototype.searchJobs = function (searchKey) {
        var url = "" + this.jobListApiEndpoint;
        if (searchKey.length > 0) {
            url = this.jobListApiEndpoint + "&company=" + searchKey;
        }
        return this.http.get(url).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["retry"])(1), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["map"])(this.pickJobResults));
    };
    JobService.prototype.pickJobResults = function (response) {
        return response['results'];
    };
    JobService.prototype.getJobDetails = function (jobId) {
        var url = "" + this.jobDetailsApiEndpoint;
        if (jobId > 0) {
            url = "" + this.jobDetailsApiEndpoint + jobId;
        }
        console.log(url);
        console.log("service response" + this.http.get(url).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["retry"])(1), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["map"])(this.pickJobDetailsResults)));
        return this.http.get(url).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["retry"])(1), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["map"])(this.pickJobDetailsResults));
    };
    JobService.prototype.pickJobDetailsResults = function (response) {
        return response['results'];
    };
    JobService.prototype.addJobToWatchlist = function (jobDetails) {
        var url = this.watchlistEndpoint + "addJob";
        return this.http.post(url, jobDetails, { responseType: 'text' });
    };
    JobService.prototype.getWatchlistedjobs = function () {
        var url = this.watchlistEndpoint + "getJobList";
        return this.http.get(url);
    };
    JobService.prototype.deleteFromMyWatchList = function (jobId) {
        var url = this.watchlistEndpoint + "+" + jobId;
        return this.http.delete(url, { responseType: 'text' });
    };
    JobService.prototype.updateJobComments = function (jobDetails) {
        var url = this.watchlistEndpoint + "+" + jobDetails.id;
        return this.http.put(url, jobDetails);
    };
    JobService = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])(),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpClient"]])
    ], JobService);
    return JobService;
}());



/***/ }),

/***/ "./src/app/modules/job/jobdetails.ts":
/*!*******************************************!*\
  !*** ./src/app/modules/job/jobdetails.ts ***!
  \*******************************************/
/*! exports provided: JobDetails */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "JobDetails", function() { return JobDetails; });
var JobDetails = /** @class */ (function () {
    function JobDetails() {
    }
    return JobDetails;
}());



/***/ }),

/***/ "./src/app/modules/job/search/search.component.css":
/*!*********************************************************!*\
  !*** ./src/app/modules/job/search/search.component.css ***!
  \*********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".container {\n  width: 92%;\n  margin: 0 auto;\n}\n.mat-input-element {\n  border: 1px solid #53b6d0;\n  padding: 10px;\n  width: 88%;\n}\n::ng-deep .mat-form-field-infix {\n  width: 200px !important;\n}\n::ng-deep .mat-form-field-appearance-legacy .mat-form-field-label {\n  padding: 7px 10px;\n  width: 90%;\n}\n::ng-deep .mat-form-field-appearance-legacy .mat-form-field-wrapper {\n  padding-left: 15px;\n}\n::ng-deep .mat-form-field-underline {\n  width: 93% !important;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFwcC9tb2R1bGVzL2pvYi9zZWFyY2gvc2VhcmNoLmNvbXBvbmVudC5jc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDRSxVQUFVO0VBQ1YsY0FBYztBQUNoQjtBQUNBO0VBQ0UseUJBQXlCO0VBQ3pCLGFBQWE7RUFDYixVQUFVO0FBQ1o7QUFDQTtFQUNFLHVCQUF1QjtBQUN6QjtBQUNBO0VBQ0UsaUJBQWlCO0VBQ2pCLFVBQVU7QUFDWjtBQUNBO0VBQ0Usa0JBQWtCO0FBQ3BCO0FBQ0E7RUFDRSxxQkFBcUI7QUFDdkIiLCJmaWxlIjoiYXBwL21vZHVsZXMvam9iL3NlYXJjaC9zZWFyY2guY29tcG9uZW50LmNzcyIsInNvdXJjZXNDb250ZW50IjpbIi5jb250YWluZXIge1xuICB3aWR0aDogOTIlO1xuICBtYXJnaW46IDAgYXV0bztcbn1cbi5tYXQtaW5wdXQtZWxlbWVudCB7XG4gIGJvcmRlcjogMXB4IHNvbGlkICM1M2I2ZDA7XG4gIHBhZGRpbmc6IDEwcHg7XG4gIHdpZHRoOiA4OCU7XG59XG46Om5nLWRlZXAgLm1hdC1mb3JtLWZpZWxkLWluZml4IHtcbiAgd2lkdGg6IDIwMHB4ICFpbXBvcnRhbnQ7XG59XG46Om5nLWRlZXAgLm1hdC1mb3JtLWZpZWxkLWFwcGVhcmFuY2UtbGVnYWN5IC5tYXQtZm9ybS1maWVsZC1sYWJlbCB7XG4gIHBhZGRpbmc6IDdweCAxMHB4O1xuICB3aWR0aDogOTAlO1xufVxuOjpuZy1kZWVwIC5tYXQtZm9ybS1maWVsZC1hcHBlYXJhbmNlLWxlZ2FjeSAubWF0LWZvcm0tZmllbGQtd3JhcHBlciB7XG4gIHBhZGRpbmctbGVmdDogMTVweDtcbn1cbjo6bmctZGVlcCAubWF0LWZvcm0tZmllbGQtdW5kZXJsaW5lIHtcbiAgd2lkdGg6IDkzJSAhaW1wb3J0YW50O1xufSJdfQ== */"

/***/ }),

/***/ "./src/app/modules/job/search/search.component.html":
/*!**********************************************************!*\
  !*** ./src/app/modules/job/search/search.component.html ***!
  \**********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"container\">\n  <form class=\"example-form\">\n      <table>\n          <tr>\n              <td><h3>Select the Company Name to be searched</h3></td>\n              <td> \n                <mat-form-field class=\"example-full-width\">\n                    <input id=\"box\" type=\"text\" #box (keyup.enter)=\"onEnterSearchBox(box.value)\" placeholder=\"Company\" aria-label=\"Company\" matInput [formControl]=\"myControl\" [matAutocomplete]=\"auto\">\n                        <mat-autocomplete #auto=\"matAutocomplete\" [displayWith]=\"displayFn\">\n                            <mat-option *ngFor=\"let company of filteredOptions | async\" [value]=\"company\">\n                                {{company.name}}\n                            </mat-option>\n                        </mat-autocomplete>\n                </mat-form-field>                   \n              </td>\n          </tr>\n      </table>       \n  </form>\n  \n\n  <!-- <job-container [jobs]=\"jobs\"></job-container> -->\n  </div>\n"

/***/ }),

/***/ "./src/app/modules/job/search/search.component.ts":
/*!********************************************************!*\
  !*** ./src/app/modules/job/search/search.component.ts ***!
  \********************************************************/
/*! exports provided: SearchComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SearchComponent", function() { return SearchComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! rxjs/operators */ "./node_modules/rxjs/_esm5/operators/index.js");
/* harmony import */ var _job_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../job.service */ "./src/app/modules/job/job.service.ts");
/* harmony import */ var _general_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../../general.service */ "./src/app/general.service.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");







var SearchComponent = /** @class */ (function () {
    function SearchComponent(jobService, generalService, routes) {
        this.jobService = jobService;
        this.generalService = generalService;
        this.routes = routes;
        this.srchKeyEvent = new _angular_core__WEBPACK_IMPORTED_MODULE_1__["EventEmitter"]();
        this.myControl = new _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormControl"]();
        this.companies = [];
    }
    SearchComponent.prototype.ngOnInit = function () {
        this.loadCompnies();
    };
    SearchComponent.prototype.displayFn = function (company) {
        return company ? company.name : undefined;
    };
    SearchComponent.prototype._filter = function (name) {
        var filterValue = name.toLowerCase();
        return this.companies.filter(function (option) { return option.name.toLowerCase().indexOf(filterValue) === 0; });
    };
    SearchComponent.prototype.loadCompnies = function () {
        var _this = this;
        this.jobService.loadCompnies().subscribe(function (companies) {
            var _a;
            (_a = _this.companies).push.apply(_a, companies);
            console.log(_this.companies);
            _this.loadFilteroption();
        });
    };
    SearchComponent.prototype.loadFilteroption = function () {
        var _this = this;
        this.filteredOptions = this.myControl.valueChanges
            .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["startWith"])(''), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["map"])(function (value) { return typeof value === 'string' ? value : value.name; }), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["map"])(function (name) { return name ? _this._filter(name) : _this.companies.slice(); }));
    };
    SearchComponent.prototype.onEnterSearchBox = function (searchKey) {
        console.log("SearchComponent" + searchKey);
        this.generalService.setSearchParamValue(searchKey);
        this.routes.navigate(['/job/tabularview']);
    };
    ;
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Output"])(),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", Object)
    ], SearchComponent.prototype, "srchKeyEvent", void 0);
    SearchComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-search',
            template: __webpack_require__(/*! ./search.component.html */ "./src/app/modules/job/search/search.component.html"),
            styles: [__webpack_require__(/*! ./search.component.css */ "./src/app/modules/job/search/search.component.css")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_job_service__WEBPACK_IMPORTED_MODULE_4__["JobService"], _general_service__WEBPACK_IMPORTED_MODULE_5__["GeneralService"], _angular_router__WEBPACK_IMPORTED_MODULE_6__["Router"]])
    ], SearchComponent);
    return SearchComponent;
}());



/***/ }),

/***/ "./src/app/modules/job/tabularview/tabularview.component.css":
/*!*******************************************************************!*\
  !*** ./src/app/modules/job/tabularview/tabularview.component.css ***!
  \*******************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".container {\n    width: 92%;\n    margin: 0 auto;\n}\ntable {\n    border-collapse: collapse;\n    border:1px solid #53b6d0;\n    width:100%;\n}\ntd,th{\n    border-bottom: 1px solid #53b6d0;\n    text-align: left;\n    padding: 8px;\n}\nthead th {\n    background-color:#53b6d0;\n    color: #ffffff;\n}\ntr:nth-child(even){\n    background-color: #eeeeee;\n}\n::ng-deep .ngx-pagination .current{\n    background: #333 !important;\n    color: #53b6d0 !important;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFwcC9tb2R1bGVzL2pvYi90YWJ1bGFydmlldy90YWJ1bGFydmlldy5jb21wb25lbnQuY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0lBQ0ksVUFBVTtJQUNWLGNBQWM7QUFDbEI7QUFDQTtJQUNJLHlCQUF5QjtJQUN6Qix3QkFBd0I7SUFDeEIsVUFBVTtBQUNkO0FBQ0E7SUFDSSxnQ0FBZ0M7SUFDaEMsZ0JBQWdCO0lBQ2hCLFlBQVk7QUFDaEI7QUFDQTtJQUNJLHdCQUF3QjtJQUN4QixjQUFjO0FBQ2xCO0FBQ0E7SUFDSSx5QkFBeUI7QUFDN0I7QUFDQTtJQUNJLDJCQUEyQjtJQUMzQix5QkFBeUI7QUFDN0IiLCJmaWxlIjoiYXBwL21vZHVsZXMvam9iL3RhYnVsYXJ2aWV3L3RhYnVsYXJ2aWV3LmNvbXBvbmVudC5jc3MiLCJzb3VyY2VzQ29udGVudCI6WyIuY29udGFpbmVyIHtcbiAgICB3aWR0aDogOTIlO1xuICAgIG1hcmdpbjogMCBhdXRvO1xufVxudGFibGUge1xuICAgIGJvcmRlci1jb2xsYXBzZTogY29sbGFwc2U7XG4gICAgYm9yZGVyOjFweCBzb2xpZCAjNTNiNmQwO1xuICAgIHdpZHRoOjEwMCU7XG59XG50ZCx0aHtcbiAgICBib3JkZXItYm90dG9tOiAxcHggc29saWQgIzUzYjZkMDtcbiAgICB0ZXh0LWFsaWduOiBsZWZ0O1xuICAgIHBhZGRpbmc6IDhweDtcbn1cbnRoZWFkIHRoIHtcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiM1M2I2ZDA7XG4gICAgY29sb3I6ICNmZmZmZmY7XG59XG50cjpudGgtY2hpbGQoZXZlbil7XG4gICAgYmFja2dyb3VuZC1jb2xvcjogI2VlZWVlZTtcbn1cbjo6bmctZGVlcCAubmd4LXBhZ2luYXRpb24gLmN1cnJlbnR7XG4gICAgYmFja2dyb3VuZDogIzMzMyAhaW1wb3J0YW50O1xuICAgIGNvbG9yOiAjNTNiNmQwICFpbXBvcnRhbnQ7XG59Il19 */"

/***/ }),

/***/ "./src/app/modules/job/tabularview/tabularview.component.html":
/*!********************************************************************!*\
  !*** ./src/app/modules/job/tabularview/tabularview.component.html ***!
  \********************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"container\">\n  <h4>\n    Job List\n  </h4>\n \n  <table class=\"table\">\n    <thead>\n      <tr>\n        <th scope=\"col\">Job Id</th>\n        <th scope=\"col\">Job Name</th>\n        <th scope=\"col\">   </th>\n      </tr>\n    </thead>\n    <tbody>\n      <tr *ngFor=\"let job of jobs | paginate: config\">\n        <td scope=\"row\">{{job.id}}</td>\n        <td>{{job.name}}</td>\n        <td>\n          <button mat-raised-button color=\"primary\"  (click)=\"getJobDetails(job)\">Get Job Details</button>\n        </td> \n      </tr>\n    </tbody>\n  </table>\n \n  <pagination-controls (pageChange)=\"pageChanged($event)\"></pagination-controls>\n \n</div>"

/***/ }),

/***/ "./src/app/modules/job/tabularview/tabularview.component.ts":
/*!******************************************************************!*\
  !*** ./src/app/modules/job/tabularview/tabularview.component.ts ***!
  \******************************************************************/
/*! exports provided: TabularviewComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "TabularviewComponent", function() { return TabularviewComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_material__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/material */ "./node_modules/@angular/material/esm5/material.es5.js");
/* harmony import */ var _detailsmodal_detailsmodal_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../detailsmodal/detailsmodal.component */ "./src/app/modules/job/detailsmodal/detailsmodal.component.ts");
/* harmony import */ var _job_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../job.service */ "./src/app/modules/job/job.service.ts");
/* harmony import */ var _general_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../../general.service */ "./src/app/general.service.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _jobdetails__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../jobdetails */ "./src/app/modules/job/jobdetails.ts");








var TabularviewComponent = /** @class */ (function () {
    function TabularviewComponent(jobService, generalService, routes, dialog) {
        this.jobService = jobService;
        this.generalService = generalService;
        this.routes = routes;
        this.dialog = dialog;
        this.jobDetails = new _jobdetails__WEBPACK_IMPORTED_MODULE_7__["JobDetails"]();
        console.log(this.generalService.searchParam);
        this.populateJobList();
    }
    TabularviewComponent.prototype.ngOnInit = function () {
    };
    TabularviewComponent.prototype.populateJobList = function () {
        var _this = this;
        this.jobService.searchJobs(this.generalService.searchParam).subscribe(function (jobs) {
            _this.jobs = jobs;
            console.log(_this.jobs);
            console.log("jobs array length" + _this.jobs.length);
            _this.config = {
                itemsPerPage: 5,
                currentPage: 1,
                totalItems: _this.jobs.length
            };
        });
    };
    TabularviewComponent.prototype.pageChanged = function (event) {
        this.config.currentPage = event;
    };
    TabularviewComponent.prototype.getJobDetails = function (job) {
        console.log("job company ===" + job.company);
        this.jobDetails.id = job.id;
        this.jobDetails.name = job.name;
        this.jobDetails.company = job.company.name;
        this.jobDetails.locations = '';
        this.jobDetails.categories = '';
        this.jobDetails.levels = '';
        //setting  the Locations
        var locations = job.locations;
        for (var i = 0; i < locations.length; i++) {
            if (i > 0) {
                this.jobDetails.locations = this.jobDetails.locations + ",";
            }
            this.jobDetails.locations = this.jobDetails.locations + locations[i].name;
        }
        //setting  the Categories
        var categories = job.categories;
        for (var i = 0; i < categories.length; i++) {
            if (i > 0) {
                this.jobDetails.categories = this.jobDetails.categories + ",";
            }
            this.jobDetails.categories = this.jobDetails.categories + categories[i].name;
        }
        //setting  the levels
        var levels = job.levels;
        for (var i = 0; i < levels.length; i++) {
            if (i > 0) {
                this.jobDetails.levels = this.jobDetails.levels + ",";
            }
            this.jobDetails.levels = this.jobDetails.levels + levels[i].name;
        }
        this.openJobDetailsDialog(this.jobDetails);
    };
    TabularviewComponent.prototype.openJobDetailsDialog = function (jobDetails) {
        var dialogRef = this.dialog.open(_detailsmodal_detailsmodal_component__WEBPACK_IMPORTED_MODULE_3__["DetailsmodalComponent"], {
            width: '350px',
            data: { obj: jobDetails, actionType: 'add' }
        });
        dialogRef.afterClosed().subscribe(function (res) {
        });
    };
    TabularviewComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-tabularview',
            template: __webpack_require__(/*! ./tabularview.component.html */ "./src/app/modules/job/tabularview/tabularview.component.html"),
            styles: [__webpack_require__(/*! ./tabularview.component.css */ "./src/app/modules/job/tabularview/tabularview.component.css")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_job_service__WEBPACK_IMPORTED_MODULE_4__["JobService"], _general_service__WEBPACK_IMPORTED_MODULE_5__["GeneralService"],
            _angular_router__WEBPACK_IMPORTED_MODULE_6__["Router"], _angular_material__WEBPACK_IMPORTED_MODULE_2__["MatDialog"]])
    ], TabularviewComponent);
    return TabularviewComponent;
}());



/***/ }),

/***/ "./src/app/modules/job/watchlist/watchlist.component.css":
/*!***************************************************************!*\
  !*** ./src/app/modules/job/watchlist/watchlist.component.css ***!
  \***************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "job-thumbnail {\n    display: block;\n    width: 92%;\n    margin: 30px auto;\n    \n}\n\n.job-thumbnail{\n    margin: 10px;\n    color: #3f51b5;\n    background-color:whitesmoke;\n    border-bottom: 1px solid #3f51b5;\n}\n\nmat-card-actions.mat-card-actions {\n    padding-left: 20px;\n}\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFwcC9tb2R1bGVzL2pvYi93YXRjaGxpc3Qvd2F0Y2hsaXN0LmNvbXBvbmVudC5jc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7SUFDSSxjQUFjO0lBQ2QsVUFBVTtJQUNWLGlCQUFpQjs7QUFFckI7O0FBRUE7SUFDSSxZQUFZO0lBQ1osY0FBYztJQUNkLDJCQUEyQjtJQUMzQixnQ0FBZ0M7QUFDcEM7O0FBRUE7SUFDSSxrQkFBa0I7QUFDdEIiLCJmaWxlIjoiYXBwL21vZHVsZXMvam9iL3dhdGNobGlzdC93YXRjaGxpc3QuY29tcG9uZW50LmNzcyIsInNvdXJjZXNDb250ZW50IjpbImpvYi10aHVtYm5haWwge1xuICAgIGRpc3BsYXk6IGJsb2NrO1xuICAgIHdpZHRoOiA5MiU7XG4gICAgbWFyZ2luOiAzMHB4IGF1dG87XG4gICAgXG59XG5cbi5qb2ItdGh1bWJuYWlse1xuICAgIG1hcmdpbjogMTBweDtcbiAgICBjb2xvcjogIzNmNTFiNTtcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOndoaXRlc21va2U7XG4gICAgYm9yZGVyLWJvdHRvbTogMXB4IHNvbGlkICMzZjUxYjU7XG59XG5cbm1hdC1jYXJkLWFjdGlvbnMubWF0LWNhcmQtYWN0aW9ucyB7XG4gICAgcGFkZGluZy1sZWZ0OiAyMHB4O1xufVxuIl19 */"

/***/ }),

/***/ "./src/app/modules/job/watchlist/watchlist.component.html":
/*!****************************************************************!*\
  !*** ./src/app/modules/job/watchlist/watchlist.component.html ***!
  \****************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"job-container\">\n  <job-thumbnail *ngFor='let jobDetails of jobDetailsList'>\n    <mat-card class=\"job-thumbnail\">\n      <mat-card-header>\n        <mat-card-title>{{jobDetails.name}}</mat-card-title>\n        <mat-card-subtitle>{{jobDetails.company}}</mat-card-subtitle>\n        <mat-card-subtitle>{{jobDetails.locations}}</mat-card-subtitle>\n        <mat-card-subtitle>{{jobDetails.categories}}</mat-card-subtitle>\n        <mat-card-subtitle>{{jobDetails.levels}}</mat-card-subtitle>\n        <mat-card-subtitle>{{jobDetails.comments}}</mat-card-subtitle>\n      </mat-card-header>\n      <mat-card-actions>\n        <button mat-raised-button color=\"primary\" (click)=\"openDialogForUpdate(jobDetails)\">Update</button>\n        <button mat-raised-button color=\"primary\" (click)=\"deleteFromWatchList(jobDetails.id)\">Remove</button>\n      </mat-card-actions>\n    </mat-card>\n  </job-thumbnail>\n</div>\n"

/***/ }),

/***/ "./src/app/modules/job/watchlist/watchlist.component.ts":
/*!**************************************************************!*\
  !*** ./src/app/modules/job/watchlist/watchlist.component.ts ***!
  \**************************************************************/
/*! exports provided: WatchlistComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "WatchlistComponent", function() { return WatchlistComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_material__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/material */ "./node_modules/@angular/material/esm5/material.es5.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _detailsmodal_detailsmodal_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../detailsmodal/detailsmodal.component */ "./src/app/modules/job/detailsmodal/detailsmodal.component.ts");
/* harmony import */ var _job_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../job.service */ "./src/app/modules/job/job.service.ts");
/* harmony import */ var _general_service__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../../general.service */ "./src/app/general.service.ts");








var WatchlistComponent = /** @class */ (function () {
    function WatchlistComponent(jobService, generalService, snackbar, routes, dialog) {
        this.jobService = jobService;
        this.generalService = generalService;
        this.snackbar = snackbar;
        this.routes = routes;
        this.dialog = dialog;
    }
    WatchlistComponent.prototype.getWatchlistedJobs = function () {
        var _this = this;
        this.jobService.getWatchlistedjobs().subscribe(function (jobDetails) {
            _this.jobDetailsList = jobDetails;
            console.log(_this.jobDetailsList);
        });
    };
    WatchlistComponent.prototype.ngOnInit = function () {
        this.getWatchlistedJobs();
    };
    WatchlistComponent.prototype.deleteFromWatchList = function (jobId) {
        var _this = this;
        this.jobService.deleteFromMyWatchList(jobId).subscribe(function (jobDetails) {
            _this.snackbar.open("Job Deleted From watchList successfully", "", {
                duration: 2000,
            });
            //window.location.reload();
            _this.ngOnInit();
        });
    };
    WatchlistComponent.prototype.openDialogForUpdate = function (jobDetails) {
        var dialogRef = this.dialog.open(_detailsmodal_detailsmodal_component__WEBPACK_IMPORTED_MODULE_4__["DetailsmodalComponent"], {
            width: '350px',
            data: { obj: jobDetails, actionType: 'update' }
        });
        dialogRef.afterClosed().subscribe(function (res) {
        });
    };
    WatchlistComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-watchlist',
            template: __webpack_require__(/*! ./watchlist.component.html */ "./src/app/modules/job/watchlist/watchlist.component.html"),
            styles: [__webpack_require__(/*! ./watchlist.component.css */ "./src/app/modules/job/watchlist/watchlist.component.css")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_job_service__WEBPACK_IMPORTED_MODULE_5__["JobService"], _general_service__WEBPACK_IMPORTED_MODULE_6__["GeneralService"],
            _angular_material__WEBPACK_IMPORTED_MODULE_2__["MatSnackBar"], _angular_router__WEBPACK_IMPORTED_MODULE_3__["Router"], _angular_material__WEBPACK_IMPORTED_MODULE_2__["MatDialog"]])
    ], WatchlistComponent);
    return WatchlistComponent;
}());



/***/ }),

/***/ "./src/environments/environment.ts":
/*!*****************************************!*\
  !*** ./src/environments/environment.ts ***!
  \*****************************************/
/*! exports provided: environment */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "environment", function() { return environment; });
// This file can be replaced during build by using the `fileReplacements` array.
// `ng build --prod` replaces `environment.ts` with `environment.prod.ts`.
// The list of file replacements can be found in `angular.json`.
var environment = {
    production: false
};
/*
 * For easier debugging in development mode, you can import the following file
 * to ignore zone related error stack frames such as `zone.run`, `zoneDelegate.invokeTask`.
 *
 * This import should be commented out in production mode because it will have a negative impact
 * on performance if an error is thrown.
 */
// import 'zone.js/dist/zone-error';  // Included with Angular CLI.


/***/ }),

/***/ "./src/main.ts":
/*!*********************!*\
  !*** ./src/main.ts ***!
  \*********************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_platform_browser_dynamic__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/platform-browser-dynamic */ "./node_modules/@angular/platform-browser-dynamic/fesm5/platform-browser-dynamic.js");
/* harmony import */ var _app_app_module__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./app/app.module */ "./src/app/app.module.ts");
/* harmony import */ var _environments_environment__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./environments/environment */ "./src/environments/environment.ts");




if (_environments_environment__WEBPACK_IMPORTED_MODULE_3__["environment"].production) {
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["enableProdMode"])();
}
Object(_angular_platform_browser_dynamic__WEBPACK_IMPORTED_MODULE_1__["platformBrowserDynamic"])().bootstrapModule(_app_app_module__WEBPACK_IMPORTED_MODULE_2__["AppModule"])
    .catch(function (err) { return console.error(err); });


/***/ }),

/***/ 0:
/*!***************************!*\
  !*** multi ./src/main.ts ***!
  \***************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! D:\FSE(S1+S2)\FSE S1\Project\Prosenjit.Ghosh2-muse-java-boilerplate\MuseUI\src\main.ts */"./src/main.ts");


/***/ })

},[[0,"runtime","vendor"]]]);
//# sourceMappingURL=main.js.map