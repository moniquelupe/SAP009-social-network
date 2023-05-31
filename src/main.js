import { Home } from './pages/home/home.js';
import { Cadastro } from './pages/cadastro/cadastro.js';
import { Feed, conectarDados } from './pages/feed/feed.js';


const main = document.getElementById('root');
function verificaHash() {
  main.innerHTML = ""; //impede que a página se repita
  switch(window.location.hash){
    case "#":
      main.appendChild(Home());
      break;
     case "#cadastro":
      main.appendChild(Cadastro());
      break;
    case "#feed":
      main.appendChild(Feed());
      conectarDados();
      break;
    default:
      main.appendChild(Home());
  }
}
const init = () => {
  window.addEventListener("hashchange", () => {
    verificaHash();
  })
}

window.addEventListener("load", () => {
  verificaHash();
  init();
})
