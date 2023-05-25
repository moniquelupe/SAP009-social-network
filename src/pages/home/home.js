import { login } from "../../lib/firebase"
import home1 from "../../../fotos/home1.png"
import home2 from "../../../fotos/home2.png"

// função que o elemento HTML da Home do site
export function Home() {
  const container = document.createElement("div");
  container.id = "container"
  container.innerHTML = `
    <header class="header-css">
      <button class="header-btn" 
        <a href="/#cadastro">Cadastre-se</a>
      </button>
    </header>
    <div class="home-texts">
      <h1>Music Go!</h1>
      <p>Junte-se a uma <strong>rede social</strong> para mulheres amantes de música.
      Descubra novos discos, artistas e compartilhe suas recomendações!</p>
    </div>
    <div class="home-img">
      <img src="${home1}" alt="Pessoa dançando usando headphones">
      <img src="${home2}" alt="Pessoa dançando usando headphones">
    </div>
      <div class="form-login">
        <form>
          <h2>Faça o seu login</h2>
          <input type="text" id="email" class="input-home" placeholder="Digite o seu e-mail" name="email">
          <input type="password" id="password" class="input-home" placeholder="******" name="password">
            <button type="submit" class="btn-acessar">ACESSAR</button>
        </form>
      </div>
        <div class="bottom-texts">
            <h4>É nova por aqui? <a href="#">Cadastre-se</a>.</h4>
            <h4>Esqueceu sua senha? <a href="#">Clique aqui</a>.</h4>
        </div>`
  // aqui podem ser adicionados eventos de dom (listeners, queryselector etc)
  const email = container.querySelector('#email');
  const password = container.querySelector('#password');
  

  const acessar = container.querySelector(".btn-acessar");

  acessar.addEventListener("click", function (event) { 
    event.preventDefault();
    login(email.value, password.value);
  });

  return container
}



// quando a função de login for criada, chamar ela aqui no evento de click do botão de login/acessar



