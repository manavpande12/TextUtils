import { createContext, useContext, useState } from "react";

const AlertContext = createContext();

export const AlertProvider = ({ children }) => {
  const [msg, setMsg] = useState(null);

  const showAlert = (message) => {
    setMsg(message);
    setTimeout(() => setMsg(null), 1500);
  };

  return (
    <AlertContext.Provider value={{ msg, showAlert }}>
      {children}
    </AlertContext.Provider>
  );
};

export const useAlert = () => useContext(AlertContext);
