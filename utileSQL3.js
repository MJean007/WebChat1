// fonction pour retourner les informations d'une femme
// retourne un array
const sqlite3 = require('sqlite3').verbose();
// const sqlite3 = require('../node_modules/sqlite3/sqlite3').verbose();
// import * as sqlite3 from '../node_modules/sqlite3/lib/sqlite3';
var db = new sqlite3.Database('chaturdb.db');

var debug = 1;
if (debug)
{
 console.log('9 utileSQL3.js ');
}

function getChick(username)
{
   var debug = 1;
   // const sqlite3 = require('./node_modules/sqlite3/lib/sqlite3').verbose();
   // let db = new sqlite3.Database('../db/chaturdb.db');
   // var sql =  'SELECT Id, UserName, LastConnected, NbAcces FROM Femme where UserName = \'' + username + '\'';
   var sql =  'SELECT Id,  LastConnected, NbAcces FROM Femme where UserName = ?';
   var returnedChic = '';
  if (debug)
  {
     console.log('13 utileSQL3.js username: '  +  username);
  }

   db.get(sql, [username], (err, row) => {
      // process the row here 
      console.log('18, utileSQL3.js retourne les info de la femme: id: ' + row.ID + ', \nlast connected:' + row.LastConnected + ', \nb acces: ' + row.NbAcces);
      returnedChic = '{ "id": row.ID, "LastConnected": row.LastConnected, "NbAcces": row.NbAcces }';
  });
  if (err) {
     if (debug)
     {
      console.log('22 utileSQL3.js, il y a eu une erreur: ' + err.message);
     }
     
   return console.error(err.message);
 } 
    // close the database connection
    db.close();

if (debug)
{
    console.log('34 utileSQL3.js, retourne ' + returnedChic);
}

return JSON.parse(returnedChic);
}