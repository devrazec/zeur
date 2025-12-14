'use client';

import React, { useContext } from 'react';
import { GlobalContext } from '../context/GlobalContext';
import { Button } from 'primereact/button';
import { Sidebar } from 'primereact/sidebar';
import { Image } from 'primereact/image';
import { Divider } from "primereact/divider"
import DialogLogin from '../components/DialogLogin';
import DialogOcorrencia from '../components/DialogOcorrencia';
import DialogMetropolitana from '../components/DialogMetropolitana';
import DialogMunicipal from '../components/DialogMunicipal';
import DialogZeladoria from '../components/DialogZeladoria';
import DialogContact from '../components/DialogContact';
import DialogStepper from '../components/DialogStepper';


const MobilePanel = () => {
  const { mobilePanel, setMobilePanel, setDialogLogin, setDialogMetropolitana,
    setDialogMunicipal, setDialogOcorrencia, setDialogEvent, setDialogZeladoria,
    setDialogContact, setDialogStepper } = useContext(GlobalContext);

  return (
    <>
      <Sidebar
        visible={mobilePanel}
        onHide={() => setMobilePanel(false)}
        position="left"
        showCloseIcon={false} // We will make a custom close button
        style={{
          width: '80%',
          maxWidth: '250px',
          background: '#00473C',
          color: 'white',
          padding: 0, // Remove default padding
        }}
      >
        {/* HEADER */}
        <div
          style={{
            background: '#003C32',
            color: 'white',
            padding: '1rem',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'space-between',
          }}
        >
          {/* Logo */}
          <div style={{ display: 'flex', alignItems: 'center', gap: '0.5rem' }}>
            <Image src="/img/logo250x80.png" alt="Logo" height="40px" />
          </div>

          {/* Close Button */}
          <Button
            icon="pi pi-times"
            rounded
            outlined
            className="h-2rem w-2rem p-sidebar-icon p-link"
            onClick={() => setMobilePanel(false)}
            style={{
              color: 'white',
              marginRight: '0.5rem',
              fontSize: '1.3rem',
              //background: "#00473C",
            }}
          />
        </div>

        <div style={{ padding: "1.5rem" }}>
          <ul style={{ listStyle: "none", padding: 0, margin: 0 }}>

            <li className="py-2">
              {/* <Button
                className="custom-nav-btn p-button-text w-full text-left"
                icon="pi pi-pencil"
                label="Registre Ocorrência"
                onClick={() => setDialogOcorrencia(true)}
              /> */}
              <div class="flex align-items-center justify-content-center">

                <Button
                  className="custom-nav-btn p-button-text text-left"
                  icon="pi pi-cog"
                  label="Zeladoria Urbana"
                  onClick={() => setDialogZeladoria(true)}
                />
              </div>

            </li>

            <li className="py-2">
              {/* <Button
                className="custom-nav-btn p-button-text w-full text-left"
                icon="pi pi-pencil"
                label="Registre Ocorrência"
                onClick={() => setDialogOcorrencia(true)}
              /> */}
              <div class="flex align-items-center justify-content-center">

                <Button
                  className="custom-nav-btn p-button-text text-left"
                  icon="pi pi-pencil"
                  label="Registre Evento"
                  onClick={() => setDialogEvent(true)}
                />
              </div>

            </li>

            <li className="py-2">
              <div class="flex align-items-center justify-content-center">

                <Button
                  className="custom-nav-btn p-button-text w-full text-left"
                  icon="pi pi-user"
                  label="Registro ou Login"
                  onClick={() => setDialogLogin(true)}
                />
              </div>

            </li>

            <li className="py-2">
              <div class="flex align-items-center justify-content-center">

                <Button
                  className="custom-nav-btn p-button-text w-full text-left"
                  icon="pi pi-map-marker"
                  label="Região Metropolitâna"
                  onClick={() => setDialogMetropolitana(true)}
                />
              </div>

            </li>

            <li className="py-2">
              <div class="flex align-items-center justify-content-center">

                <Button
                  className="custom-nav-btn p-button-text w-full text-left"
                  icon="pi pi-building"
                  label="Secretaria Municipal"
                  onClick={() => setDialogMunicipal(true)}
                />
              </div>

            </li>

            <li className="py-2">
              <div class="flex align-items-center justify-content-center">

                <Button
                  className="custom-nav-btn p-button-text w-full text-left"
                  icon="pi pi-envelope"
                  label="Entre em Contato"
                  onClick={() => setDialogContact(true)}
                />
              </div>

            </li>

          </ul>
        </div>
      </Sidebar>

      <DialogLogin />
      <DialogOcorrencia />
      <DialogMetropolitana />
      <DialogMunicipal />
      <DialogZeladoria />
      <DialogContact />
      <DialogStepper />
    </>
  );
};

export default React.memo(MobilePanel);
