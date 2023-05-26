import { createContext, useContext, useState } from "react";

const AppContext = createContext();

export function AppWrapper({ children }) {
  const [dueDateField, setdueDateField] = useState(true)
  const [defaultColor, setdefaultColor] = useState("#333333")
  const [invoiceTaxField, setinvoiceTaxField] = useState(true)

  return (
    <AppContext.Provider
      value={{
        defaultColor,
        dueDateField,
        invoiceTaxField,
        setdefaultColor,
        setdueDateField,
        setinvoiceTaxField,
      }}
    >
      {children}
    </AppContext.Provider>
  );
}

export function useAppContext() {
  return useContext(AppContext)
}