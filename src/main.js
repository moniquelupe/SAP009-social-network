import { Home } from './pages/home.js';
import { Cadastro } from './pages/cadastro.js';
import { Feed } from './pages/feed.js';

const init = () => {
  window.addEventListener("hashchange", () => console.log(window.location.hash))
}

window.addEventListener("load", () => {
  document.getElementById("root").append(Home())
  init();
})
