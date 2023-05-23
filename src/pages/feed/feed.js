import { onSnapshot } from "firebase/firestore";
import { adicionarPost, collection, db } from "../../lib/firebase"


export const conectarDados = () => {
  const textPosted = document.getElementById('postagens');
  onSnapshot(collection(db, 'postsFeed'), (querySnapshot) => {
    let containerPost = '';

    querySnapshot.forEach((doc) => {
      const postagemFeed = doc.data();
      containerPost += `
        <div class="feed-posts">
            <textarea class="text-posted" id="text-posted" cols="50%" rows="5%" disabled>${postagemFeed.post}</textarea>
          </div>
          <div class="buttons">
            <button data-id="${doc.id}" class="edit">Editar</button>
            <button class="delete">Excluir</button>
          </div> 
          `;
    });

    //adicionar string interpolada com username e data e id dos posts (data.id)
    //event.target.dataset.id - receber o id do documento que precisa ser editado ou excluído

    textPosted.innerHTML = containerPost;
  });
};

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
        <div id="postagens">
        </div> 
        <div>
          <button id="exit-button">Sair</button>
        </div>
      </form>
  </body>
`
  const postText = containerFeed.querySelector('#post-text');
  const postButton = containerFeed.querySelector('#post-button');
  postButton.addEventListener('click', async function (event) {
    event.preventDefault(); // Evita que a página seja recarregada
    if (postText.value.length > 0) {
      await adicionarPost(postText.value);
    } else {
      alert('Digite algo no campo de texto antes de postar!');
    }
  });
  return containerFeed;
}

