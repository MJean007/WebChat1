"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.MainModuleLibrary = void 0;
var core_1 = require("@angular/core");
var platform_browser_1 = require("@angular/platform-browser");
var forms_1 = require("@angular/forms");
var FemmeComponent_1 = require("../Component/FemmeComponent");
var MainModuleLibrary = /** @class */ (function () {
    function MainModuleLibrary() {
    }
    MainModuleLibrary = __decorate([
        core_1.NgModule({
            imports: [platform_browser_1.BrowserModule, forms_1.FormsModule],
            declarations: [FemmeComponent_1.FemmeComponent],
            bootstrap: [FemmeComponent_1.FemmeComponent]
        })
    ], MainModuleLibrary);
    return MainModuleLibrary;
}());
exports.MainModuleLibrary = MainModuleLibrary;
//# sourceMappingURL=MainModuleLibrary.js.map