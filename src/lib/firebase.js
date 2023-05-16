import { initializeApp } from "firebase/app";
import { createUserWithEmailAndPassword } from "firebase/auth";
import { getAuth } from "firebase/auth";

const firebaseConfig = {
  apiKey: "AIzaSyBDCOabATt8_vHEHcC3tx7ugb2IhONhZHw",
  authDomain: "social-network-c2179.firebaseapp.com",
  projectId: "social-network-c2179",
  storageBucket: "social-network-c2179.appspot.com",
  messagingSenderId: "493721477615",
  appId: "1:493721477615:web:e2234f19cc239df56f161a"
};
// Inicializa o FireBase
const app = initializeApp(firebaseConfig);

//Criando a função de SignIn (register)
const auth = getAuth();
  
export function register(email, password) {
  createUserWithEmailAndPassword(auth, email, password)
  .then((response) => {
    window.location.hash = ("#feed")
    console.log("Conta criada com sucesso!")
  })
  .catch((error) => {
    const errorCode = error.code;
    const errorMessage = error.message;
    console.log(errorCode, errorMessage);
  });
}

/*
1. criar uma função de login que recebe e-mail e senha por parametro
2. essa função vai chamar o sign in, email e senha
3. criar uma função de cadastro que também recebe e-mail, senha, nome de usuário pro cadastro
4. essa função vai chamar o createUserWithEmailAndPassword no firebase
5. configurar firebase

*/