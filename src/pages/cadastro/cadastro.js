import { register } from "../../lib/firebase";
import cadastro1 from "../../../fotos/cadastro1.png"

export function Cadastro() {
  const containerCadastro = document.createElement("div");
  containerCadastro.id = "containerCadastro"
  containerCadastro.innerHTML = `
  <header class="header-css">
    <button class="header-btn" 
      <a href="/#">Home</a>
    </button>
  </header>
  <h1>Seja bem-vinda!</h1>
  <img src="${cadastro1}" alt="Celular com olho no meio">
  <p>Faça o seu cadastro e comece agora a compartilhar suas músicas favoritas!</p>
  <form class="form-signup">
    <input type="text" id="name" name="name" placeholder="Nome e sobrenome"><br><br>
    <input type="text" id="username" name="username" placeholder="Nome de usuário"><br><br>
    <input type="email" id="email" name="email" placeholder="E-mail"><br><br>
    <input type="password" id="password" name="password" placeholder="Crie uma senha"><br><br>
    <button type="submit" id="submit-button">CRIAR CONTA</button>
  </form>`

  const submitButton = containerCadastro.querySelector('#submit-button');
  submitButton.addEventListener('click', function(event) {
    event.preventDefault(); // Evita que a página seja recarregada
    
    const name = containerCadastro.querySelector('#name').value; //usar depois pra resgatar nome
    const username = containerCadastro.querySelector('#username').value;
    const email = containerCadastro.querySelector('#email').value;
    const password = containerCadastro.querySelector('#password').value;

    //Regex (Expressão regular) para validar o formato do e-mail
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

    //Validações para os inputs de cadastro não ficarem 1. vazios, 2. com e-mail inválido, 3. com senha menor do que 6 caracteres
    if (name.length === 0 || username.length === 0 || email.length === 0 || password.length === 0) {
      alert('Preencha todos os campos antes de criar uma conta!');
    } else if (!emailRegex.test(email)) {
      alert('Digite um e-mail válido!');
    } else if (password.length < 6) {
      alert('A senha deve ter pelo menos 6 caracteres!');
    } else {
      register(email, password, username);
    }
  });

  return containerCadastro
}




//criar um evento a partir do botao submit (addeventlisterner) e colocar a função de register dentro


// quando a função de cadastro for criada, chamar ela aqui no evento de click do botão criar conta