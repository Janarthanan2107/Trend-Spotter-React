import { createContext, useState, useContext, useEffect } from "react";
import {
  signInWithGooglePopup,
  createUserDocFromAuth,
} from "../utils/firebase/index";

// create the context
const UserContext = createContext();

// create the context provider
const UserContextProvider = ({ children }) => {
  const [user, setUser] = useState();

  const googleHandler = async () => {
    const { user } = await signInWithGooglePopup();
    const userDocRef = await createUserDocFromAuth(user);
    setUser(user);
    logoutToHome()
  };

  const logoutHandler = () => {
    // Reset the user state to null
    setUser(null);
    logoutToHome()
  };

  //   assign the values
  const values = {
    user,
    googleHandler,
    logoutHandler,
  };

  return (
    // pass the values
    <UserContext.Provider value={values}>{children}</UserContext.Provider>
  );
};

// custom hooks
const useUserContext = () => {
  // note: custom hook is a function so we need to return the useContext
  return useContext(UserContext);
};

export { UserContextProvider, useUserContext };
