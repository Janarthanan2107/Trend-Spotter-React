import { createContext, useState, useContext, useEffect } from "react";
import {
  signInWithGooglePopup,
  createUserDocFromAuth,
  onAuthStateChangeListener,
  getUserDataFromCollection,
  signOutUser,
} from "../utils/firebase/index";

// create the context
const UserContext = createContext();

// create the context provider
const UserContextProvider = ({ children }) => {
  const [user, setUser] = useState(null);

  const googleHandler = async () => {
    const { user } = await signInWithGooglePopup();
    const userDocRef = await createUserDocFromAuth(user);
    setUser(user);
  };

  const logoutHandler = () => {
    // Reset the user state to null
    setUser(null);
    signOutUser();
  };

  useEffect(() => {
    // adding listener function
    const unSubscribe = onAuthStateChangeListener(async (user) => {
      setUser(user);
      console.log(user);
      if (user) {
        createUserDocFromAuth(user);
        const userData = await getUserDataFromCollection(user);
        setUser((prevUser) => ({ ...prevUser, ...userData })); // Update user with additional data
      }
    });

    return unSubscribe;
  }, []);

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
