    import firebase from 'firebase/compat/app';
    import 'firebase/compat/auth';
    import 'firebase/compat/firestore';
    import 'firebase/compat/database';

    const firebaseConfig = {
        apiKey: "AIzaSyCvwtGXD_sF8MCAdb5oOX1o4k0oqqSIYWU",
        authDomain: "nikhil-firebase-b1c9d.firebaseapp.com",
        databaseURL: "https://nikhil-firebase-b1c9d-default-rtdb.firebaseio.com",
        projectId: "nikhil-firebase-b1c9d",
        storageBucket: "nikhil-firebase-b1c9d.firebasestorage.app",
        messagingSenderId: "730371940721",
        appId: "1:730371940721:web:3be815e7296e69ad6f56d0"
    };

    const fireDb = firebase.initializeApp(firebaseConfig);
    export default fireDb.database().ref();