// marche pas
// import * as sqlite3 from '../node_modules/sqlite3/lib/sqlite3';

// const sqlite3 = require('sqlite3').verbose();
// let db = new sqlite3.Database('../db/chaturdb.db');
var utileSql3 = require('utileSQL3');
export class Femme{
   UserName: string = "";
   FemmeId: number = 0;
   LastConnected: string = "";
   NbAcces: number = 0;


  constructor()
  {

  }

   // constructor(_username: string, _lastConnected: string, _nbAcces: number)
   // {
   //     this.UserName = _username;
   //     this.LastConnected = _lastConnected;
   //     this.NbAcces = _nbAcces;
   // }
// get
get(username: string): Femme
{
   let row = '';
   let err = '';
   let chick = new Femme();
   var jsChick = utileSql3.getChick(username);
   // let sql = 'SELECT Id, UserName, LastConnected, NbAcces FROM Femme where UserName = \'' + username + '\'';

  // db.all(sql, [], (err, rows) => 
//   db.get(sql, [], (err, row) => {
//  if (err) {
//          console.log("33 Femme.ts get() une erreur est survenue: " + err.message);
//       }
chick.FemmeId = Number(jsChick.id);
chick.UserName = String(jsChick.UserName);
chick.LastConnected = String(jsChick.LastConnected);
chick.NbAcces = Number(jsChick.NbAcces);
console.log("39 Femme.ts get() importe " + chick.UserName + ", id: " + chick.FemmeId + ", derniere connection: " + chick.LastConnected + ", nb Access: " + chick.NbAcces);



   return  chick;
} // fin de get()
// Add
// Add()
// {

// }
// // remove
// remove()
// {

// }

}