'use client';

import React, { useContext, useState } from 'react';
import { Dialog } from 'primereact/dialog';
import { InputText } from 'primereact/inputtext';
import { Dropdown } from 'primereact/dropdown';
import { InputTextarea } from 'primereact/inputtextarea';
import { FileUpload } from 'primereact/fileupload';
import {
  Box,
  Paper,
  Stepper,
  Step,
  StepLabel,
  TextField,
  Select,
  MenuItem,
  FormControl,
  InputLabel,
  Button,
} from '@mui/material';
import { GlobalContext } from '../context/GlobalContext';
import GoogleMap from './GoogleMap';

const DialogEvent = () => {
  const {
    dialogEvent, setDialogEvent,
    eventCategory, setEventCategory,
    eventLocation, setEventLocation,
    eventPriority, setEventPriority,
    eventDescription, setEventDescription,
    category, location, priority,
    geoEventPinLocation,
    geoEventAddressLocation,
  } = useContext(GlobalContext);

  const [activeStep, setActiveStep] = useState(0);
  const steps = ['Mapa', 'Campos', 'Upload'];

  const handleNext = () => setActiveStep((prev) => Math.min(prev + 1, steps.length - 1));
  const handleBack = () => setActiveStep((prev) => Math.max(prev - 1, 0));

  return (
    <Dialog
      header="Registro de Reclamação"
      visible={dialogEvent}
      onHide={() => setDialogEvent(false)}
      draggable={false}
      resizable={false}
      style={{ width: '100%', maxWidth: '900px', height: '90vh' }}
      contentStyle={{ height: '100%', padding: 0, overflow: 'hidden' }}
      breakpoints={{ '960px': '75vw', '641px': '100vw' }}
    >
      <Box sx={{ width: '100%', height: '100vh', p: 2, display: 'flex', flexDirection: 'column', gap: 2 }}>

        {/* Stepper */}
        <Stepper activeStep={activeStep}>
          {steps.map((label, index) => (
            <Step key={label}>
              <StepLabel
                onClick={() => setActiveStep(index)}
                sx={{ cursor: 'pointer' }}
              >
                {label}
              </StepLabel>
            </Step>
          ))}
        </Stepper>

        {/* Step Content */}
        <Box sx={{ flex: 1, mt: 2, display: 'flex', flexDirection: 'column', gap: 2 }}>

          {/* Step 1 – Map */}
          {activeStep === 0 && (
            <Paper sx={{ flex: 1, p: 2, display: 'flex', flexDirection: 'column', minHeight: 0 }}>
          
              <TextField
                label="Endereço"
                value={geoEventAddressLocation}
                fullWidth
                disabled
                sx={{ mb: 2 }}
              />
              <Box sx={{ display: 'flex', gap: 1, mb: 2 }}>
                <TextField
                  label="Latitude"
                  value={geoEventPinLocation?.lat?.toFixed(4) ?? '—'}
                  fullWidth
                  disabled
                />
                <TextField
                  label="Longitude"
                  value={geoEventPinLocation?.lng?.toFixed(4) ?? '—'}
                  fullWidth
                  disabled
                />
              </Box>
              <Box sx={{ flex: 1, minHeight: 0, height: { xs: 200, md: '100%' } }}>
                <GoogleMap style={{ width: '100%', height: '100%' }} />
              </Box>
            </Paper>
          )}

          {/* Step 2 – Form Fields */}
          {activeStep === 1 && (
            <Paper sx={{ flex: 1, p: 2, minHeight: 0, overflowY: 'auto', display: 'flex', flexDirection: 'column', gap: 2 }}>
              <FormControl fullWidth>
                <InputLabel>Categoria</InputLabel>
                <Select
                  value={eventCategory ?? ''}
                  onChange={(e) => setEventCategory(e.target.value)}
                  label="Categoria"
                  native
                >
                  <option aria-label="None" value="" />
                  {category.map((c) => (
                    <option key={c.value} value={c.value}>{c.label}</option>
                  ))}
                </Select>
              </FormControl>

              <FormControl fullWidth>
                <InputLabel>Localização</InputLabel>
                <Select
                  value={eventLocation ?? ''}
                  onChange={(e) => setEventLocation(e.target.value)}
                  label="Localização"
                  native
                >
                  <option aria-label="None" value="" />
                  {location.map((l) => (
                    <option key={l.value} value={l.value}>{l.label}</option>
                  ))}
                </Select>
              </FormControl>

              <FormControl fullWidth>
                <InputLabel>Prioridade</InputLabel>
                <Select
                  value={eventPriority ?? ''}
                  onChange={(e) => setEventPriority(e.target.value)}
                  label="Prioridade"
                  native
                >
                  <option aria-label="None" value="" />
                  {priority.map((p) => (
                    <option key={p.value} value={p.value}>{p.label}</option>
                  ))}
                </Select>
              </FormControl>

              <TextField
                label="Descrição"
                value={eventDescription ?? ''}
                onChange={(e) => setEventDescription(e.target.value)}
                multiline
                rows={4}
                fullWidth
              />
            </Paper>
          )}

          {/* Step 3 – File Upload */}
          {activeStep === 2 && (
            <Paper sx={{ flex: 1, p: 2, minHeight: 0 }}>
              <FileUpload
                name="images[]"
                url="/api/upload"
                multiple
                accept="image/*"
                chooseLabel="Imagem"
                uploadLabel="Upload"
                cancelLabel="Cancelar"
                maxFileSize={1000000}
                className="w-full"
                emptyTemplate={<p className="m-0">Arraste imagens aqui</p>}
              />
            </Paper>
          )}

        </Box>

        {/* Navigation Buttons */}
        <Box sx={{ display: 'flex', justifyContent: 'space-between', mt: 2 }}>
          <Button disabled={activeStep === 0} onClick={handleBack}>Voltar</Button>
          <Button disabled={activeStep === steps.length - 1} onClick={handleNext}>Próximo</Button>
        </Box>

      </Box>
    </Dialog>
  );
};

export default React.memo(DialogEvent);
