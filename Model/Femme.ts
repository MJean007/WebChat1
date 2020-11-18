
// import * as sqlite3 from 'sqlite3';
// import { Database } from 'sqlite3';
const sqlite3 = require('sqlite3').verbose();
let db = new sqlite3.Database('../db/chaturdb.db');
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
   let sql = 'SELECT Id, UserName, LastConnected, NbAcces FROM Femme where UserName = \'' + username + '\'';

  // db.all(sql, [], (err, rows) => 
  db.get(sql, [], (err, row) => {
 if (err) {
         console.log("33 Femme.ts get() une erreur est survenue: " + err.message);
      }
         chick.FemmeId = Number(row.id);
         chick.UserName = String(row.UserName);
         chick.LastConnected = String(row.LastConnected);
         chick.NbAcces = Number(row.NbAcces);
         console.log("39 Femme.ts get() importe " + chick.UserName + ", id: " + chick.FemmeId + ", derniere connection: " + chick.LastConnected + ", nb Access: " + chick.NbAcces);

  });

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