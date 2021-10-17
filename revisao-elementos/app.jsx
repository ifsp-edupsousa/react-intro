var contador = 0;

/*
  A função App retorna o elemento do React que servirá de "raiz" para todos os demais elementos.
  Não altere o nome dessa função ou o código no final do arquivo não saberá qual elemento
  deve ser exibido.
*/
function App() {
  return <h1>O contador atual é {contador}</h1>
}

/*
  NÃO ALTERE O CÓDIGO ABAIXO DESSE COMENTÁRIO.
  
  O código abaixo exibe o elemento App definido acima na div "app" da página index.html. 
  Não é necessário alterar o código abaixo, a não ser que você deseje trocar o nome do 
  elemento App ou exibir o elemento em outro componente da página.
*/

// Obtém uma referência para o elemento <div id="app">
const divContainer = document.getElementById('app');
// Cria um elemento React a partir da função App
const appElement = React.createElement(App);
// Exibe o elemento React referenciado pela variável appElement
// na div referenciada por divContainer.
ReactDOM.render(appElement, divContainer);

setInterval(function incrementarContador() {
  contador++;
  console.log('O contador atual é ' + contador);
  ReactDOM.render(React.createElement(App), divContainer);
}, 1000);
