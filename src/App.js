import { useState } from 'react';
import Login from "./components/Login.js";
import SecretInfo from "./components/SecretInfo.js";

import './App.css';

function App() {
  const [isLoggedIn, setIsLoggedIn] = useState(false);

  return (
    <>
    {(isLoggedIn)
      ? <SecretInfo />
      : <Login 
        setIsLoggedIn={setIsLoggedIn} />
    }
    </>
  );
}

export default App;
