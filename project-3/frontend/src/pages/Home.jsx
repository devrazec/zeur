import React, { useContext } from 'react';
import { useNavigate } from 'react-router-dom';
import '../assets/css/home.css';
import { GlobalContext } from '../context/GlobalContext';
import Header from '../components/Header';
import Footer from '../components/Footer';

export function Home() {
  const navigate = useNavigate();
  const { theme, setTheme } = useContext(GlobalContext);

  return (
    <>
      <Header />

      <Footer />
    </>
  );
}
