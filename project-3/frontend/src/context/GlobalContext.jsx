import React, { createContext, useState } from 'react';

export const GlobalContext = createContext();

const GlobalProvider = props => {
  const [theme, setTheme] = useState('light');
  const [user, setUser] = useState(null);
  const [menu, setMenu] = useState(false);
  const [markers, setMarkers] = useState([]);
  const [portugalGeo, setPortugalGeo] = useState(null);

  return (
    <GlobalContext.Provider
      value={{
        theme,
        setTheme,
        user,
        setUser,
        menu,
        setMenu,
        markers, setMarkers, 
        portugalGeo, setPortugalGeo,
      }}
    >
      {props.children}
    </GlobalContext.Provider>
  );
};

export default React.memo(GlobalProvider);
