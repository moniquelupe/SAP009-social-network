import { Home } from './pages/home.js';
import { Cadastro } from './pages/cadastro.js';
import { Feed } from './pages/feed.js';

const main = document.getElementById('root')
const init = () => {
  window.addEventListener("hashchange", () => {
    switch(window.location.hash){
      case " ":
        main.appendChild(Home());
        break;
      case "#cadastro":
        main.appendChild(Cadastro());
        break;
      case "#feed":
        main.appendChild(Feed());
        break;
      default:
        main.appendChild(Home());
    }
  })
}

window.addEventListener("load", () => {
  document.getElementById("root").append(Home())
  init();
})
