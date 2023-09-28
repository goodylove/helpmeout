import { createContext } from "react";

export const AuthConext = createContext();

const AuthContextProvider = ({ children }) => {
  const SignIn = async (email, password) => {
    try {
      await signInWithEmailAndPassword(auth, email, password);
    } catch (error) {
      console.log(error.meesage);
    }
  };
  const context = {
    SignIn,
  };
  return <AuthConext.Provider value={context}>{children}</AuthConext.Provider>;
};

export default AuthContextProvider;
