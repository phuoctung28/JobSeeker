import { initializeApp } from "firebase/app";
import firebaseConfig from "./configs/firebaseConfig";
import { getAuth } from "firebase/auth";
import { getStorage } from "firebase/storage";
export const firebaseApp = initializeApp(firebaseConfig);

export const auth = getAuth(firebaseApp);
export const storage = getStorage(firebaseApp);
