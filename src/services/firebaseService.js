import firebase from "firebase/app";
import "firebase/messaging";

const firebaseConfig = {
  apiKey: "AIzaSyC7_0sckkIZWMRfyYHd9vgy0XhS5bMeug8",
  authDomain: "expense-tracker-pwa-ts.firebaseapp.com",
  projectId: "expense-tracker-pwa-ts",
  storageBucket: "expense-tracker-pwa-ts.appspot.com",
  messagingSenderId: "89749151984",
  appId: "1:89749151984:web:7c5737ba9298e9eeb72235",
};

firebase.initializeApp(firebaseConfig);
const messaging = firebase.messaging();

export const initNotification = () => {
  Notification.requestPermission().then((permission) => {
    console.log(permission);

    if (permission === "granted") {
      messaging
        .getToken()
        .then((currentToken) => {
          if (currentToken) {
            console.log("Token => ", currentToken);
          } else {
            // Show permission request.
            console.log(
              "No registration token available. Request permission to generate one."
            );
          }
        })
        .catch((err) => {
          console.log("An error occurred while retrieving token. ", err);
        });
    }
  });
};
