// fonction pour retourner les informations d'une femme
// retourne un array
function getChick(username)
{
   var sql =  'SELECT Id, UserName, LastConnected, NbAcces FROM Femme where UserName = \'' + username + '\'';

}