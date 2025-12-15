'use client';

import React, { useContext, useState, useRef, useEffect } from 'react';
import { GlobalContext } from '../context/GlobalContext';
import { Dialog } from 'primereact/dialog';
import { TabMenu } from 'primereact/tabmenu';
import { Button } from 'primereact/button';
import { FileUpload } from 'primereact/fileupload';
import { Image } from 'primereact/image';

import GoogleMap from './GoogleMap';

const DialogStepper = () => {
  const { dialogStepper, setDialogStepper } = useContext(GlobalContext);
  const [activeIndex, setActiveIndex] = useState(0);

  const items = [
    { label: 'Geo Localização', icon: 'pi pi-map' },
    { label: 'Informações', icon: 'pi pi-info-circle' },
    { label: 'Fotos', icon: 'pi pi-image' },
    { label: 'Enviar', icon: 'pi pi-send' },
  ];

  const isMobile = /Android|iPhone|iPad|iPod/i.test(navigator.userAgent);

  // FileUpload and camera
  const fileUploadRef = useRef(null);
  const cameraInputRef = useRef(null);
  const videoRef = useRef(null);
  const canvasRef = useRef(null);
  const [showCamera, setShowCamera] = useState(false);
  const [files, setFiles] = useState([]);

  // Add files to state and FileUpload UI
  const addFile = file => {
    setFiles(prev => {
      const newFiles = [...prev, file];
      if (fileUploadRef.current) {
        fileUploadRef.current.setFiles(newFiles);
      }
      return newFiles;
    });
  };

  // Capture photo from webcam
  const capturePhoto = () => {
    const video = videoRef.current;
    const canvas = canvasRef.current;

    canvas.width = video.videoWidth;
    canvas.height = video.videoHeight;

    canvas.getContext('2d').drawImage(video, 0, 0);

    canvas.toBlob(blob => {
      if (!blob) return;
      const file = new File([blob], `photo-${Date.now()}.jpg`, {
        type: 'image/jpeg',
      });
      addFile(file);
      setShowCamera(false);
    }, 'image/jpeg');
  };

  // Webcam stream
  useEffect(() => {
    if (!showCamera) return;
    navigator.mediaDevices.getUserMedia({ video: true }).then(stream => {
      videoRef.current.srcObject = stream;
      videoRef.current.play();
    });

    return () => {
      videoRef.current?.srcObject?.getTracks().forEach(t => t.stop());
    };
  }, [showCamera]);

  const goNext = () => setActiveIndex(i => Math.min(i + 1, items.length - 1));
  const goBack = () => setActiveIndex(i => Math.max(i - 1, 0));

  const uploadFiles = async () => {
    if (files.length === 0) return;
    const formData = new FormData();
    files.forEach(f => formData.append('images[]', f));

    await fetch('/api/upload', { method: 'POST', body: formData });
    setFiles([]);
  };

  return (
    <>
      <Dialog
        header="Registro de Reclamação"
        draggable={false}
        resizable={false}
        visible={dialogStepper}
        onHide={() => {
          setDialogStepper(false);
          setFiles([]); // Clear files when closing
          fileUploadRef.current?.clear(); // Reset FileUpload UI
        }}
        className="w-full md:w-6"
        breakpoints={{ '960px': '75vw', '641px': '100vw' }}
      >
        <div className="flex flex-column gap-3">
          {/* TabMenu */}
          <TabMenu
            model={items}
            activeIndex={activeIndex}
            onTabChange={e => setActiveIndex(e.index)}
          />

          {/* Tab content */}
          <div className="flex flex-column gap-3 min-h-[350px]">
            {/* MAP */}
            {activeIndex === 0 && (
              <div className="flex flex-column gap-3">
                <div className="border-2 border-dashed surface-border border-round surface-ground h-80">
                  <GoogleMap />
                </div>
                <div className="flex justify-end mt-2">
                  <Button
                    label="Avançar"
                    icon="pi pi-arrow-right"
                    iconPos="right"
                    onClick={goNext}
                  />
                </div>
              </div>
            )}

            {/* INFO */}
            {activeIndex === 1 && (
              <div className="flex flex-column gap-3">
                <div className="border-2 border-dashed surface-border border-round surface-ground p-4 h-80 overflow-y-auto">
                  <span>Formulário de informações aqui</span>
                </div>
                <div className="flex justify-between mt-2">
                  <Button
                    label="Voltar"
                    icon="pi pi-arrow-left"
                    severity="secondary"
                    onClick={goBack}
                  />
                  <Button
                    label="Avançar"
                    icon="pi pi-arrow-right"
                    iconPos="right"
                    onClick={goNext}
                  />
                </div>
              </div>
            )}

            {/* PHOTOS */}
            {activeIndex === 2 && (
              <div className="flex flex-column gap-3">
                <div className={activeIndex === 2 ? 'block' : 'hidden'}>
                  <div className="border-2 border-dashed surface-border border-round surface-ground p-4 h-80 overflow-y-auto">
                    {/* FileUpload */}
                    <FileUpload
                      ref={fileUploadRef}
                      customUpload
                      multiple
                      files={files}
                      onSelect={e => setFiles(prev => [...prev, ...e.files])} // add new files
                      onRemove={e =>
                        setFiles(prev => prev.filter(f => f !== e.file))
                      } // remove
                      onClear={() => setFiles([])} // clear all
                      uploadHandler={async () => {
                        const formData = new FormData();
                        files.forEach(file =>
                          formData.append('images[]', file)
                        );
                        await fetch('/api/upload', {
                          method: 'POST',
                          body: formData,
                        });
                        // optional: keep files after upload or clear only on dialog close
                      }}
                      chooseLabel="Adicionar"
                      uploadLabel="Enviar"
                      cancelLabel="Limpar"
                      accept="image/*"
                      className="w-full"
                      itemTemplate={(file, props) => {
                        const objectURL = URL.createObjectURL(file);
                        return (
                          <div className="flex flex-col items-center m-2">
                            <Image
                              src={objectURL}
                              alt={file.name}
                              width="100px"
                              className="w-16 h-16 object-cover border-round mb-2"
                            />
                            <div className="flex gap-1">
                              <Button
                                icon="pi pi-times"
                                className="p-button-rounded p-button-danger p-button-text"
                                onClick={() => props.onRemove(file)}
                              />
                            </div>
                          </div>
                        );
                      }}
                    />

                    {/* Hidden native camera input for mobile */}
                    <input
                      type="file"
                      accept="image/*"
                      capture="environment"
                      ref={cameraInputRef}
                      style={{ display: 'none' }}
                      onChange={e => {
                        const file = e.target.files?.[0];
                        if (!file) return;
                        addFile(file);
                      }}
                    />
                  </div>
                </div>

                <div className="flex justify-between mt-2">
                  <Button
                    label="Voltar"
                    icon="pi pi-arrow-left"
                    severity="secondary"
                    onClick={goBack}
                  />
                  <Button
                    label="Tirar Foto"
                    icon="pi pi-camera"
                    onClick={() => {
                      if (isMobile) cameraInputRef.current.click();
                      else setShowCamera(true);
                    }}
                  />
                  <Button
                    label="Avançar"
                    icon="pi pi-arrow-right"
                    iconPos="right"
                    onClick={goNext}
                  />
                </div>
              </div>
            )}

            {/* SEND */}
            {activeIndex === 3 && (
              <div className="flex flex-column gap-3">
                <div className="border-2 border-dashed surface-border border-round surface-ground p-4 h-80 overflow-y-auto">
                  <span>Revisão / resumo dos dados</span>
                </div>
                <div className="flex justify-between mt-2">
                  <Button
                    label="Voltar"
                    icon="pi pi-arrow-left"
                    severity="secondary"
                    onClick={goBack}
                  />
                  <Button
                    label="Enviar"
                    icon="pi pi-send"
                    severity="success"
                    onClick={() => console.log('Enviar formulário')}
                  />
                </div>
              </div>
            )}
          </div>
        </div>
      </Dialog>

      {/* Camera modal for desktop */}
      <Dialog
        header="Câmera"
        visible={showCamera}
        onHide={() => setShowCamera(false)}
        style={{ width: '400px' }}
      >
        <video ref={videoRef} className="w-full border-round" />
        <canvas ref={canvasRef} className="hidden" />
        <Button
          label="Capturar"
          icon="pi pi-camera"
          className="mt-3 w-full"
          onClick={capturePhoto}
        />
      </Dialog>
    </>
  );
};

export default React.memo(DialogStepper);
