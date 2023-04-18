export function Feed() {
  const containerFeed = document.createElement("div");
  container.id = "containerFeed"
  container.innnerHTML = `<title>A rede social para leitoras</title>
  <h1>Olá, !</h1>
  <p>Compartilhe sua opinião, indique seus livros favoritos e curta as leituras das suas amigas!</p>
  </head>

  <body>
    <div class="container2">
      <label>O que você está lendo no momento?<br>
        <textarea></textarea><br>
    </div>
    <div class="buttons">
      <button type="button">Gostei</button>
      <button type="button">Não Gostei</button>
      <button type="button">Lendo</button>
      <button type="button">Salvar</button>
    </div>`
  return containerFeed
}