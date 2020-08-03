import { createContext, useContext } from "react";

const RoutesContext = createContext(new Map<string, string>());

export const RoutesContextProvider = RoutesContext.Provider;

export function useRouteByDocumentId() {
  return useContext(RoutesContext);
}
