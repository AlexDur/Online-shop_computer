import { createContext, useState, useEffect } from "react";

import {
  onAuthStateChangedListener,
  createUserDocumentFromAuth,
} from "../../utils/firebase/firebase.utils.js";

//useContext is basically leveraging useState

//the actual value to access
export const UserContext = createContext({
  setCurrentUser: () => null,
  currentUser: null,
});

//the actual component
//dot-provider is the component that will wrap around any other components that need access to the value inside
//"value" in return block will hold the actual contexter value
export const UserProvider = ({ children }) => {
  const [currentUser, setCurrentUser] = useState(null);
  const value = { currentUser, setCurrentUser };

  //centralizied majority of code related to authentication inside in this hook inside the context
  useEffect(() => {
    const unsubscribe = onAuthStateChangedListener(user => {
      if (user) {
        createUserDocumentFromAuth(user);
      }
      setCurrentUser(user);
    });
    return unsubscribe;
  }, []);
  return <UserContext.Provider value={value}>{children}</UserContext.Provider>;
};
