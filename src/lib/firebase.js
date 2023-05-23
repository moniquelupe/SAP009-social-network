import { initializeApp } from "firebase/app";
import { getAuth, createUserWithEmailAndPassword, signInWithEmailAndPassword } from "firebase/auth";
import { getFirestore, collection, addDoc } from "firebase/firestore";
import { getDocs, onSnapshot } from "firebase/firestore";

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
const db = getFirestore(app);

//Criando a função de Cadastro (register)
const auth = getAuth();

export function register(email, password) {
  createUserWithEmailAndPassword(auth, email, password)
    .then((response) => {
      window.location.hash = ("#feed")
      alert("Conta criada com sucesso!")
    })
    .catch((error) => {
      const errorCode = error.code;
      const errorMessage = error.message;
      console.log(errorCode, errorMessage);
    });
}
//Criando a função de login (SignIn)
export function login(email, password) {
  signInWithEmailAndPassword(auth, email, password)
    .then((userCredential) => {
      const user = userCredential.user;
      window.location.hash = "#feed";
      alert("Login realizado com sucesso!");
    })
    .catch((error) => {
      const errorCode = error.code;
      const errorMessage = error.message;
      console.log(errorCode, errorMessage);
    });
}

//Função de adicionar posts ao banco de dados do firestore
export async function adicionarPost(PostText) {
  const postsCollection = await addDoc(collection(db, "postsFeed"), {
    date: new Date(),
    post: PostText,
    username: auth.currentUser.displayName,
  });
}

//Função printar posts no feed
export const printPost = () => getDocs(collection(db, "postsFeed"));

//Função que atualiza automaticamente os posts no feed, sem precisar recarregar a página
export const onPost = () => console.log('onPost')

export {
  collection,
  db
}
