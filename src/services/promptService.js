import open from 'open';
import { appVariables } from '../config/index.js';
import { capturaPrompt } from '../utils/uiHelper.js';

const promptElegirVersionOracleInstantClient = async (versiones) => {
  const opciones = versiones.map(v => ({ name: v.version, value: v }));

  return await capturaPrompt({
    type: 'list',
    name: 'versionElegida',
    message: 'Choose Oracle Instant Client version:',
    choices: opciones,
  });
};

const promptElegirParticionWindows = async () => {
  const opciones = ['C:', 'D:', 'E:'];

  const particion = await capturaPrompt({
    type: 'list',
    name: 'particion',
    message: 'Elige la partición para crear la carpeta temporal:',
    choices: opciones,
  });

  appVariables.setConfig({ particion });

  return particion;
};

const promptMostrarOpcionesDescargaVisualStudio = async (visualStudio) => {
  const opciones = Object.keys(visualStudio.redistributableLink).map(arquitectura => ({
    name: `${arquitectura} (${visualStudio.version})`,
    value: {
      arquitectura,
      url: visualStudio.redistributableLink[arquitectura]
    }
  }));

  return await capturaPrompt({
    type: 'list',
    name: 'descargaElegida',
    message: 'Seleccione la arquitectura de Visual Studio para descargar:',
    choices: opciones,
  });
};

const promptMostrarOpcionesCarpetas = async (carpetas) => {
  const opciones = carpetas.map(carpeta => ({
    name: carpeta,
    value: carpeta
  }));

  return await capturaPrompt({
    type: 'list',
    name: 'carpeta',
    message: 'Seleccione la carpeta de Oracle Instant Client:',
    choices: opciones
  });
};

const preguntarYAbrirEnNavegador = async (url) => {
  const abrirEnNavegador = await capturaPrompt({
    type: 'confirm',
    name: 'abrirEnNavegador',
    message: '¿Desea abrir la URL en el navegador web?',
    default: true
  });

  if (abrirEnNavegador) {
    open(url);
  }

  return abrirEnNavegador;
}

const promptPresionarCualquierTeclaParaContinuar = async (mensaje = 'Presione cualquier tecla...') => {
  await capturaPrompt({
    name: 'continuar',
    message: mensaje,
  });

  return;
};

export {
  preguntarYAbrirEnNavegador, promptElegirParticionWindows, promptElegirVersionOracleInstantClient, promptMostrarOpcionesCarpetas, promptMostrarOpcionesDescargaVisualStudio,
  promptPresionarCualquierTeclaParaContinuar
};

