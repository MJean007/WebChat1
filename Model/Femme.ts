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
       console.log('16 femme.ts');
  }


get(username: string): Femme
{
   let row = '';
   let err = '';
   let chick = new Femme();
   var jsChick = utileSql3.getChick(username);

chick.FemmeId = Number(jsChick.id);
chick.UserName = String(jsChick.UserName);
chick.LastConnected = String(jsChick.LastConnected);
chick.NbAcces = Number(jsChick.NbAcces);
console.log("39 Femme.ts get() importe " + chick.UserName + ", id: " + chick.FemmeId + ", derniere connection: " + chick.LastConnected + ", nb Access: " + chick.NbAcces);



   return  chick;
} // fin de get()


}