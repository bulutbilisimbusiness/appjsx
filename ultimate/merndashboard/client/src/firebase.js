import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
	apiKey: import.meta.env.VITE_FIREBASE_API_KEY,
	authDomain: "mern-blog-6817c.firebaseapp.com",
	projectId: "mern-blog-6817c",
	storageBucket: "mern-blog-6817c.appspot.com",
	messagingSenderId: "111640306458",
	appId: "1:111640306458:web:0f7034cdb07eb66bb642a3",
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);
