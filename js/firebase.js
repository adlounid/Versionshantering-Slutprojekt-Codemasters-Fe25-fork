import { initializeApp } from "https://www.gstatic.com/firebasejs/10.12.2/firebase-app.js";
import { getDatabase } from "https://www.gstatic.com/firebasejs/10.12.2/firebase-database.js";

const firebaseConfig = {
  apiKey: "AIzaSyDf01hwn1G5bKYv5us5SmIGoE2k-KjoqM8",
  authDomain: "slutprojekt-versionshant-7cdd2.firebaseapp.com",
  projectId: "slutprojekt-versionshant-7cdd2",
  storageBucket: "slutprojekt-versionshant-7cdd2.firebasestorage.app",
  messagingSenderId: "69522404366",
  appId: "1:69522404366:web:af80160f9973bc91cc785f",
  databaseURL: "https://slutprojekt-versionshant-7cdd2-default-rtdb.firebaseio.com"
};

const app = initializeApp(firebaseConfig);
const db = getDatabase(app);

export { db };