import { login } from "../../lib/firebase"

// função que o elemento HTML da Home do site
export function Home() {
  const container = document.createElement("div");
  container.id = "container"
  container.innerHTML = `<h1>Music Go!</h1>
    <p>Junte-se a uma <strong>rede social</strong> para mulheres amantes de música.</p><br> 
    <p>Descubra novos discos, artistas e compartilhe suas recomendações!</p>
      <form>
          <h2>Faça o seu login</h2>
          <label for="email">Digite o seu e-mail:</label>
          <input type="text" id="email" name="email"><br><br>
            <label for="password">Senha:</label>
          <input type="password" id="password" name="password"><br><br>
            <button type="submit" id="acessar">ACESSAR</button>
      </form>
            <p>É nova por aqui? <a href="#">Cadastre-se</a>.</p>
            <p>Esqueceu sua senha? <a href="#">Clique aqui</a>.</p>`
  // aqui podem ser adicionados eventos de dom (listeners, queryselector etc)
  const email = container.querySelector('#email');
  const password = container.querySelector('#password');

  const acessar = container.querySelector("#acessar");

  acessar.addEventListener("click", function (event) { 
    event.preventDefault();
    login(email.value, password.value);
  });


  return container
}



// quando a função de login for criada, chamar ela aqui no evento de click do botão de login/acessar



