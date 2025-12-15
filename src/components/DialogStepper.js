'use client';

import React, { useContext, useState, useRef, useEffect } from 'react';
import { GlobalContext } from '../context/GlobalContext';
import { Dialog } from 'primereact/dialog';
import { Timeline } from 'primereact/timeline';
import { Card } from 'primereact/card';
import { Button } from 'primereact/button';
import { InputText } from 'primereact/inputtext';
import { Dropdown } from 'primereact/dropdown';
import { InputTextarea } from 'primereact/inputtextarea';
import { FileUpload } from 'primereact/fileupload';
import { FloatLabel } from 'primereact/floatlabel';
import { Fieldset } from 'primereact/fieldset';

import GoogleMap from './GoogleMap';

const DialogStepper = () => {
  const {
    dialogStepper,
    setDialogStepper,
    eventCategory,
    setEventCategory,
    eventLocation,
    setEventLocation,
    eventPriority,
    setEventPriority,
    eventDescription,
    setEventDescription,
    category,
    location,
    priority,
    geoEventPinLocation,
    geoEventAddressLocation,
  } = useContext(GlobalContext);

  return (
    <Dialog
      header="Registro de Reclamação"
      headerStyle={{ backgroundColor: '#003C32', color: 'white' }}
      draggable={false}
      resizable={false}
      visible={dialogStepper}
      onHide={() => {
        if (!dialogStepper) return;
        setDialogStepper(false);
      }}
      className="custom-p-dialog"
      style={{ width: '50vw' }}
      breakpoints={{ '960px': '75vw', '641px': '100vw' }}
    >
      <div style={{ overflowY: 'auto', maxHeight: '70vh' }}>
        <div className="card mb-4 mt-4">
          <Fieldset legend="1 - Geo Localização" className="custom-p-fieldset">
            <p className="m-0 mb-4">
              Mova o pino vermelho no mapa para macar sua localização ou clique
              no icone <i class="pi pi-map-marker"></i> para atualização e
              confirme o endereço abaixo do mapa se está correto.
            </p>
            <GoogleMap />
            <FloatLabel className="mt-5">
              <InputText
                id="endereco"
                value={geoEventAddressLocation}
                disabled
                placeholder=""
                className="w-full"
              />
              <label htmlFor="endereco">Endereço</label>
            </FloatLabel>
            <div className="p-inputgroup flex-1 mt-5">
              <FloatLabel>
                <InputText
                  id="latitude"
                  value={geoEventPinLocation?.lat?.toFixed(4) ?? '—'}
                  disabled
                  placeholder=""
                  className="w-full"
                />
                <label htmlFor="latitude">Latitude</label>
              </FloatLabel>

              <FloatLabel>
                <InputText
                  id="longitude"
                  value={geoEventPinLocation?.lng?.toFixed(4) ?? '—'}
                  disabled
                  placeholder=""
                  className="w-full"
                />
                <label htmlFor="longitude">Longitude</label>
              </FloatLabel>
            </div>
          </Fieldset>
        </div>

        <div className="card mb-4">
          <Fieldset legend="2 - Informação" className="custom-p-fieldset">
            <p className="m-0 mb-4">
              Selecione as opções relacionadas com a reclamação e escreva no
              campo Descrição mais detalhes.
            </p>
            <FloatLabel className="mt-5">
              <Dropdown
                inputId="categoria"
                value={eventCategory}
                onChange={e => setEventCategory(e.value)}
                options={category}
                optionLabel="label"
                showClear
                appendTo={() => document.body}
                placeholder=""
                className="w-full"
              />
              <label htmlFor="categoria">Categoria</label>
            </FloatLabel>

            <FloatLabel className="mt-5">
              <Dropdown
                inputId="localizacao"
                value={eventLocation}
                onChange={e => setEventLocation(e.value)}
                options={location}
                optionLabel="label"
                showClear
                filter
                appendTo={() => document.body}
                placeholder=""
                className="w-full"
              />
              <label htmlFor="localizacao">Localização</label>
            </FloatLabel>

            <FloatLabel className="mt-5">
              <Dropdown
                inputId="prioridade"
                value={eventPriority}
                onChange={e => setEventPriority(e.value)}
                options={priority}
                optionLabel="label"
                showClear
                appendTo={() => document.body}
                placeholder=""
                className="w-full"
              />
              <label htmlFor="prioridade">Prioridade</label>
            </FloatLabel>

            <FloatLabel className="mt-5">
              <InputTextarea
                id="descricao"
                autoResize
                value={eventDescription}
                onChange={e => setEventDescription(e.target.value)}
                rows={4}
                placeholder=""
                className="w-full"
              />
              <label htmlFor="descricao">Descrição</label>
            </FloatLabel>
          </Fieldset>
        </div>
        <div className="card mb-4 mt-4">
          <Fieldset legend="3 - Foto" className="custom-p-fieldset">
            <p className="m-0 mb-4">
              Inclua fotos sobre a reclamação e clique no botão upload.
            </p>
            <FileUpload
              name="images[]"
              //url="/api/upload"
              multiple
              accept="image/*"
              chooseLabel="Fotos"
              uploadLabel="Upload"
              cancelLabel="Cancelar"
              maxFileSize={1000000}
              className="w-full"
              emptyTemplate={<p className="m-0">Arraste fotos aqui!</p>}
            />
          </Fieldset>
        </div>

        <div className="card mb-4 mt-4">
          <Fieldset legend="4 - Confirmar" className="custom-p-fieldset">
            <p className="m-0 mb-4">
              Verifique se todas as informações estão corretas e clique enviar.
            </p>
            <Button
              label="Enviar"
              icon="pi pi-send"
              style={{ width: '120px', height: '43px' }}
              onClick={() => console.log('Enviar formulário')}
            />
          </Fieldset>
        </div>
      </div>
    </Dialog>
  );
};

export default React.memo(DialogStepper);
