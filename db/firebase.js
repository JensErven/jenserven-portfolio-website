// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";

import { getAnalytics } from "firebase/analytics";
import {
  getFirestore,
  collection,
  where,
  getDocs,
  getDoc,
  query,
  limit,
  addDoc,
  serverTimestamp,
  updateDoc,
  doc,
} from "firebase/firestore";

import {
  getStorage,
  ref,
  uploadBytes,
  getDownloadURL,
  UploadTask,
  deleteObject,
} from "firebase/storage";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyADqmO-JGwCEbAlzkWkK8tENiQnff0uvNU",
  authDomain: "jenserven-portfolio.firebaseapp.com",
  projectId: "jenserven-portfolio",
  storageBucket: "jenserven-portfolio.appspot.com",
  messagingSenderId: "569438083527",
  appId: "1:569438083527:web:9da209dbe5744cdba561e2",
  measurementId: "G-S4JV7Q9T98",
};

function createFirebaseApp(config) {
  try {
    return getApp();
  } catch {
    return initializeApp(config);
  }
}

// const firebaseApp = initializeApp(firebaseConfig);

const firebaseApp = createFirebaseApp(firebaseConfig);

// Firestore exports
// Auth exports

export const auth = getAuth(firebaseApp);

export const firestore = getFirestore(firebaseApp);

// Storage exports

export const storage = getStorage(firebaseApp);
export const STATE_CHANGED = "state_changed";
