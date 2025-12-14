'use client';

import React, { useContext, useState } from 'react';
import { GlobalContext } from '../../context/GlobalContext';
import { InputText } from 'primereact/inputtext';
import { Dropdown } from 'primereact/dropdown';
import { InputTextarea } from 'primereact/inputtextarea';
import { FileUpload } from 'primereact/fileupload';
import { TabMenu } from 'primereact/tabmenu';
import { FloatLabel } from 'primereact/floatlabel';
import GoogleMap from '../../components/GoogleMap';

const EventPage = () => {
  const {
    eventCategory, setEventCategory,
    eventLocation, setEventLocation,
    eventPriority, setEventPriority,
    eventDescription, setEventDescription,
    category, location, priority,
    geoEventPinLocation, geoEventAddressLocation
  } = useContext(GlobalContext);

  const [activeIndex, setActiveIndex] = useState(0);

  const items = [
    { label: 'Mapa', icon: 'pi pi-map' },
    { label: 'Evento', icon: 'pi pi-pencil' },
    { label: 'Imagens', icon: 'pi pi-image' }
  ];

  return (
    <div className="flex flex-col h-screen p-4 gap-4">

      {/* TabMenu */}
      <TabMenu model={items} activeIndex={activeIndex} onTabChange={(e) => setActiveIndex(e.index)} />

      {/* Tab Content */}
      <div className="flex flex-col flex-1 gap-4 overflow-auto">

        {/* Tab 1 – Map */}
        {activeIndex === 0 && (
          <div className="flex flex-col gap-3 p-4 border border-gray-300 rounded min-h-[300px]">
            <FloatLabel>
              <InputText
                id="endereco"
                value={geoEventAddressLocation}
                disabled
                placeholder="Endereço"
              />
              <label htmlFor="endereco">Endereço</label>
            </FloatLabel>

            <div className="flex gap-2">
              <FloatLabel>
                <InputText
                  id="latitude"
                  value={geoEventPinLocation?.lat?.toFixed(4) ?? '—'}
                  disabled
                  placeholder="Latitude"
                />
                <label htmlFor="latitude">Latitude</label>
              </FloatLabel>

              <FloatLabel>
                <InputText
                  id="longitude"
                  value={geoEventPinLocation?.lng?.toFixed(4) ?? '—'}
                  disabled
                  placeholder="Longitude"
                />
                <label htmlFor="longitude">Longitude</label>
              </FloatLabel>
            </div>

            <div className="flex-1 min-h-[300px]">
              <GoogleMap className="w-full h-full" />
            </div>
          </div>
        )}

        {/* Tab 2 – Event Fields */}
        {activeIndex === 1 && (
          <div className="flex flex-col gap-3 p-4 border border-gray-300 rounded">
            <FloatLabel>
              <Dropdown
                inputId="categoria"
                value={eventCategory}
                onChange={(e) => setEventCategory(e.value)}
                options={category}
                optionLabel="label"
                showClear
                appendTo={() => document.body}
                placeholder="Categoria"
              />
              <label htmlFor="categoria">Categoria</label>
            </FloatLabel>

            <FloatLabel>
              <Dropdown
                inputId="localizacao"
                value={eventLocation}
                onChange={(e) => setEventLocation(e.value)}
                options={location}
                optionLabel="label"
                showClear
                filter
                appendTo={() => document.body}
                placeholder="Localização"
              />
              <label htmlFor="localizacao">Localização</label>
            </FloatLabel>

            <FloatLabel>
              <Dropdown
                inputId="prioridade"
                value={eventPriority}
                onChange={(e) => setEventPriority(e.value)}
                options={priority}
                optionLabel="label"
                showClear
                appendTo={() => document.body}
                placeholder="Prioridade"
              />
              <label htmlFor="prioridade">Prioridade</label>
            </FloatLabel>

            <FloatLabel>
              <InputTextarea
                id="descricao"
                autoResize
                value={eventDescription}
                onChange={(e) => setEventDescription(e.target.value)}
                rows={4}
                placeholder="Descrição"
              />
              <label htmlFor="descricao">Descrição</label>
            </FloatLabel>
          </div>
        )}

        {/* Tab 3 – File Upload */}
        {activeIndex === 2 && (
          <div className="flex flex-col min-h-[300px] p-4 border border-gray-300 rounded">
            <FileUpload
              name="images[]"
              url="/api/upload"
              multiple
              accept="image/*"
              chooseLabel="Imagens"
              uploadLabel="Upload"
              cancelLabel="Cancelar"
              maxFileSize={1000000}
              className="w-full"
              emptyTemplate={<p className="m-0">Arraste imagens aqui</p>}
            />
          </div>
        )}

      </div>
    </div>
  );
};

export default EventPage;
