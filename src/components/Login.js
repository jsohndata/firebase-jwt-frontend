import { initializeApp } from "firebase/app";
import { getAuth, GoogleAuthProvider, signInWithPopup } from "firebase/auth";

const firebaseConfig = {
  apiKey: "AIzaSyA6FhbfjTdAL2SttCdQP6UvxY-PsXtveZw",
  authDomain: "fir-jwt-frontend.firebaseapp.com",
  projectId: "fir-jwt-frontend",
  storageBucket: "fir-jwt-frontend.appspot.com",
  messagingSenderId: "493048817779",
  appId: "1:493048817779:web:48da35031ee3678c17e206",
  measurementId: "G-BE7YFTHB22"
};

export default function SecretInfo( {setIsLoggedIn} ) {

  const handleSignin = () => {
    // 1) connect to firebase project
    const app = initializeApp(firebaseConfig);
    // 2) connect to auth
    const auth = getAuth(app);
    // 3) create a provider by creating a new instance
    const provider = new GoogleAuthProvider();
    // 4) popup signin window
    // 5) handle .then and .catch
    signInWithPopup(auth, provider)
      .then( () => setIsLoggedIn(true) )
      .catch(alert)
    

  }

  return (
  <>
    <h2>Login</h2>
    <button onClick={handleSignin}>Sign In with Google</button>
  </>
  );
}