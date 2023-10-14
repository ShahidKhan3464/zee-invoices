import { createContext, useContext, useState } from "react";

const AppContext = createContext()

export function AppWrapper({ children }) {
  const [dueDateField, setDueDateField] = useState(true)
  const [sidebarVisibal, setSidebarVisibal] = useState(true)
  const [defaultColor, setDefaultColor] = useState("#333333")
  const [invoiceTaxField, setInvoiceTaxField] = useState(true)

  return (
    <AppContext.Provider
      value={{
        defaultColor,
        dueDateField,
        sidebarVisibal,
        invoiceTaxField,
        setDefaultColor,
        setDueDateField,
        setSidebarVisibal,
        setInvoiceTaxField,
      }}
    >
      {children}
    </AppContext.Provider>
  )
}

export function useAppContext() {
  return useContext(AppContext)
}