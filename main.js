(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["main"],{

/***/ "/mjF":
/*!****************************************************************!*\
  !*** ./src/app/utils/data/ProjectElements/PlateformeSnifly.ts ***!
  \****************************************************************/
/*! exports provided: PlatformeSnifly */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PlatformeSnifly", function() { return PlatformeSnifly; });
const PlatformeSnifly = {
    id: 'A1B3308D-8BC5-4A7B-81A7-4190Ads9A41D0B',
    name: 'Plateforme Snifly',
    description: "Conception et Développement Fullstack et Mobile d'une application de gestion des factures",
    projectLink: null,
    liveUrl: null,
    isFeatured: true,
    features: [
        "Développement des Api avec l'architecture DAL-BLL-API",
        "Sécurisation des api avec JWT",
        "Création d'un espace de connexion",
        "Création de CRUD (Create, read, update, delete) de la partie Product",
        "Création de CRUD (Create, read, update, delete) de la partie Marque",
        "Création de CRUD (Create, read, update, delete) de la partie Facture",
        "Création de la page de configuration"
    ],
    tags: ['.net', 'frontend', 'mobile'],
    techStuff: [
        ".net core",
        "Xamarin forms",
        "Angular 10",
        "Azure"
    ],
    additionalData: [{
            title: 'contributeur', data: ['Le projet est sous forme d un stage qui a été réalisé avec un collègue : Oussama Aouinatou']
        },
    ]
};


/***/ }),

/***/ 0:
/*!***************************!*\
  !*** multi ./src/main.ts ***!
  \***************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! C:\Users\hp\Desktop\S5\Profil\MyPortfolio\khafchraitPortfolio\src\main.ts */"zUnb");


/***/ }),

/***/ "3r4v":
/*!******************************************!*\
  !*** ./src/app/services/tags.service.ts ***!
  \******************************************/
/*! exports provided: TagsService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "TagsService", function() { return TagsService; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _utils_tags_data__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../utils/tags-data */ "8m9h");



class TagsService {
    constructor() {
        this.onTagUpdate = new _angular_core__WEBPACK_IMPORTED_MODULE_0__["EventEmitter"]();
        this.tags = _utils_tags_data__WEBPACK_IMPORTED_MODULE_1__["tagData"];
    }
    toogleTagSelection(tagName) {
        const totalSelection = this.tags.reduce((prev, current) => prev + (current.isSelected ? 1 : 0), 0);
        const selectedSkill = this.tags.find(e => e.displayName === tagName);
        if (totalSelection <= 1 && selectedSkill.isSelected)
            return;
        selectedSkill.isSelected = !selectedSkill.isSelected;
        this.onTagUpdate.emit({
            tags: this.tags.filter(e => e.isSelected)
        });
    }
}
TagsService.ɵfac = function TagsService_Factory(t) { return new (t || TagsService)(); };
TagsService.ɵprov = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjectable"]({ token: TagsService, factory: TagsService.ɵfac, providedIn: 'root' });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](TagsService, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"],
        args: [{
                providedIn: 'root'
            }]
    }], function () { return []; }, null); })();


/***/ }),

/***/ "7hpp":
/*!********************************************************!*\
  !*** ./src/app/profile-card/profile-card.component.ts ***!
  \********************************************************/
/*! exports provided: ProfileCardComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ProfileCardComponent", function() { return ProfileCardComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "tyNb");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "ofXK");




const _c0 = function (a0) { return { "tada-animation": a0 }; };
class ProfileCardComponent {
    constructor(router) {
        this.router = router;
        this.ExploreMe = new _angular_core__WEBPACK_IMPORTED_MODULE_0__["EventEmitter"]();
        this.startTadaAnimation = false;
    }
    ngOnInit() {
        setInterval(() => {
            this.startTadaAnimation = !this.startTadaAnimation;
        }, 3000);
    }
    onExploreMeClick() {
        this.ExploreMe.emit();
        this.router.navigateByUrl('/');
    }
}
ProfileCardComponent.ɵfac = function ProfileCardComponent_Factory(t) { return new (t || ProfileCardComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_1__["Router"])); };
ProfileCardComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: ProfileCardComponent, selectors: [["app-profile-card"]], outputs: { ExploreMe: "ExploreMe" }, decls: 45, vars: 3, consts: [[1, "container"], [1, "card"], [1, "strip-block"], [1, "profile-logo"], ["src", "assets/img/medkhworkplace.jpg", "alt", ""], [1, "strip"], [1, "short-details"], [1, "tagLine"], [1, "quote"], [1, "details"], [1, "nameBlock"], [1, "round-shape", "name"], [1, "divider"], [1, "stick", "stick1"], [1, "stick", "stick2"], [1, "bio"], [3, "ngClass", "mouseover"], [1, "round-shape", "projects-link", 3, "click"], [1, "social"], [1, "social-icon"], ["href", "https://www.facebook.com/profile.php?id=100017817667308", "target", "_blank"], ["src", "assets/assert/contactIcon/facebook.svg", "alt", "facebook icon"], ["href", "https://github.com/mohamdkh", "target", "_blank"], ["src", "assets/assert/contactIcon/github.svg", "alt", "github icon"], ["href", "https://www.pluralsight.com/", "target", "_blank"], ["src", "assets/assert/contactIcon/pluralsight-icon.jpg", "alt", "github icon"], ["href", "https://www.linkedin.com/in/mohamed-khafchrait-79b00b126/", "target", "_blank"], ["src", "assets/assert/contactIcon/linkedin.png", "alt", "linkedin icon"], ["href", "mohamedkhafchrait@gmail.com"], ["src", "assets/assert/contactIcon/email.svg", "alt", "email icon"]], template: function ProfileCardComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "div", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "div", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](4, "img", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](5, "div", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "div", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "h4", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](8, " El\u00E8ve ing\u00E9nieur | D\u00E9veloppeur | Contributeur ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](9, "blockquote", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](10, " \"\u00E0 la recherche d'un stage PFE dans le domaine de d\u00E9veloppement informatique\" ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](11, "div", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](12, "div", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](13, "h1", 11);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](14, " Mohamed khafchrait ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](15, "div", 12);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](16, "div", 13);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](17, "div", 14);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](18, "p", 15);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](19, " I love coding, new technologies & chocolates. I'm mostly interested in Full Stack Web Development. ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](20, "br");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](21, " I love to work with ASP.NET Core, Node.js, Angular & React. ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](22, "div", 16);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("mouseover", function ProfileCardComponent_Template_div_mouseover_22_listener() { return ctx.startTadaAnimation = false; });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](23, "a", 17);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function ProfileCardComponent_Template_a_click_23_listener() { return ctx.onExploreMeClick(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](24, "span");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](25, " Explore Me ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](26, "div", 12);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](27, "div", 13);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](28, "div", 14);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](29, "div", 18);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](30, "div", 19);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](31, "a", 20);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](32, "img", 21);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](33, "div", 19);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](34, "a", 22);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](35, "img", 23);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](36, "div", 19);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](37, "a", 24);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](38, "img", 25);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](39, "div", 19);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](40, "a", 26);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](41, "img", 27);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](42, "div", 19);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](43, "a", 28);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](44, "img", 29);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](22);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngClass", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction1"](1, _c0, ctx.startTadaAnimation));
    } }, directives: [_angular_common__WEBPACK_IMPORTED_MODULE_2__["NgClass"]], styles: ["@charset \"UTF-8\";\n.container[_ngcontent-%COMP%] {\n  display: flex;\n  width: 100%;\n  min-height: 100vh;\n  align-items: center;\n  padding: 2rem 0;\n  justify-content: center;\n  background-color: #17a598;\n  color: #ffffff;\n}\n.container[_ngcontent-%COMP%]   .card[_ngcontent-%COMP%] {\n  background-color: #2c3e50;\n  height: auto;\n  max-height: 90%;\n  width: 45rem;\n  text-align: center;\n  overflow-x: hidden;\n  position: relative;\n  z-index: 1;\n  -webkit-user-select: none;\n          user-select: none;\n  overflow: hidden;\n  border-radius: 5px;\n  box-shadow: 12px 11px 14px 0px rgba(0, 0, 0, 0.36);\n  transition: all 0.3s ease-in-out;\n  animation: dropin 1s ease-in-out 0s 1 normal both;\n}\n.container[_ngcontent-%COMP%]   .profile-logo[_ngcontent-%COMP%] {\n  height: 14rem;\n  width: 14rem;\n  margin-top: 5.5rem;\n  display: inline-block;\n  position: relative;\n  z-index: 5;\n  border-radius: 50%;\n  perspective: 1500px;\n  animation: dropin 1s ease-in-out 0.4s 1 normal both;\n}\n.container[_ngcontent-%COMP%]   .profile-logo[_ngcontent-%COMP%]   img[_ngcontent-%COMP%] {\n  position: relative;\n  border: 0.8rem solid #e74c3c;\n  height: 100%;\n  width: 100%;\n  border-radius: 50%;\n  -webkit-backface-visibility: hidden;\n          backface-visibility: hidden;\n  transition: all 0.5s ease-in-out;\n  perspective: 1500px;\n}\n.container[_ngcontent-%COMP%]   .profile-logo[_ngcontent-%COMP%]::after {\n  content: \"Mohamed khafchrait\";\n  display: flex;\n  position: absolute;\n  height: 100%;\n  width: 100%;\n  justify-content: center;\n  align-items: center;\n  border-radius: 50%;\n  background-color: #e74c3c;\n  border: 0.8rem solid #db381b;\n  top: 0px;\n  left: 0px;\n  z-index: 10;\n  font-size: 2rem;\n  transition: all 0.5s ease-in-out;\n  transform: rotateY(180deg);\n  -webkit-backface-visibility: hidden;\n          backface-visibility: hidden;\n  perspective: 1500px;\n}\n.container[_ngcontent-%COMP%]   .profile-logo[_ngcontent-%COMP%]:hover   img[_ngcontent-%COMP%] {\n  transform: rotateY(180deg);\n}\n.container[_ngcontent-%COMP%]   .profile-logo[_ngcontent-%COMP%]:hover::after {\n  transform: rotateY(0deg);\n}\n.container[_ngcontent-%COMP%]   .strip[_ngcontent-%COMP%] {\n  background-color: #e74c3c;\n  height: 16.2rem;\n  width: 150%;\n  margin-left: -5rem;\n  margin-top: -8rem;\n  transform: rotateZ(-16deg);\n  z-index: -1;\n  position: absolute;\n  animation: stripAnimation 1s ease-in-out 1.4s 1 normal both;\n}\n.container[_ngcontent-%COMP%]   .strip[_ngcontent-%COMP%]::after {\n  content: \"\";\n  display: inline-block;\n  position: absolute;\n  height: 100%;\n  width: 20%;\n  background-color: #ffffff;\n  opacity: 0;\n  top: 0;\n  left: 0;\n}\n.container[_ngcontent-%COMP%]   .strip[_ngcontent-%COMP%]:hover::after {\n  animation: fadeLeftToRight 1s ease-in-out 0s 1 normal both;\n}\n.container[_ngcontent-%COMP%]   .strip-block[_ngcontent-%COMP%]:hover   .strip[_ngcontent-%COMP%]:after {\n  animation: fadeLeftToRight 1s ease-in-out 0s 1 normal both;\n}\n.container[_ngcontent-%COMP%]   .short-details[_ngcontent-%COMP%] {\n  position: relative;\n  animation: dropin 1s ease-in-out 0.4s 1 normal both;\n}\n.container[_ngcontent-%COMP%]   .short-details[_ngcontent-%COMP%]   .tagLine[_ngcontent-%COMP%] {\n  display: block;\n  width: 100%;\n  font-size: 1.6rem;\n  font-weight: lighter;\n  font-style: italic;\n  padding: 0.5rem;\n}\n.container[_ngcontent-%COMP%]   .short-details[_ngcontent-%COMP%]   .quote[_ngcontent-%COMP%] {\n  font-family: \"Cormorant Garamond\", serif;\n  display: inline-block;\n  font-size: 2rem;\n  font-weight: 400;\n  width: 65%;\n  padding: 0.5rem 2rem;\n  padding-bottom: 1rem;\n  line-height: 1.2;\n}\n.container[_ngcontent-%COMP%]   .details[_ngcontent-%COMP%] {\n  margin-top: 6rem;\n}\n.container[_ngcontent-%COMP%]   .details[_ngcontent-%COMP%]   .nameBlock[_ngcontent-%COMP%] {\n  transition: all 0.3s ease-in-out;\n  animation: dropin 1s ease-in-out 0.6s 1 normal both;\n}\n.container[_ngcontent-%COMP%]   .details[_ngcontent-%COMP%]   .nameBlock[_ngcontent-%COMP%]:hover   .divider[_ngcontent-%COMP%]    > .stick1[_ngcontent-%COMP%] {\n  transform: translateX(-2rem) !important;\n}\n.container[_ngcontent-%COMP%]   .details[_ngcontent-%COMP%]   .nameBlock[_ngcontent-%COMP%]:hover   .divider[_ngcontent-%COMP%]    > .stick2[_ngcontent-%COMP%] {\n  transform: translateX(2rem) !important;\n}\n.container[_ngcontent-%COMP%]   .details[_ngcontent-%COMP%]   .name[_ngcontent-%COMP%] {\n  display: inline-block;\n  position: relative;\n  width: 60%;\n  font-size: 2rem;\n  font-weight: 400;\n  line-height: 1.6;\n  text-transform: uppercase;\n  letter-spacing: 0.2rem;\n}\n.container[_ngcontent-%COMP%]   .details[_ngcontent-%COMP%]   .bio[_ngcontent-%COMP%] {\n  display: inline-block;\n  width: 70%;\n  font-size: 1.6rem;\n  margin: 0.4rem;\n  line-height: 1.2;\n  font-weight: lighter;\n  margin-bottom: 0.8rem;\n  text-align: center;\n  word-spacing: 1px;\n  animation: dropin 1s ease-in-out 0.8s 1 normal both;\n}\n.container[_ngcontent-%COMP%]   .details[_ngcontent-%COMP%]   .projects-link[_ngcontent-%COMP%] {\n  display: inline-block;\n  width: 15rem;\n  line-height: 2.2;\n  font-size: 1.4rem;\n  padding: 0.5rem;\n  margin-top: 1.5rem;\n  color: #ffffff;\n  text-decoration: none;\n  cursor: pointer;\n  vertical-align: middle;\n  transition: all 0.3s ease-in-out;\n  box-shadow: 7px 5px 8px 0px rgba(0, 0, 0, 0.31);\n  animation: dropin 1s ease-in-out 1s 1 normal both;\n}\n.container[_ngcontent-%COMP%]   .details[_ngcontent-%COMP%]   .projects-link[_ngcontent-%COMP%]   span[_ngcontent-%COMP%] {\n  transform: translateX(0.7rem);\n  display: inline-block;\n  transition: all 0.3s ease-in-out;\n}\n.container[_ngcontent-%COMP%]   .details[_ngcontent-%COMP%]   .projects-link[_ngcontent-%COMP%]:hover {\n  background-color: #db381b;\n  animation-play-state: paused;\n}\n.container[_ngcontent-%COMP%]   .details[_ngcontent-%COMP%]   .projects-link[_ngcontent-%COMP%]:hover::after {\n  transform: translateX(0.2rem);\n  opacity: 1;\n}\n.container[_ngcontent-%COMP%]   .details[_ngcontent-%COMP%]   .projects-link[_ngcontent-%COMP%]:hover   span[_ngcontent-%COMP%] {\n  transform: translateX(-0.2rem);\n}\n.container[_ngcontent-%COMP%]   .details[_ngcontent-%COMP%]   .projects-link[_ngcontent-%COMP%]:active {\n  transform: scale(0.8);\n  box-shadow: 4px 5px 5px 0px rgba(0, 0, 0, 0.31);\n}\n.container[_ngcontent-%COMP%]   .details[_ngcontent-%COMP%]   .projects-link[_ngcontent-%COMP%]::after {\n  content: \"\u00BB\";\n  position: relative;\n  opacity: 0;\n  vertical-align: sub;\n  font-size: 2.7rem;\n  line-height: 0;\n  transform: translateX(25px);\n  display: inline-block;\n  transition: all 0.3s ease-in-out;\n}\n.container[_ngcontent-%COMP%]   .social[_ngcontent-%COMP%] {\n  display: block;\n  padding: 3rem 3rem;\n  padding-top: 0;\n  margin-top: 0.6rem;\n  animation: dropin 1s ease-in-out 1.2s 1 normal both;\n}\n.container[_ngcontent-%COMP%]   .social[_ngcontent-%COMP%]   .social-icon[_ngcontent-%COMP%] {\n  display: inline-block;\n  width: 3.4rem;\n  height: 3.4rem;\n  margin: 0.2rem 0.5rem;\n  background-color: #ffffff;\n  transition: all 0.3s ease-in-out;\n}\n.container[_ngcontent-%COMP%]   .social[_ngcontent-%COMP%]   .social-icon[_ngcontent-%COMP%]   img[_ngcontent-%COMP%] {\n  height: 100%;\n  width: 100%;\n}\n.container[_ngcontent-%COMP%]   .social[_ngcontent-%COMP%]   .social-icon[_ngcontent-%COMP%]:hover {\n  transform: scale(1.3);\n}\n.divider[_ngcontent-%COMP%] {\n  padding: 1rem;\n  display: flex;\n  flex-flow: column;\n  align-items: center;\n  position: relative;\n}\n.divider[_ngcontent-%COMP%]   .stick[_ngcontent-%COMP%] {\n  display: inline-block;\n  position: relative;\n  height: 2px;\n  background-color: #e74c3c;\n  margin: 2px 0;\n  width: 75%;\n  clear: both;\n}\n.divider[_ngcontent-%COMP%]   .stick1[_ngcontent-%COMP%] {\n  transform: translateX(1.5rem);\n  transition: all 0.3s ease-in-out;\n}\n.divider[_ngcontent-%COMP%]   .stick2[_ngcontent-%COMP%] {\n  transform: translateX(-1.5rem);\n  transition: all 0.3s ease-in-out;\n}\n.divider[_ngcontent-%COMP%]:hover   .stick1[_ngcontent-%COMP%] {\n  transform: translateX(-1.5rem) !important;\n}\n.divider[_ngcontent-%COMP%]:hover   .stick2[_ngcontent-%COMP%] {\n  transform: translateX(1.5rem) !important;\n}\n.round-shape[_ngcontent-%COMP%] {\n  background-color: #e74c3c;\n  border-radius: 100rem;\n  padding: 0.2rem 2rem;\n}\n.tada-animation[_ngcontent-%COMP%] {\n  animation: tada 1s ease-in-out 0s 2 normal both;\n}\n@media (max-height: 740px) and (min-width: 436px) {\n  html[_ngcontent-%COMP%] {\n    font-size: 8px;\n  }\n}\n@media (max-height: 660px) and (min-width: 436px) {\n  html[_ngcontent-%COMP%] {\n    font-size: 6px;\n  }\n\n  .container[_ngcontent-%COMP%]   .details[_ngcontent-%COMP%] {\n    margin-top: 8rem;\n  }\n}\n@media (max-height: 740px) {\n  .container[_ngcontent-%COMP%]   .card[_ngcontent-%COMP%] {\n    overflow-y: auto;\n  }\n}\n@media only screen and (max-width: 768px) {\n  .container[_ngcontent-%COMP%]   .profile-logo[_ngcontent-%COMP%] {\n    margin-top: 30px !important;\n  }\n  .container[_ngcontent-%COMP%]   .details[_ngcontent-%COMP%] {\n    margin-top: 8rem !important;\n  }\n}\n@media (max-width: 460px) and (min-height: 100px) {\n  html[_ngcontent-%COMP%] {\n    font-size: 8px;\n  }\n\n  .container[_ngcontent-%COMP%]   .card[_ngcontent-%COMP%] {\n    width: 90vw;\n  }\n  .container[_ngcontent-%COMP%]   .profile-logo[_ngcontent-%COMP%] {\n    width: 14rem;\n    height: 14rem;\n    margin-top: 14rem;\n  }\n  .container[_ngcontent-%COMP%]   .details[_ngcontent-%COMP%] {\n    margin-top: 10rem;\n  }\n}\n@media (max-width: 360px) and (min-height: 100px) {\n  html[_ngcontent-%COMP%] {\n    font-size: 7px;\n  }\n\n  .container[_ngcontent-%COMP%]   .details[_ngcontent-%COMP%] {\n    margin-top: 7rem;\n  }\n  .container[_ngcontent-%COMP%]   .social[_ngcontent-%COMP%]   .social-icon[_ngcontent-%COMP%] {\n    width: 2.4rem;\n    height: 2.4rem;\n  }\n}\n@media (max-width: 270px) and (min-height: 100px) {\n  html[_ngcontent-%COMP%] {\n    font-size: 5px;\n  }\n\n  .container[_ngcontent-%COMP%]   .social[_ngcontent-%COMP%]   .social-icon[_ngcontent-%COMP%] {\n    width: 1.4rem;\n    height: 1.4rem;\n  }\n}\n@media (max-width: 170px) and (min-height: 100px) {\n  html[_ngcontent-%COMP%] {\n    font-size: 1px;\n  }\n}\n@keyframes fadeLeftToRight {\n  0% {\n    opacity: 0.1;\n    left: -10%;\n  }\n  100% {\n    opacity: 0.7;\n    left: 120%;\n  }\n}\n@keyframes dropin {\n  0% {\n    opacity: 0;\n    transform: scale(0);\n  }\n  100% {\n    opacity: 1;\n    transform: scale(1);\n  }\n}\n@keyframes tada {\n  0% {\n    transform: scale(1) rotate(0deg);\n  }\n  10% {\n    transform: scale(1.1) rotate(-4deg);\n  }\n  20% {\n    transform: scale(1.1) rotate(4deg);\n  }\n  30% {\n    transform: scale(1.1) rotate(-4deg);\n  }\n  40% {\n    transform: scale(1.1) rotate(4deg);\n  }\n  50% {\n    transform: scale(1.1) rotate(-4deg);\n  }\n  60% {\n    transform: scale(1.1) rotate(4deg);\n  }\n  70% {\n    transform: scale(1.1) rotate(-4deg);\n  }\n  80% {\n    transform: scale(1.1) rotate(4deg);\n  }\n  90% {\n    transform: scale(1.1) rotate(-4deg);\n  }\n  100% {\n    transform: scale(1) rotate(0deg);\n  }\n}\n@keyframes stripAnimation {\n  0% {\n    transform: translateX(-10px) rotateZ(0deg);\n    opacity: 0;\n  }\n  100% {\n    transform: translateX(0px) rotateZ(-16deg);\n    opacity: 1;\n  }\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvcHJvZmlsZS1jYXJkL3Byb2ZpbGUtY2FyZC5jb21wb25lbnQuc2NzcyIsInNyYy9hcHAvX3Zhci5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBLGdCQUFnQjtBQUVoQjtFQUNFLGFBQUE7RUFDQSxXQUFBO0VBQ0EsaUJBQUE7RUFDQSxtQkFBQTtFQUNBLGVBQUE7RUFDQSx1QkFBQTtFQUNBLHlCQ1RTO0VEVVQsY0NMVztBREtiO0FBQ0U7RUFDRSx5QkNWSztFRFdMLFlBQUE7RUFDQSxlQUFBO0VBQ0EsWUFBQTtFQUNBLGtCQUFBO0VBQ0Esa0JBQUE7RUFDQSxrQkFBQTtFQUNBLFVBQUE7RUFDQSx5QkFBQTtVQUFBLGlCQUFBO0VBQ0EsZ0JBQUE7RUFDQSxrQkFBQTtFQUNBLGtEQUFBO0VBQ0EsZ0NBQUE7RUFDQSxpREFBQTtBQUNKO0FBQ0U7RUFDRSxhQUFBO0VBQ0EsWUFBQTtFQUNBLGtCQUFBO0VBQ0EscUJBQUE7RUFDQSxrQkFBQTtFQUNBLFVBQUE7RUFDQSxrQkFBQTtFQUNBLG1CQUFBO0VBQ0EsbURBQUE7QUFDSjtBQUFJO0VBQ0Usa0JBQUE7RUFDQSw0QkFBQTtFQUNBLFlBQUE7RUFDQSxXQUFBO0VBQ0Esa0JBQUE7RUFDQSxtQ0FBQTtVQUFBLDJCQUFBO0VBQ0EsZ0NBQUE7RUFDQSxtQkFBQTtBQUVOO0FBQUk7RUFDRSw2QkFBQTtFQUNBLGFBQUE7RUFDQSxrQkFBQTtFQUNBLFlBQUE7RUFDQSxXQUFBO0VBQ0EsdUJBQUE7RUFDQSxtQkFBQTtFQUNBLGtCQUFBO0VBQ0EseUJDdkRHO0VEd0RILDRCQUFBO0VBQ0EsUUFBQTtFQUNBLFNBQUE7RUFDQSxXQUFBO0VBQ0EsZUFBQTtFQUNBLGdDQUFBO0VBQ0EsMEJBQUE7RUFDQSxtQ0FBQTtVQUFBLDJCQUFBO0VBQ0EsbUJBQUE7QUFFTjtBQUNNO0VBQ0UsMEJBQUE7QUFDUjtBQUVJO0VBQ0Usd0JBQUE7QUFBTjtBQUdFO0VBQ0UseUJDNUVLO0VENkVMLGVBQUE7RUFDQSxXQUFBO0VBQ0Esa0JBQUE7RUFDQSxpQkFBQTtFQUNBLDBCQUFBO0VBQ0EsV0FBQTtFQUNBLGtCQUFBO0VBQ0EsMkRBQUE7QUFESjtBQUVJO0VBQ0UsV0FBQTtFQUNBLHFCQUFBO0VBQ0Esa0JBQUE7RUFDQSxZQUFBO0VBQ0EsVUFBQTtFQUNBLHlCQUFBO0VBQ0EsVUFBQTtFQUNBLE1BQUE7RUFDQSxPQUFBO0FBQU47QUFFSTtFQUNFLDBEQUFBO0FBQU47QUFJSTtFQUNFLDBEQUFBO0FBRk47QUFLRTtFQUNFLGtCQUFBO0VBQ0EsbURBQUE7QUFISjtBQUlJO0VBQ0UsY0FBQTtFQUNBLFdBQUE7RUFDQSxpQkFBQTtFQUNBLG9CQUFBO0VBQ0Esa0JBQUE7RUFDQSxlQUFBO0FBRk47QUFJSTtFQUNFLHdDQUFBO0VBQ0EscUJBQUE7RUFDQSxlQUFBO0VBQ0EsZ0JBQUE7RUFDQSxVQUFBO0VBQ0Esb0JBQUE7RUFDQSxvQkFBQTtFQUNBLGdCQUFBO0FBRk47QUFLRTtFQUNFLGdCQUFBO0FBSEo7QUFJSTtFQUNFLGdDQUFBO0VBQ0EsbURBQUE7QUFGTjtBQUlRO0VBQ0UsdUNBQUE7QUFGVjtBQUlRO0VBQ0Usc0NBQUE7QUFGVjtBQU1JO0VBQ0UscUJBQUE7RUFDQSxrQkFBQTtFQUNBLFVBQUE7RUFDQSxlQUFBO0VBQ0EsZ0JBQUE7RUFDQSxnQkFBQTtFQUNBLHlCQUFBO0VBQ0Esc0JBQUE7QUFKTjtBQU1JO0VBQ0UscUJBQUE7RUFDQSxVQUFBO0VBQ0EsaUJBQUE7RUFDQSxjQUFBO0VBQ0EsZ0JBQUE7RUFDQSxvQkFBQTtFQUNBLHFCQUFBO0VBQ0Esa0JBQUE7RUFDQSxpQkFBQTtFQUNBLG1EQUFBO0FBSk47QUFNSTtFQUNFLHFCQUFBO0VBQ0EsWUFBQTtFQUNBLGdCQUFBO0VBQ0EsaUJBQUE7RUFDQSxlQUFBO0VBQ0Esa0JBQUE7RUFDQSxjQUFBO0VBQ0EscUJBQUE7RUFDQSxlQUFBO0VBQ0Esc0JBQUE7RUFDQSxnQ0FBQTtFQUNBLCtDQUFBO0VBQ0EsaURBQUE7QUFKTjtBQU1NO0VBQ0UsNkJBQUE7RUFDQSxxQkFBQTtFQUNBLGdDQUFBO0FBSlI7QUFNTTtFQUNFLHlCQ3RMQztFRHVMRCw0QkFBQTtBQUpSO0FBS1E7RUFDRSw2QkFBQTtFQUNBLFVBQUE7QUFIVjtBQUtRO0VBQ0UsOEJBQUE7QUFIVjtBQU1NO0VBQ0UscUJBQUE7RUFDQSwrQ0FBQTtBQUpSO0FBTU07RUFDRSxZQUFBO0VBQ0Esa0JBQUE7RUFDQSxVQUFBO0VBQ0EsbUJBQUE7RUFDQSxpQkFBQTtFQUNBLGNBQUE7RUFDQSwyQkFBQTtFQUNBLHFCQUFBO0VBQ0EsZ0NBQUE7QUFKUjtBQVFFO0VBQ0UsY0FBQTtFQUNBLGtCQUFBO0VBQ0EsY0FBQTtFQUNBLGtCQUFBO0VBQ0EsbURBQUE7QUFOSjtBQU9JO0VBQ0UscUJBQUE7RUFDQSxhQUFBO0VBQ0EsY0FBQTtFQUNBLHFCQUFBO0VBQ0EseUJBQUE7RUFDQSxnQ0FBQTtBQUxOO0FBTU07RUFDRSxZQUFBO0VBQ0EsV0FBQTtBQUpSO0FBTU07RUFDRSxxQkFBQTtBQUpSO0FBVUE7RUFDRSxhQUFBO0VBQ0EsYUFBQTtFQUNBLGlCQUFBO0VBQ0EsbUJBQUE7RUFDQSxrQkFBQTtBQVBGO0FBUUU7RUFDRSxxQkFBQTtFQUNBLGtCQUFBO0VBQ0EsV0FBQTtFQUNBLHlCQ3JQSztFRHNQTCxhQUFBO0VBQ0EsVUFBQTtFQUNBLFdBQUE7QUFOSjtBQVFFO0VBQ0UsNkJBQUE7RUFDQSxnQ0FBQTtBQU5KO0FBUUU7RUFDRSw4QkFBQTtFQUNBLGdDQUFBO0FBTko7QUFTSTtFQUNFLHlDQUFBO0FBUE47QUFTSTtFQUNFLHdDQUFBO0FBUE47QUFZQTtFQUNFLHlCQzdRTztFRDhRUCxxQkFBQTtFQUNBLG9CQUFBO0FBVEY7QUFZQTtFQUNFLCtDQUFBO0FBVEY7QUFZQTtFQUNFO0lBQ0UsY0FBQTtFQVRGO0FBQ0Y7QUFZQTtFQUNFO0lBQ0UsY0FBQTtFQVZGOztFQWFFO0lBQ0UsZ0JBQUE7RUFWSjtBQUNGO0FBY0E7RUFFSTtJQUNFLGdCQUFBO0VBYko7QUFDRjtBQWlCQTtFQUVJO0lBQ0UsMkJBQUE7RUFoQko7RUFrQkU7SUFDRSwyQkFBQTtFQWhCSjtBQUNGO0FBb0JBO0VBQ0U7SUFDRSxjQUFBO0VBbEJGOztFQXFCRTtJQUNFLFdBQUE7RUFsQko7RUFvQkU7SUFDRSxZQUFBO0lBQ0EsYUFBQTtJQUNBLGlCQUFBO0VBbEJKO0VBb0JFO0lBQ0UsaUJBQUE7RUFsQko7QUFDRjtBQXNCQTtFQUNFO0lBQ0UsY0FBQTtFQXBCRjs7RUF1QkU7SUFDRSxnQkFBQTtFQXBCSjtFQXVCSTtJQUNFLGFBQUE7SUFDQSxjQUFBO0VBckJOO0FBQ0Y7QUEwQkE7RUFDRTtJQUNFLGNBQUE7RUF4QkY7O0VBNEJJO0lBQ0UsYUFBQTtJQUNBLGNBQUE7RUF6Qk47QUFDRjtBQThCQTtFQUNFO0lBQ0UsY0FBQTtFQTVCRjtBQUNGO0FBK0JBO0VBQ0U7SUFDRSxZQUFBO0lBQ0EsVUFBQTtFQTdCRjtFQStCQTtJQUNFLFlBQUE7SUFDQSxVQUFBO0VBN0JGO0FBQ0Y7QUFnQ0E7RUFDRTtJQUNFLFVBQUE7SUFDQSxtQkFBQTtFQTlCRjtFQWdDQTtJQUNFLFVBQUE7SUFDQSxtQkFBQTtFQTlCRjtBQUNGO0FBaUNBO0VBQ0U7SUFDRSxnQ0FBQTtFQS9CRjtFQWlDQTtJQUNFLG1DQUFBO0VBL0JGO0VBaUNBO0lBQ0Usa0NBQUE7RUEvQkY7RUFpQ0E7SUFDRSxtQ0FBQTtFQS9CRjtFQWlDQTtJQUNFLGtDQUFBO0VBL0JGO0VBaUNBO0lBQ0UsbUNBQUE7RUEvQkY7RUFpQ0E7SUFDRSxrQ0FBQTtFQS9CRjtFQWlDQTtJQUNFLG1DQUFBO0VBL0JGO0VBaUNBO0lBQ0Usa0NBQUE7RUEvQkY7RUFpQ0E7SUFDRSxtQ0FBQTtFQS9CRjtFQWlDQTtJQUNFLGdDQUFBO0VBL0JGO0FBQ0Y7QUFrQ0E7RUFDRTtJQUNFLDBDQUFBO0lBQ0EsVUFBQTtFQWhDRjtFQWtDQTtJQUNFLDBDQUFBO0lBQ0EsVUFBQTtFQWhDRjtBQUNGIiwiZmlsZSI6InNyYy9hcHAvcHJvZmlsZS1jYXJkL3Byb2ZpbGUtY2FyZC5jb21wb25lbnQuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIkBjaGFyc2V0IFwiVVRGLThcIjtcbi5jb250YWluZXIge1xuICBkaXNwbGF5OiBmbGV4O1xuICB3aWR0aDogMTAwJTtcbiAgbWluLWhlaWdodDogMTAwdmg7XG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG4gIHBhZGRpbmc6IDJyZW0gMDtcbiAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XG4gIGJhY2tncm91bmQtY29sb3I6ICMxN2E1OTg7XG4gIGNvbG9yOiAjZmZmZmZmO1xufVxuLmNvbnRhaW5lciAuY2FyZCB7XG4gIGJhY2tncm91bmQtY29sb3I6ICMyYzNlNTA7XG4gIGhlaWdodDogYXV0bztcbiAgbWF4LWhlaWdodDogOTAlO1xuICB3aWR0aDogNDVyZW07XG4gIHRleHQtYWxpZ246IGNlbnRlcjtcbiAgb3ZlcmZsb3cteDogaGlkZGVuO1xuICBwb3NpdGlvbjogcmVsYXRpdmU7XG4gIHotaW5kZXg6IDE7XG4gIHVzZXItc2VsZWN0OiBub25lO1xuICBvdmVyZmxvdzogaGlkZGVuO1xuICBib3JkZXItcmFkaXVzOiA1cHg7XG4gIGJveC1zaGFkb3c6IDEycHggMTFweCAxNHB4IDBweCByZ2JhKDAsIDAsIDAsIDAuMzYpO1xuICB0cmFuc2l0aW9uOiBhbGwgMC4zcyBlYXNlLWluLW91dDtcbiAgYW5pbWF0aW9uOiBkcm9waW4gMXMgZWFzZS1pbi1vdXQgMHMgMSBub3JtYWwgYm90aDtcbn1cbi5jb250YWluZXIgLnByb2ZpbGUtbG9nbyB7XG4gIGhlaWdodDogMTRyZW07XG4gIHdpZHRoOiAxNHJlbTtcbiAgbWFyZ2luLXRvcDogNS41cmVtO1xuICBkaXNwbGF5OiBpbmxpbmUtYmxvY2s7XG4gIHBvc2l0aW9uOiByZWxhdGl2ZTtcbiAgei1pbmRleDogNTtcbiAgYm9yZGVyLXJhZGl1czogNTAlO1xuICBwZXJzcGVjdGl2ZTogMTUwMHB4O1xuICBhbmltYXRpb246IGRyb3BpbiAxcyBlYXNlLWluLW91dCAwLjRzIDEgbm9ybWFsIGJvdGg7XG59XG4uY29udGFpbmVyIC5wcm9maWxlLWxvZ28gaW1nIHtcbiAgcG9zaXRpb246IHJlbGF0aXZlO1xuICBib3JkZXI6IDAuOHJlbSBzb2xpZCAjZTc0YzNjO1xuICBoZWlnaHQ6IDEwMCU7XG4gIHdpZHRoOiAxMDAlO1xuICBib3JkZXItcmFkaXVzOiA1MCU7XG4gIGJhY2tmYWNlLXZpc2liaWxpdHk6IGhpZGRlbjtcbiAgdHJhbnNpdGlvbjogYWxsIDAuNXMgZWFzZS1pbi1vdXQ7XG4gIHBlcnNwZWN0aXZlOiAxNTAwcHg7XG59XG4uY29udGFpbmVyIC5wcm9maWxlLWxvZ286OmFmdGVyIHtcbiAgY29udGVudDogXCJNb2hhbWVkIGtoYWZjaHJhaXRcIjtcbiAgZGlzcGxheTogZmxleDtcbiAgcG9zaXRpb246IGFic29sdXRlO1xuICBoZWlnaHQ6IDEwMCU7XG4gIHdpZHRoOiAxMDAlO1xuICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbiAgYm9yZGVyLXJhZGl1czogNTAlO1xuICBiYWNrZ3JvdW5kLWNvbG9yOiAjZTc0YzNjO1xuICBib3JkZXI6IDAuOHJlbSBzb2xpZCAjZGIzODFiO1xuICB0b3A6IDBweDtcbiAgbGVmdDogMHB4O1xuICB6LWluZGV4OiAxMDtcbiAgZm9udC1zaXplOiAycmVtO1xuICB0cmFuc2l0aW9uOiBhbGwgMC41cyBlYXNlLWluLW91dDtcbiAgdHJhbnNmb3JtOiByb3RhdGVZKDE4MGRlZyk7XG4gIGJhY2tmYWNlLXZpc2liaWxpdHk6IGhpZGRlbjtcbiAgcGVyc3BlY3RpdmU6IDE1MDBweDtcbn1cbi5jb250YWluZXIgLnByb2ZpbGUtbG9nbzpob3ZlciBpbWcge1xuICB0cmFuc2Zvcm06IHJvdGF0ZVkoMTgwZGVnKTtcbn1cbi5jb250YWluZXIgLnByb2ZpbGUtbG9nbzpob3Zlcjo6YWZ0ZXIge1xuICB0cmFuc2Zvcm06IHJvdGF0ZVkoMGRlZyk7XG59XG4uY29udGFpbmVyIC5zdHJpcCB7XG4gIGJhY2tncm91bmQtY29sb3I6ICNlNzRjM2M7XG4gIGhlaWdodDogMTYuMnJlbTtcbiAgd2lkdGg6IDE1MCU7XG4gIG1hcmdpbi1sZWZ0OiAtNXJlbTtcbiAgbWFyZ2luLXRvcDogLThyZW07XG4gIHRyYW5zZm9ybTogcm90YXRlWigtMTZkZWcpO1xuICB6LWluZGV4OiAtMTtcbiAgcG9zaXRpb246IGFic29sdXRlO1xuICBhbmltYXRpb246IHN0cmlwQW5pbWF0aW9uIDFzIGVhc2UtaW4tb3V0IDEuNHMgMSBub3JtYWwgYm90aDtcbn1cbi5jb250YWluZXIgLnN0cmlwOjphZnRlciB7XG4gIGNvbnRlbnQ6IFwiXCI7XG4gIGRpc3BsYXk6IGlubGluZS1ibG9jaztcbiAgcG9zaXRpb246IGFic29sdXRlO1xuICBoZWlnaHQ6IDEwMCU7XG4gIHdpZHRoOiAyMCU7XG4gIGJhY2tncm91bmQtY29sb3I6ICNmZmZmZmY7XG4gIG9wYWNpdHk6IDA7XG4gIHRvcDogMDtcbiAgbGVmdDogMDtcbn1cbi5jb250YWluZXIgLnN0cmlwOmhvdmVyOjphZnRlciB7XG4gIGFuaW1hdGlvbjogZmFkZUxlZnRUb1JpZ2h0IDFzIGVhc2UtaW4tb3V0IDBzIDEgbm9ybWFsIGJvdGg7XG59XG4uY29udGFpbmVyIC5zdHJpcC1ibG9jazpob3ZlciAuc3RyaXA6YWZ0ZXIge1xuICBhbmltYXRpb246IGZhZGVMZWZ0VG9SaWdodCAxcyBlYXNlLWluLW91dCAwcyAxIG5vcm1hbCBib3RoO1xufVxuLmNvbnRhaW5lciAuc2hvcnQtZGV0YWlscyB7XG4gIHBvc2l0aW9uOiByZWxhdGl2ZTtcbiAgYW5pbWF0aW9uOiBkcm9waW4gMXMgZWFzZS1pbi1vdXQgMC40cyAxIG5vcm1hbCBib3RoO1xufVxuLmNvbnRhaW5lciAuc2hvcnQtZGV0YWlscyAudGFnTGluZSB7XG4gIGRpc3BsYXk6IGJsb2NrO1xuICB3aWR0aDogMTAwJTtcbiAgZm9udC1zaXplOiAxLjZyZW07XG4gIGZvbnQtd2VpZ2h0OiBsaWdodGVyO1xuICBmb250LXN0eWxlOiBpdGFsaWM7XG4gIHBhZGRpbmc6IDAuNXJlbTtcbn1cbi5jb250YWluZXIgLnNob3J0LWRldGFpbHMgLnF1b3RlIHtcbiAgZm9udC1mYW1pbHk6IFwiQ29ybW9yYW50IEdhcmFtb25kXCIsIHNlcmlmO1xuICBkaXNwbGF5OiBpbmxpbmUtYmxvY2s7XG4gIGZvbnQtc2l6ZTogMnJlbTtcbiAgZm9udC13ZWlnaHQ6IDQwMDtcbiAgd2lkdGg6IDY1JTtcbiAgcGFkZGluZzogMC41cmVtIDJyZW07XG4gIHBhZGRpbmctYm90dG9tOiAxcmVtO1xuICBsaW5lLWhlaWdodDogMS4yO1xufVxuLmNvbnRhaW5lciAuZGV0YWlscyB7XG4gIG1hcmdpbi10b3A6IDZyZW07XG59XG4uY29udGFpbmVyIC5kZXRhaWxzIC5uYW1lQmxvY2sge1xuICB0cmFuc2l0aW9uOiBhbGwgMC4zcyBlYXNlLWluLW91dDtcbiAgYW5pbWF0aW9uOiBkcm9waW4gMXMgZWFzZS1pbi1vdXQgMC42cyAxIG5vcm1hbCBib3RoO1xufVxuLmNvbnRhaW5lciAuZGV0YWlscyAubmFtZUJsb2NrOmhvdmVyIC5kaXZpZGVyID4gLnN0aWNrMSB7XG4gIHRyYW5zZm9ybTogdHJhbnNsYXRlWCgtMnJlbSkgIWltcG9ydGFudDtcbn1cbi5jb250YWluZXIgLmRldGFpbHMgLm5hbWVCbG9jazpob3ZlciAuZGl2aWRlciA+IC5zdGljazIge1xuICB0cmFuc2Zvcm06IHRyYW5zbGF0ZVgoMnJlbSkgIWltcG9ydGFudDtcbn1cbi5jb250YWluZXIgLmRldGFpbHMgLm5hbWUge1xuICBkaXNwbGF5OiBpbmxpbmUtYmxvY2s7XG4gIHBvc2l0aW9uOiByZWxhdGl2ZTtcbiAgd2lkdGg6IDYwJTtcbiAgZm9udC1zaXplOiAycmVtO1xuICBmb250LXdlaWdodDogNDAwO1xuICBsaW5lLWhlaWdodDogMS42O1xuICB0ZXh0LXRyYW5zZm9ybTogdXBwZXJjYXNlO1xuICBsZXR0ZXItc3BhY2luZzogMC4ycmVtO1xufVxuLmNvbnRhaW5lciAuZGV0YWlscyAuYmlvIHtcbiAgZGlzcGxheTogaW5saW5lLWJsb2NrO1xuICB3aWR0aDogNzAlO1xuICBmb250LXNpemU6IDEuNnJlbTtcbiAgbWFyZ2luOiAwLjRyZW07XG4gIGxpbmUtaGVpZ2h0OiAxLjI7XG4gIGZvbnQtd2VpZ2h0OiBsaWdodGVyO1xuICBtYXJnaW4tYm90dG9tOiAwLjhyZW07XG4gIHRleHQtYWxpZ246IGNlbnRlcjtcbiAgd29yZC1zcGFjaW5nOiAxcHg7XG4gIGFuaW1hdGlvbjogZHJvcGluIDFzIGVhc2UtaW4tb3V0IDAuOHMgMSBub3JtYWwgYm90aDtcbn1cbi5jb250YWluZXIgLmRldGFpbHMgLnByb2plY3RzLWxpbmsge1xuICBkaXNwbGF5OiBpbmxpbmUtYmxvY2s7XG4gIHdpZHRoOiAxNXJlbTtcbiAgbGluZS1oZWlnaHQ6IDIuMjtcbiAgZm9udC1zaXplOiAxLjRyZW07XG4gIHBhZGRpbmc6IDAuNXJlbTtcbiAgbWFyZ2luLXRvcDogMS41cmVtO1xuICBjb2xvcjogI2ZmZmZmZjtcbiAgdGV4dC1kZWNvcmF0aW9uOiBub25lO1xuICBjdXJzb3I6IHBvaW50ZXI7XG4gIHZlcnRpY2FsLWFsaWduOiBtaWRkbGU7XG4gIHRyYW5zaXRpb246IGFsbCAwLjNzIGVhc2UtaW4tb3V0O1xuICBib3gtc2hhZG93OiA3cHggNXB4IDhweCAwcHggcmdiYSgwLCAwLCAwLCAwLjMxKTtcbiAgYW5pbWF0aW9uOiBkcm9waW4gMXMgZWFzZS1pbi1vdXQgMXMgMSBub3JtYWwgYm90aDtcbn1cbi5jb250YWluZXIgLmRldGFpbHMgLnByb2plY3RzLWxpbmsgc3BhbiB7XG4gIHRyYW5zZm9ybTogdHJhbnNsYXRlWCgwLjdyZW0pO1xuICBkaXNwbGF5OiBpbmxpbmUtYmxvY2s7XG4gIHRyYW5zaXRpb246IGFsbCAwLjNzIGVhc2UtaW4tb3V0O1xufVxuLmNvbnRhaW5lciAuZGV0YWlscyAucHJvamVjdHMtbGluazpob3ZlciB7XG4gIGJhY2tncm91bmQtY29sb3I6ICNkYjM4MWI7XG4gIGFuaW1hdGlvbi1wbGF5LXN0YXRlOiBwYXVzZWQ7XG59XG4uY29udGFpbmVyIC5kZXRhaWxzIC5wcm9qZWN0cy1saW5rOmhvdmVyOjphZnRlciB7XG4gIHRyYW5zZm9ybTogdHJhbnNsYXRlWCgwLjJyZW0pO1xuICBvcGFjaXR5OiAxO1xufVxuLmNvbnRhaW5lciAuZGV0YWlscyAucHJvamVjdHMtbGluazpob3ZlciBzcGFuIHtcbiAgdHJhbnNmb3JtOiB0cmFuc2xhdGVYKC0wLjJyZW0pO1xufVxuLmNvbnRhaW5lciAuZGV0YWlscyAucHJvamVjdHMtbGluazphY3RpdmUge1xuICB0cmFuc2Zvcm06IHNjYWxlKDAuOCk7XG4gIGJveC1zaGFkb3c6IDRweCA1cHggNXB4IDBweCByZ2JhKDAsIDAsIDAsIDAuMzEpO1xufVxuLmNvbnRhaW5lciAuZGV0YWlscyAucHJvamVjdHMtbGluazo6YWZ0ZXIge1xuICBjb250ZW50OiBcIsK7XCI7XG4gIHBvc2l0aW9uOiByZWxhdGl2ZTtcbiAgb3BhY2l0eTogMDtcbiAgdmVydGljYWwtYWxpZ246IHN1YjtcbiAgZm9udC1zaXplOiAyLjdyZW07XG4gIGxpbmUtaGVpZ2h0OiAwO1xuICB0cmFuc2Zvcm06IHRyYW5zbGF0ZVgoMjVweCk7XG4gIGRpc3BsYXk6IGlubGluZS1ibG9jaztcbiAgdHJhbnNpdGlvbjogYWxsIDAuM3MgZWFzZS1pbi1vdXQ7XG59XG4uY29udGFpbmVyIC5zb2NpYWwge1xuICBkaXNwbGF5OiBibG9jaztcbiAgcGFkZGluZzogM3JlbSAzcmVtO1xuICBwYWRkaW5nLXRvcDogMDtcbiAgbWFyZ2luLXRvcDogMC42cmVtO1xuICBhbmltYXRpb246IGRyb3BpbiAxcyBlYXNlLWluLW91dCAxLjJzIDEgbm9ybWFsIGJvdGg7XG59XG4uY29udGFpbmVyIC5zb2NpYWwgLnNvY2lhbC1pY29uIHtcbiAgZGlzcGxheTogaW5saW5lLWJsb2NrO1xuICB3aWR0aDogMy40cmVtO1xuICBoZWlnaHQ6IDMuNHJlbTtcbiAgbWFyZ2luOiAwLjJyZW0gMC41cmVtO1xuICBiYWNrZ3JvdW5kLWNvbG9yOiAjZmZmZmZmO1xuICB0cmFuc2l0aW9uOiBhbGwgMC4zcyBlYXNlLWluLW91dDtcbn1cbi5jb250YWluZXIgLnNvY2lhbCAuc29jaWFsLWljb24gaW1nIHtcbiAgaGVpZ2h0OiAxMDAlO1xuICB3aWR0aDogMTAwJTtcbn1cbi5jb250YWluZXIgLnNvY2lhbCAuc29jaWFsLWljb246aG92ZXIge1xuICB0cmFuc2Zvcm06IHNjYWxlKDEuMyk7XG59XG5cbi5kaXZpZGVyIHtcbiAgcGFkZGluZzogMXJlbTtcbiAgZGlzcGxheTogZmxleDtcbiAgZmxleC1mbG93OiBjb2x1bW47XG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG4gIHBvc2l0aW9uOiByZWxhdGl2ZTtcbn1cbi5kaXZpZGVyIC5zdGljayB7XG4gIGRpc3BsYXk6IGlubGluZS1ibG9jaztcbiAgcG9zaXRpb246IHJlbGF0aXZlO1xuICBoZWlnaHQ6IDJweDtcbiAgYmFja2dyb3VuZC1jb2xvcjogI2U3NGMzYztcbiAgbWFyZ2luOiAycHggMDtcbiAgd2lkdGg6IDc1JTtcbiAgY2xlYXI6IGJvdGg7XG59XG4uZGl2aWRlciAuc3RpY2sxIHtcbiAgdHJhbnNmb3JtOiB0cmFuc2xhdGVYKDEuNXJlbSk7XG4gIHRyYW5zaXRpb246IGFsbCAwLjNzIGVhc2UtaW4tb3V0O1xufVxuLmRpdmlkZXIgLnN0aWNrMiB7XG4gIHRyYW5zZm9ybTogdHJhbnNsYXRlWCgtMS41cmVtKTtcbiAgdHJhbnNpdGlvbjogYWxsIDAuM3MgZWFzZS1pbi1vdXQ7XG59XG4uZGl2aWRlcjpob3ZlciAuc3RpY2sxIHtcbiAgdHJhbnNmb3JtOiB0cmFuc2xhdGVYKC0xLjVyZW0pICFpbXBvcnRhbnQ7XG59XG4uZGl2aWRlcjpob3ZlciAuc3RpY2syIHtcbiAgdHJhbnNmb3JtOiB0cmFuc2xhdGVYKDEuNXJlbSkgIWltcG9ydGFudDtcbn1cblxuLnJvdW5kLXNoYXBlIHtcbiAgYmFja2dyb3VuZC1jb2xvcjogI2U3NGMzYztcbiAgYm9yZGVyLXJhZGl1czogMTAwcmVtO1xuICBwYWRkaW5nOiAwLjJyZW0gMnJlbTtcbn1cblxuLnRhZGEtYW5pbWF0aW9uIHtcbiAgYW5pbWF0aW9uOiB0YWRhIDFzIGVhc2UtaW4tb3V0IDBzIDIgbm9ybWFsIGJvdGg7XG59XG5cbkBtZWRpYSAobWF4LWhlaWdodDogNzQwcHgpIGFuZCAobWluLXdpZHRoOiA0MzZweCkge1xuICBodG1sIHtcbiAgICBmb250LXNpemU6IDhweDtcbiAgfVxufVxuQG1lZGlhIChtYXgtaGVpZ2h0OiA2NjBweCkgYW5kIChtaW4td2lkdGg6IDQzNnB4KSB7XG4gIGh0bWwge1xuICAgIGZvbnQtc2l6ZTogNnB4O1xuICB9XG5cbiAgLmNvbnRhaW5lciAuZGV0YWlscyB7XG4gICAgbWFyZ2luLXRvcDogOHJlbTtcbiAgfVxufVxuQG1lZGlhIChtYXgtaGVpZ2h0OiA3NDBweCkge1xuICAuY29udGFpbmVyIC5jYXJkIHtcbiAgICBvdmVyZmxvdy15OiBhdXRvO1xuICB9XG59XG5AbWVkaWEgb25seSBzY3JlZW4gYW5kIChtYXgtd2lkdGg6IDc2OHB4KSB7XG4gIC5jb250YWluZXIgLnByb2ZpbGUtbG9nbyB7XG4gICAgbWFyZ2luLXRvcDogMzBweCAhaW1wb3J0YW50O1xuICB9XG4gIC5jb250YWluZXIgLmRldGFpbHMge1xuICAgIG1hcmdpbi10b3A6IDhyZW0gIWltcG9ydGFudDtcbiAgfVxufVxuQG1lZGlhIChtYXgtd2lkdGg6IDQ2MHB4KSBhbmQgKG1pbi1oZWlnaHQ6IDEwMHB4KSB7XG4gIGh0bWwge1xuICAgIGZvbnQtc2l6ZTogOHB4O1xuICB9XG5cbiAgLmNvbnRhaW5lciAuY2FyZCB7XG4gICAgd2lkdGg6IDkwdnc7XG4gIH1cbiAgLmNvbnRhaW5lciAucHJvZmlsZS1sb2dvIHtcbiAgICB3aWR0aDogMTRyZW07XG4gICAgaGVpZ2h0OiAxNHJlbTtcbiAgICBtYXJnaW4tdG9wOiAxNHJlbTtcbiAgfVxuICAuY29udGFpbmVyIC5kZXRhaWxzIHtcbiAgICBtYXJnaW4tdG9wOiAxMHJlbTtcbiAgfVxufVxuQG1lZGlhIChtYXgtd2lkdGg6IDM2MHB4KSBhbmQgKG1pbi1oZWlnaHQ6IDEwMHB4KSB7XG4gIGh0bWwge1xuICAgIGZvbnQtc2l6ZTogN3B4O1xuICB9XG5cbiAgLmNvbnRhaW5lciAuZGV0YWlscyB7XG4gICAgbWFyZ2luLXRvcDogN3JlbTtcbiAgfVxuICAuY29udGFpbmVyIC5zb2NpYWwgLnNvY2lhbC1pY29uIHtcbiAgICB3aWR0aDogMi40cmVtO1xuICAgIGhlaWdodDogMi40cmVtO1xuICB9XG59XG5AbWVkaWEgKG1heC13aWR0aDogMjcwcHgpIGFuZCAobWluLWhlaWdodDogMTAwcHgpIHtcbiAgaHRtbCB7XG4gICAgZm9udC1zaXplOiA1cHg7XG4gIH1cblxuICAuY29udGFpbmVyIC5zb2NpYWwgLnNvY2lhbC1pY29uIHtcbiAgICB3aWR0aDogMS40cmVtO1xuICAgIGhlaWdodDogMS40cmVtO1xuICB9XG59XG5AbWVkaWEgKG1heC13aWR0aDogMTcwcHgpIGFuZCAobWluLWhlaWdodDogMTAwcHgpIHtcbiAgaHRtbCB7XG4gICAgZm9udC1zaXplOiAxcHg7XG4gIH1cbn1cbkBrZXlmcmFtZXMgZmFkZUxlZnRUb1JpZ2h0IHtcbiAgMCUge1xuICAgIG9wYWNpdHk6IDAuMTtcbiAgICBsZWZ0OiAtMTAlO1xuICB9XG4gIDEwMCUge1xuICAgIG9wYWNpdHk6IDAuNztcbiAgICBsZWZ0OiAxMjAlO1xuICB9XG59XG5Aa2V5ZnJhbWVzIGRyb3BpbiB7XG4gIDAlIHtcbiAgICBvcGFjaXR5OiAwO1xuICAgIHRyYW5zZm9ybTogc2NhbGUoMCk7XG4gIH1cbiAgMTAwJSB7XG4gICAgb3BhY2l0eTogMTtcbiAgICB0cmFuc2Zvcm06IHNjYWxlKDEpO1xuICB9XG59XG5Aa2V5ZnJhbWVzIHRhZGEge1xuICAwJSB7XG4gICAgdHJhbnNmb3JtOiBzY2FsZSgxKSByb3RhdGUoMGRlZyk7XG4gIH1cbiAgMTAlIHtcbiAgICB0cmFuc2Zvcm06IHNjYWxlKDEuMSkgcm90YXRlKC00ZGVnKTtcbiAgfVxuICAyMCUge1xuICAgIHRyYW5zZm9ybTogc2NhbGUoMS4xKSByb3RhdGUoNGRlZyk7XG4gIH1cbiAgMzAlIHtcbiAgICB0cmFuc2Zvcm06IHNjYWxlKDEuMSkgcm90YXRlKC00ZGVnKTtcbiAgfVxuICA0MCUge1xuICAgIHRyYW5zZm9ybTogc2NhbGUoMS4xKSByb3RhdGUoNGRlZyk7XG4gIH1cbiAgNTAlIHtcbiAgICB0cmFuc2Zvcm06IHNjYWxlKDEuMSkgcm90YXRlKC00ZGVnKTtcbiAgfVxuICA2MCUge1xuICAgIHRyYW5zZm9ybTogc2NhbGUoMS4xKSByb3RhdGUoNGRlZyk7XG4gIH1cbiAgNzAlIHtcbiAgICB0cmFuc2Zvcm06IHNjYWxlKDEuMSkgcm90YXRlKC00ZGVnKTtcbiAgfVxuICA4MCUge1xuICAgIHRyYW5zZm9ybTogc2NhbGUoMS4xKSByb3RhdGUoNGRlZyk7XG4gIH1cbiAgOTAlIHtcbiAgICB0cmFuc2Zvcm06IHNjYWxlKDEuMSkgcm90YXRlKC00ZGVnKTtcbiAgfVxuICAxMDAlIHtcbiAgICB0cmFuc2Zvcm06IHNjYWxlKDEpIHJvdGF0ZSgwZGVnKTtcbiAgfVxufVxuQGtleWZyYW1lcyBzdHJpcEFuaW1hdGlvbiB7XG4gIDAlIHtcbiAgICB0cmFuc2Zvcm06IHRyYW5zbGF0ZVgoLTEwcHgpIHJvdGF0ZVooMGRlZyk7XG4gICAgb3BhY2l0eTogMDtcbiAgfVxuICAxMDAlIHtcbiAgICB0cmFuc2Zvcm06IHRyYW5zbGF0ZVgoMHB4KSByb3RhdGVaKC0xNmRlZyk7XG4gICAgb3BhY2l0eTogMTtcbiAgfVxufSIsIiRiZy1jb2xvcjogIzE3YTU5ODtcclxuJGNvbG9yMTogI2U3NGMzYztcclxuJGNvbG9yMjogIzJjM2U1MDtcclxuJGNvbG9yMzogI2RiMzgxYjtcclxuJGdyZWVuOiAjMTdhNTk4O1xyXG4kdGV4dC1jb2xvcjogI2ZmZmZmZjtcclxuJGJsYWNrOiAjNTU1O1xyXG4kb2ZmLXdoaXRlOiAjZjhmOGY4O1xyXG4kd2hpdGU6ICNmZmY7XHJcblxyXG4iXX0= */"] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](ProfileCardComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'app-profile-card',
                templateUrl: './profile-card.component.html',
                styleUrls: ['./profile-card.component.scss']
            }]
    }], function () { return [{ type: _angular_router__WEBPACK_IMPORTED_MODULE_1__["Router"] }]; }, { ExploreMe: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Output"]
        }] }); })();


/***/ }),

/***/ "84zG":
/*!******************************************!*\
  !*** ./src/app/about/about.component.ts ***!
  \******************************************/
/*! exports provided: AboutComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AboutComponent", function() { return AboutComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _services_skills_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./../services/skills.service */ "pYtu");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "tyNb");
/* harmony import */ var _ui_back_icon_back_icon_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../ui/back-icon/back-icon.component */ "ITds");
/* harmony import */ var _dp_logo_dp_logo_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../dp-logo/dp-logo.component */ "Hsyc");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/common */ "ofXK");







function AboutComponent_div_20_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "h4", 10);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "h4", 11);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const skill_r1 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](skill_r1.type);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](skill_r1.names.join(", "));
} }
class AboutComponent {
    constructor(skillsService, router) {
        this.skillsService = skillsService;
        this.router = router;
    }
    ngOnInit() {
        this.skills = this.skillsService.getSkills();
    }
    onBackClick() {
        this.router.navigateByUrl('/');
    }
}
AboutComponent.ɵfac = function AboutComponent_Factory(t) { return new (t || AboutComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_services_skills_service__WEBPACK_IMPORTED_MODULE_1__["SkillsService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"])); };
AboutComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: AboutComponent, selectors: [["app-about"]], decls: 21, vars: 1, consts: [[1, "back-icon", 3, "click"], [1, "overlay"], [1, "container"], [1, "side1"], [1, "skill-header"], ["height", "13rem", "width", "13rem", 1, "dp-logo"], [1, "text-container"], [1, "side2"], [1, "skill-container"], [4, "ngFor", "ngForOf"], [1, "skill-type"], [1, "skill-names"]], template: function AboutComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function AboutComponent_Template_div_click_0_listener() { return ctx.onBackClick(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](1, "app-back-icon");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](2, "span", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "div", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "div", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "h1", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](6, "ABOUT");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](7, "app-dp-logo", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](8, "div", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](9, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](10, " Actuellement \u00E9l\u00E8ve ing\u00E9nieur marocain en 3\u00E8me ann\u00E9e, option: Syst\u00E8me d'Information G\u00E9ographique (SIG) \u00E0 l'Ecole Hassania des Travaux Publics (EHTP). Motiv\u00E9 \u00E0 l'id\u00E9e de travailler en \u00E9quipe, je saurai faire preuve de s\u00E9rieux et de dynamisme pour accomplir au mieux les missions que vous voudrez bien me confier");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](11, "br");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](12, " je suis \u00E0 la recherche d'un stage PFE dans le domaine de d\u00E9veloppement informatique ou d\u00E9veloppement des syst\u00E8mes d'information g\u00E9ographique pour une dur\u00E9e 4-6 mois.");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](13, "br");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](14, " N'h\u00E9sitez pas \u00E0 me contacter pour \u00E9changer au sujet de potentielles propositions et nous trouverons un projet \u00E0 r\u00E9aliser ensemble ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](15, "br");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](16, "div", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](17, "div", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](18, "h1", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](19, " Skills ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](20, AboutComponent_div_20_Template, 5, 2, "div", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](20);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", ctx.skills);
    } }, directives: [_ui_back_icon_back_icon_component__WEBPACK_IMPORTED_MODULE_3__["BackIconComponent"], _dp_logo_dp_logo_component__WEBPACK_IMPORTED_MODULE_4__["DpLogoComponent"], _angular_common__WEBPACK_IMPORTED_MODULE_5__["NgForOf"]], styles: [".overlay[_ngcontent-%COMP%] {\n  display: inline-block;\n  height: 100vh;\n  width: 100vw;\n  top: 0;\n  left: -100%;\n  position: fixed;\n  background: #2c3e50;\n  transform: scale(2) skew(-10deg);\n  z-index: -1;\n  transition: 0.3s all ease-in-out;\n}\n@media (max-width: 1040px) {\n  .overlay[_ngcontent-%COMP%] {\n    transform: scale(2) skew(-55deg);\n  }\n}\n.container[_ngcontent-%COMP%] {\n  font-size: 1.4rem;\n  width: 100vw;\n  display: flex;\n  flex-direction: row;\n  justify-content: space-around;\n  color: #f8f8f8;\n  align-items: center;\n  padding: 5rem;\n}\n@media (max-width: 1040px) {\n  .container[_ngcontent-%COMP%] {\n    flex-direction: column;\n  }\n}\n.container[_ngcontent-%COMP%]   .side1[_ngcontent-%COMP%] {\n  flex: 1;\n  height: 100%;\n  display: flex;\n  flex-direction: column;\n  align-items: center;\n}\n@media (max-width: 1040px) {\n  .container[_ngcontent-%COMP%]   .side1[_ngcontent-%COMP%] {\n    flex: none;\n    height: auto;\n  }\n}\n.container[_ngcontent-%COMP%]   .side1[_ngcontent-%COMP%]    > h1[_ngcontent-%COMP%] {\n  margin-bottom: 0;\n  padding: 3rem 0.8rem 0.2rem;\n}\n.container[_ngcontent-%COMP%]   .side2[_ngcontent-%COMP%] {\n  flex: 1;\n  height: 100%;\n  display: flex;\n  flex-direction: column;\n  align-items: center;\n}\n.text-container[_ngcontent-%COMP%] {\n  height: auto;\n  max-width: 32rem;\n  background: #e74c3c;\n  padding: 3rem 1.8rem;\n  padding-top: 5.8rem;\n  border-radius: 2rem;\n  min-width: 34rem;\n}\n.dp-logo[_ngcontent-%COMP%] {\n  font-size: 1.6rem;\n  transform: translate(0, 45%);\n}\n.skill-container[_ngcontent-%COMP%] {\n  padding: 3rem 1.8rem;\n  margin-left: 5rem;\n}\n@media (max-width: 1040px) {\n  .skill-container[_ngcontent-%COMP%] {\n    margin: auto;\n  }\n}\n.skill-header[_ngcontent-%COMP%] {\n  margin: 2rem 0;\n  margin-bottom: 3.8rem;\n  position: relative;\n  letter-spacing: 2px;\n  padding-bottom: 0rem;\n  font-size: 3.2rem;\n  font-family: \"Cormorant Garamond\", serif;\n  justify-content: flex-start;\n}\n.skill-header[_ngcontent-%COMP%]:after {\n  content: \"\";\n  position: absolute;\n  display: inline-block;\n  width: 100%;\n  height: 3px;\n  top: 100%;\n  left: 0;\n  background: #f8f8f8;\n}\n.skill-type[_ngcontent-%COMP%] {\n  position: relative;\n  margin: 1.2rem 0;\n  padding-bottom: 0.2rem;\n  font-size: 1.6rem;\n}\n.skill-type[_ngcontent-%COMP%]:after {\n  content: \"\";\n  position: absolute;\n  display: inline-block;\n  width: 70%;\n  height: 1.5px;\n  top: 100%;\n  left: 0;\n  background: #f8f8f8;\n}\n.skill-names[_ngcontent-%COMP%] {\n  margin-left: 2.8rem;\n  margin-bottom: 2rem;\n  margin-top: -0.6rem;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvYWJvdXQvYWJvdXQuY29tcG9uZW50LnNjc3MiLCJzcmMvYXBwL192YXIuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFHQTtFQUNFLHFCQUFBO0VBQ0EsYUFBQTtFQUNBLFlBQUE7RUFDQSxNQUFBO0VBQ0EsV0FBQTtFQUNBLGVBQUE7RUFDQSxtQkNSTztFRFNQLGdDQUFBO0VBQ0EsV0FBQTtFQUNBLGdDQUFBO0FBRkY7QUFHRTtFQVhGO0lBWUksZ0NBQUE7RUFBRjtBQUNGO0FBR0E7RUFDRSxpQkFBQTtFQUVBLFlBQUE7RUFDQSxhQUFBO0VBQ0EsbUJBQUE7RUFDQSw2QkFBQTtFQUNBLGNDbkJVO0VEb0JWLG1CQUFBO0VBQ0EsYUFBQTtBQURGO0FBRUU7RUFWRjtJQVdJLHNCQUFBO0VBQ0Y7QUFDRjtBQUFFO0VBQ0UsT0FBQTtFQUNBLFlBQUE7RUFDQSxhQUFBO0VBQ0Esc0JBQUE7RUFDQSxtQkFBQTtBQUVKO0FBREk7RUFORjtJQU9JLFVBQUE7SUFDQSxZQUFBO0VBSUo7QUFDRjtBQUhJO0VBQ0UsZ0JBQUE7RUFDQSwyQkFBQTtBQUtOO0FBRkU7RUFDRSxPQUFBO0VBQ0EsWUFBQTtFQUNBLGFBQUE7RUFDQSxzQkFBQTtFQUNBLG1CQUFBO0FBSUo7QUFBQTtFQUNFLFlBQUE7RUFDQSxnQkFBQTtFQUNBLG1CQUFBO0VBQ0Esb0JBQUE7RUFDQSxtQkFBQTtFQUNBLG1CQUFBO0VBQ0EsZ0JBQUE7QUFHRjtBQUFBO0VBQ0UsaUJBQUE7RUFDQSw0QkFBQTtBQUdGO0FBQUE7RUFDRSxvQkFBQTtFQUNBLGlCQUFBO0FBR0Y7QUFGRTtFQUhGO0lBSUksWUFBQTtFQUtGO0FBQ0Y7QUFGQTtFQUNFLGNBQUE7RUFDQSxxQkFBQTtFQUNBLGtCQUFBO0VBQ0EsbUJBQUE7RUFDQSxvQkFBQTtFQUNBLGlCQUFBO0VBQ0Esd0NBQUE7RUFDQSwyQkFBQTtBQUtGO0FBSkU7RUFDRSxXQUFBO0VBQ0Esa0JBQUE7RUFDQSxxQkFBQTtFQUNBLFdBQUE7RUFDQSxXQUFBO0VBQ0EsU0FBQTtFQUNBLE9BQUE7RUFDQSxtQkN6RlE7QUQrRlo7QUFGQTtFQUNFLGtCQUFBO0VBQ0EsZ0JBQUE7RUFDQSxzQkFBQTtFQUNBLGlCQUFBO0FBS0Y7QUFKRTtFQUNFLFdBQUE7RUFDQSxrQkFBQTtFQUNBLHFCQUFBO0VBQ0EsVUFBQTtFQUNBLGFBQUE7RUFDQSxTQUFBO0VBQ0EsT0FBQTtFQUNBLG1CQzFHUTtBRGdIWjtBQUZBO0VBQ0UsbUJBQUE7RUFDQSxtQkFBQTtFQUNBLG1CQUFBO0FBS0YiLCJmaWxlIjoic3JjL2FwcC9hYm91dC9hYm91dC5jb21wb25lbnQuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIkBpbXBvcnQgJy4uL3Zhcic7XHJcbiR0ZXh0LWNhcmQtc2hpZnQ6NDUlO1xyXG4kcm93LWNvbG91bS1icmstcG9pbnQ6ICdtYXgtd2lkdGg6IDEwNDBweCc7XHJcbi5vdmVybGF5IHtcclxuICBkaXNwbGF5OiBpbmxpbmUtYmxvY2s7XHJcbiAgaGVpZ2h0OiAxMDB2aDtcclxuICB3aWR0aDogMTAwdnc7XHJcbiAgdG9wOiAwO1xyXG4gIGxlZnQ6IC0xMDAlO1xyXG4gIHBvc2l0aW9uOiBmaXhlZDtcclxuICBiYWNrZ3JvdW5kOiAkY29sb3IyO1xyXG4gIHRyYW5zZm9ybTogc2NhbGUoMikgc2tldygtMTBkZWcpO1xyXG4gIHotaW5kZXg6IC0xO1xyXG4gIHRyYW5zaXRpb246IDAuM3MgYWxsIGVhc2UtaW4tb3V0O1xyXG4gIEBtZWRpYSAoJHJvdy1jb2xvdW0tYnJrLXBvaW50KSB7XHJcbiAgICB0cmFuc2Zvcm06IHNjYWxlKDIpIHNrZXcoLTU1ZGVnKTtcclxuICB9XHJcbn1cclxuXHJcbi5jb250YWluZXIge1xyXG4gIGZvbnQtc2l6ZTogMS40cmVtO1xyXG4gIC8vaGVpZ2h0OiAxMDB2aDtcclxuICB3aWR0aDogMTAwdnc7XHJcbiAgZGlzcGxheTogZmxleDtcclxuICBmbGV4LWRpcmVjdGlvbjogcm93O1xyXG4gIGp1c3RpZnktY29udGVudDogc3BhY2UtYXJvdW5kO1xyXG4gIGNvbG9yOiAkb2ZmLXdoaXRlO1xyXG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XHJcbiAgcGFkZGluZzogNXJlbTtcclxuICBAbWVkaWEgKCRyb3ctY29sb3VtLWJyay1wb2ludCkge1xyXG4gICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcclxuICB9XHJcbiAgLnNpZGUxIHtcclxuICAgIGZsZXg6IDE7XHJcbiAgICBoZWlnaHQ6IDEwMCU7XHJcbiAgICBkaXNwbGF5OiBmbGV4O1xyXG4gICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcclxuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XHJcbiAgICBAbWVkaWEgKCRyb3ctY29sb3VtLWJyay1wb2ludCkge1xyXG4gICAgICBmbGV4OiBub25lO1xyXG4gICAgICBoZWlnaHQ6IGF1dG87XHJcbiAgICB9XHJcbiAgICAmPmgxIHtcclxuICAgICAgbWFyZ2luLWJvdHRvbTogMDtcclxuICAgICAgcGFkZGluZzogM3JlbSAwLjhyZW0gMC4ycmVtO1xyXG4gICAgfVxyXG4gIH1cclxuICAuc2lkZTIge1xyXG4gICAgZmxleDogMTtcclxuICAgIGhlaWdodDogMTAwJTtcclxuICAgIGRpc3BsYXk6IGZsZXg7XHJcbiAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xyXG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcclxuICB9XHJcbn1cclxuXHJcbi50ZXh0LWNvbnRhaW5lciB7XHJcbiAgaGVpZ2h0OiBhdXRvO1xyXG4gIG1heC13aWR0aDogMzJyZW07XHJcbiAgYmFja2dyb3VuZDogI2U3NGMzYztcclxuICBwYWRkaW5nOiAzcmVtIDEuOHJlbTtcclxuICBwYWRkaW5nLXRvcDogNS44cmVtO1xyXG4gIGJvcmRlci1yYWRpdXM6IDJyZW07XHJcbiAgbWluLXdpZHRoOiAzNHJlbTtcclxufVxyXG5cclxuLmRwLWxvZ28ge1xyXG4gIGZvbnQtc2l6ZTogMS42cmVtO1xyXG4gIHRyYW5zZm9ybTogdHJhbnNsYXRlKDAsIDQ1JSk7XHJcbn1cclxuXHJcbi5za2lsbC1jb250YWluZXIge1xyXG4gIHBhZGRpbmc6IDNyZW0gMS44cmVtO1xyXG4gIG1hcmdpbi1sZWZ0OiA1cmVtO1xyXG4gIEBtZWRpYSAoJHJvdy1jb2xvdW0tYnJrLXBvaW50KSB7XHJcbiAgICBtYXJnaW46IGF1dG87XHJcbiAgfVxyXG59XHJcblxyXG4uc2tpbGwtaGVhZGVyIHtcclxuICBtYXJnaW46IDJyZW0gMDtcclxuICBtYXJnaW4tYm90dG9tOiAzLjhyZW07XHJcbiAgcG9zaXRpb246IHJlbGF0aXZlO1xyXG4gIGxldHRlci1zcGFjaW5nOiAycHg7XHJcbiAgcGFkZGluZy1ib3R0b206IDByZW07XHJcbiAgZm9udC1zaXplOiAzLjJyZW07XHJcbiAgZm9udC1mYW1pbHk6ICdDb3Jtb3JhbnQgR2FyYW1vbmQnLCBzZXJpZjtcclxuICBqdXN0aWZ5LWNvbnRlbnQ6IGZsZXgtc3RhcnQ7XHJcbiAgJjphZnRlciB7XHJcbiAgICBjb250ZW50OiAnJztcclxuICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcclxuICAgIGRpc3BsYXk6IGlubGluZS1ibG9jaztcclxuICAgIHdpZHRoOiAxMDAlO1xyXG4gICAgaGVpZ2h0OiAzcHg7XHJcbiAgICB0b3A6IDEwMCU7XHJcbiAgICBsZWZ0OiAwO1xyXG4gICAgYmFja2dyb3VuZDogJG9mZi13aGl0ZTtcclxuICB9XHJcbn1cclxuXHJcbi5za2lsbC10eXBlIHtcclxuICBwb3NpdGlvbjogcmVsYXRpdmU7XHJcbiAgbWFyZ2luOiAxLjJyZW0gMDtcclxuICBwYWRkaW5nLWJvdHRvbTogMC4ycmVtO1xyXG4gIGZvbnQtc2l6ZTogMS42cmVtO1xyXG4gICY6YWZ0ZXIge1xyXG4gICAgY29udGVudDogJyc7XHJcbiAgICBwb3NpdGlvbjogYWJzb2x1dGU7XHJcbiAgICBkaXNwbGF5OiBpbmxpbmUtYmxvY2s7XHJcbiAgICB3aWR0aDogNzAlO1xyXG4gICAgaGVpZ2h0OiAxLjVweDtcclxuICAgIHRvcDogMTAwJTtcclxuICAgIGxlZnQ6IDA7XHJcbiAgICBiYWNrZ3JvdW5kOiAkb2ZmLXdoaXRlO1xyXG4gIH1cclxufVxyXG5cclxuLnNraWxsLW5hbWVzIHtcclxuICBtYXJnaW4tbGVmdDogMi44cmVtO1xyXG4gIG1hcmdpbi1ib3R0b206IDJyZW07XHJcbiAgbWFyZ2luLXRvcDogLTAuNnJlbTtcclxufVxyXG4iLCIkYmctY29sb3I6ICMxN2E1OTg7XHJcbiRjb2xvcjE6ICNlNzRjM2M7XHJcbiRjb2xvcjI6ICMyYzNlNTA7XHJcbiRjb2xvcjM6ICNkYjM4MWI7XHJcbiRncmVlbjogIzE3YTU5ODtcclxuJHRleHQtY29sb3I6ICNmZmZmZmY7XHJcbiRibGFjazogIzU1NTtcclxuJG9mZi13aGl0ZTogI2Y4ZjhmODtcclxuJHdoaXRlOiAjZmZmO1xyXG5cclxuIl19 */"] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](AboutComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'app-about',
                templateUrl: './about.component.html',
                styleUrls: ['./about.component.scss']
            }]
    }], function () { return [{ type: _services_skills_service__WEBPACK_IMPORTED_MODULE_1__["SkillsService"] }, { type: _angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"] }]; }, null); })();


/***/ }),

/***/ "8m9h":
/*!************************************!*\
  !*** ./src/app/utils/tags-data.ts ***!
  \************************************/
/*! exports provided: tagData */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "tagData", function() { return tagData; });
const tagData = [
    { displayName: 'FrontEnd', isSelected: true },
    { displayName: 'Mobile', isSelected: true },
    { displayName: 'JAVA', isSelected: true },
    { displayName: '.NET', isSelected: true },
    { displayName: 'SIG', isSelected: true },
    { displayName: 'Autre', isSelected: !true }
];


/***/ }),

/***/ "920X":
/*!***********************************************************!*\
  !*** ./src/app/utils/data/ProjectElements/E-Commmerce.ts ***!
  \***********************************************************/
/*! exports provided: ECommerce */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ECommerce", function() { return ECommerce; });
const ECommerce = {
    id: 'A1B3308D-8BC5-4A7B-81A7-4190A9A41D54hfgh',
    name: 'Application web e-commerce',
    description: "Il s'agit d'une application web qui gère un service de création et de livraison de gâteaux sur commande",
    projectLink: null,
    liveUrl: null,
    isFeatured: true,
    features: [
        'Espace Authentification et Connection',
        ' Recette avec choix des ingrédients',
        "Envoie des commandes dans l'espace Utilisateur",
        "Suivi de statut d'une commande",
        'Annuler une commande non pris en charcge',
        'Boite messagerie pour la négociation avec l admnistrateur',
    ],
    tags: ['java'],
    techStuff: [
        "JEE native", "thymeleaf", "Bootstrap", "JQuery"
    ],
    additionalData: []
};


/***/ }),

/***/ "AytR":
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
const environment = {
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

/***/ "DQKC":
/*!*******************************************************!*\
  !*** ./src/app/ui/cross-icon/cross-icon.component.ts ***!
  \*******************************************************/
/*! exports provided: CrossIconComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CrossIconComponent", function() { return CrossIconComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");


class CrossIconComponent {
    constructor() { }
    ngOnInit() {
    }
}
CrossIconComponent.ɵfac = function CrossIconComponent_Factory(t) { return new (t || CrossIconComponent)(); };
CrossIconComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: CrossIconComponent, selectors: [["app-cross-icon"]], decls: 2, vars: 0, consts: [[1, "icon"], ["src", "data:image/svg+xml;utf8;base64,PD94bWwgdmVyc2lvbj0iMS4wIiBlbmNvZGluZz0iaXNvLTg4NTktMSI/Pgo8c3ZnIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyIgeG1sbnM6eGxpbms9Imh0dHA6Ly93d3cudzMub3JnLzE5OTkveGxpbmsiIHZlcnNpb249IjEuMSIgdmlld0JveD0iMCAwIDIxLjkgMjEuOSIgZW5hYmxlLWJhY2tncm91bmQ9Im5ldyAwIDAgMjEuOSAyMS45IiB3aWR0aD0iMTI4cHgiIGhlaWdodD0iMTI4cHgiPgogIDxwYXRoIGQ9Ik0xNC4xLDExLjNjLTAuMi0wLjItMC4yLTAuNSwwLTAuN2w3LjUtNy41YzAuMi0wLjIsMC4zLTAuNSwwLjMtMC43cy0wLjEtMC41LTAuMy0wLjdsLTEuNC0xLjRDMjAsMC4xLDE5LjcsMCwxOS41LDAgIGMtMC4zLDAtMC41LDAuMS0wLjcsMC4zbC03LjUsNy41Yy0wLjIsMC4yLTAuNSwwLjItMC43LDBMMy4xLDAuM0MyLjksMC4xLDIuNiwwLDIuNCwwUzEuOSwwLjEsMS43LDAuM0wwLjMsMS43QzAuMSwxLjksMCwyLjIsMCwyLjQgIHMwLjEsMC41LDAuMywwLjdsNy41LDcuNWMwLjIsMC4yLDAuMiwwLjUsMCwwLjdsLTcuNSw3LjVDMC4xLDE5LDAsMTkuMywwLDE5LjVzMC4xLDAuNSwwLjMsMC43bDEuNCwxLjRjMC4yLDAuMiwwLjUsMC4zLDAuNywwLjMgIHMwLjUtMC4xLDAuNy0wLjNsNy41LTcuNWMwLjItMC4yLDAuNS0wLjIsMC43LDBsNy41LDcuNWMwLjIsMC4yLDAuNSwwLjMsMC43LDAuM3MwLjUtMC4xLDAuNy0wLjNsMS40LTEuNGMwLjItMC4yLDAuMy0wLjUsMC4zLTAuNyAgcy0wLjEtMC41LTAuMy0wLjdMMTQuMSwxMS4zeiIgZmlsbD0iI2U3NGMzYyIvPgo8L3N2Zz4K"]], template: function CrossIconComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](1, "img", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } }, styles: [".icon[_ngcontent-%COMP%] {\n  width: 100%;\n  height: 100%;\n  max-width: 25rem;\n  max-height: 25rem;\n  display: inline-block;\n}\n.icon[_ngcontent-%COMP%]   img[_ngcontent-%COMP%] {\n  width: 100%;\n  height: 100%;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvdWkvY3Jvc3MtaWNvbi9jcm9zcy1pY29uLmNvbXBvbmVudC5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0ksV0FBQTtFQUNBLFlBQUE7RUFDQSxnQkFBQTtFQUNBLGlCQUFBO0VBQ0EscUJBQUE7QUFDSjtBQUNJO0VBQ0UsV0FBQTtFQUNBLFlBQUE7QUFDTiIsImZpbGUiOiJzcmMvYXBwL3VpL2Nyb3NzLWljb24vY3Jvc3MtaWNvbi5jb21wb25lbnQuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIi5pY29uIHtcclxuICAgIHdpZHRoOiAxMDAlO1xyXG4gICAgaGVpZ2h0OiAxMDAlO1xyXG4gICAgbWF4LXdpZHRoOiAyNXJlbTtcclxuICAgIG1heC1oZWlnaHQ6IDI1cmVtO1xyXG4gICAgZGlzcGxheTogaW5saW5lLWJsb2NrO1xyXG4gIFxyXG4gICAgaW1nIHtcclxuICAgICAgd2lkdGg6IDEwMCU7XHJcbiAgICAgIGhlaWdodDogMTAwJTtcclxuICAgIH1cclxuICB9XHJcbiAgIl19 */"] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](CrossIconComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'app-cross-icon',
                templateUrl: './cross-icon.component.html',
                styleUrls: ['./cross-icon.component.scss']
            }]
    }], function () { return []; }, null); })();


/***/ }),

/***/ "E+85":
/*!********************************************!*\
  !*** ./src/app/typing/typing.component.ts ***!
  \********************************************/
/*! exports provided: TypingComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "TypingComponent", function() { return TypingComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");


const _c0 = ["cursor"];
class TypingComponent {
    constructor() {
        this.text = '';
        this.time = 1000;
        this.delay = 500;
        this.displayText = '';
        this.isProcessRunning = false;
    }
    ngOnInit() { }
    ngOnChanges(changes) {
        if (this.text)
            this.startRendering();
    }
    startRendering() {
        this.displayText = '';
        if (!this.isProcessRunning) {
            setTimeout(() => {
                const eachTime = Math.round(this.time / this.text.length);
                const textArr = this.text.split('');
                this.renderTextByLetter(textArr, eachTime);
            }, this.delay);
        }
        this.isProcessRunning = true;
    }
    renderTextByLetter(textArr, timeInterval, letter = textArr[0]) {
        if (!textArr || textArr.length <= 0) {
            const cursor = this.cursorRef.nativeElement;
            cursor.classList.add('cursor__animate');
            this.isProcessRunning = false;
            return;
        }
        setTimeout(() => {
            this.displayText += letter;
            const newTextArr = textArr.slice(1);
            this.renderTextByLetter(newTextArr, timeInterval, newTextArr[0]);
        }, timeInterval);
    }
}
TypingComponent.ɵfac = function TypingComponent_Factory(t) { return new (t || TypingComponent)(); };
TypingComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: TypingComponent, selectors: [["app-typing"]], viewQuery: function TypingComponent_Query(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵviewQuery"](_c0, true);
    } if (rf & 2) {
        var _t;
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵqueryRefresh"](_t = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵloadQuery"]()) && (ctx.cursorRef = _t.first);
    } }, inputs: { text: "text", time: "time", delay: "delay" }, features: [_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵNgOnChangesFeature"]], decls: 5, vars: 1, consts: [[1, "text"], [1, "cursor", "cursor__animate"], ["cursor", ""]], template: function TypingComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "span", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "span", 1, 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](4, "|");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"]("", ctx.displayText, " ");
    } }, styles: [".text[_ngcontent-%COMP%] {\n  display: inline-block;\n}\n\n.cursor[_ngcontent-%COMP%] {\n  content: \"|\";\n  display: inline-block;\n}\n\n.cursor__animate[_ngcontent-%COMP%] {\n  animation: fadeInOut 0.8s cubic-bezier(1, -0.18, 0, 1.35) 0.5s infinite;\n}\n\n@keyframes fadeInOut {\n  0% {\n    opacity: 0;\n  }\n  100% {\n    opacity: 1;\n  }\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvdHlwaW5nL3R5cGluZy5jb21wb25lbnQuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNJLHFCQUFBO0FBQ0o7O0FBRUU7RUFDRSxZQUFBO0VBQ0EscUJBQUE7QUFDSjs7QUFFRTtFQUNFLHVFQUFBO0FBQ0o7O0FBRUU7RUFDRTtJQUNFLFVBQUE7RUFDSjtFQUNFO0lBQ0UsVUFBQTtFQUNKO0FBQ0YiLCJmaWxlIjoic3JjL2FwcC90eXBpbmcvdHlwaW5nLmNvbXBvbmVudC5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLnRleHQge1xyXG4gICAgZGlzcGxheTogaW5saW5lLWJsb2NrO1xyXG4gIH1cclxuICBcclxuICAuY3Vyc29yIHtcclxuICAgIGNvbnRlbnQ6ICd8JztcclxuICAgIGRpc3BsYXk6IGlubGluZS1ibG9jaztcclxuICB9XHJcbiAgXHJcbiAgLmN1cnNvcl9fYW5pbWF0ZSB7XHJcbiAgICBhbmltYXRpb246IGZhZGVJbk91dCAwLjhzIGN1YmljLWJlemllcigxLCAtMC4xOCwgMCwgMS4zNSkgMC41cyBpbmZpbml0ZTtcclxuICB9XHJcbiAgXHJcbiAgQGtleWZyYW1lcyBmYWRlSW5PdXQge1xyXG4gICAgMCUge1xyXG4gICAgICBvcGFjaXR5OiAwO1xyXG4gICAgfVxyXG4gICAgMTAwJSB7XHJcbiAgICAgIG9wYWNpdHk6IDE7XHJcbiAgICB9XHJcbiAgfVxyXG4gICJdfQ== */"] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](TypingComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'app-typing',
                templateUrl: './typing.component.html',
                styleUrls: ['./typing.component.scss']
            }]
    }], function () { return []; }, { text: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"],
            args: ['text']
        }], time: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"],
            args: ['time']
        }], delay: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"],
            args: ['delay']
        }], cursorRef: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["ViewChild"],
            args: ['cursor']
        }] }); })();


/***/ }),

/***/ "Hsyc":
/*!**********************************************!*\
  !*** ./src/app/dp-logo/dp-logo.component.ts ***!
  \**********************************************/
/*! exports provided: DpLogoComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DpLogoComponent", function() { return DpLogoComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common */ "ofXK");



class DpLogoComponent {
    constructor() { }
    ngOnInit() {
        this.logoStyles = {
            height: this.height,
            width: this.width
        };
        this.imgStyle = {
            borderWidth: this.borderWidth
        };
    }
    ngOnChanges(changes) {
        this.ngOnInit();
    }
}
DpLogoComponent.ɵfac = function DpLogoComponent_Factory(t) { return new (t || DpLogoComponent)(); };
DpLogoComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: DpLogoComponent, selectors: [["app-dp-logo"]], inputs: { height: "height", width: "width", borderWidth: "borderWidth" }, features: [_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵNgOnChangesFeature"]], decls: 2, vars: 2, consts: [[1, "profile-logo", 3, "ngStyle"], ["src", "assets/img/Mohamedkhafchrait.jpeg", "alt", "my pic", 3, "ngStyle"]], template: function DpLogoComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](1, "img", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngStyle", ctx.logoStyles);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngStyle", ctx.imgStyle);
    } }, directives: [_angular_common__WEBPACK_IMPORTED_MODULE_1__["NgStyle"]], styles: [".profile-logo[_ngcontent-%COMP%] {\n  height: 14rem;\n  width: 14rem;\n  display: inline-block;\n  position: relative;\n  z-index: 5;\n  border-radius: 50%;\n  perspective: 1500px;\n  transition: all 0.2s ease-in-out;\n  animation: dropin 1s ease-in-out 0.4s 1 normal both;\n}\n.profile-logo[_ngcontent-%COMP%]   img[_ngcontent-%COMP%] {\n  position: relative;\n  border: 0.8rem solid #e74c3c;\n  height: 100%;\n  width: 100%;\n  border-radius: 50%;\n  -webkit-backface-visibility: hidden;\n          backface-visibility: hidden;\n  transition: all 0.5s ease-in-out;\n  perspective: 1500px;\n}\n.profile-logo[_ngcontent-%COMP%]::after {\n  content: \"Mohamed khafchrait\";\n  display: flex;\n  position: absolute;\n  height: 100%;\n  width: 100%;\n  color: #fff;\n  justify-content: center;\n  align-items: center;\n  border-radius: 50%;\n  background-color: #e74c3c;\n  border: 0.8rem solid #db381b;\n  top: 0px;\n  left: 0px;\n  z-index: 10;\n  font-size: 0.8em;\n  transition: all 0.5s ease-in-out;\n  transform: rotateY(180deg);\n  -webkit-backface-visibility: hidden;\n          backface-visibility: hidden;\n  perspective: 1500px;\n}\n.profile-logo[_ngcontent-%COMP%]:hover   img[_ngcontent-%COMP%] {\n  transform: rotateY(180deg);\n}\n.profile-logo[_ngcontent-%COMP%]:hover::after {\n  transform: rotateY(0deg);\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvZHAtbG9nby9kcC1sb2dvLmNvbXBvbmVudC5zY3NzIiwic3JjL2FwcC9fdmFyLnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQ0E7RUFDRSxhQUFBO0VBQ0EsWUFBQTtFQUVBLHFCQUFBO0VBQ0Esa0JBQUE7RUFDQSxVQUFBO0VBQ0Esa0JBQUE7RUFDQSxtQkFBQTtFQUNBLGdDQUFBO0VBQ0EsbURBQUE7QUFERjtBQUVFO0VBQ0Usa0JBQUE7RUFDQSw0QkFBQTtFQUNBLFlBQUE7RUFDQSxXQUFBO0VBQ0Esa0JBQUE7RUFDQSxtQ0FBQTtVQUFBLDJCQUFBO0VBQ0EsZ0NBQUE7RUFDQSxtQkFBQTtBQUFKO0FBRUU7RUFDRSw2QkFBQTtFQUNBLGFBQUE7RUFDQSxrQkFBQTtFQUNBLFlBQUE7RUFDQSxXQUFBO0VBQ0EsV0FBQTtFQUNBLHVCQUFBO0VBQ0EsbUJBQUE7RUFDQSxrQkFBQTtFQUNBLHlCQy9CSztFRGdDTCw0QkFBQTtFQUNBLFFBQUE7RUFDQSxTQUFBO0VBQ0EsV0FBQTtFQUNBLGdCQUFBO0VBQ0EsZ0NBQUE7RUFDQSwwQkFBQTtFQUNBLG1DQUFBO1VBQUEsMkJBQUE7RUFDQSxtQkFBQTtBQUFKO0FBR0k7RUFDRSwwQkFBQTtBQUROO0FBSUU7RUFDRSx3QkFBQTtBQUZKIiwiZmlsZSI6InNyYy9hcHAvZHAtbG9nby9kcC1sb2dvLmNvbXBvbmVudC5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiQGltcG9ydCAnLi4vdmFyJztcclxuLnByb2ZpbGUtbG9nbyB7XHJcbiAgaGVpZ2h0OiAxNHJlbTtcclxuICB3aWR0aDogMTRyZW07XHJcbiAgLy8gbWFyZ2luLXRvcDogNnJlbTtcclxuICBkaXNwbGF5OiBpbmxpbmUtYmxvY2s7XHJcbiAgcG9zaXRpb246IHJlbGF0aXZlO1xyXG4gIHotaW5kZXg6IDU7XHJcbiAgYm9yZGVyLXJhZGl1czogNTAlO1xyXG4gIHBlcnNwZWN0aXZlOiAxNTAwcHg7XHJcbiAgdHJhbnNpdGlvbjogYWxsIDAuMnMgZWFzZS1pbi1vdXQ7XHJcbiAgYW5pbWF0aW9uOiBkcm9waW4gMXMgZWFzZS1pbi1vdXQgMC40cyAxIG5vcm1hbCBib3RoO1xyXG4gIGltZyB7XHJcbiAgICBwb3NpdGlvbjogcmVsYXRpdmU7XHJcbiAgICBib3JkZXI6IDAuOHJlbSBzb2xpZCAkY29sb3IxO1xyXG4gICAgaGVpZ2h0OiAxMDAlO1xyXG4gICAgd2lkdGg6IDEwMCU7XHJcbiAgICBib3JkZXItcmFkaXVzOiA1MCU7XHJcbiAgICBiYWNrZmFjZS12aXNpYmlsaXR5OiBoaWRkZW47XHJcbiAgICB0cmFuc2l0aW9uOiBhbGwgMC41cyBlYXNlLWluLW91dDtcclxuICAgIHBlcnNwZWN0aXZlOiAxNTAwcHg7XHJcbiAgfVxyXG4gICY6OmFmdGVyIHtcclxuICAgIGNvbnRlbnQ6ICdNb2hhbWVkIGtoYWZjaHJhaXQnO1xyXG4gICAgZGlzcGxheTogZmxleDtcclxuICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcclxuICAgIGhlaWdodDogMTAwJTtcclxuICAgIHdpZHRoOiAxMDAlO1xyXG4gICAgY29sb3I6ICNmZmY7XHJcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcclxuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XHJcbiAgICBib3JkZXItcmFkaXVzOiA1MCU7XHJcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAkY29sb3IxO1xyXG4gICAgYm9yZGVyOiAwLjhyZW0gc29saWQgJGNvbG9yMztcclxuICAgIHRvcDogMHB4O1xyXG4gICAgbGVmdDogMHB4O1xyXG4gICAgei1pbmRleDogMTA7XHJcbiAgICBmb250LXNpemU6IDAuOGVtO1xyXG4gICAgdHJhbnNpdGlvbjogYWxsIDAuNXMgZWFzZS1pbi1vdXQ7XHJcbiAgICB0cmFuc2Zvcm06IHJvdGF0ZVkoMTgwZGVnKTtcclxuICAgIGJhY2tmYWNlLXZpc2liaWxpdHk6IGhpZGRlbjtcclxuICAgIHBlcnNwZWN0aXZlOiAxNTAwcHg7XHJcbiAgfVxyXG4gICY6aG92ZXIge1xyXG4gICAgaW1nIHtcclxuICAgICAgdHJhbnNmb3JtOiByb3RhdGVZKDE4MGRlZyk7XHJcbiAgICB9XHJcbiAgfVxyXG4gICY6aG92ZXI6OmFmdGVyIHtcclxuICAgIHRyYW5zZm9ybTogcm90YXRlWSgwZGVnKTtcclxuICB9XHJcbn1cclxuIiwiJGJnLWNvbG9yOiAjMTdhNTk4O1xyXG4kY29sb3IxOiAjZTc0YzNjO1xyXG4kY29sb3IyOiAjMmMzZTUwO1xyXG4kY29sb3IzOiAjZGIzODFiO1xyXG4kZ3JlZW46ICMxN2E1OTg7XHJcbiR0ZXh0LWNvbG9yOiAjZmZmZmZmO1xyXG4kYmxhY2s6ICM1NTU7XHJcbiRvZmYtd2hpdGU6ICNmOGY4Zjg7XHJcbiR3aGl0ZTogI2ZmZjtcclxuXHJcbiJdfQ== */"] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](DpLogoComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'app-dp-logo',
                templateUrl: './dp-logo.component.html',
                styleUrls: ['./dp-logo.component.scss']
            }]
    }], function () { return []; }, { height: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"],
            args: ['height']
        }], width: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"],
            args: ['width']
        }], borderWidth: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"],
            args: ['borderWidth']
        }] }); })();


/***/ }),

/***/ "ITds":
/*!*****************************************************!*\
  !*** ./src/app/ui/back-icon/back-icon.component.ts ***!
  \*****************************************************/
/*! exports provided: BackIconComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "BackIconComponent", function() { return BackIconComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");


class BackIconComponent {
    constructor() { }
    ngOnInit() {
    }
}
BackIconComponent.ɵfac = function BackIconComponent_Factory(t) { return new (t || BackIconComponent)(); };
BackIconComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: BackIconComponent, selectors: [["app-back-icon"]], decls: 2, vars: 0, consts: [[1, "icon"], ["src", "data:image/svg+xml;utf8;base64,PD94bWwgdmVyc2lvbj0iMS4wIiBlbmNvZGluZz0iaXNvLTg4NTktMSI/Pgo8IS0tIEdlbmVyYXRvcjogQWRvYmUgSWxsdXN0cmF0b3IgMTkuMC4wLCBTVkcgRXhwb3J0IFBsdWctSW4gLiBTVkcgVmVyc2lvbjogNi4wMCBCdWlsZCAwKSAgLS0+CjxzdmcgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIiB4bWxuczp4bGluaz0iaHR0cDovL3d3dy53My5vcmcvMTk5OS94bGluayIgdmVyc2lvbj0iMS4xIiBpZD0iTGF5ZXJfMSIgeD0iMHB4IiB5PSIwcHgiIHZpZXdCb3g9IjAgMCA1MTIuMDAxIDUxMi4wMDEiIHN0eWxlPSJlbmFibGUtYmFja2dyb3VuZDpuZXcgMCAwIDUxMi4wMDEgNTEyLjAwMTsiIHhtbDpzcGFjZT0icHJlc2VydmUiIHdpZHRoPSIxMjhweCIgaGVpZ2h0PSIxMjhweCI+CjxnPgoJPGc+CgkJPHBhdGggZD0iTTM4NC44MzQsMTgwLjY5OWMtMC42OTgsMC0zNDguNzMzLDAtMzQ4LjczMywwbDczLjMyNi04Mi4xODdjNC43NTUtNS4zMyw0LjI4OS0xMy41MDUtMS4wNDEtMTguMjYgICAgYy01LjMyOC00Ljc1NC0xMy41MDUtNC4yOS0xOC4yNiwxLjA0MWwtODIuNTgyLDkyLjU2Yy0xMC4wNTksMTEuMjc4LTEwLjA1OCwyOC4yODIsMC4wMDEsMzkuNTU3bDgyLjU4Miw5Mi41NjEgICAgYzIuNTU2LDIuODY1LDYuMDk3LDQuMzIzLDkuNjU0LDQuMzIzYzMuMDY0LDAsNi4xMzktMS4wODMsOC42MDYtMy4yODJjNS4zMy00Ljc1NSw1Ljc5NS0xMi45MywxLjA0MS0xOC4yNmwtNzMuMzI2LTgyLjE4OCAgICBjMCwwLDM0OC4wMzQsMCwzNDguNzMzLDBjNTUuODU4LDAsMTAxLjMsNDUuNDQ0LDEwMS4zLDEwMS4zcy00NS40NDMsMTAxLjMtMTAxLjMsMTAxLjNoLTYxLjU4ICAgIGMtNy4xNDMsMC0xMi45MzMsNS43OTEtMTIuOTMzLDEyLjkzM2MwLDcuMTQyLDUuNzksMTIuOTMzLDEyLjkzMywxMi45MzNoNjEuNThjNzAuMTIsMCwxMjcuMTY2LTU3LjA0NiwxMjcuMTY2LTEyNy4xNjYgICAgQzUxMiwyMzcuNzQ1LDQ1NC45NTQsMTgwLjY5OSwzODQuODM0LDE4MC42OTl6IiBmaWxsPSIjZTc0YzNjIi8+Cgk8L2c+CjwvZz4KPGc+CjwvZz4KPGc+CjwvZz4KPGc+CjwvZz4KPGc+CjwvZz4KPGc+CjwvZz4KPGc+CjwvZz4KPGc+CjwvZz4KPGc+CjwvZz4KPGc+CjwvZz4KPGc+CjwvZz4KPGc+CjwvZz4KPGc+CjwvZz4KPGc+CjwvZz4KPGc+CjwvZz4KPGc+CjwvZz4KPC9zdmc+Cg=="]], template: function BackIconComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](1, "img", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } }, styles: [".icon[_ngcontent-%COMP%] {\n  width: 100%;\n  height: 100%;\n  max-width: 25rem;\n  max-height: 25rem;\n  display: inline-block;\n}\n.icon[_ngcontent-%COMP%]   img[_ngcontent-%COMP%] {\n  width: 100%;\n  height: 100%;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvdWkvYmFjay1pY29uL2JhY2staWNvbi5jb21wb25lbnQuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNJLFdBQUE7RUFDQSxZQUFBO0VBQ0EsZ0JBQUE7RUFDQSxpQkFBQTtFQUNBLHFCQUFBO0FBQ0o7QUFDSTtFQUNFLFdBQUE7RUFDQSxZQUFBO0FBQ04iLCJmaWxlIjoic3JjL2FwcC91aS9iYWNrLWljb24vYmFjay1pY29uLmNvbXBvbmVudC5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLmljb24ge1xyXG4gICAgd2lkdGg6IDEwMCU7XHJcbiAgICBoZWlnaHQ6IDEwMCU7XHJcbiAgICBtYXgtd2lkdGg6IDI1cmVtO1xyXG4gICAgbWF4LWhlaWdodDogMjVyZW07XHJcbiAgICBkaXNwbGF5OiBpbmxpbmUtYmxvY2s7XHJcbiAgXHJcbiAgICBpbWcge1xyXG4gICAgICB3aWR0aDogMTAwJTtcclxuICAgICAgaGVpZ2h0OiAxMDAlO1xyXG4gICAgfVxyXG4gIH1cclxuICAiXX0= */"] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](BackIconComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'app-back-icon',
                templateUrl: './back-icon.component.html',
                styleUrls: ['./back-icon.component.scss']
            }]
    }], function () { return []; }, null); })();


/***/ }),

/***/ "JCzG":
/*!**************************************************!*\
  !*** ./src/app/services/project-data.service.ts ***!
  \**************************************************/
/*! exports provided: ProjectDataService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ProjectDataService", function() { return ProjectDataService; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _utils_project_data__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../utils/project-data */ "tZCN");



class ProjectDataService {
    constructor() { }
    getProjects() {
        return _utils_project_data__WEBPACK_IMPORTED_MODULE_1__["ALL_PROJECT_DATA"];
    }
}
ProjectDataService.ɵfac = function ProjectDataService_Factory(t) { return new (t || ProjectDataService)(); };
ProjectDataService.ɵprov = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjectable"]({ token: ProjectDataService, factory: ProjectDataService.ɵfac, providedIn: 'root' });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](ProjectDataService, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"],
        args: [{
                providedIn: 'root'
            }]
    }], function () { return []; }, null); })();


/***/ }),

/***/ "MyZq":
/*!********************************************************!*\
  !*** ./src/app/project-card/project-card.component.ts ***!
  \********************************************************/
/*! exports provided: ProjectCardComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ProjectCardComponent", function() { return ProjectCardComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common */ "ofXK");



const _c0 = function (a0) { return { "card__featured": a0 }; };
class ProjectCardComponent {
    constructor() {
        this.select = new _angular_core__WEBPACK_IMPORTED_MODULE_0__["EventEmitter"]();
    }
    ngOnInit() { }
    onCardClick(project) {
        this.select.emit({ project });
    }
}
ProjectCardComponent.ɵfac = function ProjectCardComponent_Factory(t) { return new (t || ProjectCardComponent)(); };
ProjectCardComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: ProjectCardComponent, selectors: [["app-project-card"]], inputs: { project: "project" }, outputs: { select: "select" }, decls: 19, vars: 7, consts: [[1, "card-outer", 3, "click"], [1, "card", "card__front", 3, "ngClass"], [1, "card-container"], [1, "card-header"], [1, "card-short-details"], [1, "card", "card__back"], [1, "tech-stuff-details"], [1, "full-width-btn"]], template: function ProjectCardComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function ProjectCardComponent_Template_div_click_0_listener() { return ctx.onCardClick(ctx.project); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "div", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "h4", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "p", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "div", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](8, "div", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](9, "h4", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](10);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](11, "div", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](12, "div", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](13, "span");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](14, "Tech Stuff: ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](15, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](16);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](17, "button", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](18, "More Details");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngClass", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction1"](5, _c0, ctx.project.isFeatured));
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](ctx.project.name);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", ctx.project.description, " ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](ctx.project.name);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](ctx.project.techStuff.join(" , "));
    } }, directives: [_angular_common__WEBPACK_IMPORTED_MODULE_1__["NgClass"]], styles: ["@charset \"UTF-8\";\n.card-outer[_ngcontent-%COMP%] {\n  position: relative;\n  font-family: \"Lato\", sans-serif;\n  font-weight: normal;\n  color: #555;\n  cursor: pointer;\n}\n.card-outer[_ngcontent-%COMP%]:hover   .card__front[_ngcontent-%COMP%] {\n  cursor: pointer;\n  transform: rotateY(180deg);\n}\n.card-outer[_ngcontent-%COMP%]:hover   .card__back[_ngcontent-%COMP%] {\n  cursor: pointer;\n  transform: rotateY(0deg);\n}\n.card[_ngcontent-%COMP%] {\n  width: 100%;\n  min-width: 20rem;\n  min-height: 18rem;\n  background: #fff;\n  border-radius: 0.6rem;\n  cursor: pointer;\n  overflow: hidden;\n  box-shadow: 6px 6px 15px rgba(0, 0, 0, 0.3);\n  transition: 0.8s ease-in-out;\n  perspective: 15000px;\n  -webkit-backface-visibility: hidden;\n          backface-visibility: hidden;\n  -webkit-user-select: none;\n          user-select: none;\n}\n.card.card__front[_ngcontent-%COMP%] {\n  transform: rotateY(0deg);\n}\n.card.card__back[_ngcontent-%COMP%] {\n  background: #eee;\n  position: absolute;\n  top: 0;\n  left: 0;\n  z-index: -1;\n  transform: rotateY(180deg);\n}\n.card.card__featured[_ngcontent-%COMP%]::before {\n  content: \"\u269D\";\n  position: absolute;\n  top: 0;\n  left: 0;\n  z-index: 1;\n  font-size: 1.6rem;\n  padding: 0 0.4rem;\n  color: #fff;\n}\n.card.card__featured[_ngcontent-%COMP%]:after {\n  content: \"\";\n  position: absolute;\n  top: 0;\n  left: 0;\n  width: 3.2rem;\n  height: 3.2rem;\n  background-color: #327e36;\n  transform: rotateZ(45deg) translate(-88%) scale(2);\n}\n.card[_ngcontent-%COMP%]   .card-container[_ngcontent-%COMP%] {\n  display: flex;\n  flex-direction: row;\n  flex-wrap: wrap;\n  padding: 0.6rem 1.6rem;\n  width: 100%;\n  height: 100%;\n}\n.card[_ngcontent-%COMP%]   .card-container[_ngcontent-%COMP%]   .card-header[_ngcontent-%COMP%] {\n  font-family: \"Cormorant Garamond\", serif;\n  width: 100%;\n  font-size: 2.4rem;\n  margin: 1rem 0;\n  font-weight: bold;\n}\n.card[_ngcontent-%COMP%]   .card-container[_ngcontent-%COMP%]   .card-short-details[_ngcontent-%COMP%] {\n  width: 100%;\n  flex: 1;\n  font-size: 1.6rem;\n  margin: 0.6rem 0;\n}\n.card[_ngcontent-%COMP%]   .card-container[_ngcontent-%COMP%]   .tech-stuff-details[_ngcontent-%COMP%]    > span[_ngcontent-%COMP%] {\n  font-weight: bold;\n  display: inline-block;\n}\n.card[_ngcontent-%COMP%]   .card-container[_ngcontent-%COMP%]   .tech-stuff-details[_ngcontent-%COMP%]    > p[_ngcontent-%COMP%] {\n  display: inline;\n  margin-left: 0.3rem;\n  word-break: break-word;\n}\n.card[_ngcontent-%COMP%]   .card-container[_ngcontent-%COMP%]   .full-width-btn[_ngcontent-%COMP%] {\n  display: block;\n  width: 100%;\n  position: fixed;\n  left: 0;\n  bottom: 0;\n  background: #e74c3c;\n  padding: 0.8rem 0.3rem;\n  line-height: 2;\n  font-size: 1.6rem;\n  color: #fff;\n  border: 0;\n  outline: none;\n  cursor: pointer;\n}\n@keyframes slideIn {\n  0% {\n    transform: translateX(-100%);\n    opacity: 0;\n  }\n  100% {\n    transform: translateX(0%);\n    opacity: 1;\n  }\n}\n@media (min-width: 1080px) {\n  .card[_ngcontent-%COMP%] {\n    min-width: 28rem;\n  }\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvcHJvamVjdC1jYXJkL3Byb2plY3QtY2FyZC5jb21wb25lbnQuc2NzcyIsInNyYy9hcHAvX3Zhci5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBLGdCQUFnQjtBQUtoQjtFQUNFLGtCQUFBO0VBQ0EsK0JBQUE7RUFDQSxtQkFBQTtFQUNBLFdBQUE7RUFDQSxlQUFBO0FBSEY7QUFNSTtFQUNFLGVBQUE7RUFDQSwwQkFBQTtBQUpOO0FBTUk7RUFDRSxlQUFBO0VBQ0Esd0JBQUE7QUFKTjtBQVNBO0VBQ0UsV0FBQTtFQUNBLGdCQXZCVTtFQXdCVixpQkF6Qlc7RUEwQlgsZ0JBQUE7RUFDQSxxQkFBQTtFQUNBLGVBQUE7RUFDQSxnQkFBQTtFQUNBLDJDQUFBO0VBQ0EsNEJBQUE7RUFDQSxvQkFBQTtFQUNBLG1DQUFBO1VBQUEsMkJBQUE7RUFDQSx5QkFBQTtVQUFBLGlCQUFBO0FBTkY7QUFRRTtFQUNFLHdCQUFBO0FBTko7QUFTRTtFQUNFLGdCQUFBO0VBQ0Esa0JBQUE7RUFDQSxNQUFBO0VBQ0EsT0FBQTtFQUNBLFdBQUE7RUFDQSwwQkFBQTtBQVBKO0FBV0k7RUFDRSxZQUFBO0VBQ0Esa0JBQUE7RUFDQSxNQUFBO0VBQ0EsT0FBQTtFQUNBLFVBQUE7RUFDQSxpQkFBQTtFQUNBLGlCQUFBO0VBQ0EsV0FBQTtBQVROO0FBV0k7RUFDRSxXQUFBO0VBQ0Esa0JBQUE7RUFDQSxNQUFBO0VBQ0EsT0FBQTtFQUNBLGFBQUE7RUFDQSxjQUFBO0VBQ0EseUJBQUE7RUFDQSxrREFBQTtBQVROO0FBYUU7RUFDRSxhQUFBO0VBQ0EsbUJBQUE7RUFDQSxlQUFBO0VBQ0Esc0JBQUE7RUFDQSxXQUFBO0VBQ0EsWUFBQTtBQVhKO0FBYUk7RUFDRSx3Q0FBQTtFQUNBLFdBQUE7RUFDQSxpQkFBQTtFQUNBLGNBQUE7RUFDQSxpQkFBQTtBQVhOO0FBY0k7RUFDRSxXQUFBO0VBQ0EsT0FBQTtFQUNBLGlCQUFBO0VBQ0EsZ0JBQUE7QUFaTjtBQWdCTTtFQUNFLGlCQUFBO0VBQ0EscUJBQUE7QUFkUjtBQWlCTTtFQUNFLGVBQUE7RUFDQSxtQkFBQTtFQUNBLHNCQUFBO0FBZlI7QUFtQkk7RUFDRSxjQUFBO0VBQ0EsV0FBQTtFQUNBLGVBQUE7RUFDQSxPQUFBO0VBQ0EsU0FBQTtFQUNBLG1CQ25IRztFRG9ISCxzQkFBQTtFQUNBLGNBQUE7RUFDQSxpQkFBQTtFQUNBLFdBQUE7RUFDQSxTQUFBO0VBQ0EsYUFBQTtFQUNBLGVBQUE7QUFqQk47QUF1QkE7RUFDRTtJQUNFLDRCQUFBO0lBQ0EsVUFBQTtFQXBCRjtFQXNCQTtJQUNFLHlCQUFBO0lBQ0EsVUFBQTtFQXBCRjtBQUNGO0FBdUJBO0VBQ0U7SUFDRSxnQkFBQTtFQXJCRjtBQUNGIiwiZmlsZSI6InNyYy9hcHAvcHJvamVjdC1jYXJkL3Byb2plY3QtY2FyZC5jb21wb25lbnQuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIkBjaGFyc2V0IFwiVVRGLThcIjtcbi5jYXJkLW91dGVyIHtcbiAgcG9zaXRpb246IHJlbGF0aXZlO1xuICBmb250LWZhbWlseTogXCJMYXRvXCIsIHNhbnMtc2VyaWY7XG4gIGZvbnQtd2VpZ2h0OiBub3JtYWw7XG4gIGNvbG9yOiAjNTU1O1xuICBjdXJzb3I6IHBvaW50ZXI7XG59XG4uY2FyZC1vdXRlcjpob3ZlciAuY2FyZF9fZnJvbnQge1xuICBjdXJzb3I6IHBvaW50ZXI7XG4gIHRyYW5zZm9ybTogcm90YXRlWSgxODBkZWcpO1xufVxuLmNhcmQtb3V0ZXI6aG92ZXIgLmNhcmRfX2JhY2sge1xuICBjdXJzb3I6IHBvaW50ZXI7XG4gIHRyYW5zZm9ybTogcm90YXRlWSgwZGVnKTtcbn1cblxuLmNhcmQge1xuICB3aWR0aDogMTAwJTtcbiAgbWluLXdpZHRoOiAyMHJlbTtcbiAgbWluLWhlaWdodDogMThyZW07XG4gIGJhY2tncm91bmQ6ICNmZmY7XG4gIGJvcmRlci1yYWRpdXM6IDAuNnJlbTtcbiAgY3Vyc29yOiBwb2ludGVyO1xuICBvdmVyZmxvdzogaGlkZGVuO1xuICBib3gtc2hhZG93OiA2cHggNnB4IDE1cHggcmdiYSgwLCAwLCAwLCAwLjMpO1xuICB0cmFuc2l0aW9uOiAwLjhzIGVhc2UtaW4tb3V0O1xuICBwZXJzcGVjdGl2ZTogMTUwMDBweDtcbiAgYmFja2ZhY2UtdmlzaWJpbGl0eTogaGlkZGVuO1xuICB1c2VyLXNlbGVjdDogbm9uZTtcbn1cbi5jYXJkLmNhcmRfX2Zyb250IHtcbiAgdHJhbnNmb3JtOiByb3RhdGVZKDBkZWcpO1xufVxuLmNhcmQuY2FyZF9fYmFjayB7XG4gIGJhY2tncm91bmQ6ICNlZWU7XG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgdG9wOiAwO1xuICBsZWZ0OiAwO1xuICB6LWluZGV4OiAtMTtcbiAgdHJhbnNmb3JtOiByb3RhdGVZKDE4MGRlZyk7XG59XG4uY2FyZC5jYXJkX19mZWF0dXJlZDo6YmVmb3JlIHtcbiAgY29udGVudDogXCLimp1cIjtcbiAgcG9zaXRpb246IGFic29sdXRlO1xuICB0b3A6IDA7XG4gIGxlZnQ6IDA7XG4gIHotaW5kZXg6IDE7XG4gIGZvbnQtc2l6ZTogMS42cmVtO1xuICBwYWRkaW5nOiAwIDAuNHJlbTtcbiAgY29sb3I6ICNmZmY7XG59XG4uY2FyZC5jYXJkX19mZWF0dXJlZDphZnRlciB7XG4gIGNvbnRlbnQ6IFwiXCI7XG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgdG9wOiAwO1xuICBsZWZ0OiAwO1xuICB3aWR0aDogMy4ycmVtO1xuICBoZWlnaHQ6IDMuMnJlbTtcbiAgYmFja2dyb3VuZC1jb2xvcjogIzMyN2UzNjtcbiAgdHJhbnNmb3JtOiByb3RhdGVaKDQ1ZGVnKSB0cmFuc2xhdGUoLTg4JSkgc2NhbGUoMik7XG59XG4uY2FyZCAuY2FyZC1jb250YWluZXIge1xuICBkaXNwbGF5OiBmbGV4O1xuICBmbGV4LWRpcmVjdGlvbjogcm93O1xuICBmbGV4LXdyYXA6IHdyYXA7XG4gIHBhZGRpbmc6IDAuNnJlbSAxLjZyZW07XG4gIHdpZHRoOiAxMDAlO1xuICBoZWlnaHQ6IDEwMCU7XG59XG4uY2FyZCAuY2FyZC1jb250YWluZXIgLmNhcmQtaGVhZGVyIHtcbiAgZm9udC1mYW1pbHk6IFwiQ29ybW9yYW50IEdhcmFtb25kXCIsIHNlcmlmO1xuICB3aWR0aDogMTAwJTtcbiAgZm9udC1zaXplOiAyLjRyZW07XG4gIG1hcmdpbjogMXJlbSAwO1xuICBmb250LXdlaWdodDogYm9sZDtcbn1cbi5jYXJkIC5jYXJkLWNvbnRhaW5lciAuY2FyZC1zaG9ydC1kZXRhaWxzIHtcbiAgd2lkdGg6IDEwMCU7XG4gIGZsZXg6IDE7XG4gIGZvbnQtc2l6ZTogMS42cmVtO1xuICBtYXJnaW46IDAuNnJlbSAwO1xufVxuLmNhcmQgLmNhcmQtY29udGFpbmVyIC50ZWNoLXN0dWZmLWRldGFpbHMgPiBzcGFuIHtcbiAgZm9udC13ZWlnaHQ6IGJvbGQ7XG4gIGRpc3BsYXk6IGlubGluZS1ibG9jaztcbn1cbi5jYXJkIC5jYXJkLWNvbnRhaW5lciAudGVjaC1zdHVmZi1kZXRhaWxzID4gcCB7XG4gIGRpc3BsYXk6IGlubGluZTtcbiAgbWFyZ2luLWxlZnQ6IDAuM3JlbTtcbiAgd29yZC1icmVhazogYnJlYWstd29yZDtcbn1cbi5jYXJkIC5jYXJkLWNvbnRhaW5lciAuZnVsbC13aWR0aC1idG4ge1xuICBkaXNwbGF5OiBibG9jaztcbiAgd2lkdGg6IDEwMCU7XG4gIHBvc2l0aW9uOiBmaXhlZDtcbiAgbGVmdDogMDtcbiAgYm90dG9tOiAwO1xuICBiYWNrZ3JvdW5kOiAjZTc0YzNjO1xuICBwYWRkaW5nOiAwLjhyZW0gMC4zcmVtO1xuICBsaW5lLWhlaWdodDogMjtcbiAgZm9udC1zaXplOiAxLjZyZW07XG4gIGNvbG9yOiAjZmZmO1xuICBib3JkZXI6IDA7XG4gIG91dGxpbmU6IG5vbmU7XG4gIGN1cnNvcjogcG9pbnRlcjtcbn1cblxuQGtleWZyYW1lcyBzbGlkZUluIHtcbiAgMCUge1xuICAgIHRyYW5zZm9ybTogdHJhbnNsYXRlWCgtMTAwJSk7XG4gICAgb3BhY2l0eTogMDtcbiAgfVxuICAxMDAlIHtcbiAgICB0cmFuc2Zvcm06IHRyYW5zbGF0ZVgoMCUpO1xuICAgIG9wYWNpdHk6IDE7XG4gIH1cbn1cbkBtZWRpYSAobWluLXdpZHRoOiAxMDgwcHgpIHtcbiAgLmNhcmQge1xuICAgIG1pbi13aWR0aDogMjhyZW07XG4gIH1cbn0iLCIkYmctY29sb3I6ICMxN2E1OTg7XHJcbiRjb2xvcjE6ICNlNzRjM2M7XHJcbiRjb2xvcjI6ICMyYzNlNTA7XHJcbiRjb2xvcjM6ICNkYjM4MWI7XHJcbiRncmVlbjogIzE3YTU5ODtcclxuJHRleHQtY29sb3I6ICNmZmZmZmY7XHJcbiRibGFjazogIzU1NTtcclxuJG9mZi13aGl0ZTogI2Y4ZjhmODtcclxuJHdoaXRlOiAjZmZmO1xyXG5cclxuIl19 */"] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](ProjectCardComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'app-project-card',
                templateUrl: './project-card.component.html',
                styleUrls: ['./project-card.component.scss']
            }]
    }], function () { return []; }, { project: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"],
            args: ['project']
        }], select: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Output"],
            args: ['select']
        }] }); })();


/***/ }),

/***/ "Nvd2":
/*!******************************************************************!*\
  !*** ./src/app/utils/data/ProjectElements/ConceptionInforisk.ts ***!
  \******************************************************************/
/*! exports provided: ConceptionInforisk */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ConceptionInforisk", function() { return ConceptionInforisk; });
const ConceptionInforisk = {
    id: 'A1B3308D-8BC5-4A7B-81A7-4190A9A41Dgffgg0B',
    name: 'Conceptualisation d’une base de données de la nomenclatur e géographique de la zone OHADA',
    description: "Réalisation et conceptualisation d’une base de données de la nomenclature" +
        " géographique des pays de l’ouest de l'Afrique (Zone OHADA)",
    projectLink: null,
    liveUrl: null,
    isFeatured: true,
    features: [],
    tags: ['sig', 'autre'],
    techStuff: [
        "Arcgis",
        "Python",
        "Excel"
    ],
    additionalData: []
};


/***/ }),

/***/ "OVWj":
/*!**************************************************************!*\
  !*** ./src/app/project-details/project-details.component.ts ***!
  \**************************************************************/
/*! exports provided: ProjectDetailsComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ProjectDetailsComponent", function() { return ProjectDetailsComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_animations__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/animations */ "R0Ic");
/* harmony import */ var _ui_cross_icon_cross_icon_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../ui/cross-icon/cross-icon.component */ "DQKC");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/common */ "ofXK");





function ProjectDetailsComponent_div_13_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 12);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "h4", 13);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2, "Project Link:");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "a", 14);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("href", ctx_r0.project.projectLink, _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsanitizeUrl"]);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](ctx_r0.project.projectLink);
} }
function ProjectDetailsComponent_div_14_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 12);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "h4", 13);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2, "Live Url:");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "a", 14);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("href", ctx_r1.project.liveUrl, _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsanitizeUrl"]);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](ctx_r1.project.liveUrl);
} }
function ProjectDetailsComponent_div_15_li_4_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "li");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const tech_r6 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](tech_r6);
} }
function ProjectDetailsComponent_div_15_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 15);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "h4", 13);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2, "Tech Stuff: ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "ul", 16);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](4, ProjectDetailsComponent_div_15_li_4_Template, 2, 1, "li", 17);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", ctx_r2.project.techStuff);
} }
function ProjectDetailsComponent_div_16_li_4_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "li");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const features_r8 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](features_r8);
} }
function ProjectDetailsComponent_div_16_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 15);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "h4", 13);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2, "Features: ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "ul", 16);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](4, ProjectDetailsComponent_div_16_li_4_Template, 2, 1, "li", 17);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r3 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", ctx_r3.project.features);
} }
function ProjectDetailsComponent_div_17_div_1_li_4_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "li");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const _data_r12 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](_data_r12);
} }
function ProjectDetailsComponent_div_17_div_1_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 15);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "h4", 13);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "ul", 16);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](4, ProjectDetailsComponent_div_17_div_1_li_4_Template, 2, 1, "li", 17);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ad_r10 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"]("", ad_r10.title, ": ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", ad_r10.data);
} }
function ProjectDetailsComponent_div_17_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](1, ProjectDetailsComponent_div_17_div_1_Template, 5, 2, "div", 18);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r4 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", ctx_r4.project.additionalData);
} }
class ProjectDetailsComponent {
    constructor(renderer) {
        this.renderer = renderer;
        this.cancellation = new _angular_core__WEBPACK_IMPORTED_MODULE_0__["EventEmitter"]();
    }
    ngOnInit() {
        this.renderer.addClass(document.body, 'isSideDrawerOpen');
    }
    onCancellation(e, force = false) {
        const cancelAttribute = force || e.target.attributes.getNamedItem('enable-cancellation');
        if (force || (cancelAttribute && cancelAttribute.value))
            this.cancellation.emit();
        this.renderer.removeClass(document.body, 'isSideDrawerOpen');
    }
}
ProjectDetailsComponent.ɵfac = function ProjectDetailsComponent_Factory(t) { return new (t || ProjectDetailsComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_core__WEBPACK_IMPORTED_MODULE_0__["Renderer2"])); };
ProjectDetailsComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: ProjectDetailsComponent, selectors: [["app-project-details"]], inputs: { project: "project" }, outputs: { cancellation: "cancellation" }, decls: 20, vars: 8, consts: [["enable-cancellation", "true", 1, "project-details-container", 3, "appEscCancelation", "click"], [1, "project-details"], [1, "project-details-header"], [1, "cancellation-icon", 3, "click"], [1, "poject-section", "project-title"], [1, "project-content"], [1, "poject-section", "project-description"], [1, "poject-section", "project-links"], ["class", "project-link", 4, "ngIf"], ["class", "poject-section project-features", 4, "ngIf"], [4, "ngIf"], [1, "end-section"], [1, "project-link"], [1, "project-section__header"], ["target", "_blank", 3, "href"], [1, "poject-section", "project-features"], [1, "project-features-details"], [4, "ngFor", "ngForOf"], ["class", "poject-section project-features", 4, "ngFor", "ngForOf"]], template: function ProjectDetailsComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, "project-details works!");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("appEscCancelation", function ProjectDetailsComponent_Template_div_appEscCancelation_2_listener() { return ctx.onCancellation(null, true); })("click", function ProjectDetailsComponent_Template_div_click_2_listener($event) { return ctx.onCancellation($event); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "div", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "div", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function ProjectDetailsComponent_Template_div_click_5_listener() { return ctx.onCancellation(null, true); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](6, "app-cross-icon");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "h4", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](8);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](9, "div", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](10, "p", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](11);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](12, "div", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](13, ProjectDetailsComponent_div_13_Template, 5, 2, "div", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](14, ProjectDetailsComponent_div_14_Template, 5, 2, "div", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](15, ProjectDetailsComponent_div_15_Template, 5, 1, "div", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](16, ProjectDetailsComponent_div_16_Template, 5, 1, "div", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](17, ProjectDetailsComponent_div_17_Template, 2, 1, "div", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](18, "div", 11);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](19, " :wq! ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("@slideIn", undefined);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](ctx.project.name);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](ctx.project.description);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.project.projectLink);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.project.liveUrl);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.project.techStuff && ctx.project.techStuff.length > 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.project.features && ctx.project.features.length > 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.project.additionalData);
    } }, directives: [_ui_cross_icon_cross_icon_component__WEBPACK_IMPORTED_MODULE_2__["CrossIconComponent"], _angular_common__WEBPACK_IMPORTED_MODULE_3__["NgIf"], _angular_common__WEBPACK_IMPORTED_MODULE_3__["NgForOf"]], styles: ["@charset \"UTF-8\";\n.project-details-container[_ngcontent-%COMP%] {\n  height: 100vh;\n  width: 100vw;\n  position: fixed;\n  top: 0;\n  left: 0;\n  z-index: 990;\n  background-color: rgba(0, 0, 0, 0.4);\n  font-family: Helvetica, Arial, sans-serif;\n}\n.project-details-container[_ngcontent-%COMP%]   .poject-section[_ngcontent-%COMP%] {\n  margin: 2rem 0;\n}\n.project-details-container[_ngcontent-%COMP%]   .poject-section[_ngcontent-%COMP%]   .project-section__header[_ngcontent-%COMP%] {\n  display: inline-block;\n  font-size: 2rem;\n}\n.project-details-container[_ngcontent-%COMP%]   .project-details[_ngcontent-%COMP%] {\n  height: 100vh;\n  width: 75vw;\n  position: relative;\n  margin-left: auto;\n  margin-right: 0;\n  top: 0;\n  right: 0;\n  color: #555;\n  background-color: #f2f2f2;\n  padding: 1.6rem;\n  padding-top: 0;\n  padding-left: 0;\n  z-index: 999;\n  overflow: hidden;\n  overflow-y: auto;\n  box-shadow: -5px 9px 20px rgba(0, 0, 0, 0.3);\n}\n@media (max-width: 640px) {\n  .project-details-container[_ngcontent-%COMP%]   .project-details[_ngcontent-%COMP%] {\n    width: 95vw;\n  }\n}\n.project-details-container[_ngcontent-%COMP%]   .project-details[_ngcontent-%COMP%]   .project-details-header[_ngcontent-%COMP%] {\n  position: fixed;\n  width: inherit;\n  background-color: inherit;\n  margin-bottom: 1rem;\n  box-shadow: 0px 5px 20px rgba(0, 0, 0, 0.2);\n}\n.project-details-container[_ngcontent-%COMP%]   .project-details[_ngcontent-%COMP%]   .project-details-header[_ngcontent-%COMP%]   .project-title[_ngcontent-%COMP%] {\n  font-size: 3.2rem;\n  padding: 1rem;\n  text-align: center;\n  font-family: \"Cormorant Garamond\", serif;\n}\n@media (max-width: 640px) {\n  .project-details-container[_ngcontent-%COMP%]   .project-details[_ngcontent-%COMP%]   .project-details-header[_ngcontent-%COMP%]   .project-title[_ngcontent-%COMP%] {\n    text-align: left;\n    font-size: 2.6rem;\n  }\n}\n.project-details-container[_ngcontent-%COMP%]   .project-details[_ngcontent-%COMP%]   .project-details-header[_ngcontent-%COMP%]   .cancellation-icon[_ngcontent-%COMP%] {\n  width: 2.6rem;\n  display: inline-block;\n  float: left;\n  top: 0;\n  left: 0;\n  margin: 3.5rem 2.5rem;\n  cursor: pointer;\n}\n.project-details-container[_ngcontent-%COMP%]   .project-details[_ngcontent-%COMP%]   .end-section[_ngcontent-%COMP%] {\n  font-family: \"Cormorant Garamond\", serif;\n  width: inherit;\n  text-align: center;\n  font-weight: bold;\n  font-size: 2rem;\n  margin-top: 2rem;\n  padding: 1rem 0;\n  border-top: 1px solid #555;\n}\n.project-details-container[_ngcontent-%COMP%]   .project-content[_ngcontent-%COMP%] {\n  width: 80%;\n  margin: auto;\n  margin-top: 12rem;\n  padding-top: 1.5rem;\n  font-size: 1.8rem;\n  letter-spacing: 0.6px;\n}\n.project-details-container[_ngcontent-%COMP%]   .project-content[_ngcontent-%COMP%]   .project-description[_ngcontent-%COMP%] {\n  margin-bottom: 2rem;\n}\n.project-details-container[_ngcontent-%COMP%]   .project-content[_ngcontent-%COMP%]   .project-links[_ngcontent-%COMP%] {\n  padding: 1.6rem 0;\n  padding-bottom: 0.5rem;\n}\n.project-details-container[_ngcontent-%COMP%]   .project-content[_ngcontent-%COMP%]   .project-links[_ngcontent-%COMP%]   .project-link[_ngcontent-%COMP%] {\n  font-weight: bold;\n  padding: 0.6rem 0;\n}\n.project-details-container[_ngcontent-%COMP%]   .project-content[_ngcontent-%COMP%]   .project-links[_ngcontent-%COMP%]   .project-link[_ngcontent-%COMP%]   a[_ngcontent-%COMP%] {\n  font-weight: normal;\n  color: #17a598;\n  text-decoration: none;\n  font-style: italic;\n}\n.project-details-container[_ngcontent-%COMP%]   .project-content[_ngcontent-%COMP%]   .project-features[_ngcontent-%COMP%]   h4[_ngcontent-%COMP%] {\n  font-weight: bold;\n  padding: 0.8rem 0;\n}\n.project-details-container[_ngcontent-%COMP%]   .project-content[_ngcontent-%COMP%]   .project-features[_ngcontent-%COMP%]   .project-features-details[_ngcontent-%COMP%] {\n  padding-left: 3rem;\n  list-style-type: none;\n}\n.project-details-container[_ngcontent-%COMP%]   .project-content[_ngcontent-%COMP%]   .project-features[_ngcontent-%COMP%]   .project-features-details[_ngcontent-%COMP%]    > li[_ngcontent-%COMP%] {\n  line-height: 1;\n  line-height: 1.3;\n  padding: 0.4rem 0;\n}\n.project-details-container[_ngcontent-%COMP%]   .project-content[_ngcontent-%COMP%]   .project-features[_ngcontent-%COMP%]   .project-features-details[_ngcontent-%COMP%]    > li[_ngcontent-%COMP%]::before {\n  content: \"\u27BA\";\n  padding-right: 0.5em;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvcHJvamVjdC1kZXRhaWxzL3Byb2plY3QtZGV0YWlscy5jb21wb25lbnQuc2NzcyIsInNyYy9hcHAvX3Zhci5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBLGdCQUFnQjtBQUVoQjtFQUNFLGFBQUE7RUFDQSxZQUFBO0VBQ0EsZUFBQTtFQUNBLE1BQUE7RUFDQSxPQUFBO0VBQ0EsWUFBQTtFQUNBLG9DQUFBO0VBQ0EseUNBQUE7QUFBRjtBQUVFO0VBQ0UsY0FBQTtBQUFKO0FBRUk7RUFDRSxxQkFBQTtFQUNBLGVBQUE7QUFBTjtBQUlFO0VBQ0UsYUFBQTtFQUNBLFdBQUE7RUFDQSxrQkFBQTtFQUNBLGlCQUFBO0VBQ0EsZUFBQTtFQUNBLE1BQUE7RUFDQSxRQUFBO0VBQ0EsV0N2Qkk7RUR3QkoseUJBQUE7RUFDQSxlQUFBO0VBQ0EsY0FBQTtFQUNBLGVBQUE7RUFDQSxZQUFBO0VBQ0EsZ0JBQUE7RUFDQSxnQkFBQTtFQUNBLDRDQUFBO0FBRko7QUFJSTtFQWxCRjtJQW1CSSxXQUFBO0VBREo7QUFDRjtBQUdJO0VBQ0UsZUFBQTtFQUVBLGNBQUE7RUFDQSx5QkFBQTtFQUNBLG1CQUFBO0VBQ0EsMkNBQUE7QUFGTjtBQUdNO0VBQ0UsaUJBQUE7RUFDQSxhQUFBO0VBQ0Esa0JBQUE7RUFDQSx3Q0FBQTtBQURSO0FBRVE7RUFMRjtJQU1JLGdCQUFBO0lBQ0EsaUJBQUE7RUFDUjtBQUNGO0FBQ007RUFDRSxhQUFBO0VBQ0EscUJBQUE7RUFDQSxXQUFBO0VBQ0EsTUFBQTtFQUNBLE9BQUE7RUFDQSxxQkFBQTtFQUNBLGVBQUE7QUFDUjtBQUdJO0VBQ0Usd0NBQUE7RUFDQSxjQUFBO0VBQ0Esa0JBQUE7RUFDQSxpQkFBQTtFQUNBLGVBQUE7RUFDQSxnQkFBQTtFQUNBLGVBQUE7RUFDQSwwQkFBQTtBQUROO0FBS0U7RUFDRSxVQUFBO0VBQ0EsWUFBQTtFQUNBLGlCQUFBO0VBQ0EsbUJBQUE7RUFDQSxpQkFBQTtFQUNBLHFCQUFBO0FBSEo7QUFLSTtFQUNFLG1CQUFBO0FBSE47QUFNSTtFQUNFLGlCQUFBO0VBQ0Esc0JBQUE7QUFKTjtBQUtNO0VBQ0UsaUJBQUE7RUFDQSxpQkFBQTtBQUhSO0FBSVE7RUFDRSxtQkFBQTtFQUNBLGNDbkdGO0VEb0dFLHFCQUFBO0VBQ0Esa0JBQUE7QUFGVjtBQVFNO0VBQ0UsaUJBQUE7RUFDQSxpQkFBQTtBQU5SO0FBUU07RUFDRSxrQkFBQTtFQUNBLHFCQUFBO0FBTlI7QUFRUTtFQUNFLGNBQUE7RUFDQSxnQkFBQTtFQUNBLGlCQUFBO0FBTlY7QUFRUTtFQUNFLFlBQUE7RUFDQSxvQkFBQTtBQU5WIiwiZmlsZSI6InNyYy9hcHAvcHJvamVjdC1kZXRhaWxzL3Byb2plY3QtZGV0YWlscy5jb21wb25lbnQuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIkBjaGFyc2V0IFwiVVRGLThcIjtcbi5wcm9qZWN0LWRldGFpbHMtY29udGFpbmVyIHtcbiAgaGVpZ2h0OiAxMDB2aDtcbiAgd2lkdGg6IDEwMHZ3O1xuICBwb3NpdGlvbjogZml4ZWQ7XG4gIHRvcDogMDtcbiAgbGVmdDogMDtcbiAgei1pbmRleDogOTkwO1xuICBiYWNrZ3JvdW5kLWNvbG9yOiByZ2JhKDAsIDAsIDAsIDAuNCk7XG4gIGZvbnQtZmFtaWx5OiBIZWx2ZXRpY2EsIEFyaWFsLCBzYW5zLXNlcmlmO1xufVxuLnByb2plY3QtZGV0YWlscy1jb250YWluZXIgLnBvamVjdC1zZWN0aW9uIHtcbiAgbWFyZ2luOiAycmVtIDA7XG59XG4ucHJvamVjdC1kZXRhaWxzLWNvbnRhaW5lciAucG9qZWN0LXNlY3Rpb24gLnByb2plY3Qtc2VjdGlvbl9faGVhZGVyIHtcbiAgZGlzcGxheTogaW5saW5lLWJsb2NrO1xuICBmb250LXNpemU6IDJyZW07XG59XG4ucHJvamVjdC1kZXRhaWxzLWNvbnRhaW5lciAucHJvamVjdC1kZXRhaWxzIHtcbiAgaGVpZ2h0OiAxMDB2aDtcbiAgd2lkdGg6IDc1dnc7XG4gIHBvc2l0aW9uOiByZWxhdGl2ZTtcbiAgbWFyZ2luLWxlZnQ6IGF1dG87XG4gIG1hcmdpbi1yaWdodDogMDtcbiAgdG9wOiAwO1xuICByaWdodDogMDtcbiAgY29sb3I6ICM1NTU7XG4gIGJhY2tncm91bmQtY29sb3I6ICNmMmYyZjI7XG4gIHBhZGRpbmc6IDEuNnJlbTtcbiAgcGFkZGluZy10b3A6IDA7XG4gIHBhZGRpbmctbGVmdDogMDtcbiAgei1pbmRleDogOTk5O1xuICBvdmVyZmxvdzogaGlkZGVuO1xuICBvdmVyZmxvdy15OiBhdXRvO1xuICBib3gtc2hhZG93OiAtNXB4IDlweCAyMHB4IHJnYmEoMCwgMCwgMCwgMC4zKTtcbn1cbkBtZWRpYSAobWF4LXdpZHRoOiA2NDBweCkge1xuICAucHJvamVjdC1kZXRhaWxzLWNvbnRhaW5lciAucHJvamVjdC1kZXRhaWxzIHtcbiAgICB3aWR0aDogOTV2dztcbiAgfVxufVxuLnByb2plY3QtZGV0YWlscy1jb250YWluZXIgLnByb2plY3QtZGV0YWlscyAucHJvamVjdC1kZXRhaWxzLWhlYWRlciB7XG4gIHBvc2l0aW9uOiBmaXhlZDtcbiAgd2lkdGg6IGluaGVyaXQ7XG4gIGJhY2tncm91bmQtY29sb3I6IGluaGVyaXQ7XG4gIG1hcmdpbi1ib3R0b206IDFyZW07XG4gIGJveC1zaGFkb3c6IDBweCA1cHggMjBweCByZ2JhKDAsIDAsIDAsIDAuMik7XG59XG4ucHJvamVjdC1kZXRhaWxzLWNvbnRhaW5lciAucHJvamVjdC1kZXRhaWxzIC5wcm9qZWN0LWRldGFpbHMtaGVhZGVyIC5wcm9qZWN0LXRpdGxlIHtcbiAgZm9udC1zaXplOiAzLjJyZW07XG4gIHBhZGRpbmc6IDFyZW07XG4gIHRleHQtYWxpZ246IGNlbnRlcjtcbiAgZm9udC1mYW1pbHk6IFwiQ29ybW9yYW50IEdhcmFtb25kXCIsIHNlcmlmO1xufVxuQG1lZGlhIChtYXgtd2lkdGg6IDY0MHB4KSB7XG4gIC5wcm9qZWN0LWRldGFpbHMtY29udGFpbmVyIC5wcm9qZWN0LWRldGFpbHMgLnByb2plY3QtZGV0YWlscy1oZWFkZXIgLnByb2plY3QtdGl0bGUge1xuICAgIHRleHQtYWxpZ246IGxlZnQ7XG4gICAgZm9udC1zaXplOiAyLjZyZW07XG4gIH1cbn1cbi5wcm9qZWN0LWRldGFpbHMtY29udGFpbmVyIC5wcm9qZWN0LWRldGFpbHMgLnByb2plY3QtZGV0YWlscy1oZWFkZXIgLmNhbmNlbGxhdGlvbi1pY29uIHtcbiAgd2lkdGg6IDIuNnJlbTtcbiAgZGlzcGxheTogaW5saW5lLWJsb2NrO1xuICBmbG9hdDogbGVmdDtcbiAgdG9wOiAwO1xuICBsZWZ0OiAwO1xuICBtYXJnaW46IDMuNXJlbSAyLjVyZW07XG4gIGN1cnNvcjogcG9pbnRlcjtcbn1cbi5wcm9qZWN0LWRldGFpbHMtY29udGFpbmVyIC5wcm9qZWN0LWRldGFpbHMgLmVuZC1zZWN0aW9uIHtcbiAgZm9udC1mYW1pbHk6IFwiQ29ybW9yYW50IEdhcmFtb25kXCIsIHNlcmlmO1xuICB3aWR0aDogaW5oZXJpdDtcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xuICBmb250LXdlaWdodDogYm9sZDtcbiAgZm9udC1zaXplOiAycmVtO1xuICBtYXJnaW4tdG9wOiAycmVtO1xuICBwYWRkaW5nOiAxcmVtIDA7XG4gIGJvcmRlci10b3A6IDFweCBzb2xpZCAjNTU1O1xufVxuLnByb2plY3QtZGV0YWlscy1jb250YWluZXIgLnByb2plY3QtY29udGVudCB7XG4gIHdpZHRoOiA4MCU7XG4gIG1hcmdpbjogYXV0bztcbiAgbWFyZ2luLXRvcDogMTJyZW07XG4gIHBhZGRpbmctdG9wOiAxLjVyZW07XG4gIGZvbnQtc2l6ZTogMS44cmVtO1xuICBsZXR0ZXItc3BhY2luZzogMC42cHg7XG59XG4ucHJvamVjdC1kZXRhaWxzLWNvbnRhaW5lciAucHJvamVjdC1jb250ZW50IC5wcm9qZWN0LWRlc2NyaXB0aW9uIHtcbiAgbWFyZ2luLWJvdHRvbTogMnJlbTtcbn1cbi5wcm9qZWN0LWRldGFpbHMtY29udGFpbmVyIC5wcm9qZWN0LWNvbnRlbnQgLnByb2plY3QtbGlua3Mge1xuICBwYWRkaW5nOiAxLjZyZW0gMDtcbiAgcGFkZGluZy1ib3R0b206IDAuNXJlbTtcbn1cbi5wcm9qZWN0LWRldGFpbHMtY29udGFpbmVyIC5wcm9qZWN0LWNvbnRlbnQgLnByb2plY3QtbGlua3MgLnByb2plY3QtbGluayB7XG4gIGZvbnQtd2VpZ2h0OiBib2xkO1xuICBwYWRkaW5nOiAwLjZyZW0gMDtcbn1cbi5wcm9qZWN0LWRldGFpbHMtY29udGFpbmVyIC5wcm9qZWN0LWNvbnRlbnQgLnByb2plY3QtbGlua3MgLnByb2plY3QtbGluayBhIHtcbiAgZm9udC13ZWlnaHQ6IG5vcm1hbDtcbiAgY29sb3I6ICMxN2E1OTg7XG4gIHRleHQtZGVjb3JhdGlvbjogbm9uZTtcbiAgZm9udC1zdHlsZTogaXRhbGljO1xufVxuLnByb2plY3QtZGV0YWlscy1jb250YWluZXIgLnByb2plY3QtY29udGVudCAucHJvamVjdC1mZWF0dXJlcyBoNCB7XG4gIGZvbnQtd2VpZ2h0OiBib2xkO1xuICBwYWRkaW5nOiAwLjhyZW0gMDtcbn1cbi5wcm9qZWN0LWRldGFpbHMtY29udGFpbmVyIC5wcm9qZWN0LWNvbnRlbnQgLnByb2plY3QtZmVhdHVyZXMgLnByb2plY3QtZmVhdHVyZXMtZGV0YWlscyB7XG4gIHBhZGRpbmctbGVmdDogM3JlbTtcbiAgbGlzdC1zdHlsZS10eXBlOiBub25lO1xufVxuLnByb2plY3QtZGV0YWlscy1jb250YWluZXIgLnByb2plY3QtY29udGVudCAucHJvamVjdC1mZWF0dXJlcyAucHJvamVjdC1mZWF0dXJlcy1kZXRhaWxzID4gbGkge1xuICBsaW5lLWhlaWdodDogMTtcbiAgbGluZS1oZWlnaHQ6IDEuMztcbiAgcGFkZGluZzogMC40cmVtIDA7XG59XG4ucHJvamVjdC1kZXRhaWxzLWNvbnRhaW5lciAucHJvamVjdC1jb250ZW50IC5wcm9qZWN0LWZlYXR1cmVzIC5wcm9qZWN0LWZlYXR1cmVzLWRldGFpbHMgPiBsaTo6YmVmb3JlIHtcbiAgY29udGVudDogXCLinrpcIjtcbiAgcGFkZGluZy1yaWdodDogMC41ZW07XG59IiwiJGJnLWNvbG9yOiAjMTdhNTk4O1xyXG4kY29sb3IxOiAjZTc0YzNjO1xyXG4kY29sb3IyOiAjMmMzZTUwO1xyXG4kY29sb3IzOiAjZGIzODFiO1xyXG4kZ3JlZW46ICMxN2E1OTg7XHJcbiR0ZXh0LWNvbG9yOiAjZmZmZmZmO1xyXG4kYmxhY2s6ICM1NTU7XHJcbiRvZmYtd2hpdGU6ICNmOGY4Zjg7XHJcbiR3aGl0ZTogI2ZmZjtcclxuXHJcbiJdfQ== */"], data: { animation: [
            Object(_angular_animations__WEBPACK_IMPORTED_MODULE_1__["trigger"])('slideIn', [
                Object(_angular_animations__WEBPACK_IMPORTED_MODULE_1__["transition"])(':leave', [
                    Object(_angular_animations__WEBPACK_IMPORTED_MODULE_1__["style"])({
                        transform: 'translateX(0%)'
                    }),
                    Object(_angular_animations__WEBPACK_IMPORTED_MODULE_1__["animate"])('0.3s ease-out', Object(_angular_animations__WEBPACK_IMPORTED_MODULE_1__["keyframes"])([
                        Object(_angular_animations__WEBPACK_IMPORTED_MODULE_1__["style"])({
                            transform: 'translateX(0%)',
                            offset: 0
                        }),
                        Object(_angular_animations__WEBPACK_IMPORTED_MODULE_1__["style"])({
                            transform: 'translateX(100%)',
                            offset: 1
                        })
                    ]))
                ]),
                Object(_angular_animations__WEBPACK_IMPORTED_MODULE_1__["transition"])(':enter', [
                    Object(_angular_animations__WEBPACK_IMPORTED_MODULE_1__["style"])({
                        transform: 'translateX(100%)'
                    }),
                    Object(_angular_animations__WEBPACK_IMPORTED_MODULE_1__["animate"])('0.3s ease-out', Object(_angular_animations__WEBPACK_IMPORTED_MODULE_1__["keyframes"])([
                        Object(_angular_animations__WEBPACK_IMPORTED_MODULE_1__["style"])({
                            transform: 'translateX(100%)',
                            offset: 0
                        }),
                        Object(_angular_animations__WEBPACK_IMPORTED_MODULE_1__["style"])({
                            transform: 'translateX(0%)',
                            offset: 1
                        })
                    ]))
                ])
            ])
        ] } });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](ProjectDetailsComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'app-project-details',
                templateUrl: './project-details.component.html',
                styleUrls: ['./project-details.component.scss'],
                animations: [
                    Object(_angular_animations__WEBPACK_IMPORTED_MODULE_1__["trigger"])('slideIn', [
                        Object(_angular_animations__WEBPACK_IMPORTED_MODULE_1__["transition"])(':leave', [
                            Object(_angular_animations__WEBPACK_IMPORTED_MODULE_1__["style"])({
                                transform: 'translateX(0%)'
                            }),
                            Object(_angular_animations__WEBPACK_IMPORTED_MODULE_1__["animate"])('0.3s ease-out', Object(_angular_animations__WEBPACK_IMPORTED_MODULE_1__["keyframes"])([
                                Object(_angular_animations__WEBPACK_IMPORTED_MODULE_1__["style"])({
                                    transform: 'translateX(0%)',
                                    offset: 0
                                }),
                                Object(_angular_animations__WEBPACK_IMPORTED_MODULE_1__["style"])({
                                    transform: 'translateX(100%)',
                                    offset: 1
                                })
                            ]))
                        ]),
                        Object(_angular_animations__WEBPACK_IMPORTED_MODULE_1__["transition"])(':enter', [
                            Object(_angular_animations__WEBPACK_IMPORTED_MODULE_1__["style"])({
                                transform: 'translateX(100%)'
                            }),
                            Object(_angular_animations__WEBPACK_IMPORTED_MODULE_1__["animate"])('0.3s ease-out', Object(_angular_animations__WEBPACK_IMPORTED_MODULE_1__["keyframes"])([
                                Object(_angular_animations__WEBPACK_IMPORTED_MODULE_1__["style"])({
                                    transform: 'translateX(100%)',
                                    offset: 0
                                }),
                                Object(_angular_animations__WEBPACK_IMPORTED_MODULE_1__["style"])({
                                    transform: 'translateX(0%)',
                                    offset: 1
                                })
                            ]))
                        ])
                    ])
                ]
            }]
    }], function () { return [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Renderer2"] }]; }, { project: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"],
            args: ['project']
        }], cancellation: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Output"],
            args: ['cancellation']
        }] }); })();


/***/ }),

/***/ "Sy1n":
/*!**********************************!*\
  !*** ./src/app/app.component.ts ***!
  \**********************************/
/*! exports provided: AppComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppComponent", function() { return AppComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "tyNb");



class AppComponent {
    constructor() {
        this.title = 'khafchraitPortfolio';
    }
}
AppComponent.ɵfac = function AppComponent_Factory(t) { return new (t || AppComponent)(); };
AppComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: AppComponent, selectors: [["app-root"]], decls: 1, vars: 0, template: function AppComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](0, "router-outlet");
    } }, directives: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterOutlet"]], styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2FwcC5jb21wb25lbnQuc2NzcyJ9 */"] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](AppComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'app-root',
                templateUrl: './app.component.html',
                styleUrls: ['./app.component.scss']
            }]
    }], null, null); })();


/***/ }),

/***/ "W6KJ":
/*!**********************************************!*\
  !*** ./src/app/profile/profile.component.ts ***!
  \**********************************************/
/*! exports provided: ProfileComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ProfileComponent", function() { return ProfileComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_animations__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/animations */ "R0Ic");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "ofXK");
/* harmony import */ var _landing_page_landing_page_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../landing-page/landing-page.component */ "mSt+");
/* harmony import */ var _navigator_navigator_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../navigator/navigator.component */ "udFW");






function ProfileComponent_app_navigator_1_Template(rf, ctx) { if (rf & 1) {
    const _r2 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "app-navigator", 2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("cancellation", function ProfileComponent_app_navigator_1_Template_app_navigator_cancellation_0_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r2); const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](); return ctx_r1.showNavigationMenu = false; });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} }
class ProfileComponent {
    constructor() {
        this.showNavigationMenu = false;
    }
    ngOnInit() { }
}
ProfileComponent.ɵfac = function ProfileComponent_Factory(t) { return new (t || ProfileComponent)(); };
ProfileComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: ProfileComponent, selectors: [["app-profile"]], decls: 3, vars: 2, consts: [[3, "cancellation", 4, "ngIf"], [3, "ExploreMe"], [3, "cancellation"]], template: function ProfileComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](1, ProfileComponent_app_navigator_1_Template, 1, 0, "app-navigator", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "app-landing-page", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("ExploreMe", function ProfileComponent_Template_app_landing_page_ExploreMe_2_listener() { return ctx.showNavigationMenu = true; });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("@animate", undefined);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.showNavigationMenu);
    } }, directives: [_angular_common__WEBPACK_IMPORTED_MODULE_2__["NgIf"], _landing_page_landing_page_component__WEBPACK_IMPORTED_MODULE_3__["LandingPageComponent"], _navigator_navigator_component__WEBPACK_IMPORTED_MODULE_4__["NavigatorComponent"]], styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL3Byb2ZpbGUvcHJvZmlsZS5jb21wb25lbnQuc2NzcyJ9 */"], data: { animation: [
            Object(_angular_animations__WEBPACK_IMPORTED_MODULE_1__["trigger"])('animate', [
                Object(_angular_animations__WEBPACK_IMPORTED_MODULE_1__["transition"])('* => *', [
                    Object(_angular_animations__WEBPACK_IMPORTED_MODULE_1__["query"])(':leave, :enter', [Object(_angular_animations__WEBPACK_IMPORTED_MODULE_1__["animateChild"])()], {
                        optional: true
                    })
                ])
            ])
        ] } });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](ProfileComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'app-profile',
                templateUrl: './profile.component.html',
                styleUrls: ['./profile.component.scss'],
                animations: [
                    Object(_angular_animations__WEBPACK_IMPORTED_MODULE_1__["trigger"])('animate', [
                        Object(_angular_animations__WEBPACK_IMPORTED_MODULE_1__["transition"])('* => *', [
                            Object(_angular_animations__WEBPACK_IMPORTED_MODULE_1__["query"])(':leave, :enter', [Object(_angular_animations__WEBPACK_IMPORTED_MODULE_1__["animateChild"])()], {
                                optional: true
                            })
                        ])
                    ])
                ]
            }]
    }], function () { return []; }, null); })();


/***/ }),

/***/ "WLs7":
/*!*******************************************************************!*\
  !*** ./src/app/utils/data/ProjectElements/ReservationAerienne.ts ***!
  \*******************************************************************/
/*! exports provided: ReservationAerienne */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ReservationAerienne", function() { return ReservationAerienne; });
const ReservationAerienne = {
    id: 'A1B3308D-8BC5-4A7B-81A7-4190A9A41D5jhkhj4',
    name: 'Gestion des réservations aériennes',
    description: "conception et Développement  d’une application Web de gestion des réservations aériennes",
    projectLink: null,
    liveUrl: null,
    isFeatured: true,
    features: [
        "Espace Login pour les gestionnaires des entreprises aériennes et pour l'administrateur ",
        "Visualisation des offres avec possibilité de filtrage",
        "Ajouter/Supprimer un Vol pour les gestionnaires",
        "Reserver/Annuler pour les visiteurs de l'application"
    ],
    tags: ['.net'],
    techStuff: [
        "ASP.NET MVC", "UML", "Bootstrap"
    ],
    additionalData: []
};


/***/ }),

/***/ "WW43":
/*!****************************************************************!*\
  !*** ./src/app/utils/data/ProjectElements/ProjetGeomatique.ts ***!
  \****************************************************************/
/*! exports provided: ProjetGeomatique */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ProjetGeomatique", function() { return ProjetGeomatique; });
const ProjetGeomatique = {
    id: 'A1B3308D-8BC5-4A7B-81A7-4190A9A41Dghgjhffgg0ffdB',
    name: "Etude du bassin versant de Allal El Fassi",
    description: "Etude du bassin versant drainé par le barrage Allal Elfassi",
    projectLink: null,
    liveUrl: null,
    isFeatured: true,
    features: [
        " Délimitation et détermination des caractéristiques du bassin versant à partir du MNT et des données climatiques",
        "Elaboration de la carte d’occupation du sol du bassin versant à partir des images satellites",
        "Etude et estimation de l’érosion hydrique au niveau du bassin versant"
    ],
    tags: ['sig'],
    techStuff: [
        "Arcgis",
        "ArcHydro",
        "Excel"
    ],
    additionalData: []
};


/***/ }),

/***/ "X3JH":
/*!******************************************************!*\
  !*** ./src/app/utils/data/ProjectElements/jeu-Go.ts ***!
  \******************************************************/
/*! exports provided: JeuGoData */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "JeuGoData", function() { return JeuGoData; });
const JeuGoData = {
    id: 'A1B3308D-8BC5-4A7B-81A7-4190A9A41D0B',
    name: 'Projet jeu Go',
    description: "c'est un jeu console similaire au famous jeu Go ",
    projectLink: null,
    liveUrl: null,
    isFeatured: true,
    features: [
        'création des interfaces Humain machines',
        "Gestion de l'nternalisation de l'application (englais, francais, espagnol)",
        "Choix de mode de jeu (facile, intermediaire, difficile)",
        "Choix de l'adversaire (Humain, Machine)"
    ],
    tags: ['autre'],
    techStuff: [
        "Programmation en C",
    ],
    additionalData: [{
            title: 'contributeur', data: ['Le projet a été réalisé avec un collègue : Salmane Zeradi']
        },
    ]
};


/***/ }),

/***/ "ZAI4":
/*!*******************************!*\
  !*** ./src/app/app.module.ts ***!
  \*******************************/
/*! exports provided: AppModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppModule", function() { return AppModule; });
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/platform-browser */ "jhN1");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _app_routing_module__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./app-routing.module */ "vY5A");
/* harmony import */ var _app_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./app.component */ "Sy1n");
/* harmony import */ var _about_about_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./about/about.component */ "84zG");
/* harmony import */ var _ui_back_icon_back_icon_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./ui/back-icon/back-icon.component */ "ITds");
/* harmony import */ var _ui_cross_icon_cross_icon_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./ui/cross-icon/cross-icon.component */ "DQKC");
/* harmony import */ var _dp_logo_dp_logo_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./dp-logo/dp-logo.component */ "Hsyc");
/* harmony import */ var _contact_contact_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./contact/contact.component */ "bzTf");
/* harmony import */ var _landing_page_landing_page_component__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./landing-page/landing-page.component */ "mSt+");
/* harmony import */ var _navigator_navigator_component__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./navigator/navigator.component */ "udFW");
/* harmony import */ var _profile_profile_component__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ./profile/profile.component */ "W6KJ");
/* harmony import */ var _typing_typing_component__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ./typing/typing.component */ "E+85");
/* harmony import */ var _key_skill_btns_key_skill_btns_component__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ./key-skill-btns/key-skill-btns.component */ "ZGyw");
/* harmony import */ var _projects_projects_component__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! ./projects/projects.component */ "zUkc");
/* harmony import */ var _portfolio_portfolio_component__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! ./portfolio/portfolio.component */ "zyDg");
/* harmony import */ var _project_card_project_card_component__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! ./project-card/project-card.component */ "MyZq");
/* harmony import */ var _project_details_project_details_component__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! ./project-details/project-details.component */ "OVWj");
/* harmony import */ var _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(/*! @angular/platform-browser/animations */ "R1ws");
/* harmony import */ var _profile_card_profile_card_component__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__(/*! ./profile-card/profile-card.component */ "7hpp");





















class AppModule {
}
AppModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineNgModule"]({ type: AppModule, bootstrap: [_app_component__WEBPACK_IMPORTED_MODULE_3__["AppComponent"]] });
AppModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineInjector"]({ factory: function AppModule_Factory(t) { return new (t || AppModule)(); }, providers: [], imports: [[
            _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_18__["BrowserAnimationsModule"],
            _angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__["BrowserModule"],
            _app_routing_module__WEBPACK_IMPORTED_MODULE_2__["AppRoutingModule"]
        ]] });
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵsetNgModuleScope"](AppModule, { declarations: [_app_component__WEBPACK_IMPORTED_MODULE_3__["AppComponent"],
        _about_about_component__WEBPACK_IMPORTED_MODULE_4__["AboutComponent"],
        _ui_back_icon_back_icon_component__WEBPACK_IMPORTED_MODULE_5__["BackIconComponent"],
        _ui_cross_icon_cross_icon_component__WEBPACK_IMPORTED_MODULE_6__["CrossIconComponent"],
        _dp_logo_dp_logo_component__WEBPACK_IMPORTED_MODULE_7__["DpLogoComponent"],
        _contact_contact_component__WEBPACK_IMPORTED_MODULE_8__["ContactComponent"],
        _landing_page_landing_page_component__WEBPACK_IMPORTED_MODULE_9__["LandingPageComponent"],
        _navigator_navigator_component__WEBPACK_IMPORTED_MODULE_10__["NavigatorComponent"],
        _profile_profile_component__WEBPACK_IMPORTED_MODULE_11__["ProfileComponent"],
        _typing_typing_component__WEBPACK_IMPORTED_MODULE_12__["TypingComponent"],
        _key_skill_btns_key_skill_btns_component__WEBPACK_IMPORTED_MODULE_13__["KeySkillBtnsComponent"],
        _projects_projects_component__WEBPACK_IMPORTED_MODULE_14__["ProjectsComponent"],
        _portfolio_portfolio_component__WEBPACK_IMPORTED_MODULE_15__["PortfolioComponent"],
        _project_card_project_card_component__WEBPACK_IMPORTED_MODULE_16__["ProjectCardComponent"],
        _project_details_project_details_component__WEBPACK_IMPORTED_MODULE_17__["ProjectDetailsComponent"],
        _profile_card_profile_card_component__WEBPACK_IMPORTED_MODULE_19__["ProfileCardComponent"]], imports: [_angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_18__["BrowserAnimationsModule"],
        _angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__["BrowserModule"],
        _app_routing_module__WEBPACK_IMPORTED_MODULE_2__["AppRoutingModule"]] }); })();
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵsetClassMetadata"](AppModule, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"],
        args: [{
                declarations: [
                    _app_component__WEBPACK_IMPORTED_MODULE_3__["AppComponent"],
                    _about_about_component__WEBPACK_IMPORTED_MODULE_4__["AboutComponent"],
                    _ui_back_icon_back_icon_component__WEBPACK_IMPORTED_MODULE_5__["BackIconComponent"],
                    _ui_cross_icon_cross_icon_component__WEBPACK_IMPORTED_MODULE_6__["CrossIconComponent"],
                    _dp_logo_dp_logo_component__WEBPACK_IMPORTED_MODULE_7__["DpLogoComponent"],
                    _contact_contact_component__WEBPACK_IMPORTED_MODULE_8__["ContactComponent"],
                    _landing_page_landing_page_component__WEBPACK_IMPORTED_MODULE_9__["LandingPageComponent"],
                    _navigator_navigator_component__WEBPACK_IMPORTED_MODULE_10__["NavigatorComponent"],
                    _profile_profile_component__WEBPACK_IMPORTED_MODULE_11__["ProfileComponent"],
                    _typing_typing_component__WEBPACK_IMPORTED_MODULE_12__["TypingComponent"],
                    _key_skill_btns_key_skill_btns_component__WEBPACK_IMPORTED_MODULE_13__["KeySkillBtnsComponent"],
                    _projects_projects_component__WEBPACK_IMPORTED_MODULE_14__["ProjectsComponent"],
                    _portfolio_portfolio_component__WEBPACK_IMPORTED_MODULE_15__["PortfolioComponent"],
                    _project_card_project_card_component__WEBPACK_IMPORTED_MODULE_16__["ProjectCardComponent"],
                    _project_details_project_details_component__WEBPACK_IMPORTED_MODULE_17__["ProjectDetailsComponent"],
                    _profile_card_profile_card_component__WEBPACK_IMPORTED_MODULE_19__["ProfileCardComponent"],
                ],
                imports: [
                    _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_18__["BrowserAnimationsModule"],
                    _angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__["BrowserModule"],
                    _app_routing_module__WEBPACK_IMPORTED_MODULE_2__["AppRoutingModule"]
                ],
                providers: [],
                bootstrap: [_app_component__WEBPACK_IMPORTED_MODULE_3__["AppComponent"]]
            }]
    }], null, null); })();


/***/ }),

/***/ "ZGyw":
/*!************************************************************!*\
  !*** ./src/app/key-skill-btns/key-skill-btns.component.ts ***!
  \************************************************************/
/*! exports provided: KeySkillBtnsComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "KeySkillBtnsComponent", function() { return KeySkillBtnsComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _services_tags_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./../services/tags.service */ "3r4v");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "ofXK");




const _c0 = function (a0) { return { "key-skill--disabled": a0 }; };
function KeySkillBtnsComponent_button_1_Template(rf, ctx) { if (rf & 1) {
    const _r3 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "button", 2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function KeySkillBtnsComponent_button_1_Template_button_click_0_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r3); const keySkill_r1 = ctx.$implicit; const ctx_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](); return ctx_r2.toogleSkillSelection(keySkill_r1); });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const keySkill_r1 = ctx.$implicit;
    const ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("disabled", ctx_r0.disableIfOneBtn(keySkill_r1))("ngClass", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction1"](3, _c0, !keySkill_r1.isSelected));
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", keySkill_r1.displayName, " ");
} }
class KeySkillBtnsComponent {
    constructor(tagsService) {
        this.tagsService = tagsService;
        this.keySkills = tagsService.tags;
    }
    ngOnInit() { }
    toogleSkillSelection(tag) {
        this.tagsService.toogleTagSelection(tag.displayName);
    }
    disableIfOneBtn(keySkill) {
        const targetKeySkills = this.keySkills.filter(e => e.isSelected);
        return (targetKeySkills.length === 1 &&
            targetKeySkills[0].displayName === keySkill.displayName);
    }
}
KeySkillBtnsComponent.ɵfac = function KeySkillBtnsComponent_Factory(t) { return new (t || KeySkillBtnsComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_services_tags_service__WEBPACK_IMPORTED_MODULE_1__["TagsService"])); };
KeySkillBtnsComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: KeySkillBtnsComponent, selectors: [["app-key-skill-btns"]], decls: 2, vars: 1, consts: [[1, "key-skills"], ["class", "key-skill", 3, "disabled", "ngClass", "click", 4, "ngFor", "ngForOf"], [1, "key-skill", 3, "disabled", "ngClass", "click"]], template: function KeySkillBtnsComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](1, KeySkillBtnsComponent_button_1_Template, 2, 5, "button", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", ctx.keySkills);
    } }, directives: [_angular_common__WEBPACK_IMPORTED_MODULE_2__["NgForOf"], _angular_common__WEBPACK_IMPORTED_MODULE_2__["NgClass"]], styles: [".key-skills[_ngcontent-%COMP%] {\n  display: flex;\n  flex-wrap: wrap;\n  justify-content: center;\n  margin: 1rem auto;\n}\n.key-skills[_ngcontent-%COMP%]   .key-skill[_ngcontent-%COMP%] {\n  z-index: 99;\n  position: relative;\n  font-size: 1.6rem;\n  margin: 0.6rem;\n  padding: 0.4rem 2rem;\n  border: 2px solid #db381b;\n  border-radius: 50rem;\n  cursor: pointer;\n  color: #fff;\n  line-height: 1.5;\n  background-color: #db381b;\n  transition: all 0.3s ease-in-out;\n  outline: none;\n  box-shadow: 0.4rem 0.5rem 0.9rem rgba(0, 0, 0, 0.25);\n}\n.key-skills[_ngcontent-%COMP%]   .key-skill[_ngcontent-%COMP%]:disabled {\n  background-color: #e85a41;\n  border: 2px solid #e85a41;\n  box-shadow: none;\n}\n.key-skills[_ngcontent-%COMP%]   .key-skill[_ngcontent-%COMP%]:hover:disabled {\n  margin: 0.6rem;\n  padding: 0.4rem 2rem;\n  cursor: not-allowed;\n}\n.key-skills[_ngcontent-%COMP%]   .key-skill[_ngcontent-%COMP%]:hover {\n  padding: 0.4rem 3.2rem;\n  margin: 0.6rem 2rem;\n}\n@media screen and (max-width: 640px) {\n  .key-skills[_ngcontent-%COMP%]   .key-skill[_ngcontent-%COMP%]:hover {\n    margin: 0.6rem;\n    padding: 0.4rem 2rem;\n  }\n}\n.key-skills[_ngcontent-%COMP%]   .key-skill.key-skill--disabled[_ngcontent-%COMP%] {\n  border: 2px solid #db381b;\n  background-color: transparent;\n  overflow: hidden;\n  transition: all 0.3s ease-in-out;\n}\n.key-skills[_ngcontent-%COMP%]   .key-skill.key-skill--disabled[_ngcontent-%COMP%]:after {\n  content: \"\";\n  position: absolute;\n  display: block;\n  width: 100%;\n  height: 2px;\n  background-color: #db381b;\n  top: 50%;\n  left: 0;\n  transform: rotateZ(-14deg);\n  transition: all 0.3s ease-in-out;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAva2V5LXNraWxsLWJ0bnMva2V5LXNraWxsLWJ0bnMuY29tcG9uZW50LnNjc3MiLCJzcmMvYXBwL192YXIuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFFQTtFQUNFLGFBQUE7RUFDQSxlQUFBO0VBQ0EsdUJBQUE7RUFDQSxpQkFBQTtBQURGO0FBTUU7RUFDRSxXQUFBO0VBQ0Esa0JBQUE7RUFDQSxpQkFBQTtFQUNBLGNBUGlCO0VBUWpCLG9CQVBrQjtFQVFsQix5QkFBQTtFQUNBLG9CQUFBO0VBQ0EsZUFBQTtFQUNBLFdBQUE7RUFDQSxnQkFBQTtFQUNBLHlCQ25CSztFRG9CTCxnQ0FBQTtFQUNBLGFBQUE7RUFDQSxvREFBQTtBQUpKO0FBTUk7RUFDRSx5QkFBQTtFQUNBLHlCQUFBO0VBQ0EsZ0JBQUE7QUFKTjtBQU9JO0VBQ0UsY0ExQmU7RUEyQmYsb0JBMUJnQjtFQTJCaEIsbUJBQUE7QUFMTjtBQVNJO0VBQ0Usc0JBQUE7RUFDQSxtQkFBQTtBQVBOO0FBU007RUFKRjtJQUtJLGNBckNhO0lBc0NiLG9CQXJDYztFQStCcEI7QUFDRjtBQVNJO0VBQ0UseUJBQUE7RUFDQSw2QkFBQTtFQUNBLGdCQUFBO0VBQ0EsZ0NBQUE7QUFQTjtBQVVJO0VBQ0UsV0FBQTtFQUNBLGtCQUFBO0VBQ0EsY0FBQTtFQUNBLFdBQUE7RUFDQSxXQUFBO0VBQ0EseUJDNURHO0VENkRILFFBQUE7RUFDQSxPQUFBO0VBQ0EsMEJBQUE7RUFDQSxnQ0FBQTtBQVJOIiwiZmlsZSI6InNyYy9hcHAva2V5LXNraWxsLWJ0bnMva2V5LXNraWxsLWJ0bnMuY29tcG9uZW50LnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyJAaW1wb3J0ICcuLi92YXInO1xyXG5cclxuLmtleS1za2lsbHMge1xyXG4gIGRpc3BsYXk6IGZsZXg7XHJcbiAgZmxleC13cmFwOiB3cmFwO1xyXG4gIGp1c3RpZnktY29udGVudDogY2VudGVyO1xyXG4gIG1hcmdpbjogMXJlbSBhdXRvO1xyXG5cclxuICAka2V5X3NraWxsX21hcmdpbjogMC42cmVtO1xyXG4gICRrZXlfc2tpbGxfcGFkZGluZzogMC40cmVtIDJyZW07XHJcblxyXG4gIC5rZXktc2tpbGwge1xyXG4gICAgei1pbmRleDogOTk7XHJcbiAgICBwb3NpdGlvbjogcmVsYXRpdmU7XHJcbiAgICBmb250LXNpemU6IDEuNnJlbTtcclxuICAgIG1hcmdpbjogJGtleV9za2lsbF9tYXJnaW47XHJcbiAgICBwYWRkaW5nOiAka2V5X3NraWxsX3BhZGRpbmc7XHJcbiAgICBib3JkZXI6IDJweCBzb2xpZCAkY29sb3IzO1xyXG4gICAgYm9yZGVyLXJhZGl1czogNTByZW07XHJcbiAgICBjdXJzb3I6IHBvaW50ZXI7XHJcbiAgICBjb2xvcjogI2ZmZjtcclxuICAgIGxpbmUtaGVpZ2h0OiAxLjU7XHJcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAkY29sb3IzO1xyXG4gICAgdHJhbnNpdGlvbjogYWxsIDAuM3MgZWFzZS1pbi1vdXQ7XHJcbiAgICBvdXRsaW5lOiBub25lO1xyXG4gICAgYm94LXNoYWRvdzogMC40cmVtIDAuNXJlbSAwLjlyZW0gcmdiYSgwLCAwLCAwLCAwLjI1KTtcclxuXHJcbiAgICAmOmRpc2FibGVkIHtcclxuICAgICAgYmFja2dyb3VuZC1jb2xvcjogbGlnaHRlbigkY29sb3IzLCAkYW1vdW50OiAxMCk7XHJcbiAgICAgIGJvcmRlcjogMnB4IHNvbGlkIGxpZ2h0ZW4oJGNvbG9yMywgJGFtb3VudDogMTApO1xyXG4gICAgICBib3gtc2hhZG93OiBub25lO1xyXG4gICAgfVxyXG5cclxuICAgICY6aG92ZXI6ZGlzYWJsZWQge1xyXG4gICAgICBtYXJnaW46ICRrZXlfc2tpbGxfbWFyZ2luO1xyXG4gICAgICBwYWRkaW5nOiAka2V5X3NraWxsX3BhZGRpbmc7XHJcbiAgICAgIGN1cnNvcjogbm90LWFsbG93ZWQ7XHJcbiAgICB9XHJcblxyXG4gICAgLy8gJC5rZXktc2tpbGxcclxuICAgICY6aG92ZXIge1xyXG4gICAgICBwYWRkaW5nOiAwLjRyZW0gMy4ycmVtO1xyXG4gICAgICBtYXJnaW46IDAuNnJlbSAycmVtO1xyXG5cclxuICAgICAgQG1lZGlhIHNjcmVlbiBhbmQgKG1heC13aWR0aDogNjQwcHgpIHtcclxuICAgICAgICBtYXJnaW46ICRrZXlfc2tpbGxfbWFyZ2luO1xyXG4gICAgICAgIHBhZGRpbmc6ICRrZXlfc2tpbGxfcGFkZGluZztcclxuICAgICAgfVxyXG4gICAgfVxyXG5cclxuICAgICYua2V5LXNraWxsLS1kaXNhYmxlZCB7XHJcbiAgICAgIGJvcmRlcjogMnB4IHNvbGlkICRjb2xvcjM7XHJcbiAgICAgIGJhY2tncm91bmQtY29sb3I6IHRyYW5zcGFyZW50O1xyXG4gICAgICBvdmVyZmxvdzogaGlkZGVuO1xyXG4gICAgICB0cmFuc2l0aW9uOiBhbGwgMC4zcyBlYXNlLWluLW91dDtcclxuICAgIH1cclxuXHJcbiAgICAmLmtleS1za2lsbC0tZGlzYWJsZWQ6YWZ0ZXIge1xyXG4gICAgICBjb250ZW50OiAnJztcclxuICAgICAgcG9zaXRpb246IGFic29sdXRlO1xyXG4gICAgICBkaXNwbGF5OiBibG9jaztcclxuICAgICAgd2lkdGg6IDEwMCU7XHJcbiAgICAgIGhlaWdodDogMnB4O1xyXG4gICAgICBiYWNrZ3JvdW5kLWNvbG9yOiAkY29sb3IzO1xyXG4gICAgICB0b3A6IDUwJTtcclxuICAgICAgbGVmdDogMDtcclxuICAgICAgdHJhbnNmb3JtOiByb3RhdGVaKC0xNGRlZyk7XHJcbiAgICAgIHRyYW5zaXRpb246IGFsbCAwLjNzIGVhc2UtaW4tb3V0O1xyXG4gICAgICAvLyBhbmltYXRpb246IHNsaWRlSW4gMC42cztcclxuICAgIH1cclxuICB9XHJcbn1cclxuXHJcbi8vIEBrZXlmcmFtZXMgc2xpZGVJbiB7XHJcbi8vICAgMCUge1xyXG4vLyAgICAgdHJhbnNmb3JtOiB0cmFuc2xhdGUoLTUwJSk7XHJcbi8vICAgICBvcGFjaXR5OiAwO1xyXG4vLyAgIH1cclxuLy8gICAxMDAlIHtcclxuLy8gICAgIHRyYW5zZm9ybTogdHJhbnNsYXRlKDAlKTtcclxuLy8gICAgIG9wYWNpdHk6IDE7XHJcbi8vICAgfVxyXG4vLyB9XHJcblxyXG4vLyBAa2V5ZnJhbWVzIHNsaWRlT3V0e1xyXG4vLyAgIDAlIHtcclxuLy8gICAgIHRyYW5zZm9ybTogdHJhbnNsYXRlKDAlKTtcclxuLy8gICAgIG9wYWNpdHk6IDE7XHJcbi8vICAgfVxyXG4vLyAgIDEwMCUge1xyXG4vLyAgICAgdHJhbnNmb3JtOiB0cmFuc2xhdGUoNTAlKTtcclxuLy8gICAgIG9wYWNpdHk6IDA7XHJcbi8vICAgfVxyXG4vLyB9XHJcbiIsIiRiZy1jb2xvcjogIzE3YTU5ODtcclxuJGNvbG9yMTogI2U3NGMzYztcclxuJGNvbG9yMjogIzJjM2U1MDtcclxuJGNvbG9yMzogI2RiMzgxYjtcclxuJGdyZWVuOiAjMTdhNTk4O1xyXG4kdGV4dC1jb2xvcjogI2ZmZmZmZjtcclxuJGJsYWNrOiAjNTU1O1xyXG4kb2ZmLXdoaXRlOiAjZjhmOGY4O1xyXG4kd2hpdGU6ICNmZmY7XHJcblxyXG4iXX0= */"] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](KeySkillBtnsComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'app-key-skill-btns',
                templateUrl: './key-skill-btns.component.html',
                styleUrls: ['./key-skill-btns.component.scss']
            }]
    }], function () { return [{ type: _services_tags_service__WEBPACK_IMPORTED_MODULE_1__["TagsService"] }]; }, null); })();


/***/ }),

/***/ "Zt51":
/*!*************************************************************!*\
  !*** ./src/app/utils/data/ProjectElements/BidonvilleApp.ts ***!
  \*************************************************************/
/*! exports provided: BidonvilleApp */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "BidonvilleApp", function() { return BidonvilleApp; });
const BidonvilleApp = {
    id: 'A1B3308D-8BC5-4A7B-81A7-4190A9A41Dghgjhffgg0B',
    name: "application web de gestion des réclamations dans les bidonvilles de la région de casablanca",
    description: "C'est un projet pour la gestion des réclamations des incidents dans les zones Bidonville ",
    projectLink: null,
    liveUrl: null,
    isFeatured: true,
    features: [
        "Création d'un espace Login",
        "Ajout d'un incident dans la carte en spécifiant la localisation de l'incident",
        "Gestion des statuts des incidents "
    ],
    tags: ['sig', '.net'],
    techStuff: [
        "Arcgis",
        "ArcGIS API for JavaScript",
        "ASP .NET",
        "SQL Server",
        "Arcgis Server"
    ],
    additionalData: []
};


/***/ }),

/***/ "bzTf":
/*!**********************************************!*\
  !*** ./src/app/contact/contact.component.ts ***!
  \**********************************************/
/*! exports provided: ContactComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ContactComponent", function() { return ContactComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "tyNb");
/* harmony import */ var _ui_back_icon_back_icon_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../ui/back-icon/back-icon.component */ "ITds");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/common */ "ofXK");





function ContactComponent_a_9_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "a", 8);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](1, "img", 9);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const profileLinks_r2 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("href", profileLinks_r2.url, _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsanitizeUrl"]);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("title", profileLinks_r2.name)("src", profileLinks_r2.iconUrl, _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsanitizeUrl"])("alt", profileLinks_r2.name);
} }
function ContactComponent_a_22_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "a", 8);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](1, "img", 9);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const workProfile_r3 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("href", workProfile_r3.url, _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsanitizeUrl"]);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("title", workProfile_r3.name)("src", workProfile_r3.iconUrl, _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsanitizeUrl"])("alt", workProfile_r3.name);
} }
class ContactComponent {
    constructor(router) {
        this.router = router;
        this.contactProfile = {
            profile: [
                {
                    name: 'Facebook',
                    url: 'https://facebook.com/https://www.facebook.com/profile.php?id=100017817667308',
                    iconUrl: './assets/icons/facebook.svg'
                },
                {
                    name: 'LinkedIn',
                    url: 'https://www.linkedin.com/in/mohamed-khafchrait-79b00b126/',
                    iconUrl: './assets/icons/linkedin.svg'
                }
            ],
            work: [
                {
                    name: 'GitHub',
                    url: 'https://github.com/mohamdkh',
                    iconUrl: './assets/icons/github.svg'
                },
                {
                    name: 'Hackerrank',
                    url: 'https://www.hackerrank.com/mohamed_khafchr1',
                    iconUrl: './assets/icons/hackerrank.svg'
                },
                {
                    name: 'Stackoverflow',
                    url: 'https://stackoverflow.com/users/14722106/mohamed-khafchrait',
                    iconUrl: './assets/icons/stackoverflow.svg'
                },
                {
                    name: 'Pluralsight',
                    url: 'https://www.pluralsight.com/',
                    iconUrl: './assets/icons/pluralsight.svg'
                }
            ]
        };
        this.email = {
            name: 'Email',
            url: 'mohamedkhafchrait@gmail.com',
            iconUrl: './assets/icons/email.svg'
        };
        this.vscodeMarketplace = {
            name: 'VSCode Extension Publisher',
            url: 'https://marketplace.visualstudio.com/',
            iconUrl: './assets/icons/vscode.svg'
        };
    }
    ngOnInit() { }
    onBackClick() {
        this.router.navigateByUrl('/');
    }
}
ContactComponent.ɵfac = function ContactComponent_Factory(t) { return new (t || ContactComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_1__["Router"])); };
ContactComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: ContactComponent, selectors: [["app-contact"]], decls: 23, vars: 12, consts: [[1, "back-icon", 3, "click"], [1, "root"], [1, "page-header"], [1, "container"], [1, "part", "part1"], [1, "section", "icons", "flex-1"], ["target", "_blank", "class", "img icon", 3, "href", 4, "ngFor", "ngForOf"], [1, "section", "min-section"], ["target", "_blank", 1, "img", "icon", 3, "href"], [3, "title", "src", "alt"], [1, "part", "part2"], ["target", "_top", 1, "img", "icon", 3, "href"], ["class", "img icon", "target", "_blank", 3, "href", 4, "ngFor", "ngForOf"]], template: function ContactComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function ContactComponent_Template_div_click_0_listener() { return ctx.onBackClick(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](1, "app-back-icon");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "div");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "h1", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](5, "CONTACT & PROFILES");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "div", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "div", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](8, "div", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](9, ContactComponent_a_9_Template, 2, 4, "a", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](10, "div", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](11, "a", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](12, "img", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](13, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](14);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](15, "div", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](16, "div", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](17, "a", 11);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](18, "img", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](19, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](20);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](21, "div", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](22, ContactComponent_a_22_Template, 2, 4, "a", 12);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](9);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", ctx.contactProfile.profile);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("href", ctx.vscodeMarketplace.url, _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsanitizeUrl"]);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("title", ctx.vscodeMarketplace.name)("src", ctx.vscodeMarketplace.iconUrl, _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsanitizeUrl"])("alt", ctx.vscodeMarketplace.name);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](ctx.vscodeMarketplace.name);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("href", ctx.email.url, _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsanitizeUrl"]);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("title", ctx.email.name)("src", ctx.email.iconUrl, _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsanitizeUrl"])("alt", ctx.email.name);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](ctx.email.url.replace("mailto:", ""));
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", ctx.contactProfile.work);
    } }, directives: [_ui_back_icon_back_icon_component__WEBPACK_IMPORTED_MODULE_2__["BackIconComponent"], _angular_common__WEBPACK_IMPORTED_MODULE_3__["NgForOf"]], styles: ["a[_ngcontent-%COMP%] {\n  text-decoration: none;\n  color: #f2f2f2;\n}\n\n.root[_ngcontent-%COMP%] {\n  min-height: 100vh;\n  min-width: 100vw;\n  display: flex;\n  justify-content: center;\n  align-items: center;\n  flex-direction: column;\n}\n\n.root[_ngcontent-%COMP%]    > [_ngcontent-%COMP%]:nth-child(1) {\n  flex: 6;\n  display: flex;\n  align-items: center;\n}\n\n.root[_ngcontent-%COMP%]    > [_ngcontent-%COMP%]:nth-child(2) {\n  flex: 8;\n}\n\n.page-header[_ngcontent-%COMP%] {\n  color: #f8f8f8;\n  position: relative;\n  font-size: 3rem;\n  letter-spacing: 1px;\n  word-spacing: 1.5px;\n  margin: 2rem 0;\n  -webkit-user-select: none;\n          user-select: none;\n  font-family: \"Cormorant Garamond\", serif;\n}\n\n.page-header[_ngcontent-%COMP%]:after {\n  content: \"\";\n  position: absolute;\n  display: inline-block;\n  width: 100%;\n  height: 2px;\n  top: 100%;\n  left: 0;\n  background: #f8f8f8;\n}\n\n.icon[_ngcontent-%COMP%] {\n  height: 5rem;\n  width: 5rem;\n  cursor: pointer;\n  transition: 0.3s all ease-in-out;\n  animation: fade 1.4s ease-in-out 0.4s 1 both;\n}\n\n.icon[_ngcontent-%COMP%]:hover {\n  transform: scale(1.1);\n}\n\n@media (max-width: 690px) {\n  .icon[_ngcontent-%COMP%] {\n    height: 3rem;\n    width: 3rem;\n  }\n}\n\n@media (max-width: 350px) {\n  .icon[_ngcontent-%COMP%] {\n    height: 2rem;\n    width: 2rem;\n  }\n}\n\n.img[_ngcontent-%COMP%]    > img[_ngcontent-%COMP%] {\n  width: 100%;\n  height: 100%;\n}\n\n.container[_ngcontent-%COMP%] {\n  width: 95%;\n  max-width: 75rem;\n  display: flex;\n  flex: 1;\n  align-items: center;\n  justify-content: flex-start;\n  flex-direction: column;\n}\n\n.icons[_ngcontent-%COMP%] {\n  padding-right: 2rem;\n  padding-left: 2rem;\n}\n\n.section[_ngcontent-%COMP%] {\n  background: #2c3e50;\n  display: flex;\n  margin: 2px;\n  justify-content: space-around;\n  align-items: center;\n  padding-top: 2.4rem;\n  padding-bottom: 2.4rem;\n}\n\n.section.min-section[_ngcontent-%COMP%] {\n  width: 35%;\n  display: flex;\n  justify-content: center;\n  align-items: center;\n  flex-direction: column;\n  color: #f8f8f8;\n  font-size: 1.6rem;\n}\n\n@media (max-width: 690px) {\n  .section.min-section[_ngcontent-%COMP%] {\n    font-size: 1.2rem;\n  }\n}\n\n@media (max-width: 350px) {\n  .section.min-section[_ngcontent-%COMP%] {\n    font-size: 0.8rem;\n  }\n}\n\n.section.min-section[_ngcontent-%COMP%]    > p[_ngcontent-%COMP%] {\n  margin: 0px 1rem;\n  width: 90%;\n  text-align: center;\n  word-break: break-word;\n  padding-top: 0.8rem;\n  margin-bottom: -0.8rem;\n}\n\n.part[_ngcontent-%COMP%] {\n  display: flex;\n  width: 100%;\n}\n\n.flex-1[_ngcontent-%COMP%] {\n  flex: 1;\n}\n\n@keyframes fade {\n  0% {\n    opacity: 0;\n  }\n  100% {\n    opacity: 1;\n  }\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvY29udGFjdC9jb250YWN0LmNvbXBvbmVudC5zY3NzIiwic3JjL2FwcC9fdmFyLnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQ0E7RUFDRSxxQkFBQTtFQUNBLGNBQUE7QUFBRjs7QUFHQTtFQUNFLGlCQUFBO0VBQ0EsZ0JBQUE7RUFDQSxhQUFBO0VBQ0EsdUJBQUE7RUFDQSxtQkFBQTtFQUNBLHNCQUFBO0FBQUY7O0FBQ0U7RUFDRSxPQUFBO0VBQ0EsYUFBQTtFQUNBLG1CQUFBO0FBQ0o7O0FBQ0U7RUFDRSxPQUFBO0FBQ0o7O0FBR0E7RUFDRSxjQ2pCVTtFRGtCVixrQkFBQTtFQUNBLGVBQUE7RUFDQSxtQkFBQTtFQUNBLG1CQUFBO0VBQ0EsY0FBQTtFQUNBLHlCQUFBO1VBQUEsaUJBQUE7RUFDQSx3Q0FBQTtBQUFGOztBQUNFO0VBQ0UsV0FBQTtFQUNBLGtCQUFBO0VBQ0EscUJBQUE7RUFDQSxXQUFBO0VBQ0EsV0FBQTtFQUNBLFNBQUE7RUFDQSxPQUFBO0VBQ0EsbUJDakNRO0FEa0NaOztBQUdBO0VBRUUsWUFEbUI7RUFFbkIsV0FGbUI7RUFHbkIsZUFBQTtFQUNBLGdDQUFBO0VBQ0EsNENBQUE7QUFERjs7QUFFRTtFQUNFLHFCQUFBO0FBQUo7O0FBRUU7RUFWRjtJQVlJLFlBRG1CO0lBRW5CLFdBRm1CO0VBRXJCO0FBQ0Y7O0FBQ0U7RUFmRjtJQWlCSSxZQURtQjtJQUVuQixXQUZtQjtFQUdyQjtBQUNGOztBQUdFO0VBQ0UsV0FBQTtFQUNBLFlBQUE7QUFBSjs7QUFJQTtFQUNFLFVBQUE7RUFDQSxnQkFBQTtFQUNBLGFBQUE7RUFDQSxPQUFBO0VBQ0EsbUJBQUE7RUFDQSwyQkFBQTtFQUNBLHNCQUFBO0FBREY7O0FBSUE7RUFDRSxtQkFBQTtFQUNBLGtCQUFBO0FBREY7O0FBSUE7RUFDRSxtQkN2Rk87RUR3RlAsYUFBQTtFQUNBLFdBQUE7RUFDQSw2QkFBQTtFQUNBLG1CQUFBO0VBQ0EsbUJBQUE7RUFDQSxzQkFBQTtBQURGOztBQUlFO0VBQ0UsVUFBQTtFQUNBLGFBQUE7RUFDQSx1QkFBQTtFQUNBLG1CQUFBO0VBQ0Esc0JBQUE7RUFDQSxjQ2pHUTtFRGtHUixpQkFBQTtBQUZKOztBQUdJO0VBUkY7SUFTSSxpQkFBQTtFQUFKO0FBQ0Y7O0FBQ0k7RUFYRjtJQVlJLGlCQUFBO0VBRUo7QUFDRjs7QUFESTtFQUNFLGdCQUFBO0VBQ0EsVUFBQTtFQUNBLGtCQUFBO0VBQ0Esc0JBQUE7RUFDQSxtQkFBQTtFQUNBLHNCQUFBO0FBR047O0FBRUE7RUFDRSxhQUFBO0VBQ0EsV0FBQTtBQUNGOztBQUVBO0VBQ0UsT0FBQTtBQUNGOztBQUVBO0VBQ0U7SUFDRSxVQUFBO0VBQ0Y7RUFDQTtJQUNFLFVBQUE7RUFDRjtBQUNGIiwiZmlsZSI6InNyYy9hcHAvY29udGFjdC9jb250YWN0LmNvbXBvbmVudC5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiQGltcG9ydCAnLi4vdmFyJztcclxuYSB7XHJcbiAgdGV4dC1kZWNvcmF0aW9uOiBub25lO1xyXG4gIGNvbG9yOiAjZjJmMmYyO1xyXG59XHJcblxyXG4ucm9vdCB7XHJcbiAgbWluLWhlaWdodDogMTAwdmg7XHJcbiAgbWluLXdpZHRoOiAxMDB2dztcclxuICBkaXNwbGF5OiBmbGV4O1xyXG4gIGp1c3RpZnktY29udGVudDogY2VudGVyO1xyXG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XHJcbiAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcclxuICAmPjpudGgtY2hpbGQoMSkge1xyXG4gICAgZmxleDogNjtcclxuICAgIGRpc3BsYXk6IGZsZXg7XHJcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xyXG4gIH1cclxuICAmPjpudGgtY2hpbGQoMikge1xyXG4gICAgZmxleDogODtcclxuICB9XHJcbn1cclxuXHJcbi5wYWdlLWhlYWRlciB7XHJcbiAgY29sb3I6ICRvZmYtd2hpdGU7XHJcbiAgcG9zaXRpb246IHJlbGF0aXZlO1xyXG4gIGZvbnQtc2l6ZTogM3JlbTtcclxuICBsZXR0ZXItc3BhY2luZzogMXB4O1xyXG4gIHdvcmQtc3BhY2luZzogMS41cHg7XHJcbiAgbWFyZ2luOiAycmVtIDA7XHJcbiAgdXNlci1zZWxlY3Q6IG5vbmU7XHJcbiAgZm9udC1mYW1pbHk6ICdDb3Jtb3JhbnQgR2FyYW1vbmQnLCBzZXJpZjsgLy8gZm9udC13ZWlnaHQ6IG5vcm1hbDtcclxuICAmOmFmdGVyIHtcclxuICAgIGNvbnRlbnQ6ICcnO1xyXG4gICAgcG9zaXRpb246IGFic29sdXRlO1xyXG4gICAgZGlzcGxheTogaW5saW5lLWJsb2NrO1xyXG4gICAgd2lkdGg6IDEwMCU7XHJcbiAgICBoZWlnaHQ6IDJweDtcclxuICAgIHRvcDogMTAwJTtcclxuICAgIGxlZnQ6IDA7XHJcbiAgICBiYWNrZ3JvdW5kOiAkb2ZmLXdoaXRlO1xyXG4gIH1cclxufVxyXG5cclxuLmljb24ge1xyXG4gICRtYXgtd2lkdGgtaGVpZ2h0OiA1cmVtO1xyXG4gIGhlaWdodDogJG1heC13aWR0aC1oZWlnaHQ7XHJcbiAgd2lkdGg6ICRtYXgtd2lkdGgtaGVpZ2h0O1xyXG4gIGN1cnNvcjogcG9pbnRlcjtcclxuICB0cmFuc2l0aW9uOiAwLjNzIGFsbCBlYXNlLWluLW91dDtcclxuICBhbmltYXRpb246IGZhZGUgMS40cyBlYXNlLWluLW91dCAwLjRzIDEgYm90aCA7XHJcbiAgJjpob3ZlciB7XHJcbiAgICB0cmFuc2Zvcm06IHNjYWxlKDEuMSk7XHJcbiAgfVxyXG4gIEBtZWRpYSAobWF4LXdpZHRoOiA2OTBweCkge1xyXG4gICAgJG1heC13aWR0aC1oZWlnaHQ6IDNyZW07XHJcbiAgICBoZWlnaHQ6ICRtYXgtd2lkdGgtaGVpZ2h0O1xyXG4gICAgd2lkdGg6ICRtYXgtd2lkdGgtaGVpZ2h0O1xyXG4gIH1cclxuICBAbWVkaWEgKG1heC13aWR0aDogMzUwcHgpIHtcclxuICAgICRtYXgtd2lkdGgtaGVpZ2h0OiAycmVtO1xyXG4gICAgaGVpZ2h0OiAkbWF4LXdpZHRoLWhlaWdodDtcclxuICAgIHdpZHRoOiAkbWF4LXdpZHRoLWhlaWdodDtcclxuICB9XHJcbn1cclxuXHJcbi5pbWcge1xyXG4gICY+aW1nIHtcclxuICAgIHdpZHRoOiAxMDAlO1xyXG4gICAgaGVpZ2h0OiAxMDAlO1xyXG4gIH1cclxufVxyXG5cclxuLmNvbnRhaW5lciB7XHJcbiAgd2lkdGg6IDk1JTtcclxuICBtYXgtd2lkdGg6IDc1cmVtO1xyXG4gIGRpc3BsYXk6IGZsZXg7XHJcbiAgZmxleDogMTtcclxuICBhbGlnbi1pdGVtczogY2VudGVyO1xyXG4gIGp1c3RpZnktY29udGVudDogZmxleC1zdGFydDtcclxuICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xyXG59XHJcblxyXG4uaWNvbnMge1xyXG4gIHBhZGRpbmctcmlnaHQ6IDJyZW07XHJcbiAgcGFkZGluZy1sZWZ0OiAycmVtO1xyXG59XHJcblxyXG4uc2VjdGlvbiB7XHJcbiAgYmFja2dyb3VuZDogJGNvbG9yMjtcclxuICBkaXNwbGF5OiBmbGV4O1xyXG4gIG1hcmdpbjogMnB4O1xyXG4gIGp1c3RpZnktY29udGVudDogc3BhY2UtYXJvdW5kIDtcclxuICBhbGlnbi1pdGVtczogY2VudGVyO1xyXG4gIHBhZGRpbmctdG9wOiAyLjRyZW07XHJcbiAgcGFkZGluZy1ib3R0b206IDIuNHJlbTtcclxuXHJcblxyXG4gICYubWluLXNlY3Rpb24ge1xyXG4gICAgd2lkdGg6IDM1JTtcclxuICAgIGRpc3BsYXk6IGZsZXg7XHJcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcclxuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XHJcbiAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xyXG4gICAgY29sb3I6ICRvZmYtd2hpdGU7XHJcbiAgICBmb250LXNpemU6IDEuNnJlbTtcclxuICAgIEBtZWRpYSAobWF4LXdpZHRoOiA2OTBweCkge1xyXG4gICAgICBmb250LXNpemU6IDEuMnJlbTtcclxuICAgIH1cclxuICAgIEBtZWRpYSAobWF4LXdpZHRoOiAzNTBweCkge1xyXG4gICAgICBmb250LXNpemU6IDAuOHJlbTtcclxuICAgIH1cclxuICAgICY+cCB7XHJcbiAgICAgIG1hcmdpbjogMHB4IDFyZW07XHJcbiAgICAgIHdpZHRoOiA5MCU7XHJcbiAgICAgIHRleHQtYWxpZ246IGNlbnRlcjtcclxuICAgICAgd29yZC1icmVhazogYnJlYWstd29yZDtcclxuICAgICAgcGFkZGluZy10b3A6IDAuOHJlbTtcclxuICAgICAgbWFyZ2luLWJvdHRvbTogLTAuOHJlbTtcclxuICAgIH1cclxuICB9XHJcbn1cclxuXHJcbi5wYXJ0IHtcclxuICBkaXNwbGF5OiBmbGV4O1xyXG4gIHdpZHRoOiAxMDAlO1xyXG59XHJcblxyXG4uZmxleC0xIHtcclxuICBmbGV4OiAxO1xyXG59XHJcblxyXG5Aa2V5ZnJhbWVzIGZhZGUge1xyXG4gIDAlIHtcclxuICAgIG9wYWNpdHk6IDA7XHJcbiAgfVxyXG4gIDEwMCUge1xyXG4gICAgb3BhY2l0eTogMTtcclxuICB9XHJcbn1cclxuIiwiJGJnLWNvbG9yOiAjMTdhNTk4O1xyXG4kY29sb3IxOiAjZTc0YzNjO1xyXG4kY29sb3IyOiAjMmMzZTUwO1xyXG4kY29sb3IzOiAjZGIzODFiO1xyXG4kZ3JlZW46ICMxN2E1OTg7XHJcbiR0ZXh0LWNvbG9yOiAjZmZmZmZmO1xyXG4kYmxhY2s6ICM1NTU7XHJcbiRvZmYtd2hpdGU6ICNmOGY4Zjg7XHJcbiR3aGl0ZTogI2ZmZjtcclxuXHJcbiJdfQ== */"] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](ContactComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'app-contact',
                templateUrl: './contact.component.html',
                styleUrls: ['./contact.component.scss']
            }]
    }], function () { return [{ type: _angular_router__WEBPACK_IMPORTED_MODULE_1__["Router"] }]; }, null); })();


/***/ }),

/***/ "dVYi":
/*!****************************************************************!*\
  !*** ./src/app/utils/data/ProjectElements/NoteUrbanistique.ts ***!
  \****************************************************************/
/*! exports provided: NoteUrbanistique */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "NoteUrbanistique", function() { return NoteUrbanistique; });
const NoteUrbanistique = {
    id: 'A1B3308D-8BC5-4A7B-81A7-4190A9A41Dklhjkl54',
    name: 'Edition de la note de renseignement urbanistique',
    description: "Il s'agit d'un projet d’édition de la note de renseignement urbanistique (NRU)",
    projectLink: null,
    liveUrl: null,
    isFeatured: true,
    features: [
        'Automatisation de precessus de la mise en oeuvre de la note de renseignement urbanistique',
        "Traitement des données : Plan cadastral ou Levé topographique,Tableaux des Bornes",
        "Génération des cartes de bien et l'affichage des informations assciées"
    ],
    tags: ['sig'],
    techStuff: [
        "Python", "Arcgis", "Arcpy"
    ],
    additionalData: []
};


/***/ }),

/***/ "l8Z8":
/*!********************************************************************!*\
  !*** ./src/app/utils/data/ProjectElements/Gestion-Bibliotheque.ts ***!
  \********************************************************************/
/*! exports provided: GestionBibliotheque */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "GestionBibliotheque", function() { return GestionBibliotheque; });
const GestionBibliotheque = {
    id: 'A1B3308D-8BC5-4A7B-81A7-4190A9A41jkjD54',
    name: 'Application de gestion des bibliothèque',
    description: "Le projet a été conçu dans le cadre de la conception et de de la programmation orienté objet avancé en Java" +
        " dont l'objectif été la gestion de bibliothèque en Java",
    projectLink: null,
    liveUrl: null,
    isFeatured: true,
    features: [
        'Espace Authentification et Connection',
        'Ajouter/Supprimer un bibliothèque',
        'Reserver un livre dans une bibliothèque',
        'Visualiser les livres dans une bibliothèque',
        "Création d'un espace Admin"
    ],
    tags: ['java'],
    techStuff: [
        "JAVA", "JAVAFX", "Conception UML"
    ],
    additionalData: []
};


/***/ }),

/***/ "lo0P":
/*!*******************************************!*\
  !*** ./src/app/utils/data/skills.data.ts ***!
  \*******************************************/
/*! exports provided: SKILLS_DATA */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SKILLS_DATA", function() { return SKILLS_DATA; });
const SKILLS_DATA = [
    {
        type: 'Language de programmation',
        names: [
            'Java', 'C++', 'C#', 'JavaScript', 'TypeScript', 'Python', 'SQL'
        ]
    },
    {
        type: 'Backend',
        names: [
            'Spring boot WebAPI/MVC', 'ASP.NET MVC', '.NET Core/WebAPI', 'PHP'
        ]
    },
    {
        type: 'Frontend',
        names: [
            'Angular', 'React.js', 'CSS', 'HTML', 'jQuery', 'XAML'
        ]
    },
    {
        type: 'Base de données',
        names: [
            'SQL Server', 'PostgresSQL', 'ORACLE database', 'MySQL'
        ]
    },
    {
        type: 'ORM',
        names: [
            'Entity Framework', 'JPA'
        ]
    },
    {
        type: 'Cloud',
        names: [
            'Azure Web Service & Storage', 'Firebase DB & Functions'
        ]
    },
    {
        type: 'Mobile',
        names: [
            'Xamarin forms', 'Android', 'React Native'
        ]
    },
    {
        type: 'SIG',
        names: [
            'OpenLayer', 'ArcGIS API for JavaScript', 'Arcgis Server', 'Geoserver', 'Geonetwork', 'SIG Mobile'
        ]
    },
    {
        type: 'Autres',
        names: [
            'Git & GitHub', 'REST API', 'JWT', 'Auth0', "Télédetection"
        ]
    },
];


/***/ }),

/***/ "mSt+":
/*!********************************************************!*\
  !*** ./src/app/landing-page/landing-page.component.ts ***!
  \********************************************************/
/*! exports provided: LandingPageComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LandingPageComponent", function() { return LandingPageComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "tyNb");
/* harmony import */ var _dp_logo_dp_logo_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../dp-logo/dp-logo.component */ "Hsyc");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/common */ "ofXK");





const _c0 = function () { return ["/portfolio"]; };
const _c1 = function () { return ["/about"]; };
const _c2 = function () { return ["/profiles"]; };
const _c3 = function (a0) { return { "tada-animation": a0 }; };
class LandingPageComponent {
    constructor() {
        this.ExploreMe = new _angular_core__WEBPACK_IMPORTED_MODULE_0__["EventEmitter"]();
        this.startTadaAnimation = false;
    }
    ngOnInit() {
        setInterval(() => {
            this.startTadaAnimation = !this.startTadaAnimation;
        }, 3000);
    }
    onExploreMeClick() {
        this.ExploreMe.emit();
    }
}
LandingPageComponent.ɵfac = function LandingPageComponent_Factory(t) { return new (t || LandingPageComponent)(); };
LandingPageComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: LandingPageComponent, selectors: [["app-landing-page"]], outputs: { ExploreMe: "ExploreMe" }, decls: 28, vars: 9, consts: [[1, "overlay"], [1, "root-container"], [1, "navbar"], [1, "nav-items"], [1, "nav-item", 3, "routerLink"], [1, "container"], [1, "dp-logo"], [1, "short-bio"], [1, "quote"], [1, "name"], [1, "strip"], [3, "ngClass", "click", "mouseover"], [1, "special-btn"], [1, "stick"], [1, "stick-design"]], template: function LandingPageComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](0, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "div", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "div", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "a", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](5, "Portfolio");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "a", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](7, "About & Skills");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](8, "a", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](9, "Profiles");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](10, "div", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](11, "app-dp-logo", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](12, "h4", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](13, "El\u00E8ve ing\u00E9nieur| Developpeur | Contributeur");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](14, "q", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](15, "Le bonheur c'est lorsque vos actes sont en accord avec vos paroles.");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](16, "q", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](17, "El\u00E8ve ing\u00E9nieur SIG \u00E0 la recherche d'un stage PFE 2021 en D\u00E9veloppement SI");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](18, "div", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](19, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](20, " Mohamed khafchrait ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](21, "div", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](22, "span", 11);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function LandingPageComponent_Template_span_click_22_listener() { return ctx.onExploreMeClick(); })("mouseover", function LandingPageComponent_Template_span_mouseover_22_listener() { return ctx.startTadaAnimation = false; });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](23, "button", 12);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](24, "span");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](25, " Explore Me ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](26, "div", 13);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](27, "div", 14);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("routerLink", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction0"](4, _c0));
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("routerLink", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction0"](5, _c1));
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("routerLink", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction0"](6, _c2));
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](14);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngClass", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction1"](7, _c3, ctx.startTadaAnimation));
    } }, directives: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterLinkWithHref"], _dp_logo_dp_logo_component__WEBPACK_IMPORTED_MODULE_2__["DpLogoComponent"], _angular_common__WEBPACK_IMPORTED_MODULE_3__["NgClass"]], styles: ["@charset \"UTF-8\";\n.root-container[_ngcontent-%COMP%] {\n  display: flex;\n  flex-direction: column;\n  height: 100vh;\n  width: 100vw;\n}\n.overlay[_ngcontent-%COMP%] {\n  height: 100vh;\n  width: 100vw;\n  overflow: hidden;\n  z-index: -1;\n  display: block;\n  background: #2c3e50;\n  position: fixed;\n  right: 0;\n  top: 0;\n  pointer-events: none;\n  -webkit-clip-path: ellipse(50vw 40vh at 50% 50%);\n          clip-path: ellipse(50vw 40vh at 50% 50%);\n  transform: scale(2) translate(27vw, -18vh) rotate(335deg);\n  animation: 1s ease-in-out 0.2s both leftToRight;\n}\n.dp-logo[_ngcontent-%COMP%] {\n  font-size: 2rem;\n  animation: 1s ease-in-out 0.2s both fadeIn;\n}\n.navbar[_ngcontent-%COMP%] {\n  width: 100%;\n  color: #f8f8f8;\n  font-size: 2rem;\n  padding: 1.6rem;\n  display: flex;\n  justify-content: center;\n  align-items: center;\n}\n.nav-items[_ngcontent-%COMP%]   .nav-item[_ngcontent-%COMP%] {\n  display: inline-block;\n  padding: 0.2rem 0;\n  margin: 0.6rem 1rem;\n  -webkit-user-select: none;\n          user-select: none;\n  cursor: pointer;\n  border-bottom: 0.3rem solid #17a598;\n  color: #f8f8f8;\n  text-decoration: none;\n}\n.container[_ngcontent-%COMP%] {\n  display: flex;\n  flex: 1;\n  flex-direction: column;\n  justify-content: center;\n  align-items: center;\n  height: 100%;\n  font-size: 1.6rem;\n  color: #f8f8f8;\n  margin-top: 5%;\n}\n.short-bio[_ngcontent-%COMP%] {\n  font-size: 1.6rem;\n  padding: 1.6rem;\n  font-weight: normal;\n  animation: 1s ease-in-out 0.2s both fadeIn;\n}\n.quote[_ngcontent-%COMP%] {\n  font-family: \"Cormorant Garamond\", serif;\n  font-size: 1.8rem;\n  padding: 1rem;\n  padding-top: 0rem;\n  animation: 1s ease-in-out 0.4s both fadeIn;\n}\n.name[_ngcontent-%COMP%] {\n  font-family: \"Cormorant Garamond\", serif;\n  font-size: 2.4rem;\n  font-weight: bold;\n  line-height: 1.6;\n  padding-top: 0.6rem;\n  text-transform: uppercase;\n  letter-spacing: 0.4rem;\n  word-spacing: 0.2rem;\n  text-align: center;\n  margin-bottom: -2.5rem;\n  animation: 1s ease-in-out 0.6s both fadeIn;\n}\n.name[_ngcontent-%COMP%]:hover   .strip[_ngcontent-%COMP%]::after {\n  left: -1rem;\n}\n.name[_ngcontent-%COMP%]:hover   .strip[_ngcontent-%COMP%]::before {\n  left: 1rem;\n}\n.strip[_ngcontent-%COMP%] {\n  display: inline-block;\n  position: relative;\n  width: 28rem;\n  margin: auto;\n  margin-bottom: 2rem;\n  animation: 1s ease-in-out 0.8s both fadeIn;\n}\n.strip[_ngcontent-%COMP%]::before {\n  transition: 0.3s all ease-in-out;\n  content: \"\";\n  position: absolute;\n  display: inline-block;\n  height: 2px;\n  background-color: #e74c3c;\n  margin: 2px 0;\n  width: 100%;\n  margin: auto;\n  top: 0;\n  left: -1rem;\n}\n.strip[_ngcontent-%COMP%]::after {\n  transition: 0.3s all ease-in-out;\n  position: absolute;\n  display: inline-block;\n  content: \"\";\n  height: 2px;\n  background-color: #e74c3c;\n  margin: 2px 0;\n  width: 100%;\n  margin: auto;\n  top: 4px;\n  left: 1rem;\n}\n.special-btn[_ngcontent-%COMP%] {\n  min-width: 15rem;\n  line-height: 2.2;\n  font-size: 1.4rem;\n  padding: 0.5rem;\n  margin-top: 2rem;\n  background-color: #e74c3c;\n  color: #fff;\n  border: none;\n  outline: none;\n  border-radius: 100rem;\n  cursor: pointer;\n  transition: all 0.3s ease-in-out;\n  animation: fadeIn 1s ease-in-out 1s both;\n  box-shadow: 7px 5px 8px 0 rgba(0, 0, 0, 0.31);\n  position: relative;\n}\n.special-btn[_ngcontent-%COMP%]   span[_ngcontent-%COMP%] {\n  position: relative;\n  transform: translateX(0.7rem);\n  display: inline-block;\n  transition: all 0.3s ease-in-out;\n}\n.special-btn[_ngcontent-%COMP%]:hover {\n  background-color: #db381b;\n  animation-play-state: paused;\n}\n.special-btn[_ngcontent-%COMP%]:hover::after {\n  transform: translateX(0.2rem);\n  opacity: 1;\n}\n.special-btn[_ngcontent-%COMP%]:hover   span[_ngcontent-%COMP%] {\n  transform: translateX(-0.2rem);\n}\n.special-btn[_ngcontent-%COMP%]:active {\n  transform: scale(0.8);\n  box-shadow: 4px 5px 5px 0px rgba(0, 0, 0, 0.31);\n}\n.special-btn[_ngcontent-%COMP%]::after {\n  content: \"\u00BB\";\n  position: relative;\n  opacity: 0;\n  vertical-align: sub;\n  font-size: 2.7rem;\n  line-height: 0;\n  transform: translateX(25px);\n  display: inline-block;\n  transition: all 0.3s ease-in-out;\n}\n.stick[_ngcontent-%COMP%] {\n  flex: 1;\n  margin-top: -1rem;\n  width: 100%;\n  overflow: hidden;\n  position: relative;\n  z-index: -1;\n  animation: 1s ease-in-out 1s both fadeIn;\n}\n.stick[_ngcontent-%COMP%]::after {\n  content: \"\";\n  height: 200vh;\n  width: 1.6rem;\n  display: inline-block;\n  position: absolute;\n  background-color: #e74c3c;\n  left: 50%;\n  top: 0;\n  z-index: 5;\n  transform: translate(-50%);\n  box-shadow: 7px 5px 8px 0 rgba(0, 0, 0, 0.31);\n}\n.stick[_ngcontent-%COMP%]   .stick-design[_ngcontent-%COMP%] {\n  background-color: #e74c3c;\n  padding: 1.4rem;\n  position: absolute;\n  left: 50%;\n  min-width: 8.5rem;\n  top: 3.5rem;\n  border-radius: 100rem;\n  transform: translate(-50%);\n  z-index: 6;\n  box-shadow: 13px 0px 20px 0 rgba(0, 0, 0, 0.2);\n  transition: 1s all ease-in-out;\n}\n.stick[_ngcontent-%COMP%]   .stick-design[_ngcontent-%COMP%]::after {\n  content: \"\";\n  height: 0.8rem;\n  width: 0.8rem;\n  position: absolute;\n  border-radius: 50%;\n  background-color: #2c3e50;\n  top: 50%;\n  left: 50%;\n  transform: translate(-50%, -50%);\n  box-shadow: 2rem 0px 0px #2c3e50, -2rem 0px 0px #2c3e50;\n}\n.tada-animation[_ngcontent-%COMP%] {\n  animation: tada 1s ease-in-out 0s 2 normal both;\n}\n@keyframes leftToRight {\n  0% {\n    display: relative;\n    opacity: 0.1;\n    left: -20%;\n  }\n  100% {\n    display: relative;\n    opacity: 1;\n    left: 0%;\n  }\n}\n@keyframes fadeIn {\n  0% {\n    opacity: 0;\n    transform: scale(0);\n  }\n  100% {\n    opacity: 1;\n    transform: scale(1);\n  }\n}\n@keyframes tada {\n  0% {\n    transform: scale(1) rotate(0deg);\n  }\n  10% {\n    transform: scale(1.1) rotate(-4deg);\n  }\n  20% {\n    transform: scale(1.1) rotate(4deg);\n  }\n  30% {\n    transform: scale(1.1) rotate(-4deg);\n  }\n  40% {\n    transform: scale(1.1) rotate(4deg);\n  }\n  50% {\n    transform: scale(1.1) rotate(-4deg);\n  }\n  60% {\n    transform: scale(1.1) rotate(4deg);\n  }\n  70% {\n    transform: scale(1.1) rotate(-4deg);\n  }\n  80% {\n    transform: scale(1.1) rotate(4deg);\n  }\n  90% {\n    transform: scale(1.1) rotate(-4deg);\n  }\n  100% {\n    transform: scale(1) rotate(0deg);\n  }\n}\n@keyframes stripAnimation {\n  0% {\n    transform: translateX(-10px) rotateZ(0deg);\n    opacity: 0;\n  }\n  100% {\n    transform: translateX(0px) rotateZ(-16deg);\n    opacity: 1;\n  }\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvbGFuZGluZy1wYWdlL2xhbmRpbmctcGFnZS5jb21wb25lbnQuc2NzcyIsInNyYy9hcHAvX3Zhci5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBLGdCQUFnQjtBQUVoQjtFQUNFLGFBQUE7RUFDQSxzQkFBQTtFQUNBLGFBQUE7RUFDQSxZQUFBO0FBQUY7QUFHQTtFQUNFLGFBQUE7RUFDQSxZQUFBO0VBQ0EsZ0JBQUE7RUFDQSxXQUFBO0VBQ0EsY0FBQTtFQUNBLG1CQ2JPO0VEY1AsZUFBQTtFQUNBLFFBQUE7RUFDQSxNQUFBO0VBQ0Esb0JBQUE7RUFDQSxnREFBQTtVQUFBLHdDQUFBO0VBQ0EseURBQUE7RUFDQSwrQ0FBQTtBQUFGO0FBR0E7RUFDRSxlQUFBO0VBQ0EsMENBQUE7QUFBRjtBQUdBO0VBQ0UsV0FBQTtFQUNBLGNDekJVO0VEMEJWLGVBQUE7RUFDQSxlQUFBO0VBQ0EsYUFBQTtFQUNBLHVCQUFBO0VBQ0EsbUJBQUE7QUFBRjtBQUlFO0VBQ0UscUJBQUE7RUFDQSxpQkFBQTtFQUNBLG1CQUFBO0VBQ0EseUJBQUE7VUFBQSxpQkFBQTtFQUNBLGVBQUE7RUFDQSxtQ0FBQTtFQUNBLGNDekNRO0VEMENSLHFCQUFBO0FBREo7QUFLQTtFQUNFLGFBQUE7RUFDQSxPQUFBO0VBQ0Esc0JBQUE7RUFDQSx1QkFBQTtFQUNBLG1CQUFBO0VBQ0EsWUFBQTtFQUNBLGlCQUFBO0VBQ0EsY0N0RFU7RUR1RFYsY0FBQTtBQUZGO0FBS0E7RUFDRSxpQkFBQTtFQUNBLGVBQUE7RUFDQSxtQkFBQTtFQUNBLDBDQUFBO0FBRkY7QUFLQTtFQUNFLHdDQUFBO0VBQ0EsaUJBQUE7RUFDQSxhQUFBO0VBQ0EsaUJBQUE7RUFDQSwwQ0FBQTtBQUZGO0FBS0E7RUFDRSx3Q0FBQTtFQUNBLGlCQUFBO0VBQ0EsaUJBQUE7RUFDQSxnQkFBQTtFQUNBLG1CQUFBO0VBQ0EseUJBQUE7RUFDQSxzQkFBQTtFQUNBLG9CQUFBO0VBQ0Esa0JBQUE7RUFDQSxzQkFBQTtFQUNBLDBDQUFBO0FBRkY7QUFJSTtFQUNFLFdBQUE7QUFGTjtBQUlJO0VBQ0UsVUFBQTtBQUZOO0FBT0E7RUFDRSxxQkFBQTtFQUNBLGtCQUFBO0VBQ0EsWUFBQTtFQUNBLFlBQUE7RUFDQSxtQkFBQTtFQUNBLDBDQUFBO0FBSkY7QUFLRTtFQUNFLGdDQUFBO0VBQ0EsV0FBQTtFQUNBLGtCQUFBO0VBQ0EscUJBQUE7RUFDQSxXQUFBO0VBQ0EseUJBQUE7RUFDQSxhQUFBO0VBQ0EsV0FBQTtFQUNBLFlBQUE7RUFDQSxNQUFBO0VBQ0EsV0FBQTtBQUhKO0FBS0U7RUFDRSxnQ0FBQTtFQUNBLGtCQUFBO0VBQ0EscUJBQUE7RUFDQSxXQUFBO0VBQ0EsV0FBQTtFQUNBLHlCQUFBO0VBQ0EsYUFBQTtFQUNBLFdBQUE7RUFDQSxZQUFBO0VBQ0EsUUFBQTtFQUNBLFVBQUE7QUFISjtBQU9BO0VBQ0UsZ0JBQUE7RUFDQSxnQkFBQTtFQUNBLGlCQUFBO0VBQ0EsZUFBQTtFQUNBLGdCQUFBO0VBQ0EseUJDOUlPO0VEK0lQLFdBQUE7RUFDQSxZQUFBO0VBQ0EsYUFBQTtFQUNBLHFCQUFBO0VBQ0EsZUFBQTtFQUNBLGdDQUFBO0VBQ0Esd0NBQUE7RUFDQSw2Q0FBQTtFQUNBLGtCQUFBO0FBSkY7QUFLRTtFQUNFLGtCQUFBO0VBQ0EsNkJBQUE7RUFDQSxxQkFBQTtFQUNBLGdDQUFBO0FBSEo7QUFLRTtFQUNFLHlCQzdKSztFRDhKTCw0QkFBQTtBQUhKO0FBSUk7RUFDRSw2QkFBQTtFQUNBLFVBQUE7QUFGTjtBQUlJO0VBQ0UsOEJBQUE7QUFGTjtBQUtFO0VBQ0UscUJBQUE7RUFDQSwrQ0FBQTtBQUhKO0FBS0U7RUFDRSxZQUFBO0VBQ0Esa0JBQUE7RUFDQSxVQUFBO0VBQ0EsbUJBQUE7RUFDQSxpQkFBQTtFQUNBLGNBQUE7RUFDQSwyQkFBQTtFQUNBLHFCQUFBO0VBQ0EsZ0NBQUE7QUFISjtBQU9BO0VBQ0UsT0FBQTtFQUNBLGlCQUFBO0VBQ0EsV0FBQTtFQUNBLGdCQUFBO0VBQ0Esa0JBQUE7RUFDQSxXQUFBO0VBQ0Esd0NBQUE7QUFKRjtBQUtFO0VBQ0UsV0FBQTtFQUNBLGFBQUE7RUFDQSxhQUFBO0VBQ0EscUJBQUE7RUFDQSxrQkFBQTtFQUNBLHlCQ3hNSztFRHlNTCxTQUFBO0VBQ0EsTUFBQTtFQUNBLFVBQUE7RUFDQSwwQkFBQTtFQUNBLDZDQUFBO0FBSEo7QUFLRTtFQUNFLHlCQ2hOSztFRGlOTCxlQUFBO0VBQ0Esa0JBQUE7RUFDQSxTQUFBO0VBQ0EsaUJBQUE7RUFDQSxXQUFBO0VBQ0EscUJBQUE7RUFDQSwwQkFBQTtFQUNBLFVBQUE7RUFDQSw4Q0FBQTtFQUNBLDhCQUFBO0FBSEo7QUFJSTtFQUNFLFdBQUE7RUFDQSxjQUFBO0VBQ0EsYUFBQTtFQUNBLGtCQUFBO0VBQ0Esa0JBQUE7RUFDQSx5QkNoT0c7RURpT0gsUUFBQTtFQUNBLFNBQUE7RUFDQSxnQ0FBQTtFQUNBLHVEQUFBO0FBRk47QUFPQTtFQUNFLCtDQUFBO0FBSkY7QUFPQTtFQUNFO0lBQ0UsaUJBQUE7SUFDQSxZQUFBO0lBQ0EsVUFBQTtFQUpGO0VBTUE7SUFDRSxpQkFBQTtJQUNBLFVBQUE7SUFDQSxRQUFBO0VBSkY7QUFDRjtBQU9BO0VBQ0U7SUFDRSxVQUFBO0lBQ0EsbUJBQUE7RUFMRjtFQU9BO0lBQ0UsVUFBQTtJQUNBLG1CQUFBO0VBTEY7QUFDRjtBQVFBO0VBQ0U7SUFDRSxnQ0FBQTtFQU5GO0VBUUE7SUFDRSxtQ0FBQTtFQU5GO0VBUUE7SUFDRSxrQ0FBQTtFQU5GO0VBUUE7SUFDRSxtQ0FBQTtFQU5GO0VBUUE7SUFDRSxrQ0FBQTtFQU5GO0VBUUE7SUFDRSxtQ0FBQTtFQU5GO0VBUUE7SUFDRSxrQ0FBQTtFQU5GO0VBUUE7SUFDRSxtQ0FBQTtFQU5GO0VBUUE7SUFDRSxrQ0FBQTtFQU5GO0VBUUE7SUFDRSxtQ0FBQTtFQU5GO0VBUUE7SUFDRSxnQ0FBQTtFQU5GO0FBQ0Y7QUFTQTtFQUNFO0lBQ0UsMENBQUE7SUFDQSxVQUFBO0VBUEY7RUFTQTtJQUNFLDBDQUFBO0lBQ0EsVUFBQTtFQVBGO0FBQ0YiLCJmaWxlIjoic3JjL2FwcC9sYW5kaW5nLXBhZ2UvbGFuZGluZy1wYWdlLmNvbXBvbmVudC5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiQGNoYXJzZXQgXCJVVEYtOFwiO1xuLnJvb3QtY29udGFpbmVyIHtcbiAgZGlzcGxheTogZmxleDtcbiAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcbiAgaGVpZ2h0OiAxMDB2aDtcbiAgd2lkdGg6IDEwMHZ3O1xufVxuXG4ub3ZlcmxheSB7XG4gIGhlaWdodDogMTAwdmg7XG4gIHdpZHRoOiAxMDB2dztcbiAgb3ZlcmZsb3c6IGhpZGRlbjtcbiAgei1pbmRleDogLTE7XG4gIGRpc3BsYXk6IGJsb2NrO1xuICBiYWNrZ3JvdW5kOiAjMmMzZTUwO1xuICBwb3NpdGlvbjogZml4ZWQ7XG4gIHJpZ2h0OiAwO1xuICB0b3A6IDA7XG4gIHBvaW50ZXItZXZlbnRzOiBub25lO1xuICBjbGlwLXBhdGg6IGVsbGlwc2UoNTB2dyA0MHZoIGF0IDUwJSA1MCUpO1xuICB0cmFuc2Zvcm06IHNjYWxlKDIpIHRyYW5zbGF0ZSgyN3Z3LCAtMTh2aCkgcm90YXRlKDMzNWRlZyk7XG4gIGFuaW1hdGlvbjogMXMgZWFzZS1pbi1vdXQgMC4ycyBib3RoIGxlZnRUb1JpZ2h0O1xufVxuXG4uZHAtbG9nbyB7XG4gIGZvbnQtc2l6ZTogMnJlbTtcbiAgYW5pbWF0aW9uOiAxcyBlYXNlLWluLW91dCAwLjJzIGJvdGggZmFkZUluO1xufVxuXG4ubmF2YmFyIHtcbiAgd2lkdGg6IDEwMCU7XG4gIGNvbG9yOiAjZjhmOGY4O1xuICBmb250LXNpemU6IDJyZW07XG4gIHBhZGRpbmc6IDEuNnJlbTtcbiAgZGlzcGxheTogZmxleDtcbiAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG59XG5cbi5uYXYtaXRlbXMgLm5hdi1pdGVtIHtcbiAgZGlzcGxheTogaW5saW5lLWJsb2NrO1xuICBwYWRkaW5nOiAwLjJyZW0gMDtcbiAgbWFyZ2luOiAwLjZyZW0gMXJlbTtcbiAgdXNlci1zZWxlY3Q6IG5vbmU7XG4gIGN1cnNvcjogcG9pbnRlcjtcbiAgYm9yZGVyLWJvdHRvbTogMC4zcmVtIHNvbGlkICMxN2E1OTg7XG4gIGNvbG9yOiAjZjhmOGY4O1xuICB0ZXh0LWRlY29yYXRpb246IG5vbmU7XG59XG5cbi5jb250YWluZXIge1xuICBkaXNwbGF5OiBmbGV4O1xuICBmbGV4OiAxO1xuICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xuICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbiAgaGVpZ2h0OiAxMDAlO1xuICBmb250LXNpemU6IDEuNnJlbTtcbiAgY29sb3I6ICNmOGY4Zjg7XG4gIG1hcmdpbi10b3A6IDUlO1xufVxuXG4uc2hvcnQtYmlvIHtcbiAgZm9udC1zaXplOiAxLjZyZW07XG4gIHBhZGRpbmc6IDEuNnJlbTtcbiAgZm9udC13ZWlnaHQ6IG5vcm1hbDtcbiAgYW5pbWF0aW9uOiAxcyBlYXNlLWluLW91dCAwLjJzIGJvdGggZmFkZUluO1xufVxuXG4ucXVvdGUge1xuICBmb250LWZhbWlseTogXCJDb3Jtb3JhbnQgR2FyYW1vbmRcIiwgc2VyaWY7XG4gIGZvbnQtc2l6ZTogMS44cmVtO1xuICBwYWRkaW5nOiAxcmVtO1xuICBwYWRkaW5nLXRvcDogMHJlbTtcbiAgYW5pbWF0aW9uOiAxcyBlYXNlLWluLW91dCAwLjRzIGJvdGggZmFkZUluO1xufVxuXG4ubmFtZSB7XG4gIGZvbnQtZmFtaWx5OiBcIkNvcm1vcmFudCBHYXJhbW9uZFwiLCBzZXJpZjtcbiAgZm9udC1zaXplOiAyLjRyZW07XG4gIGZvbnQtd2VpZ2h0OiBib2xkO1xuICBsaW5lLWhlaWdodDogMS42O1xuICBwYWRkaW5nLXRvcDogMC42cmVtO1xuICB0ZXh0LXRyYW5zZm9ybTogdXBwZXJjYXNlO1xuICBsZXR0ZXItc3BhY2luZzogMC40cmVtO1xuICB3b3JkLXNwYWNpbmc6IDAuMnJlbTtcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xuICBtYXJnaW4tYm90dG9tOiAtMi41cmVtO1xuICBhbmltYXRpb246IDFzIGVhc2UtaW4tb3V0IDAuNnMgYm90aCBmYWRlSW47XG59XG4ubmFtZTpob3ZlciAuc3RyaXA6OmFmdGVyIHtcbiAgbGVmdDogLTFyZW07XG59XG4ubmFtZTpob3ZlciAuc3RyaXA6OmJlZm9yZSB7XG4gIGxlZnQ6IDFyZW07XG59XG5cbi5zdHJpcCB7XG4gIGRpc3BsYXk6IGlubGluZS1ibG9jaztcbiAgcG9zaXRpb246IHJlbGF0aXZlO1xuICB3aWR0aDogMjhyZW07XG4gIG1hcmdpbjogYXV0bztcbiAgbWFyZ2luLWJvdHRvbTogMnJlbTtcbiAgYW5pbWF0aW9uOiAxcyBlYXNlLWluLW91dCAwLjhzIGJvdGggZmFkZUluO1xufVxuLnN0cmlwOjpiZWZvcmUge1xuICB0cmFuc2l0aW9uOiAwLjNzIGFsbCBlYXNlLWluLW91dDtcbiAgY29udGVudDogXCJcIjtcbiAgcG9zaXRpb246IGFic29sdXRlO1xuICBkaXNwbGF5OiBpbmxpbmUtYmxvY2s7XG4gIGhlaWdodDogMnB4O1xuICBiYWNrZ3JvdW5kLWNvbG9yOiAjZTc0YzNjO1xuICBtYXJnaW46IDJweCAwO1xuICB3aWR0aDogMTAwJTtcbiAgbWFyZ2luOiBhdXRvO1xuICB0b3A6IDA7XG4gIGxlZnQ6IC0xcmVtO1xufVxuLnN0cmlwOjphZnRlciB7XG4gIHRyYW5zaXRpb246IDAuM3MgYWxsIGVhc2UtaW4tb3V0O1xuICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gIGRpc3BsYXk6IGlubGluZS1ibG9jaztcbiAgY29udGVudDogXCJcIjtcbiAgaGVpZ2h0OiAycHg7XG4gIGJhY2tncm91bmQtY29sb3I6ICNlNzRjM2M7XG4gIG1hcmdpbjogMnB4IDA7XG4gIHdpZHRoOiAxMDAlO1xuICBtYXJnaW46IGF1dG87XG4gIHRvcDogNHB4O1xuICBsZWZ0OiAxcmVtO1xufVxuXG4uc3BlY2lhbC1idG4ge1xuICBtaW4td2lkdGg6IDE1cmVtO1xuICBsaW5lLWhlaWdodDogMi4yO1xuICBmb250LXNpemU6IDEuNHJlbTtcbiAgcGFkZGluZzogMC41cmVtO1xuICBtYXJnaW4tdG9wOiAycmVtO1xuICBiYWNrZ3JvdW5kLWNvbG9yOiAjZTc0YzNjO1xuICBjb2xvcjogI2ZmZjtcbiAgYm9yZGVyOiBub25lO1xuICBvdXRsaW5lOiBub25lO1xuICBib3JkZXItcmFkaXVzOiAxMDByZW07XG4gIGN1cnNvcjogcG9pbnRlcjtcbiAgdHJhbnNpdGlvbjogYWxsIDAuM3MgZWFzZS1pbi1vdXQ7XG4gIGFuaW1hdGlvbjogZmFkZUluIDFzIGVhc2UtaW4tb3V0IDFzIGJvdGg7XG4gIGJveC1zaGFkb3c6IDdweCA1cHggOHB4IDAgcmdiYSgwLCAwLCAwLCAwLjMxKTtcbiAgcG9zaXRpb246IHJlbGF0aXZlO1xufVxuLnNwZWNpYWwtYnRuIHNwYW4ge1xuICBwb3NpdGlvbjogcmVsYXRpdmU7XG4gIHRyYW5zZm9ybTogdHJhbnNsYXRlWCgwLjdyZW0pO1xuICBkaXNwbGF5OiBpbmxpbmUtYmxvY2s7XG4gIHRyYW5zaXRpb246IGFsbCAwLjNzIGVhc2UtaW4tb3V0O1xufVxuLnNwZWNpYWwtYnRuOmhvdmVyIHtcbiAgYmFja2dyb3VuZC1jb2xvcjogI2RiMzgxYjtcbiAgYW5pbWF0aW9uLXBsYXktc3RhdGU6IHBhdXNlZDtcbn1cbi5zcGVjaWFsLWJ0bjpob3Zlcjo6YWZ0ZXIge1xuICB0cmFuc2Zvcm06IHRyYW5zbGF0ZVgoMC4ycmVtKTtcbiAgb3BhY2l0eTogMTtcbn1cbi5zcGVjaWFsLWJ0bjpob3ZlciBzcGFuIHtcbiAgdHJhbnNmb3JtOiB0cmFuc2xhdGVYKC0wLjJyZW0pO1xufVxuLnNwZWNpYWwtYnRuOmFjdGl2ZSB7XG4gIHRyYW5zZm9ybTogc2NhbGUoMC44KTtcbiAgYm94LXNoYWRvdzogNHB4IDVweCA1cHggMHB4IHJnYmEoMCwgMCwgMCwgMC4zMSk7XG59XG4uc3BlY2lhbC1idG46OmFmdGVyIHtcbiAgY29udGVudDogXCLCu1wiO1xuICBwb3NpdGlvbjogcmVsYXRpdmU7XG4gIG9wYWNpdHk6IDA7XG4gIHZlcnRpY2FsLWFsaWduOiBzdWI7XG4gIGZvbnQtc2l6ZTogMi43cmVtO1xuICBsaW5lLWhlaWdodDogMDtcbiAgdHJhbnNmb3JtOiB0cmFuc2xhdGVYKDI1cHgpO1xuICBkaXNwbGF5OiBpbmxpbmUtYmxvY2s7XG4gIHRyYW5zaXRpb246IGFsbCAwLjNzIGVhc2UtaW4tb3V0O1xufVxuXG4uc3RpY2sge1xuICBmbGV4OiAxO1xuICBtYXJnaW4tdG9wOiAtMXJlbTtcbiAgd2lkdGg6IDEwMCU7XG4gIG92ZXJmbG93OiBoaWRkZW47XG4gIHBvc2l0aW9uOiByZWxhdGl2ZTtcbiAgei1pbmRleDogLTE7XG4gIGFuaW1hdGlvbjogMXMgZWFzZS1pbi1vdXQgMXMgYm90aCBmYWRlSW47XG59XG4uc3RpY2s6OmFmdGVyIHtcbiAgY29udGVudDogXCJcIjtcbiAgaGVpZ2h0OiAyMDB2aDtcbiAgd2lkdGg6IDEuNnJlbTtcbiAgZGlzcGxheTogaW5saW5lLWJsb2NrO1xuICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gIGJhY2tncm91bmQtY29sb3I6ICNlNzRjM2M7XG4gIGxlZnQ6IDUwJTtcbiAgdG9wOiAwO1xuICB6LWluZGV4OiA1O1xuICB0cmFuc2Zvcm06IHRyYW5zbGF0ZSgtNTAlKTtcbiAgYm94LXNoYWRvdzogN3B4IDVweCA4cHggMCByZ2JhKDAsIDAsIDAsIDAuMzEpO1xufVxuLnN0aWNrIC5zdGljay1kZXNpZ24ge1xuICBiYWNrZ3JvdW5kLWNvbG9yOiAjZTc0YzNjO1xuICBwYWRkaW5nOiAxLjRyZW07XG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgbGVmdDogNTAlO1xuICBtaW4td2lkdGg6IDguNXJlbTtcbiAgdG9wOiAzLjVyZW07XG4gIGJvcmRlci1yYWRpdXM6IDEwMHJlbTtcbiAgdHJhbnNmb3JtOiB0cmFuc2xhdGUoLTUwJSk7XG4gIHotaW5kZXg6IDY7XG4gIGJveC1zaGFkb3c6IDEzcHggMHB4IDIwcHggMCByZ2JhKDAsIDAsIDAsIDAuMik7XG4gIHRyYW5zaXRpb246IDFzIGFsbCBlYXNlLWluLW91dDtcbn1cbi5zdGljayAuc3RpY2stZGVzaWduOjphZnRlciB7XG4gIGNvbnRlbnQ6IFwiXCI7XG4gIGhlaWdodDogMC44cmVtO1xuICB3aWR0aDogMC44cmVtO1xuICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gIGJvcmRlci1yYWRpdXM6IDUwJTtcbiAgYmFja2dyb3VuZC1jb2xvcjogIzJjM2U1MDtcbiAgdG9wOiA1MCU7XG4gIGxlZnQ6IDUwJTtcbiAgdHJhbnNmb3JtOiB0cmFuc2xhdGUoLTUwJSwgLTUwJSk7XG4gIGJveC1zaGFkb3c6IDJyZW0gMHB4IDBweCAjMmMzZTUwLCAtMnJlbSAwcHggMHB4ICMyYzNlNTA7XG59XG5cbi50YWRhLWFuaW1hdGlvbiB7XG4gIGFuaW1hdGlvbjogdGFkYSAxcyBlYXNlLWluLW91dCAwcyAyIG5vcm1hbCBib3RoO1xufVxuXG5Aa2V5ZnJhbWVzIGxlZnRUb1JpZ2h0IHtcbiAgMCUge1xuICAgIGRpc3BsYXk6IHJlbGF0aXZlO1xuICAgIG9wYWNpdHk6IDAuMTtcbiAgICBsZWZ0OiAtMjAlO1xuICB9XG4gIDEwMCUge1xuICAgIGRpc3BsYXk6IHJlbGF0aXZlO1xuICAgIG9wYWNpdHk6IDE7XG4gICAgbGVmdDogMCU7XG4gIH1cbn1cbkBrZXlmcmFtZXMgZmFkZUluIHtcbiAgMCUge1xuICAgIG9wYWNpdHk6IDA7XG4gICAgdHJhbnNmb3JtOiBzY2FsZSgwKTtcbiAgfVxuICAxMDAlIHtcbiAgICBvcGFjaXR5OiAxO1xuICAgIHRyYW5zZm9ybTogc2NhbGUoMSk7XG4gIH1cbn1cbkBrZXlmcmFtZXMgdGFkYSB7XG4gIDAlIHtcbiAgICB0cmFuc2Zvcm06IHNjYWxlKDEpIHJvdGF0ZSgwZGVnKTtcbiAgfVxuICAxMCUge1xuICAgIHRyYW5zZm9ybTogc2NhbGUoMS4xKSByb3RhdGUoLTRkZWcpO1xuICB9XG4gIDIwJSB7XG4gICAgdHJhbnNmb3JtOiBzY2FsZSgxLjEpIHJvdGF0ZSg0ZGVnKTtcbiAgfVxuICAzMCUge1xuICAgIHRyYW5zZm9ybTogc2NhbGUoMS4xKSByb3RhdGUoLTRkZWcpO1xuICB9XG4gIDQwJSB7XG4gICAgdHJhbnNmb3JtOiBzY2FsZSgxLjEpIHJvdGF0ZSg0ZGVnKTtcbiAgfVxuICA1MCUge1xuICAgIHRyYW5zZm9ybTogc2NhbGUoMS4xKSByb3RhdGUoLTRkZWcpO1xuICB9XG4gIDYwJSB7XG4gICAgdHJhbnNmb3JtOiBzY2FsZSgxLjEpIHJvdGF0ZSg0ZGVnKTtcbiAgfVxuICA3MCUge1xuICAgIHRyYW5zZm9ybTogc2NhbGUoMS4xKSByb3RhdGUoLTRkZWcpO1xuICB9XG4gIDgwJSB7XG4gICAgdHJhbnNmb3JtOiBzY2FsZSgxLjEpIHJvdGF0ZSg0ZGVnKTtcbiAgfVxuICA5MCUge1xuICAgIHRyYW5zZm9ybTogc2NhbGUoMS4xKSByb3RhdGUoLTRkZWcpO1xuICB9XG4gIDEwMCUge1xuICAgIHRyYW5zZm9ybTogc2NhbGUoMSkgcm90YXRlKDBkZWcpO1xuICB9XG59XG5Aa2V5ZnJhbWVzIHN0cmlwQW5pbWF0aW9uIHtcbiAgMCUge1xuICAgIHRyYW5zZm9ybTogdHJhbnNsYXRlWCgtMTBweCkgcm90YXRlWigwZGVnKTtcbiAgICBvcGFjaXR5OiAwO1xuICB9XG4gIDEwMCUge1xuICAgIHRyYW5zZm9ybTogdHJhbnNsYXRlWCgwcHgpIHJvdGF0ZVooLTE2ZGVnKTtcbiAgICBvcGFjaXR5OiAxO1xuICB9XG59IiwiJGJnLWNvbG9yOiAjMTdhNTk4O1xyXG4kY29sb3IxOiAjZTc0YzNjO1xyXG4kY29sb3IyOiAjMmMzZTUwO1xyXG4kY29sb3IzOiAjZGIzODFiO1xyXG4kZ3JlZW46ICMxN2E1OTg7XHJcbiR0ZXh0LWNvbG9yOiAjZmZmZmZmO1xyXG4kYmxhY2s6ICM1NTU7XHJcbiRvZmYtd2hpdGU6ICNmOGY4Zjg7XHJcbiR3aGl0ZTogI2ZmZjtcclxuXHJcbiJdfQ== */"] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](LandingPageComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'app-landing-page',
                templateUrl: './landing-page.component.html',
                styleUrls: ['./landing-page.component.scss']
            }]
    }], function () { return []; }, { ExploreMe: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Output"],
            args: ['ExploreMe']
        }] }); })();


/***/ }),

/***/ "oCjk":
/*!********************************!*\
  !*** ./src/app/utils/utils.ts ***!
  \********************************/
/*! exports provided: testUniqueness */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "testUniqueness", function() { return testUniqueness; });
const testUniqueness = (allData, uKeyFn) => {
    const result = { error: null, duplicates: [] };
    allData.forEach((data, i, alldata) => {
        if (alldata.filter(p => uKeyFn(p) === uKeyFn(data)).length !== 1) {
            result.error = 'Duplicate Key';
            result.duplicates.push(data);
        }
    });
    return result;
};


/***/ }),

/***/ "pYtu":
/*!********************************************!*\
  !*** ./src/app/services/skills.service.ts ***!
  \********************************************/
/*! exports provided: SkillsService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SkillsService", function() { return SkillsService; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _utils_data_skills_data__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../utils/data/skills.data */ "lo0P");



class SkillsService {
    constructor() { }
    getSkills() {
        return _utils_data_skills_data__WEBPACK_IMPORTED_MODULE_1__["SKILLS_DATA"];
    }
}
SkillsService.ɵfac = function SkillsService_Factory(t) { return new (t || SkillsService)(); };
SkillsService.ɵprov = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjectable"]({ token: SkillsService, factory: SkillsService.ɵfac, providedIn: 'root' });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](SkillsService, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"],
        args: [{
                providedIn: 'root'
            }]
    }], function () { return []; }, null); })();


/***/ }),

/***/ "sjjn":
/*!**********************************************************************!*\
  !*** ./src/app/utils/data/ProjectElements/TransactionImmobiliere.ts ***!
  \**********************************************************************/
/*! exports provided: TransactionImm */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "TransactionImm", function() { return TransactionImm; });
const TransactionImm = {
    id: 'A1B3308D-8BC5-4A7B-81A7-4190A9A41ghD54',
    name: 'Gestion des transactions immobilières',
    description: "Il s'agit d'un Mini-PFE qui a comme objectif, la conception, le développement d'une plateforme mobile et web de gestion des transacion immobilières",
    projectLink: null,
    liveUrl: null,
    isFeatured: true,
    features: [
        "Géolocalisation des annonces",
        "Filtrage des annonces",
        "Visualisation des statistiques sur les annonces",
        "Réservation/Demande/Création d'une annonce",
        "Mise à jour des annonces",
        "Inscription des intermediaire et gestion des profil-Intermediaire",
        "..."
    ],
    tags: ['frontend', 'mobile', 'java', 'sig'],
    techStuff: [
        "Spring boot", "ReactJS", "React native", "OpenLayer", "JWT", "Bootstrap", "Geoserver", "Postrges/PostGis"
    ],
    additionalData: []
};


/***/ }),

/***/ "tZCN":
/*!***************************************!*\
  !*** ./src/app/utils/project-data.ts ***!
  \***************************************/
/*! exports provided: ALL_PROJECT_DATA */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ALL_PROJECT_DATA", function() { return ALL_PROJECT_DATA; });
/* harmony import */ var _environments_environment__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../environments/environment */ "AytR");
/* harmony import */ var _utils__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./utils */ "oCjk");
/* harmony import */ var _data_ProjectElements_jeu_Go__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./data/ProjectElements/jeu-Go */ "X3JH");
/* harmony import */ var _data_ProjectElements_Gestion_parking__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./data/ProjectElements/Gestion-parking */ "wvlF");
/* harmony import */ var _data_ProjectElements_Gestion_Bibliotheque__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./data/ProjectElements/Gestion-Bibliotheque */ "l8Z8");
/* harmony import */ var _data_ProjectElements_NoteUrbanistique__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./data/ProjectElements/NoteUrbanistique */ "dVYi");
/* harmony import */ var _data_ProjectElements_E_Commmerce__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./data/ProjectElements/E-Commmerce */ "920X");
/* harmony import */ var _data_ProjectElements_ReservationAerienne__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./data/ProjectElements/ReservationAerienne */ "WLs7");
/* harmony import */ var _data_ProjectElements_Covid_19__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./data/ProjectElements/Covid-19 */ "yOpW");
/* harmony import */ var _data_ProjectElements_TransactionImmobiliere__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./data/ProjectElements/TransactionImmobiliere */ "sjjn");
/* harmony import */ var _data_ProjectElements_PlateformeSnifly__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./data/ProjectElements/PlateformeSnifly */ "/mjF");
/* harmony import */ var _data_ProjectElements_AnalyseConsommation__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ./data/ProjectElements/AnalyseConsommation */ "yKt7");
/* harmony import */ var _data_ProjectElements_ConceptionInforisk__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ./data/ProjectElements/ConceptionInforisk */ "Nvd2");
/* harmony import */ var _data_ProjectElements_BidonvilleApp__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ./data/ProjectElements/BidonvilleApp */ "Zt51");
/* harmony import */ var _data_ProjectElements_ProjetGeomatique__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! ./data/ProjectElements/ProjetGeomatique */ "WW43");















const getAllProject = () => {
    const projects = [
        _data_ProjectElements_AnalyseConsommation__WEBPACK_IMPORTED_MODULE_11__["AnalyseConsommation"],
        _data_ProjectElements_PlateformeSnifly__WEBPACK_IMPORTED_MODULE_10__["PlatformeSnifly"],
        _data_ProjectElements_ProjetGeomatique__WEBPACK_IMPORTED_MODULE_14__["ProjetGeomatique"],
        _data_ProjectElements_TransactionImmobiliere__WEBPACK_IMPORTED_MODULE_9__["TransactionImm"],
        _data_ProjectElements_BidonvilleApp__WEBPACK_IMPORTED_MODULE_13__["BidonvilleApp"],
        _data_ProjectElements_Covid_19__WEBPACK_IMPORTED_MODULE_8__["Covid19App"],
        _data_ProjectElements_ReservationAerienne__WEBPACK_IMPORTED_MODULE_7__["ReservationAerienne"],
        _data_ProjectElements_E_Commmerce__WEBPACK_IMPORTED_MODULE_6__["ECommerce"],
        _data_ProjectElements_Gestion_Bibliotheque__WEBPACK_IMPORTED_MODULE_4__["GestionBibliotheque"],
        _data_ProjectElements_Gestion_parking__WEBPACK_IMPORTED_MODULE_3__["GestionParking"],
        _data_ProjectElements_jeu_Go__WEBPACK_IMPORTED_MODULE_2__["JeuGoData"],
        _data_ProjectElements_ConceptionInforisk__WEBPACK_IMPORTED_MODULE_12__["ConceptionInforisk"],
        _data_ProjectElements_NoteUrbanistique__WEBPACK_IMPORTED_MODULE_5__["NoteUrbanistique"],
    ];
    if (!_environments_environment__WEBPACK_IMPORTED_MODULE_0__["environment"].production) {
        const result = Object(_utils__WEBPACK_IMPORTED_MODULE_1__["testUniqueness"])(projects, project => project.id);
        if (result.error) {
            const errorLog = [];
            result.duplicates.forEach((project) => {
                errorLog.push(`Duplicate E-id ${project.id} of ${project.name} `);
            });
            throw new Error(JSON.stringify(errorLog));
        }
    }
    return projects;
};
const ALL_PROJECT_DATA = getAllProject();


/***/ }),

/***/ "udFW":
/*!**************************************************!*\
  !*** ./src/app/navigator/navigator.component.ts ***!
  \**************************************************/
/*! exports provided: NavigatorComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "NavigatorComponent", function() { return NavigatorComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_animations__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/animations */ "R0Ic");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "tyNb");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/common */ "ofXK");





const _c0 = function (a0) { return { transform: a0 }; };
function NavigatorComponent_div_2_Template(rf, ctx) { if (rf & 1) {
    const _r4 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function NavigatorComponent_div_2_Template_div_click_0_listener($event) { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r4); const nav_r1 = ctx.$implicit; const ctx_r3 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](); return ctx_r3.onNavItemClick($event, nav_r1.url); });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 4);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const nav_r1 = ctx.$implicit;
    const isEven_r2 = ctx.even;
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngStyle", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction1"](3, _c0, isEven_r2 ? "translateX(10%)" : "translateX(-10%)"));
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngStyle", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction1"](5, _c0, isEven_r2 ? "translateX(-10%)" : "translateX(10%)"));
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", nav_r1.displayName, " ");
} }
class NavigatorComponent {
    constructor(router) {
        this.router = router;
        this.navLinks = [
            { displayName: 'Portfolio', url: '/portfolio' },
            { displayName: 'About & Skills', url: '/about' },
            { displayName: 'Contacts & Profiles', url: '/profiles' },
            { displayName: 'Profile Card', url: '/profile-card' }
        ];
        this.cancellation = new _angular_core__WEBPACK_IMPORTED_MODULE_0__["EventEmitter"]();
    }
    ngOnInit() { }
    onBgClick() {
        this.cancellation.emit();
    }
    onNavItemClick(e, url) {
        e.stopPropagation();
        this.router.navigateByUrl(url);
    }
}
NavigatorComponent.ɵfac = function NavigatorComponent_Factory(t) { return new (t || NavigatorComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"])); };
NavigatorComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: NavigatorComponent, selectors: [["app-navigator"]], outputs: { cancellation: "cancellation" }, decls: 3, vars: 2, consts: [["appEscCancelation", "", 1, "navigator-container", 3, "appEscCancelation", "click"], [1, "navLinks"], ["class", "navLink", 3, "ngStyle", "click", 4, "ngFor", "ngForOf"], [1, "navLink", 3, "ngStyle", "click"], [3, "ngStyle"]], template: function NavigatorComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("appEscCancelation", function NavigatorComponent_Template_div_appEscCancelation_0_listener() { return ctx.onBgClick(); })("click", function NavigatorComponent_Template_div_click_0_listener() { return ctx.onBgClick(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](2, NavigatorComponent_div_2_Template, 3, 7, "div", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("@slideIn", undefined);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", ctx.navLinks);
    } }, directives: [_angular_common__WEBPACK_IMPORTED_MODULE_3__["NgForOf"], _angular_common__WEBPACK_IMPORTED_MODULE_3__["NgStyle"]], styles: ["*[_ngcontent-%COMP%] {\n  -webkit-user-select: none;\n          user-select: none;\n}\n\n.navigator-container[_ngcontent-%COMP%] {\n  font-family: \"Cormorant Garamond\", serif;\n  display: flex;\n  position: fixed;\n  min-width: 100vw;\n  min-height: 100vh;\n  background: rgba(85, 85, 85, 0.9);\n  top: 0;\n  left: 0;\n  z-index: 5;\n  justify-content: center;\n  align-items: center;\n}\n\n.navLinks[_ngcontent-%COMP%] {\n  width: 90vw;\n  display: flex;\n  justify-content: center;\n  align-items: center;\n  flex-direction: column;\n}\n\n.navLink[_ngcontent-%COMP%] {\n  padding: 2rem 0;\n  margin: 1rem 0;\n  width: 40%;\n  min-width: 40rem;\n  font-size: 2.4rem;\n  font-weight: bold;\n  text-transform: uppercase;\n  letter-spacing: 1px;\n  text-align: center;\n  background: rgba(248, 248, 248, 0.5);\n  cursor: pointer;\n  border-radius: 0.5rem;\n}\n\n@media (max-width: 1300px) {\n  .navLink[_ngcontent-%COMP%] {\n    width: 60%;\n  }\n}\n\n@media (max-width: 640px) {\n  .navLink[_ngcontent-%COMP%] {\n    width: 100%;\n  }\n}\n\n.navLink[_ngcontent-%COMP%]    > *[_ngcontent-%COMP%] {\n  color: #fff;\n  text-decoration: none;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvbmF2aWdhdG9yL25hdmlnYXRvci5jb21wb25lbnQuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNJLHlCQUFBO1VBQUEsaUJBQUE7QUFDSjs7QUFFRTtFQUNFLHdDQUFBO0VBQ0EsYUFBQTtFQUNBLGVBQUE7RUFDQSxnQkFBQTtFQUNBLGlCQUFBO0VBQ0EsaUNBQUE7RUFDQSxNQUFBO0VBQ0EsT0FBQTtFQUNBLFVBQUE7RUFDQSx1QkFBQTtFQUNBLG1CQUFBO0FBQ0o7O0FBRUU7RUFDRSxXQUFBO0VBQ0EsYUFBQTtFQUNBLHVCQUFBO0VBQ0EsbUJBQUE7RUFDQSxzQkFBQTtBQUNKOztBQUVFO0VBQ0UsZUFBQTtFQUNBLGNBQUE7RUFDQSxVQUFBO0VBQ0EsZ0JBQUE7RUFDQSxpQkFBQTtFQUNBLGlCQUFBO0VBQ0EseUJBQUE7RUFDQSxtQkFBQTtFQUNBLGtCQUFBO0VBQ0Esb0NBQUE7RUFDQSxlQUFBO0VBQ0EscUJBQUE7QUFDSjs7QUFBSTtFQWJGO0lBY0ksVUFBQTtFQUdKO0FBQ0Y7O0FBRkk7RUFoQkY7SUFpQkksV0FBQTtFQUtKO0FBQ0Y7O0FBRkU7RUFDRSxXQUFBO0VBQ0EscUJBQUE7QUFLSiIsImZpbGUiOiJzcmMvYXBwL25hdmlnYXRvci9uYXZpZ2F0b3IuY29tcG9uZW50LnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyIqIHtcclxuICAgIHVzZXItc2VsZWN0OiBub25lO1xyXG4gIH1cclxuICBcclxuICAubmF2aWdhdG9yLWNvbnRhaW5lciB7XHJcbiAgICBmb250LWZhbWlseTogJ0Nvcm1vcmFudCBHYXJhbW9uZCcsIHNlcmlmO1xyXG4gICAgZGlzcGxheTogZmxleDtcclxuICAgIHBvc2l0aW9uOiBmaXhlZDtcclxuICAgIG1pbi13aWR0aDogMTAwdnc7XHJcbiAgICBtaW4taGVpZ2h0OiAxMDB2aDtcclxuICAgIGJhY2tncm91bmQ6IHJnYmEoIzU1NSwgMC45KTtcclxuICAgIHRvcDogMDtcclxuICAgIGxlZnQ6IDA7XHJcbiAgICB6LWluZGV4OiA1O1xyXG4gICAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XHJcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xyXG4gIH1cclxuICBcclxuICAubmF2TGlua3Mge1xyXG4gICAgd2lkdGg6IDkwdnc7XHJcbiAgICBkaXNwbGF5OiBmbGV4O1xyXG4gICAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XHJcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xyXG4gICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcclxuICB9XHJcbiAgXHJcbiAgLm5hdkxpbmsge1xyXG4gICAgcGFkZGluZzogMnJlbSAwO1xyXG4gICAgbWFyZ2luOiAxcmVtIDA7XHJcbiAgICB3aWR0aDogNDAlO1xyXG4gICAgbWluLXdpZHRoOiA0MHJlbTtcclxuICAgIGZvbnQtc2l6ZTogMi40cmVtO1xyXG4gICAgZm9udC13ZWlnaHQ6IGJvbGQ7XHJcbiAgICB0ZXh0LXRyYW5zZm9ybTogdXBwZXJjYXNlO1xyXG4gICAgbGV0dGVyLXNwYWNpbmc6IDFweDtcclxuICAgIHRleHQtYWxpZ246IGNlbnRlcjtcclxuICAgIGJhY2tncm91bmQ6IHJnYmEoI2Y4ZjhmOCwgMC41KTtcclxuICAgIGN1cnNvcjogcG9pbnRlcjtcclxuICAgIGJvcmRlci1yYWRpdXM6IDAuNXJlbTtcclxuICAgIEBtZWRpYSAobWF4LXdpZHRoOiAxMzAwcHgpIHtcclxuICAgICAgd2lkdGg6IDYwJTtcclxuICAgIH1cclxuICAgIEBtZWRpYSAobWF4LXdpZHRoOiA2NDBweCkge1xyXG4gICAgICB3aWR0aDogMTAwJTtcclxuICAgIH1cclxuICB9XHJcbiAgXHJcbiAgLm5hdkxpbms+KiB7XHJcbiAgICBjb2xvcjogI2ZmZjtcclxuICAgIHRleHQtZGVjb3JhdGlvbjogbm9uZTtcclxuICB9XHJcbiAgIl19 */"], data: { animation: [
            Object(_angular_animations__WEBPACK_IMPORTED_MODULE_1__["trigger"])('slideIn', [
                Object(_angular_animations__WEBPACK_IMPORTED_MODULE_1__["transition"])('* => *', [
                    Object(_angular_animations__WEBPACK_IMPORTED_MODULE_1__["query"])(':enter', Object(_angular_animations__WEBPACK_IMPORTED_MODULE_1__["style"])({ marginLeft: '50%', opacity: 0 }), {
                        optional: true
                    }),
                    Object(_angular_animations__WEBPACK_IMPORTED_MODULE_1__["query"])(':leave', Object(_angular_animations__WEBPACK_IMPORTED_MODULE_1__["style"])({ marginLeft: '0%', opacity: 1 }), {
                        optional: true
                    }),
                    Object(_angular_animations__WEBPACK_IMPORTED_MODULE_1__["query"])(':enter', [
                        Object(_angular_animations__WEBPACK_IMPORTED_MODULE_1__["stagger"])('0.2s', [
                            Object(_angular_animations__WEBPACK_IMPORTED_MODULE_1__["animate"])('0.5s ease-out', Object(_angular_animations__WEBPACK_IMPORTED_MODULE_1__["keyframes"])([
                                Object(_angular_animations__WEBPACK_IMPORTED_MODULE_1__["style"])({ offset: 0 }),
                                Object(_angular_animations__WEBPACK_IMPORTED_MODULE_1__["style"])({ marginLeft: '0%', opacity: 0.8, offset: 0.8 }),
                                Object(_angular_animations__WEBPACK_IMPORTED_MODULE_1__["style"])({ marginLeft: '-10%', opacity: 1, offset: 0.9 }),
                                Object(_angular_animations__WEBPACK_IMPORTED_MODULE_1__["style"])({ marginLeft: '0%', opacity: 1, offset: 1 })
                            ]))
                        ])
                    ], { optional: true }),
                    Object(_angular_animations__WEBPACK_IMPORTED_MODULE_1__["query"])(':leave', [
                        Object(_angular_animations__WEBPACK_IMPORTED_MODULE_1__["stagger"])('0.2s', [
                            Object(_angular_animations__WEBPACK_IMPORTED_MODULE_1__["animate"])('0.5s ease-in', Object(_angular_animations__WEBPACK_IMPORTED_MODULE_1__["keyframes"])([
                                Object(_angular_animations__WEBPACK_IMPORTED_MODULE_1__["style"])({ offset: 0 }),
                                Object(_angular_animations__WEBPACK_IMPORTED_MODULE_1__["style"])({ marginLeft: '10%', offset: 0.1 }),
                                Object(_angular_animations__WEBPACK_IMPORTED_MODULE_1__["style"])({ marginLeft: '0%', offset: 0.4 }),
                                Object(_angular_animations__WEBPACK_IMPORTED_MODULE_1__["style"])({ marginLeft: '-50%', opacity: 0, offset: 1 })
                            ]))
                        ])
                    ], { optional: true })
                ])
            ])
        ] } });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](NavigatorComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'app-navigator',
                templateUrl: './navigator.component.html',
                styleUrls: ['./navigator.component.scss'],
                animations: [
                    Object(_angular_animations__WEBPACK_IMPORTED_MODULE_1__["trigger"])('slideIn', [
                        Object(_angular_animations__WEBPACK_IMPORTED_MODULE_1__["transition"])('* => *', [
                            Object(_angular_animations__WEBPACK_IMPORTED_MODULE_1__["query"])(':enter', Object(_angular_animations__WEBPACK_IMPORTED_MODULE_1__["style"])({ marginLeft: '50%', opacity: 0 }), {
                                optional: true
                            }),
                            Object(_angular_animations__WEBPACK_IMPORTED_MODULE_1__["query"])(':leave', Object(_angular_animations__WEBPACK_IMPORTED_MODULE_1__["style"])({ marginLeft: '0%', opacity: 1 }), {
                                optional: true
                            }),
                            Object(_angular_animations__WEBPACK_IMPORTED_MODULE_1__["query"])(':enter', [
                                Object(_angular_animations__WEBPACK_IMPORTED_MODULE_1__["stagger"])('0.2s', [
                                    Object(_angular_animations__WEBPACK_IMPORTED_MODULE_1__["animate"])('0.5s ease-out', Object(_angular_animations__WEBPACK_IMPORTED_MODULE_1__["keyframes"])([
                                        Object(_angular_animations__WEBPACK_IMPORTED_MODULE_1__["style"])({ offset: 0 }),
                                        Object(_angular_animations__WEBPACK_IMPORTED_MODULE_1__["style"])({ marginLeft: '0%', opacity: 0.8, offset: 0.8 }),
                                        Object(_angular_animations__WEBPACK_IMPORTED_MODULE_1__["style"])({ marginLeft: '-10%', opacity: 1, offset: 0.9 }),
                                        Object(_angular_animations__WEBPACK_IMPORTED_MODULE_1__["style"])({ marginLeft: '0%', opacity: 1, offset: 1 })
                                    ]))
                                ])
                            ], { optional: true }),
                            Object(_angular_animations__WEBPACK_IMPORTED_MODULE_1__["query"])(':leave', [
                                Object(_angular_animations__WEBPACK_IMPORTED_MODULE_1__["stagger"])('0.2s', [
                                    Object(_angular_animations__WEBPACK_IMPORTED_MODULE_1__["animate"])('0.5s ease-in', Object(_angular_animations__WEBPACK_IMPORTED_MODULE_1__["keyframes"])([
                                        Object(_angular_animations__WEBPACK_IMPORTED_MODULE_1__["style"])({ offset: 0 }),
                                        Object(_angular_animations__WEBPACK_IMPORTED_MODULE_1__["style"])({ marginLeft: '10%', offset: 0.1 }),
                                        Object(_angular_animations__WEBPACK_IMPORTED_MODULE_1__["style"])({ marginLeft: '0%', offset: 0.4 }),
                                        Object(_angular_animations__WEBPACK_IMPORTED_MODULE_1__["style"])({ marginLeft: '-50%', opacity: 0, offset: 1 })
                                    ]))
                                ])
                            ], { optional: true })
                        ])
                    ])
                ]
            }]
    }], function () { return [{ type: _angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"] }]; }, { cancellation: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Output"],
            args: ['cancellation']
        }] }); })();


/***/ }),

/***/ "vY5A":
/*!***************************************!*\
  !*** ./src/app/app-routing.module.ts ***!
  \***************************************/
/*! exports provided: AppRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppRoutingModule", function() { return AppRoutingModule; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "tyNb");
/* harmony import */ var _about_about_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./about/about.component */ "84zG");
/* harmony import */ var _contact_contact_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./contact/contact.component */ "bzTf");
/* harmony import */ var _portfolio_portfolio_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./portfolio/portfolio.component */ "zyDg");
/* harmony import */ var _profile_card_profile_card_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./profile-card/profile-card.component */ "7hpp");
/* harmony import */ var _profile_profile_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./profile/profile.component */ "W6KJ");









const routes = [
    {
        path: 'about',
        component: _about_about_component__WEBPACK_IMPORTED_MODULE_2__["AboutComponent"]
    },
    {
        path: 'profiles',
        component: _contact_contact_component__WEBPACK_IMPORTED_MODULE_3__["ContactComponent"]
    },
    {
        path: '',
        component: _profile_profile_component__WEBPACK_IMPORTED_MODULE_6__["ProfileComponent"]
    },
    {
        path: 'portfolio',
        component: _portfolio_portfolio_component__WEBPACK_IMPORTED_MODULE_4__["PortfolioComponent"]
    },
    {
        path: 'profile-card',
        component: _profile_card_profile_card_component__WEBPACK_IMPORTED_MODULE_5__["ProfileCardComponent"]
    },
    {
        path: '', redirectTo: '/', pathMatch: 'full'
    }
];
class AppRoutingModule {
}
AppRoutingModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineNgModule"]({ type: AppRoutingModule });
AppRoutingModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjector"]({ factory: function AppRoutingModule_Factory(t) { return new (t || AppRoutingModule)(); }, imports: [[_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"].forRoot(routes)], _angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]] });
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsetNgModuleScope"](AppRoutingModule, { imports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]], exports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]] }); })();
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](AppRoutingModule, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"],
        args: [{
                imports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"].forRoot(routes)],
                exports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]]
            }]
    }], null, null); })();


/***/ }),

/***/ "wvlF":
/*!***************************************************************!*\
  !*** ./src/app/utils/data/ProjectElements/Gestion-parking.ts ***!
  \***************************************************************/
/*! exports provided: GestionParking */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "GestionParking", function() { return GestionParking; });
const GestionParking = {
    id: 'A1B3308D-8BC5-4A7B-81A7-4190A9A41D54',
    name: 'Application de gestion des parkings',
    description: "Le projet a été conçu dans le cadre de la conception et de de la programmation orienté objet avancé en Java" +
        " dont l'objectif été la gestion de parking en Java",
    projectLink: null,
    liveUrl: null,
    isFeatured: true,
    features: [
        'Espace Authentification et Connection',
        'Ajouter/Supprimer un parking',
        'Reserver une place dans un parking',
        'Visualiser les places vides dans un parking',
    ],
    tags: ['java'],
    techStuff: [
        "JAVA", "JAVAFX"
    ],
    additionalData: []
};


/***/ }),

/***/ "yKt7":
/*!*******************************************************************!*\
  !*** ./src/app/utils/data/ProjectElements/AnalyseConsommation.ts ***!
  \*******************************************************************/
/*! exports provided: AnalyseConsommation */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AnalyseConsommation", function() { return AnalyseConsommation; });
const AnalyseConsommation = {
    id: 'A1B3308D-8BC5-4A7B-81A7-4190A9sdffA41D0B',
    name: 'Projet Analyse de la consommation en eau potable',
    description: " Développement Fullstack et déploiement d'une application web d'analyse de"
        + " consommation en eau potable de la région d'Agadir.",
    projectLink: null,
    liveUrl: null,
    isFeatured: true,
    features: [
        "Création d'un espace Login",
        "Visualisation de la consommation ",
        "Application des filtrages par secteur/Année/Periode ou par type de consommateur",
        "Création d'un espace de la configuration",
        "Gestion des secteurs commerciaux dans les secteurs hydraulique : Ajout/Suppression/Visualisation d'un secteur Commercial/Hydraulique",
    ],
    tags: ['sig', 'frontend', 'java'],
    techStuff: [
        "Spring boot",
        "Angular 10",
        "Bootstrap",
        "UML",
        "JWT",
        "MySQL"
    ],
    additionalData: [{
            title: 'version 1', data: ["version 1 de l'application a été réalisé par Spring MVC , la transformation a été appliqué pour des raisons techniques,"]
        },
        {
            title: 'Format des données', data: ["Le format brûte des données est le CSV et qui vont être stocké par la suite dans la base de données"]
        },
    ]
};


/***/ }),

/***/ "yOpW":
/*!********************************************************!*\
  !*** ./src/app/utils/data/ProjectElements/Covid-19.ts ***!
  \********************************************************/
/*! exports provided: Covid19App */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Covid19App", function() { return Covid19App; });
const Covid19App = {
    id: 'A1B3308D-8BC5-4A7B-81A7d-4190A<qd9A41D54',
    name: 'Projet visualisation données Covid-19',
    description: "Création d'une application pour l'analyse, visualisation des données de Covid-19 et sensibilisation contre covid 19",
    projectLink: null,
    liveUrl: null,
    isFeatured: true,
    features: [
        'Espace Authentification et Connection pour les administrateurs',
        'Visualsation les résultats selon une date donnée',
        "Affichage de l'évolution de la pandémie",
        'Affichage cartographique de la répartition de covid-19 sur le territoire national',
        "Suivi des nouvelles de la pandémie "
    ],
    tags: ['java', 'sig'],
    techStuff: [
        "Spring boot", "Bootstrap", "Angular 5", "MySQL", "OpenLayer", "GeoServer"
    ],
    additionalData: []
};


/***/ }),

/***/ "zUkc":
/*!************************************************!*\
  !*** ./src/app/projects/projects.component.ts ***!
  \************************************************/
/*! exports provided: ProjectsComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ProjectsComponent", function() { return ProjectsComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_animations__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/animations */ "R0Ic");
/* harmony import */ var _services_tags_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./../services/tags.service */ "3r4v");
/* harmony import */ var _services_project_data_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./../services/project-data.service */ "JCzG");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/common */ "ofXK");
/* harmony import */ var _project_card_project_card_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../project-card/project-card.component */ "MyZq");
/* harmony import */ var _project_details_project_details_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../project-details/project-details.component */ "OVWj");








function ProjectsComponent_app_project_card_1_Template(rf, ctx) { if (rf & 1) {
    const _r4 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "app-project-card", 3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("select", function ProjectsComponent_app_project_card_1_Template_app_project_card_select_0_listener($event) { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r4); const ctx_r3 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](); return ctx_r3.onProjectCardClick($event); });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const project_r2 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("project", project_r2);
} }
function ProjectsComponent_app_project_details_3_Template(rf, ctx) { if (rf & 1) {
    const _r6 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "app-project-details", 4);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("cancellation", function ProjectsComponent_app_project_details_3_Template_app_project_details_cancellation_0_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r6); const ctx_r5 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](); return ctx_r5.selectedProject = null; });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("project", ctx_r1.selectedProject);
} }
class ProjectsComponent {
    constructor(tagsService, projectService) {
        this.tagsService = tagsService;
        this.projectService = projectService;
    }
    ngOnInit() {
        // console.log('project component created');
        this.renderProjects();
        this.tagSubscription$ = this.tagsService.onTagUpdate;
        this.tagSubscription$.subscribe(() => {
            if (this.projects.length === 0)
                this.renderProjects();
            else
                this.projects = [];
        });
    }
    ngOnDestroy() {
        // console.log('project component destroyed');
    }
    onProjectCardClick(data) {
        this.selectedProject = data.project;
    }
    renderProjects() {
        this.projects = this.projectService
            .getProjects()
            .filter(project => this.tagsService.tags
            .filter(tag => tag.isSelected)
            .reduce((prev, tag) => prev || project.tags.indexOf(tag.displayName.toLowerCase()) !== -1, false));
    }
}
ProjectsComponent.ɵfac = function ProjectsComponent_Factory(t) { return new (t || ProjectsComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_services_tags_service__WEBPACK_IMPORTED_MODULE_2__["TagsService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_services_project_data_service__WEBPACK_IMPORTED_MODULE_3__["ProjectDataService"])); };
ProjectsComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: ProjectsComponent, selectors: [["app-projects"]], decls: 4, vars: 4, consts: [[1, "project-container"], ["class", "project-card", 3, "project", "select", 4, "ngFor", "ngForOf"], [3, "project", "cancellation", 4, "ngIf"], [1, "project-card", 3, "project", "select"], [3, "project", "cancellation"]], template: function ProjectsComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("@slideIn.done", function ProjectsComponent_Template_div_animation_slideIn_done_0_listener() { return ctx.renderProjects(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](1, ProjectsComponent_app_project_card_1_Template, 1, 1, "app-project-card", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "div");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](3, ProjectsComponent_app_project_details_3_Template, 1, 1, "app-project-details", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("@slideIn", ctx.projects == null ? null : ctx.projects.length);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", ctx.projects);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("@animateChildren", ctx.selectedProject);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.selectedProject);
    } }, directives: [_angular_common__WEBPACK_IMPORTED_MODULE_4__["NgForOf"], _angular_common__WEBPACK_IMPORTED_MODULE_4__["NgIf"], _project_card_project_card_component__WEBPACK_IMPORTED_MODULE_5__["ProjectCardComponent"], _project_details_project_details_component__WEBPACK_IMPORTED_MODULE_6__["ProjectDetailsComponent"]], styles: [".project-container[_ngcontent-%COMP%] {\n  width: 70%;\n  margin: auto;\n  display: flex;\n  flex-wrap: wrap;\n  align-items: center;\n  transition: all 0.5s ease-in-out;\n}\n.project-container[_ngcontent-%COMP%]   .project-card[_ngcontent-%COMP%] {\n  padding: 1rem;\n  flex-basis: 33.3%;\n  transition: all 0.5s ease-in-out;\n}\n@media (max-width: 1300px) {\n  .project-container[_ngcontent-%COMP%] {\n    width: 90%;\n  }\n  .project-container[_ngcontent-%COMP%]   .project-card[_ngcontent-%COMP%] {\n    flex-basis: 33.3%;\n  }\n}\n@media (max-width: 970px) {\n  .project-container[_ngcontent-%COMP%] {\n    width: 95%;\n  }\n  .project-container[_ngcontent-%COMP%]   .project-card[_ngcontent-%COMP%] {\n    flex-basis: 50%;\n  }\n}\n@media (max-width: 660px) {\n  .project-container[_ngcontent-%COMP%] {\n    width: 90%;\n  }\n  .project-container[_ngcontent-%COMP%]   .project-card[_ngcontent-%COMP%] {\n    flex-basis: 100%;\n  }\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvcHJvamVjdHMvcHJvamVjdHMuY29tcG9uZW50LnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDSSxVQUFBO0VBQ0EsWUFBQTtFQUNBLGFBQUE7RUFDQSxlQUFBO0VBQ0EsbUJBQUE7RUFDQSxnQ0FBQTtBQUNKO0FBQ0k7RUFDRSxhQUFBO0VBQ0EsaUJBQUE7RUFDQSxnQ0FBQTtBQUNOO0FBR0U7RUFDRTtJQUNFLFVBQUE7RUFBSjtFQUNJO0lBQ0UsaUJBQUE7RUFDTjtBQUNGO0FBR0U7RUFDRTtJQUNFLFVBQUE7RUFESjtFQUVJO0lBQ0UsZUFBQTtFQUFOO0FBQ0Y7QUFJRTtFQUNFO0lBQ0UsVUFBQTtFQUZKO0VBR0k7SUFDRSxnQkFBQTtFQUROO0FBQ0YiLCJmaWxlIjoic3JjL2FwcC9wcm9qZWN0cy9wcm9qZWN0cy5jb21wb25lbnQuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIi5wcm9qZWN0LWNvbnRhaW5lciB7XHJcbiAgICB3aWR0aDogNzAlO1xyXG4gICAgbWFyZ2luOiBhdXRvO1xyXG4gICAgZGlzcGxheTogZmxleDtcclxuICAgIGZsZXgtd3JhcDogd3JhcDtcclxuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XHJcbiAgICB0cmFuc2l0aW9uOiBhbGwgMC41cyBlYXNlLWluLW91dDtcclxuICBcclxuICAgIC5wcm9qZWN0LWNhcmQge1xyXG4gICAgICBwYWRkaW5nOiAxcmVtO1xyXG4gICAgICBmbGV4LWJhc2lzOiAzMy4zJTtcclxuICAgICAgdHJhbnNpdGlvbjogYWxsIDAuNXMgZWFzZS1pbi1vdXQ7XHJcbiAgICB9XHJcbiAgfVxyXG4gIFxyXG4gIEBtZWRpYSAobWF4LXdpZHRoOiAxMzAwcHgpIHtcclxuICAgIC5wcm9qZWN0LWNvbnRhaW5lciB7XHJcbiAgICAgIHdpZHRoOiA5MCU7XHJcbiAgICAgIC5wcm9qZWN0LWNhcmQge1xyXG4gICAgICAgIGZsZXgtYmFzaXM6IDMzLjMlO1xyXG4gICAgICB9XHJcbiAgICB9XHJcbiAgfVxyXG4gIFxyXG4gIEBtZWRpYSAobWF4LXdpZHRoOiA5NzBweCkge1xyXG4gICAgLnByb2plY3QtY29udGFpbmVyIHtcclxuICAgICAgd2lkdGg6IDk1JTtcclxuICAgICAgLnByb2plY3QtY2FyZCB7XHJcbiAgICAgICAgZmxleC1iYXNpczogNTAlO1xyXG4gICAgICB9XHJcbiAgICB9XHJcbiAgfVxyXG4gIFxyXG4gIEBtZWRpYSAobWF4LXdpZHRoOiA2NjBweCkge1xyXG4gICAgLnByb2plY3QtY29udGFpbmVyIHtcclxuICAgICAgd2lkdGg6IDkwJTtcclxuICAgICAgLnByb2plY3QtY2FyZCB7XHJcbiAgICAgICAgZmxleC1iYXNpczogMTAwJTtcclxuICAgICAgfVxyXG4gICAgfVxyXG4gIH1cclxuICAiXX0= */"], data: { animation: [
            Object(_angular_animations__WEBPACK_IMPORTED_MODULE_1__["trigger"])('slideIn', [
                Object(_angular_animations__WEBPACK_IMPORTED_MODULE_1__["transition"])('* => *', [
                    Object(_angular_animations__WEBPACK_IMPORTED_MODULE_1__["query"])(':enter', Object(_angular_animations__WEBPACK_IMPORTED_MODULE_1__["style"])({ transform: 'translateY(-25%)', opacity: 0 }), {
                        optional: true
                    }),
                    Object(_angular_animations__WEBPACK_IMPORTED_MODULE_1__["query"])(':leave', Object(_angular_animations__WEBPACK_IMPORTED_MODULE_1__["style"])({ transform: 'translateY(0%)', opacity: 1 }), {
                        optional: true
                    }),
                    Object(_angular_animations__WEBPACK_IMPORTED_MODULE_1__["query"])(':enter', [
                        Object(_angular_animations__WEBPACK_IMPORTED_MODULE_1__["stagger"])('0.05s', [
                            Object(_angular_animations__WEBPACK_IMPORTED_MODULE_1__["animate"])('0.2s ease-out', Object(_angular_animations__WEBPACK_IMPORTED_MODULE_1__["keyframes"])([
                                Object(_angular_animations__WEBPACK_IMPORTED_MODULE_1__["style"])({
                                    transform: 'translateY(-25%)',
                                    opacity: 0,
                                    offset: 0
                                }),
                                Object(_angular_animations__WEBPACK_IMPORTED_MODULE_1__["style"])({ transform: 'translateY(0%)', opacity: 1, offset: 1 })
                            ]))
                        ])
                    ], { optional: true }),
                    Object(_angular_animations__WEBPACK_IMPORTED_MODULE_1__["query"])(':leave', [
                        Object(_angular_animations__WEBPACK_IMPORTED_MODULE_1__["stagger"])('0.05s', [
                            Object(_angular_animations__WEBPACK_IMPORTED_MODULE_1__["animate"])('0.2s ease-in', Object(_angular_animations__WEBPACK_IMPORTED_MODULE_1__["keyframes"])([
                                Object(_angular_animations__WEBPACK_IMPORTED_MODULE_1__["style"])({ transform: 'translateY(0%)', offset: 0 }),
                                Object(_angular_animations__WEBPACK_IMPORTED_MODULE_1__["style"])({ transform: 'translateY(-25%)', opacity: 0, offset: 1 })
                            ]))
                        ])
                    ], { optional: true })
                ])
            ]),
            Object(_angular_animations__WEBPACK_IMPORTED_MODULE_1__["trigger"])('animateChildren', [
                Object(_angular_animations__WEBPACK_IMPORTED_MODULE_1__["transition"])('* => *', [
                    Object(_angular_animations__WEBPACK_IMPORTED_MODULE_1__["query"])('@*, :enter', [Object(_angular_animations__WEBPACK_IMPORTED_MODULE_1__["animateChild"])()], { optional: true }),
                    Object(_angular_animations__WEBPACK_IMPORTED_MODULE_1__["query"])('@*, :leave', [Object(_angular_animations__WEBPACK_IMPORTED_MODULE_1__["animateChild"])()], { optional: true })
                ])
            ])
        ] } });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](ProjectsComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'app-projects',
                templateUrl: './projects.component.html',
                styleUrls: ['./projects.component.scss'],
                animations: [
                    Object(_angular_animations__WEBPACK_IMPORTED_MODULE_1__["trigger"])('slideIn', [
                        Object(_angular_animations__WEBPACK_IMPORTED_MODULE_1__["transition"])('* => *', [
                            Object(_angular_animations__WEBPACK_IMPORTED_MODULE_1__["query"])(':enter', Object(_angular_animations__WEBPACK_IMPORTED_MODULE_1__["style"])({ transform: 'translateY(-25%)', opacity: 0 }), {
                                optional: true
                            }),
                            Object(_angular_animations__WEBPACK_IMPORTED_MODULE_1__["query"])(':leave', Object(_angular_animations__WEBPACK_IMPORTED_MODULE_1__["style"])({ transform: 'translateY(0%)', opacity: 1 }), {
                                optional: true
                            }),
                            Object(_angular_animations__WEBPACK_IMPORTED_MODULE_1__["query"])(':enter', [
                                Object(_angular_animations__WEBPACK_IMPORTED_MODULE_1__["stagger"])('0.05s', [
                                    Object(_angular_animations__WEBPACK_IMPORTED_MODULE_1__["animate"])('0.2s ease-out', Object(_angular_animations__WEBPACK_IMPORTED_MODULE_1__["keyframes"])([
                                        Object(_angular_animations__WEBPACK_IMPORTED_MODULE_1__["style"])({
                                            transform: 'translateY(-25%)',
                                            opacity: 0,
                                            offset: 0
                                        }),
                                        Object(_angular_animations__WEBPACK_IMPORTED_MODULE_1__["style"])({ transform: 'translateY(0%)', opacity: 1, offset: 1 })
                                    ]))
                                ])
                            ], { optional: true }),
                            Object(_angular_animations__WEBPACK_IMPORTED_MODULE_1__["query"])(':leave', [
                                Object(_angular_animations__WEBPACK_IMPORTED_MODULE_1__["stagger"])('0.05s', [
                                    Object(_angular_animations__WEBPACK_IMPORTED_MODULE_1__["animate"])('0.2s ease-in', Object(_angular_animations__WEBPACK_IMPORTED_MODULE_1__["keyframes"])([
                                        Object(_angular_animations__WEBPACK_IMPORTED_MODULE_1__["style"])({ transform: 'translateY(0%)', offset: 0 }),
                                        Object(_angular_animations__WEBPACK_IMPORTED_MODULE_1__["style"])({ transform: 'translateY(-25%)', opacity: 0, offset: 1 })
                                    ]))
                                ])
                            ], { optional: true })
                        ])
                    ]),
                    Object(_angular_animations__WEBPACK_IMPORTED_MODULE_1__["trigger"])('animateChildren', [
                        Object(_angular_animations__WEBPACK_IMPORTED_MODULE_1__["transition"])('* => *', [
                            Object(_angular_animations__WEBPACK_IMPORTED_MODULE_1__["query"])('@*, :enter', [Object(_angular_animations__WEBPACK_IMPORTED_MODULE_1__["animateChild"])()], { optional: true }),
                            Object(_angular_animations__WEBPACK_IMPORTED_MODULE_1__["query"])('@*, :leave', [Object(_angular_animations__WEBPACK_IMPORTED_MODULE_1__["animateChild"])()], { optional: true })
                        ])
                    ])
                ]
            }]
    }], function () { return [{ type: _services_tags_service__WEBPACK_IMPORTED_MODULE_2__["TagsService"] }, { type: _services_project_data_service__WEBPACK_IMPORTED_MODULE_3__["ProjectDataService"] }]; }, null); })();


/***/ }),

/***/ "zUnb":
/*!*********************!*\
  !*** ./src/main.ts ***!
  \*********************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _environments_environment__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./environments/environment */ "AytR");
/* harmony import */ var _app_app_module__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./app/app.module */ "ZAI4");
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/platform-browser */ "jhN1");




if (_environments_environment__WEBPACK_IMPORTED_MODULE_1__["environment"].production) {
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["enableProdMode"])();
}
_angular_platform_browser__WEBPACK_IMPORTED_MODULE_3__["platformBrowser"]().bootstrapModule(_app_app_module__WEBPACK_IMPORTED_MODULE_2__["AppModule"])
    .catch(err => console.error(err));


/***/ }),

/***/ "zn8P":
/*!******************************************************!*\
  !*** ./$$_lazy_route_resource lazy namespace object ***!
  \******************************************************/
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
webpackEmptyAsyncContext.id = "zn8P";

/***/ }),

/***/ "zyDg":
/*!**************************************************!*\
  !*** ./src/app/portfolio/portfolio.component.ts ***!
  \**************************************************/
/*! exports provided: PortfolioComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PortfolioComponent", function() { return PortfolioComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "tyNb");
/* harmony import */ var _services_tags_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./../services/tags.service */ "3r4v");
/* harmony import */ var _dp_logo_dp_logo_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../dp-logo/dp-logo.component */ "Hsyc");
/* harmony import */ var _typing_typing_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../typing/typing.component */ "E+85");
/* harmony import */ var _ui_back_icon_back_icon_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../ui/back-icon/back-icon.component */ "ITds");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/common */ "ofXK");
/* harmony import */ var _key_skill_btns_key_skill_btns_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../key-skill-btns/key-skill-btns.component */ "ZGyw");
/* harmony import */ var _projects_projects_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../projects/projects.component */ "zUkc");










const _c0 = ["portfolioHeader"];
const _c1 = ["portfolioArea"];
const _c2 = ["portfolioSelectionArea"];
const _c3 = function (a0) { return { "portfolio-selection__fixed": a0 }; };
class PortfolioComponent {
    constructor(router, tagsService) {
        this.router = router;
        this.tagsService = tagsService;
        this.animatedTypingText = 'Bonjour 🙋 , Ci-après mes projets réalisés. vous pouvez filter selon les téchnologies utilisées';
        this.dpLogoStyle = {
            height: '12rem',
            width: '12rem',
            borderWidth: '3px'
        };
        this.setFixedPostion = false;
    }
    ngOnInit() {
        this.updateAnimatedTextOnce();
    }
    updateAnimatedTextOnce() {
        let updateCount = 0;
        this.tagsService.onTagUpdate.subscribe(() => {
            if (updateCount === 0) {
                this.animatedTypingText =
                    'Excellent travail ! 😊';
                updateCount++;
            }
        });
    }
    onScroll() {
        const portfolioHeader = this.portfolioHeaderRef.nativeElement;
        const portfolioArea = this.portfolioAreaRef.nativeElement;
        const portfolioSelectionArea = this.portfolioSelectionAreaRef
            .nativeElement;
        const thresoldHeight = portfolioHeader.scrollHeight + portfolioHeader.offsetTop;
        const portfolioSelectionHeight = portfolioSelectionArea.scrollHeight + portfolioSelectionArea.offsetTop;
        if (window.scrollY > thresoldHeight) {
            portfolioArea.style.marginTop = `${portfolioSelectionHeight + 5}px`;
            this.setFixedPostion = true;
        }
        else {
            portfolioArea.style.marginTop = `inherit`;
            this.setFixedPostion = false;
            const factor = 1 - window.scrollY / (thresoldHeight + 40);
            // const netFactor = window.innerWidth < 900 ? 1 : 1 - factor;
            this.dpLogoStyle = Object.assign(Object.assign({}, this.dpLogoStyle), { height: `${12 * factor}rem`, width: `${12 * factor}rem` });
            portfolioHeader.style.opacity = factor.toString();
        }
    }
    onBackBtnClick() {
        this.router.navigateByUrl('/');
    }
}
PortfolioComponent.ɵfac = function PortfolioComponent_Factory(t) { return new (t || PortfolioComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_1__["Router"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_services_tags_service__WEBPACK_IMPORTED_MODULE_2__["TagsService"])); };
PortfolioComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: PortfolioComponent, selectors: [["app-portfolio"]], viewQuery: function PortfolioComponent_Query(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵviewQuery"](_c0, true);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵviewQuery"](_c1, true);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵviewQuery"](_c2, true);
    } if (rf & 2) {
        var _t;
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵqueryRefresh"](_t = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵloadQuery"]()) && (ctx.portfolioHeaderRef = _t.first);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵqueryRefresh"](_t = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵloadQuery"]()) && (ctx.portfolioAreaRef = _t.first);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵqueryRefresh"](_t = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵloadQuery"]()) && (ctx.portfolioSelectionAreaRef = _t.first);
    } }, hostBindings: function PortfolioComponent_HostBindings(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("scroll", function PortfolioComponent_scroll_HostBindingHandler() { return ctx.onScroll(); }, false, _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵresolveWindow"]);
    } }, decls: 16, vars: 7, consts: [[1, "portfolio-bg"], [1, "portfolio-container"], [1, "portfolio-header"], ["portfolioHeader", ""], [3, "height", "width", "borderWidth"], ["time", "2000", "delay", "1500", 3, "text"], [1, "portfolio-area"], ["portfolioArea", ""], [1, "back-icon", 3, "click"], [1, "portfolio-selection", 3, "ngClass"], ["portfolioSelectionArea", ""]], template: function PortfolioComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "div", 2, 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](4, "app-dp-logo", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](5, "app-typing", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "div", 6, 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](8, "div", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function PortfolioComponent_Template_div_click_8_listener() { return ctx.onBackBtnClick(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](9, "app-back-icon");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](10, "div", 9, 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](12, "h1");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](13, "PORTFOLIO");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](14, "app-key-skill-btns");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](15, "app-projects");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("height", ctx.dpLogoStyle.height)("width", ctx.dpLogoStyle.width)("borderWidth", ctx.dpLogoStyle.borderWidth);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("text", ctx.animatedTypingText);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngClass", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction1"](5, _c3, ctx.setFixedPostion));
    } }, directives: [_dp_logo_dp_logo_component__WEBPACK_IMPORTED_MODULE_3__["DpLogoComponent"], _typing_typing_component__WEBPACK_IMPORTED_MODULE_4__["TypingComponent"], _ui_back_icon_back_icon_component__WEBPACK_IMPORTED_MODULE_5__["BackIconComponent"], _angular_common__WEBPACK_IMPORTED_MODULE_6__["NgClass"], _key_skill_btns_key_skill_btns_component__WEBPACK_IMPORTED_MODULE_7__["KeySkillBtnsComponent"], _projects_projects_component__WEBPACK_IMPORTED_MODULE_8__["ProjectsComponent"]], styles: [".portfolio-bg[_ngcontent-%COMP%] {\n  min-height: 100vh;\n  min-width: 100vw;\n  position: relative;\n  background-color: #17a598;\n  overflow: hidden;\n  display: flex;\n}\n.portfolio-bg[_ngcontent-%COMP%]::after {\n  content: \"\";\n  position: fixed;\n  display: block;\n  height: 100vh;\n  min-height: 500px;\n  width: 100vw;\n  min-width: 500px;\n  overflow: hidden;\n  background-color: #2c3e50;\n  transform: rotateZ(-11deg) scale(1.5);\n  top: -65vh;\n  left: -25vw;\n}\n.portfolio-container[_ngcontent-%COMP%] {\n  display: flex;\n  flex: 1;\n  justify-content: center;\n  align-items: center;\n  height: 100%;\n  width: 100%;\n  z-index: 10;\n  padding: 3.5rem;\n  flex-direction: column;\n  color: #fff;\n}\n.portfolio-container[_ngcontent-%COMP%]   .portfolio-header[_ngcontent-%COMP%] {\n  display: flex;\n  justify-content: stretch;\n  margin: auto;\n  align-items: center;\n  font-size: 1.8rem;\n  -webkit-user-select: none;\n          user-select: none;\n}\n.portfolio-container[_ngcontent-%COMP%]   .portfolio-header[_ngcontent-%COMP%]    > *[_ngcontent-%COMP%] {\n  display: inline-block;\n  padding: 1rem 2rem;\n  transition: all 0.3s cubic-bezier(0.175, 0.885, 0.32, 1.275);\n}\n.portfolio-container[_ngcontent-%COMP%]   .portfolio-area[_ngcontent-%COMP%] {\n  margin: 0.4rem 0;\n  display: flex;\n  flex-direction: column;\n  justify-content: center;\n  align-items: center;\n  z-index: 50;\n  position: relative;\n}\n.portfolio-container[_ngcontent-%COMP%]   .portfolio-area[_ngcontent-%COMP%]   .portfolio-selection[_ngcontent-%COMP%] {\n  -webkit-user-select: none;\n          user-select: none;\n}\n.portfolio-container[_ngcontent-%COMP%]   .portfolio-area[_ngcontent-%COMP%]   .portfolio-selection.portfolio-selection__fixed[_ngcontent-%COMP%] {\n  position: fixed;\n  top: 0;\n  z-index: 1;\n  background-color: #2c3e50;\n  width: 100%;\n  box-shadow: 0px 8px 20px rgba(0, 0, 0, 0.4);\n}\n.portfolio-container[_ngcontent-%COMP%]   .portfolio-area[_ngcontent-%COMP%]   .portfolio-selection[_ngcontent-%COMP%]    > h1[_ngcontent-%COMP%] {\n  font-family: \"Cormorant Garamond\", serif;\n  font-weight: normal;\n  font-size: 3.2rem;\n  letter-spacing: 1px;\n  margin: 1rem auto;\n  text-align: center;\n}\n@media (max-width: 900px) {\n  .portfolio-container[_ngcontent-%COMP%] {\n    padding: 3.5rem 0.5rem;\n  }\n}\n@media (max-width: 74rem) {\n  .portfolio-header[_ngcontent-%COMP%] {\n    flex-direction: column;\n  }\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvcG9ydGZvbGlvL3BvcnRmb2xpby5jb21wb25lbnQuc2NzcyIsInNyYy9hcHAvX3Zhci5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUVBO0VBQ0UsaUJBQUE7RUFDQSxnQkFBQTtFQUNBLGtCQUFBO0VBQ0EseUJDTlM7RURPVCxnQkFBQTtFQUNBLGFBQUE7QUFERjtBQUdFO0VBQ0UsV0FBQTtFQUNBLGVBQUE7RUFDQSxjQUFBO0VBQ0EsYUFBQTtFQUNBLGlCQUFBO0VBQ0EsWUFBQTtFQUNBLGdCQUFBO0VBQ0EsZ0JBQUE7RUFDQSx5QkNqQks7RURrQkwscUNBQUE7RUFDQSxVQUFBO0VBQ0EsV0FBQTtBQURKO0FBTUE7RUFDRSxhQUFBO0VBQ0EsT0FBQTtFQUNBLHVCQUFBO0VBQ0EsbUJBQUE7RUFDQSxZQUFBO0VBQ0EsV0FBQTtFQUNBLFdBQUE7RUFDQSxlQUFBO0VBQ0Esc0JBQUE7RUFDQSxXQUFBO0FBSEY7QUFLRTtFQUNFLGFBQUE7RUFDQSx3QkFBQTtFQUNBLFlBQUE7RUFDQSxtQkFBQTtFQUNBLGlCQUFBO0VBQ0EseUJBQUE7VUFBQSxpQkFBQTtBQUhKO0FBS0k7RUFDRSxxQkFBQTtFQUNBLGtCQUFBO0VBQ0EsNERBQUE7QUFITjtBQVFFO0VBQ0UsZ0JBQUE7RUFDQSxhQUFBO0VBQ0Esc0JBQUE7RUFDQSx1QkFBQTtFQUNBLG1CQUFBO0VBQ0EsV0FBQTtFQUNBLGtCQUFBO0FBTko7QUFRSTtFQUVFLHlCQUFBO1VBQUEsaUJBQUE7QUFQTjtBQVNNO0VBQ0UsZUFBQTtFQUNBLE1BQUE7RUFDQSxVQUFBO0VBQ0EseUJDdEVDO0VEdUVELFdBQUE7RUFDQSwyQ0FBQTtBQVBSO0FBV007RUFDRSx3Q0FBQTtFQUNBLG1CQUFBO0VBQ0EsaUJBQUE7RUFDQSxtQkFBQTtFQUNBLGlCQUFBO0VBQ0Esa0JBQUE7QUFUUjtBQWVBO0VBQ0U7SUFDRSxzQkFBQTtFQVpGO0FBQ0Y7QUFlQTtFQUNFO0lBQ0Usc0JBQUE7RUFiRjtBQUNGIiwiZmlsZSI6InNyYy9hcHAvcG9ydGZvbGlvL3BvcnRmb2xpby5jb21wb25lbnQuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIkBpbXBvcnQgJy4uL3Zhcic7XHJcblxyXG4ucG9ydGZvbGlvLWJnIHtcclxuICBtaW4taGVpZ2h0OiAxMDB2aDtcclxuICBtaW4td2lkdGg6IDEwMHZ3O1xyXG4gIHBvc2l0aW9uOiByZWxhdGl2ZTtcclxuICBiYWNrZ3JvdW5kLWNvbG9yOiAkYmctY29sb3I7XHJcbiAgb3ZlcmZsb3c6IGhpZGRlbjtcclxuICBkaXNwbGF5OiBmbGV4O1xyXG5cclxuICAmOjphZnRlciB7XHJcbiAgICBjb250ZW50OiAnJztcclxuICAgIHBvc2l0aW9uOiBmaXhlZDtcclxuICAgIGRpc3BsYXk6IGJsb2NrO1xyXG4gICAgaGVpZ2h0OiAxMDB2aDtcclxuICAgIG1pbi1oZWlnaHQ6IDUwMHB4O1xyXG4gICAgd2lkdGg6IDEwMHZ3O1xyXG4gICAgbWluLXdpZHRoOiA1MDBweDtcclxuICAgIG92ZXJmbG93OiBoaWRkZW47XHJcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAkY29sb3IyO1xyXG4gICAgdHJhbnNmb3JtOiByb3RhdGVaKC0xMWRlZykgc2NhbGUoMS41KTtcclxuICAgIHRvcDogLTY1dmg7XHJcbiAgICBsZWZ0OiAtMjV2dztcclxuICB9XHJcblxyXG59XHJcblxyXG4ucG9ydGZvbGlvLWNvbnRhaW5lciB7XHJcbiAgZGlzcGxheTogZmxleDtcclxuICBmbGV4OiAxO1xyXG4gIGp1c3RpZnktY29udGVudDogY2VudGVyO1xyXG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XHJcbiAgaGVpZ2h0OiAxMDAlO1xyXG4gIHdpZHRoOiAxMDAlO1xyXG4gIHotaW5kZXg6IDEwO1xyXG4gIHBhZGRpbmc6IDMuNXJlbTtcclxuICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xyXG4gIGNvbG9yOiAjZmZmO1xyXG5cclxuICAucG9ydGZvbGlvLWhlYWRlciB7XHJcbiAgICBkaXNwbGF5OiBmbGV4O1xyXG4gICAganVzdGlmeS1jb250ZW50OiBzdHJldGNoO1xyXG4gICAgbWFyZ2luOiBhdXRvO1xyXG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcclxuICAgIGZvbnQtc2l6ZTogMS44cmVtO1xyXG4gICAgdXNlci1zZWxlY3Q6IG5vbmU7XHJcblxyXG4gICAgJiA+ICoge1xyXG4gICAgICBkaXNwbGF5OiBpbmxpbmUtYmxvY2s7XHJcbiAgICAgIHBhZGRpbmc6IDFyZW0gMnJlbTtcclxuICAgICAgdHJhbnNpdGlvbjogYWxsIDAuM3MgY3ViaWMtYmV6aWVyKDAuMTc1LCAwLjg4NSwgMC4zMiwgMS4yNzUpO1xyXG4gICAgfVxyXG5cclxuICB9XHJcblxyXG4gIC5wb3J0Zm9saW8tYXJlYSB7XHJcbiAgICBtYXJnaW46IDAuNHJlbSAwO1xyXG4gICAgZGlzcGxheTogZmxleDtcclxuICAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XHJcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcclxuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XHJcbiAgICB6LWluZGV4OiA1MDtcclxuICAgIHBvc2l0aW9uOiByZWxhdGl2ZTtcclxuXHJcbiAgICAucG9ydGZvbGlvLXNlbGVjdGlvbiB7XHJcbiAgICAgIC8vIGJhY2tncm91bmQtY29sb3I6ICRjb2xvcjI7XHJcbiAgICAgIHVzZXItc2VsZWN0OiBub25lO1xyXG5cclxuICAgICAgJi5wb3J0Zm9saW8tc2VsZWN0aW9uX19maXhlZCB7XHJcbiAgICAgICAgcG9zaXRpb246IGZpeGVkO1xyXG4gICAgICAgIHRvcDogMDtcclxuICAgICAgICB6LWluZGV4OiAxO1xyXG4gICAgICAgIGJhY2tncm91bmQtY29sb3I6ICRjb2xvcjI7XHJcbiAgICAgICAgd2lkdGg6IDEwMCU7XHJcbiAgICAgICAgYm94LXNoYWRvdzogMHB4IDhweCAyMHB4IHJnYmEoJGNvbG9yOiAjMDAwLCAkYWxwaGE6IDAuNCk7XHJcbiAgICAgICAgLy8gdHJhbnNpdGlvbjogYWxsIDAuM3MgZWFzZS1pbi1vdXQ7XHJcbiAgICAgIH1cclxuXHJcbiAgICAgICYgPiBoMSB7XHJcbiAgICAgICAgZm9udC1mYW1pbHk6ICdDb3Jtb3JhbnQgR2FyYW1vbmQnLCBzZXJpZjtcclxuICAgICAgICBmb250LXdlaWdodDogbm9ybWFsO1xyXG4gICAgICAgIGZvbnQtc2l6ZTogMy4ycmVtO1xyXG4gICAgICAgIGxldHRlci1zcGFjaW5nOiAxcHg7XHJcbiAgICAgICAgbWFyZ2luOiAxcmVtIGF1dG87XHJcbiAgICAgICAgdGV4dC1hbGlnbjogY2VudGVyO1xyXG4gICAgICB9XHJcbiAgICB9XHJcbiAgfVxyXG59XHJcblxyXG5AbWVkaWEgKG1heC13aWR0aDogOTAwcHgpIHtcclxuICAucG9ydGZvbGlvLWNvbnRhaW5lciB7XHJcbiAgICBwYWRkaW5nOiAzLjVyZW0gMC41cmVtO1xyXG4gIH1cclxufVxyXG5cclxuQG1lZGlhIChtYXgtd2lkdGg6IDc0cmVtKSB7XHJcbiAgLnBvcnRmb2xpby1oZWFkZXIge1xyXG4gICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcclxuICB9XHJcbn1cclxuIiwiJGJnLWNvbG9yOiAjMTdhNTk4O1xyXG4kY29sb3IxOiAjZTc0YzNjO1xyXG4kY29sb3IyOiAjMmMzZTUwO1xyXG4kY29sb3IzOiAjZGIzODFiO1xyXG4kZ3JlZW46ICMxN2E1OTg7XHJcbiR0ZXh0LWNvbG9yOiAjZmZmZmZmO1xyXG4kYmxhY2s6ICM1NTU7XHJcbiRvZmYtd2hpdGU6ICNmOGY4Zjg7XHJcbiR3aGl0ZTogI2ZmZjtcclxuXHJcbiJdfQ== */"] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](PortfolioComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'app-portfolio',
                templateUrl: './portfolio.component.html',
                styleUrls: ['./portfolio.component.scss']
            }]
    }], function () { return [{ type: _angular_router__WEBPACK_IMPORTED_MODULE_1__["Router"] }, { type: _services_tags_service__WEBPACK_IMPORTED_MODULE_2__["TagsService"] }]; }, { portfolioHeaderRef: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["ViewChild"],
            args: ['portfolioHeader']
        }], portfolioAreaRef: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["ViewChild"],
            args: ['portfolioArea']
        }], portfolioSelectionAreaRef: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["ViewChild"],
            args: ['portfolioSelectionArea']
        }], onScroll: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["HostListener"],
            args: ['window:scroll']
        }] }); })();


/***/ })

},[[0,"runtime","vendor"]]]);
//# sourceMappingURL=main.js.map