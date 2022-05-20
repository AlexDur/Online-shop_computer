import { useState } from "react";
import { createContext } from "react";

//useContext is basically leveraging useState

//the actual value to access
export const UserContext = createContext({
  currentUser: null,
  setCurrentUser: () => null,
});

//the actual component
//dot-provider is the component that will wrap around any other components that need access to the value inside
//"value" in return block will hold the actual contexter value
export const UserProvider = ({ children }) => {
  const [currentUser, setCurrentUser] = useState(null);
  const value = { currentUser, setCurrentUser };
  return <UserContext.Provider value={value}>{children}</UserContext.Provider>;
};
