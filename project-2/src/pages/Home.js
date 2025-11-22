import React, { useContext } from 'react';
import { useNavigate } from 'react-router-dom';

import { GlobalContext } from "../context/GlobalContext";
import Header from "../components/Header";
import Footer from "../components/Footer";

export function Home() {

    const navigate = useNavigate();
    const { theme, setTheme } = useContext(GlobalContext);

    return (
        <div>
            <Header />

            <p>Home Page Theme: {theme}</p>

            <button onClick={() => setTheme(theme === 'light' ? 'dark' : 'light')}>
                Change Theme
            </button>

            <button onClick={() => navigate('/about')}>
                Go to About
            </button>

             <Footer />
        </div>
    );
}