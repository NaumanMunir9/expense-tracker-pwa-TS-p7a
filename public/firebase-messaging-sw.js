importScripts("https://www.gstatic.com/firebasejs/8.2.9/firebase-app.js");
importScripts("https://www.gstatic.com/firebasejs/8.2.9/firebase-messaging.js");

const firebaseConfig = {
  apiKey: "AIzaSyC7_0sckkIZWMRfyYHd9vgy0XhS5bMeug8",
  authDomain: "expense-tracker-pwa-ts.firebaseapp.com",
  projectId: "expense-tracker-pwa-ts",
  storageBucket: "expense-tracker-pwa-ts.appspot.com",
  messagingSenderId: "89749151984",
  appId: "1:89749151984:web:7c5737ba9298e9eeb72235",
};

firebase.initializeApp(firebaseConfig);
firebase.messaging();
