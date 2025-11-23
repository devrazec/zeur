'use client';

import React, { createContext, useState } from 'react';

export const GlobalContext = createContext();

const GlobalProvider = props => {
  const [theme, setTheme] = useState('light');
  const [user, setUser] = useState(null);
  const [menu, setMenu] = useState(false);

  return (
    <GlobalContext.Provider
      value={{
        theme,
        setTheme,
        user,
        setUser,
        menu,
        setMenu,
      }}
    >
      {props.children}
    </GlobalContext.Provider>
  );
};

export default React.memo(GlobalProvider);
