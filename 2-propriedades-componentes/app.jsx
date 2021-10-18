const classeColuna = 'col';

function Nome(props) {
  const nome = props.nome;

  return (
    <div className="row">
      <div className={classeColuna}>Nome:</div>
      <div className={classeColuna}>{nome}</div>
    </div>
  );
}

function Idade(propriedades) {
  const idade = propriedades.idade;

  return (
    <div className="row">
      <div className={classeColuna}>Idade:</div>
      <div className={classeColuna}>{idade}</div>
    </div>
  );
}

function DetalhesUsuario(props) {
  const usuario = props.usuario;

  return (
    <div className="container">
      <Nome nome={usuario.nome} />
      <Idade idade={usuario.idade} />
    </div>
  );
}

/*
  A função App retorna o elemento do React que servirá de "raiz" para todos os demais elementos.
  Não altere o nome dessa função ou o código no final do arquivo não saberá qual elemento
  deve ser exibido.
*/
function App() {
  const usuario = {
    nome: 'Marcos',
    idade: 30
  };

  const outroUsuario = {
    nome: 'Ana',
    idade: 22
  };

  return (
    <div>
      <DetalhesUsuario usuario={usuario} />
      <DetalhesUsuario usuario={outroUsuario} />
    </div>
  )
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
