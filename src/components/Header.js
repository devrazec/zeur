'use client';

import React, { useContext } from 'react';
import { GlobalContext } from '../context/GlobalContext';
import MobilePanel from '../components/MobilePanel';
import SearchField from '../components/SearchField';
import FilterBar from '../components/FilterBar';
import { Image } from 'primereact/image';
import { Button } from 'primereact/button';

import DialogLogin from '../components/DialogLogin';
import DialogOcorrencia from '../components/DialogOcorrencia';
import DialogEvent from '../components/DialogEvent';
import DialogMetropolitana from '../components/DialogMetropolitana';
import DialogMunicipal from '../components/DialogMunicipal';
import DialogAbout from '../components/DialogAbout';
import DialogZeladoria from '../components/DialogZeladoria';
import DialogContact from '../components/DialogContact';
import DialogStepper from '../components/DialogStepper';

const Header = () => {
  const {
    mobileDevice,
    mobilePanel,
    setMobilePanel,
    setDialogLogin,
    setDialogMetropolitana,
    setDialogMunicipal,
    //setDialogOcorrencia,
    setDialogEvent,
    //setDialogAbout,
    setDialogZeladoria,
    setDialogContact,
    setDialogStepper,
  } = useContext(GlobalContext);

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
            src={mobileDevice ? '/img/logo250x80.png' : '/img/logo250x80.png'}
            alt="logo"
            height={mobileDevice ? '40px' : '50px'}
          />
        </div>

        {/* LEFT OF SEARCH — Deliver To */}
        <div className="hidden lg:flex text-sm flex-column ml-3">
          <div className="flex align-items-center justify-content-center">
            <Button
              className="custom-nav-btn p-button-text text-left"
              label={
                <div className="text-sm leading-tight">
                  <div>Zeladoria</div>
                  <div className="font-bold">Urbana</div>
                </div>
              }
              onClick={() => setDialogZeladoria(true)}
            />
          </div>
        </div>

        {/* SEARCH WITH AUTOCOMPLETE */}
        <div className="flex-1 mx-3">
          <div className="flex">
            <SearchField />
          </div>
        </div>

        <div className="hidden lg:flex align-items-center gap-5">
          {/* <Button
            className="custom-nav-btn p-button-text text-left"
            label={
              <div className="text-sm leading-tight">
                <div>Registre</div>
                <div className="font-bold">Ocorrência</div>
              </div>
            }
            onClick={() => setDialogOcorrencia(true)}
          /> */}

          {/* <Link
            href="/ocorrencia"
            className="custom-nav-btn p-button-text text-left block" // keep your styles
          >
            <div className="text-sm leading-tight">
              <div>Registre</div>
              <div className="font-bold">Ocorrência</div>
            </div>
          </Link> */}

          <div className="flex align-items-center justify-content-center">
            <Button
              className="custom-nav-btn p-button-text text-left"
              label={
                <div className="text-sm leading-tight">
                  <div>Registre</div>
                  <div className="font-bold">Reclamação</div>
                </div>
              }
              onClick={() => setDialogStepper(true)}
            />
          </div>
          <div className="flex align-items-center justify-content-center">
            <Button
              className="custom-nav-btn p-button-text text-left border-1"
              label={
                <div className="text-sm leading-tight">
                  <div>Registro</div>
                  <div className="font-bold">ou Login</div>
                </div>
              }
              onClick={() => setDialogLogin(true)}
            />
          </div>

          <div className="flex align-items-center justify-content-center">
            <Button
              className="custom-nav-btn p-button-text text-left"
              label={
                <div className="text-sm leading-tight">
                  <div>Região</div>
                  <div className="font-bold">Metropolitana</div>
                </div>
              }
              onClick={() => setDialogMetropolitana(true)}
            />
          </div>

          <div className="flex align-items-center justify-content-center">
            <Button
              className="custom-nav-btn p-button-text text-left"
              label={
                <div className="text-sm leading-tight">
                  <div>Secretaria</div>
                  <div className="font-bold">Municipal</div>
                </div>
              }
              onClick={() => setDialogMunicipal(true)}
            />
          </div>

          <div className="flex align-items-center justify-content-center">
            <Button
              className="custom-nav-btn p-button-text text-left"
              label={
                <div className="text-sm leading-tight">
                  <div>Entre em</div>
                  <div className="font-bold">Contato</div>
                </div>
              }
              onClick={() => setDialogContact(true)}
            />
          </div>
        </div>
      </div>

      <FilterBar />

      <MobilePanel />

      <DialogLogin />
      <DialogOcorrencia />
      <DialogEvent />

      <DialogMetropolitana />
      <DialogMunicipal />
      <DialogAbout />
      <DialogZeladoria />
      <DialogContact />
      <DialogStepper />
    </div>
  );
};

export default React.memo(Header);
