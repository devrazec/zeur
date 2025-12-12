'use client';

import React, { useContext } from 'react';
import { GlobalContext } from '../context/GlobalContext';
import MobilePanel from '../components/MobilePanel';
import SearchField from '../components/SearchField';
import FilterBar from '../components/FilterBar';
import { Image } from 'primereact/image';
const Header = () => {
  const { mobileDevice, mobilePanel, setMobilePanel } =
    useContext(GlobalContext);

  return (
    <div className="surface-ground">
      {/* TOP BAR */}
      <div
        className="w-full px-3 py-1 flex align-items-center justify-content-between"
        style={{ background: '#003C32', color: 'white' }}
      >
        {/* LEFT: Logo + Hamburger on Mobile */}
        <div className="flex align-items-center gap-3">
          <i
            className="pi pi-bars text-2xl cursor-pointer block lg:hidden"
            onClick={() => setMobilePanel(!mobilePanel)}
          ></i>

          <Image
            src={
              mobileDevice
                ? '/zeur/img/logo250x80.png'
                : '/zeur/img/logo250x80.png'
            }
            alt="logo"
            height={mobileDevice ? '40px' : '50px'}
          />
        </div>

        {/* LEFT OF SEARCH — Deliver To */}
        <div className="hidden lg:flex text-sm flex-column ml-3 cursor-pointer">
          <div>Zeladoria</div>
          <div className="font-bold">Urbana</div>
        </div>

        {/* SEARCH WITH AUTOCOMPLETE */}
        <div className="flex-1 mx-3">
          <div className="flex">
            <SearchField />
          </div>
        </div>

        <div className="hidden lg:flex align-items-center gap-5">
          <div className="text-sm text-left cursor-pointer">
            <div>Reporte</div>
            <div className="font-bold">Ocorrências</div>
          </div>

          <div className="text-sm text-left cursor-pointer">
            <div>Registro</div>
            <div className="font-bold">ou Login</div>
          </div>

          <div className="text-sm text-left cursor-pointer">
            <div>Entre em</div>
            <div className="font-bold">Contato</div>
          </div>
        </div>
      </div>

      <FilterBar />

      <MobilePanel />
    </div>
  );
};

export default React.memo(Header);
