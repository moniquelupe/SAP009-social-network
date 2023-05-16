// função que o elemento HTML da Home do site
export function Feed() {
  const containerFeed = document.createElement("div");
  containerFeed.id = "containerFeed"
  containerFeed.innerHTML = `<h1>Olá, !</h1>
  <p>Compartilhe sua música favorita do momento, indique playlists e curta as recomendações!</p>

    <div class="container2">
      <label>O que você está ouvindo no momento?</label><br>
        <textarea></textarea><br>
        <button type="button">Postar</button>
    </div>
    <div class="buttons">
      <button type="button">Amei</button>
      <button type="button">Ouvindo</button>
      <button type="button">Salvar</button>
    </div>
    <div>
    <button type="button">Sair</button>
    </div>`
    
  return containerFeed
}