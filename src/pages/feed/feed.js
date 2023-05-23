import { adicionarPost } from "../../lib/firebase"

// função que cria o elemento HTML da Home do site
export function Feed() {
  const containerFeed = document.createElement("div");
  containerFeed.id = "containerFeed"
  containerFeed.innerHTML = `
  <body>
      <header class="header-css">
        <button class="header-btn" 
        <a href="/#feed">Feed</a>
      </header>
      <h1>Olá, !</h1>
      <p>Compartilhe sua música favorita do momento, indique playlists e curta as recomendações!</p>
      <form id="write-posts-area">
        <div class="container2">
          <label>O que você está ouvindo no momento?</label><br>
          <textarea id="post-text" rows="3" placeholder="Digite aqui sua recomendação!"></textarea><br>
          <button id="post-button">Postar</button>
        </div>
        <div class="buttons">
          <button id="edit">Editar</button>
          <button id="delete">Excluir</button>
        </div>
        <div>
          <button id="exit-button">Sair</button>
        </div>
      </form>
    </body>
  `
    const postText = containerFeed.querySelector('#post-text');
    const postButton = containerFeed.querySelector('#post-button');
    postButton.addEventListener('click', async function(event) {
      event.preventDefault(); // Evita que a página seja recarregada
      if (postText.value.length > 0) {
        await adicionarPost(postText.value);
      } else {
        alert('Digite algo no campo de texto antes de postar!');
      }
    });
  return containerFeed;
}