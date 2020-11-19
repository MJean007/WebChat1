"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Femme = void 0;
// import * as sqlite3 from '../node_modules/sqlite3/lib/sqlite3';
// import { Database } from 'sqlite3';
var sqlite3 = require('sqlite3').verbose();
var db = new sqlite3.Database('../db/chaturdb.db');
var Femme = /** @class */ (function () {
    function Femme() {
        this.UserName = "";
        this.FemmeId = 0;
        this.LastConnected = "";
        this.NbAcces = 0;
    }
    // constructor(_username: string, _lastConnected: string, _nbAcces: number)
    // {
    //     this.UserName = _username;
    //     this.LastConnected = _lastConnected;
    //     this.NbAcces = _nbAcces;
    // }
    // get
    Femme.prototype.get = function (username) {
        var row = '';
        var err = '';
        var chick = new Femme();
        var sql = 'SELECT Id, UserName, LastConnected, NbAcces FROM Femme where UserName = \'' + username + '\'';
        // db.all(sql, [], (err, rows) => 
        db.get(sql, [], function (err, row) {
            if (err) {
                console.log("33 Femme.ts get() une erreur est survenue: " + err.message);
            }
            chick.FemmeId = Number(row.id);
            chick.UserName = String(row.UserName);
            chick.LastConnected = String(row.LastConnected);
            chick.NbAcces = Number(row.NbAcces);
            console.log("39 Femme.ts get() importe " + chick.UserName + ", id: " + chick.FemmeId + ", derniere connection: " + chick.LastConnected + ", nb Access: " + chick.NbAcces);
        });
        return chick;
    }; // fin de get()
    return Femme;
}());
exports.Femme = Femme;
//# sourceMappingURL=Femme.js.map