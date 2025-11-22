import React, { createContext, useState } from "react";

export const GlobalContext = createContext();

const GlobalProvider = (props) => {

  const [theme, setTheme] = useState('light');
  const [user, setUser] = useState(null);

  return (
    <GlobalContext.Provider
      value={{
        theme,
        setTheme,
        user,
        setUser,

      }}
    >
      {props.children}
    </GlobalContext.Provider>
  );
};

export default React.memo(GlobalProvider);