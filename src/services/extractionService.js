import AdmZip from 'adm-zip';
import { crearCarpetaSiNoExisteAsync, esRutaValida } from '../utils/fileSystemUtils.js';
import { mostrarMensaje } from '../utils/uiHelper.js';

/**
 * Extrae un archivo ZIP a la ruta de destino especificada.
 * @param {string} pathZip Ruta del archivo ZIP a extraer.
 * @param {string} pathDestino Ruta de destino para la extracción.
 */
const extraerZip = async (pathZip, pathDestino) => {
  if (!esRutaValida(pathZip) || !esRutaValida(pathDestino)) {
    return;
  }

  try {
    await crearCarpetaSiNoExisteAsync(pathDestino);

    mostrarMensaje(`Extrayendo archivo: ${pathZip}`);

    const zip = new AdmZip(pathZip);
    zip.extractAllTo(pathDestino, true);

    mostrarMensaje('Extracción completada.', 'exito');
  } catch (error) {
    console.error(`Error al extraer el archivo: ${error.message}`);
  }
};

export { extraerZip };

