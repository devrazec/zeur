'use client';

import React, { useContext, useState } from 'react';
import { GlobalContext } from '../context/GlobalContext';
import { Dialog } from 'primereact/dialog';
import { InputText } from 'primereact/inputtext';
import { Button } from 'primereact/button';
import { InputOtp } from 'primereact/inputotp';

const DialogLogin = () => {
  const { dialogLogin, setDialogLogin } = useContext(GlobalContext);

  const [token, setTokens] = useState();

  return (
    <div className="card flex justify-content-center">
      <Dialog
        header="Autenticação"
        draggable={false}
        resizable={false}
        visible={dialogLogin}
        onHide={() => setDialogLogin(false)}
        style={{ width: '50vw', maxWidth: '400px' }}
        breakpoints={{ '960px': '75vw', '641px': '100vw' }}
      >
        <div className="flex flex-column align-items-center">
          <p className="text-color-secondary block mb-5">
            Enviaremos o código de autenticação para o seu email.
          </p>

          <div className="flex flex-column gap-2 w-full">
            <label htmlFor="email">Email</label>
            <div className="p-inputgroup flex-1">
              <InputText id="email" aria-describedby="email-help" />
              <Button label="Validar" />
            </div>
            <small id="email-help">
              Digite o seu email e clique em validar.
            </small>
          </div>

          <div className="flex flex-column gap-2 mt-5">
            <div className="p-inputgroup flex-1">
              <InputOtp
                id="code"
                aria-describedby="code-help"
                value={token}
                onChange={e => setTokens(e.value)}
                length={6}
                style={{ gap: 10 }}
                integerOnly
              />
            </div>
            <small id="code-help">Digite o código de autentição.</small>
          </div>

          <div className="flex justify-content-between mt-5 align-self-stretch">
            <Button label="Reenviar" link className="p-0"></Button>
            <Button label="Autenticar"></Button>
          </div>
        </div>
      </Dialog>
    </div>
  );
};

export default React.memo(DialogLogin);
