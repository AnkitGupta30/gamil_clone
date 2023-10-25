// import firebase from "firebase";

//  const firebaseConfig = {
//     apiKey: "AIzaSyCbwqnKMXv4NyGrjHzyVRRGblRYAPLcsUQ",
//     authDomain: "clone-a2e1d.firebaseapp.com",
//     projectId: "clone-a2e1d",
//     storageBucket: "clone-a2e1d.appspot.com",
//     messagingSenderId: "1094619760053",
//     appId: "1:1094619760053:web:d6ba053f41dc6ef5cd05fc"
//   };

//   const firebaseApp = firebase.initializeApp(firebaseConfig);
//   const db = firebaseApp.firestore();
//   const auth = firebase.auth();
//   const provider = new firebase.auth.GoogleAuthProvider();

//   export {db, auth, provider};


        import firebase from 'firebase/compat/app';
        import 'firebase/compat/auth';
        import 'firebase/compat/firestore';

const firebaseConfig = {
        apiKey: "AIzaSyCbwqnKMXv4NyGrjHzyVRRGblRYAPLcsUQ",
        authDomain: "clone-a2e1d.firebaseapp.com",
        projectId: "clone-a2e1d",
        storageBucket: "clone-a2e1d.appspot.com",
        messagingSenderId: "1094619760053",
        appId: "1:1094619760053:web:d6ba053f41dc6ef5cd05fc"
      };

      // Use this to initialize the firebase App
        const firebaseApp = firebase.initializeApp(firebaseConfig);

        // Use these for db & auth
        const db = firebase.firestore();
        const auth = firebase.auth();
        const provider = new firebase.auth.GoogleAuthProvider();

        export { auth, db, provider };
