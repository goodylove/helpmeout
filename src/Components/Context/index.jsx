import { createContext, useContext, useEffect, useState } from "react";
import {
  GoogleAuthProvider,
  signInWithRedirect,
  FacebookAuthProvider,
  onAuthStateChanged,
  signInWithPopup,
  createUserWithEmailAndPassword,
} from "firebase/auth";
import { auth } from "../../firebase";
import toast from "react-hot-toast";

export const AuthConext = createContext();

const AuthContextProvider = ({ children }) => {
  const [currentUser, setCurrentUser] = useState({});

  useEffect(() => {
    const sub = onAuthStateChanged(auth, (user) => {
      setCurrentUser(user);
    });
    return () => sub;
  }, []);

  // signup
  const SignUp = async (email, password) => {
    try {
      await createUserWithEmailAndPassword(auth, email, password);
    } catch (error) {
      console.log(error);
    }
  };

  // facebook login
  const handleFacebook = async () => {
    toast.error("please use google or signup button ");
  };

  // google login
  const handleGoogle = async () => {
    try {
      const provider = new GoogleAuthProvider();

      const rseult = await signInWithRedirect(auth, provider);
      if (rseult) {
        setCurrentUser(rseult.user);
      }
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <AuthConext.Provider
      value={{ SignUp, handleGoogle, handleFacebook, currentUser }}
    >
      {children}
    </AuthConext.Provider>
  );
};

export default AuthContextProvider;

export const useAuth = () => {
  return useContext(AuthConext);
};
