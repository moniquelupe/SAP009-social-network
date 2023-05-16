import { register } from "../../lib/firebase";

// função que o elemento HTML da Home do site
import { getAuth, createUserWithEmailAndPassword } from "firebase/auth";

export function Cadastro() {
  const containerCadastro = document.createElement("div");
  containerCadastro.id = "containerCadastro"
  containerCadastro.innerHTML = `<h1>Seja bem-vinda!</h1>
  <p>Faça o seu cadastro e comece agora a compartilhar suas músicas favoritas!</p>
  <form>
    <input type="text" id="name" name="name" placeholder="Nome e sobrenome"><br><br>
    <input type="text" id="username" name="username" placeholder="Nome de usuário"><br><br>
    <input type="email" id="email" name="email" placeholder="E-mail"><br><br>
    <input type="password" id="password" name="password" placeholder="Crie uma senha"><br><br>
    <button type="submit" id="submit-button">CRIAR CONTA</button>
  </form>`

  const auth =  getAuth();

  const submitButton = containerCadastro.querySelector('#submit-button');
  submitButton.addEventListener('click', function(event) {
    event.preventDefault(); // Evita que a página seja recarregada
    
    const name = containerCadastro.querySelector('#name').value;
    const username = containerCadastro.querySelector('#username').value;
    const email = containerCadastro.querySelector('#email').value;
    const password = containerCadastro.querySelector('#password').value;

    
    register(email, password);
  });

  return containerCadastro
}




//criar um evento a partir do botao submit (addeventlisterner) e colocar a função de register dentro


// quando a função de cadastro for criada, chamar ela aqui no evento de click do botão criar conta