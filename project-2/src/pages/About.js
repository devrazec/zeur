import React, { useContext } from 'react';
import { useNavigate } from 'react-router-dom';

import { GlobalContext } from "../context/GlobalContext";
import Header from "../components/Header";
export function About() {

    const navigate = useNavigate();
    const { theme, setTheme } = useContext(GlobalContext);

    return (
        <div>
            <Header />

            <p>About Page Theme: {theme}</p>

            <button onClick={() => setTheme(theme === 'light' ? 'dark' : 'light')}>
                Change Theme
            </button>

            <button onClick={() => navigate('/')}>
                Got to Home
            </button>
        </div>
    );
}