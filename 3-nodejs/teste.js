var fs = require('fs');

fs.mkdir('diretorio-teste', function(err) {
  if (err) {
    console.log('Erro na criação do diretório!');
    console.log(err);
  } else {
    console.log('Diretório criado com sucesso!');
  }
});

console.log('Olá Mundo!');
