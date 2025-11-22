import React, { useContext } from 'react';

import { GlobalContext } from "../context/GlobalContext";

const Header = () => {

    const { theme } = useContext(GlobalContext);

    return (
        <div>
            <p>Header Theme: {theme}</p>
        </div>
    );
}

export default React.memo(Header);