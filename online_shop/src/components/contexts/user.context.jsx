/* import { useState } from "react";
import { createContext } from "react";

//as the actual value we want to access
export const UserContext = createContext({
 currentUser: null,
 setCurrentUser: () => null,
})

//the actual component
export const UserProvider = (children) => {
    const[currentUser, setCurrentUser] = useState(null)
    const value = { currentUser, setCurrentUser}
return <UserContext.Provider value={}>{children}</UserContext.Provider>
}
 */
