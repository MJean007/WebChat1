"use strict";
// marche pas
// import * as sqlite3 from '../node_modules/sqlite3/lib/sqlite3';
Object.defineProperty(exports, "__esModule", { value: true });
exports.Femme = void 0;
// const sqlite3 = require('sqlite3').verbose();
// let db = new sqlite3.Database('../db/chaturdb.db');
var utileSql3 = require('utileSQL3');
var Femme = /** @class */ (function () {
    function Femme() {
        this.UserName = "";
        this.FemmeId = 0;
        this.LastConnected = "";
        this.NbAcces = 0;
        console.log('16 femme.ts');
    }
    Femme.prototype.get = function (username) {
        var row = '';
        var err = '';
        var chick = new Femme();
        var jsChick = utileSql3.getChick(username);
        chick.FemmeId = Number(jsChick.id);
        chick.UserName = String(jsChick.UserName);
        chick.LastConnected = String(jsChick.LastConnected);
        chick.NbAcces = Number(jsChick.NbAcces);
        console.log("39 Femme.ts get() importe " + chick.UserName + ", id: " + chick.FemmeId + ", derniere connection: " + chick.LastConnected + ", nb Access: " + chick.NbAcces);
        return chick;
    }; // fin de get()
    return Femme;
}());
exports.Femme = Femme;
//# sourceMappingURL=Femme.js.map