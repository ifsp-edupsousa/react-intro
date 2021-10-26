var addDays = require('date-fns/addDays');

var hoje = new Date();
console.log('Hoje é ' + hoje.toISOString());
var amanha = addDays(hoje, 1);
console.log('Amanhã será ' + amanha.toISOString());
