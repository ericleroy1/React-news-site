import firebase from "firebase/app";
import "firebase/firestore";

const firebaseConfig = {
    apiKey:"AIzaSyBZBoN6p2_Ftm3WfREz_Rp_NPeauABcDLE",
    authDomain:"react-news-site-acd3c.firebaseapp.com",
    projectId: "react-news-site-acd3c",
    storageBucket: "react-news-site-acd3c.appspot.com",
    messagingSenderId: "258992817934",
    appId: "1:258992817934:web:c918bc5cd11da4e33e795f",
    measurementId: "G-S7MHDZ0ZLN"
};

firebase.initializeApp(firebaseConfig)

export default firebase