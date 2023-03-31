import { getAuth } from "firebase/auth";
import { initializeApp } from "firebase/app";

const firebaseConfig = {
  apiKey: "AIzaSyBkszw5OMcbuyfF65EE-Br09JxQiEatQ78",
  authDomain: "chat-2e657.firebaseapp.com",
  projectId: "chat-2e657",
  storageBucket: "chat-2e657.appspot.com",
  messagingSenderId: "248399383407",
  appId: "1:248399383407:web:aeb0926da61383cc2d369a"
};

const app = initializeApp(firebaseConfig);
export const firebaseAuth = getAuth(app);
