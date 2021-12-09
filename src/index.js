import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import reportWebVitals from './reportWebVitals';
import { initializeApp } from "firebase/app";

	const firebaseConfig = {
		apiKey: "AIzaSyD_6hbGWu622siHbTsjKO9xznrjmrRDQLk",
		authDomain: "mrdonalds-a0891.firebaseapp.com",
		projectId: "mrdonalds-a0891",
		storageBucket: "mrdonalds-a0891.appspot.com",
		messagingSenderId: "976840945859",
		appId: "1:976840945859:web:b6116e2f58d43706baf276"
	 };

	 const app = initializeApp(firebaseConfig);

ReactDOM.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
