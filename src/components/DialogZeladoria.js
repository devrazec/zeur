'use client';

import React, { useContext } from 'react';
import { GlobalContext } from '../context/GlobalContext';
import { Dialog } from 'primereact/dialog';

const DialogZeladoria = () => {
  const {
    dialogZeladoria, setDialogZeladoria,
  } = useContext(GlobalContext);

  return (
    <div className="card flex justify-content-center">
      <Dialog header="Zeladoria Urbana" draggable={false} resizable={false} visible={dialogZeladoria} onHide={() => { if (!dialogZeladoria) return; setDialogZeladoria(false); }}
        style={{ width: '50vw' }} breakpoints={{ '960px': '75vw', '641px': '100vw' }}>
        <div style={{ overflowY: "auto", maxHeight: "70vh" }}>

          <div class="surface-overlay border-round min-h-full py-0">
            <p class="text-justify">
              As 32 Subprefeituras de São Paulo, entre outras atribuições, têm o papel de receber pedidos e reclamações da população, solucionar os problemas apontados, como cuidar da manutenção do sistema viário, da rede de drenagem, limpeza urbana, vigilância sanitária e epidemiológica entre outros. Compete ainda às Subprefeituras a representação do poder público municipal na área geográfica sob sua jurisdição; a fiscalização do cumprimento das leis, regulamentos, normas e posturas municipais, notadamente em relação ao uso e à ocupação do solo (fiscalização de obras e edificações residenciais, instalações de comércio e de serviços de pequeno porte), bem como, em relação à limpeza pública, a varrição de ruas, a conservação de jardins e de áreas verdes públicas de pequena extensão.
            </p>
            <p class="text-justify">
              A Secretaria Municipal das Subprefeituras (SMSUB), por sua vez, tem como função dar apoio gerencial e administrativo às decisões do Prefeito sobre o desempenho das Subprefeituras e suas solicitações; realizar o acompanhamento gerencial das metas e atividades das Subprefeituras; criar indicadores para dimensionar os recursos humanos e materiais para as subprefeituras, a partir de padrões de qualidade e da realidade de cada região; propor ao prefeito e articular soluções para o bom desenvolvimento de relações intersetoriais e institucionais mantidas pela Subprefeitura; e avaliar o cumprimento das diretrizes gerais e setoriais na ação, no planejamento e na gestão regional exercida pelas Subprefeituras.
            </p>
            <p class="text-left">
              https://
              <a href="https://prefeitura.sp.gov.br/web/se/w/zeladoria_urbana/68018" target="_blank" rel="noopener noreferrer">
                prefeitura.sp.gov.br
              </a>
            </p>
          </div>
        </div>
      </Dialog>
    </div>
  );
};

export default React.memo(DialogZeladoria);
