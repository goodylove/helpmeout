import { createContext, useContext, useEffect } from "react";
import {
  GoogleAuthProvider,
  signInWithRedirect,
  FacebookAuthProvider,
  onAuthStateChanged,
} from "firebase/auth";
import { auth } from "../../firebase";

export const AuthConext = createContext();

const AuthContextProvider = ({ children }) => {
  const [cureentUser, setCurrentUser] = useState({});

  useEffect(() => {
    const sub = onAuthStateChanged(auth, (user) => {
      setCurrentUser(user);
    });
    return () => sub;
  }, []);

  // signup
  const SignUp = async (email, password) => {
    try {
      const result = await createUserWithEmailAndPassword(
        auth,
        email,
        password
      );
      if (result) {
        setCurrentUser(result.user);
      }
    } catch (error) {
      console.log(error.meesage);
    }
  };

  // facebook login
  const handleFacebook = async () => {
    try {
      const provider = new FacebookAuthProvider();
      const result = await signInWithRedirect(auth, provider);
      if (result) {
        setCurrentUser(result.user);
      }
    } catch (error) {
      console.log(error.meesage);
    }
  };

  // google login
  const handleGoogle = async () => {
    try {
      const provider = new GoogleAuthProvider();

      const result = await signInWithRedirect(auth, provider);
      if (result) {
        setCurrentUser(result.user);
      }
    } catch (error) {
      console.log(error.meesage);
    }
  };

  const context = {
    SignUp,
    handleGoogle,
    handleFacebook,
    cureentUser,
  };
  return <AuthConext.Provider value={context}>{children}</AuthConext.Provider>;
};

export default AuthContextProvider;

export const useAuth = () => {
  return useContext(AuthConext);
};
