import { createContext } from "react";

export const AuthContext = createContext(null);

export function AuthContextProvider({ children }) {
  return <AuthContext.Provider value={{}}>{children}</AuthContext.Provider>;
}
