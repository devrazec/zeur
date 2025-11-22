import React, { useContext } from 'react';
import { useNavigate } from 'react-router-dom';

import { GlobalContext } from "../context/GlobalContext";

export function NotFound() {

  const navigate = useNavigate();
  const { theme } = useContext(GlobalContext);

  return (
    <>
      <div>
        <p>NotFound Page Theme: {theme}</p>

        <button onClick={() => navigate('/')}>
          Got to Home
        </button>
        
        <button onClick={() => navigate('/about')}>
          Got to About
        </button>
      </div>
    </>
  );
}
