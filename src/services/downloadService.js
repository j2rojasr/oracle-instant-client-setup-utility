import axios from 'axios';
import fs from 'fs';
import ProgressBar from 'progress';
import { verificarExistenciaArchivo } from '../utils/fileSystemUtils.js';
import { verificarURL } from '../utils/networkUtils.js';
import { mostrarMensaje } from '../utils/uiHelper.js';

const descargarArchivoConBarraProgreso = async (url, pathDestino) => {
  mostrarMensaje(`Iniciando descarga de: ${url}`);

  const esURLValida = await verificarURL(url);
  if (!esURLValida) {
    mostrarMensaje('No se puede descargar el archivo debido a una URL inválida o inaccesible.', 'error');
    return false;
  }

  if (await verificarExistenciaArchivo(pathDestino)) {
    mostrarMensaje('El archivo ya existe. No se descargará', 'advertencia');
    return true;
  }

  try {
    const { status, data, headers } = await axios({
      url,
      method: 'GET',
      responseType: 'stream'
    });

    if (status !== 200) {
      mostrarMensaje(`Error al descargar archivo: Estado ${status}`, 'error');
      return false;
    }

    const totalLength = headers['content-length'];
    const progressBar = new ProgressBar('-> [:bar] :percent :etas', {
      width: 50,
      complete: '█',
      incomplete: '░',
      renderThrottle: 1,
      total: totalLength ? parseInt(totalLength) : undefined
    });

    const writer = fs.createWriteStream(pathDestino);

    data.on('data', chunk => progressBar.tick(chunk.length));
    data.pipe(writer);

    await new Promise((resolve, reject) => {
      writer.on('finish', resolve);
      writer.on('error', (err) => {
        console.error(`Error durante escritura de archivo: ${err.message}`);
        fs.unlinkSync(pathDestino); // eliminar archivo parcial en caso de error
        reject(err);
      });

      data.on('error', (err) => {
        console.error(`Error durante descarga: ${err.message}`);
        writer.close();
        fs.unlinkSync(pathDestino);
        reject(err);
      });
    });

    mostrarMensaje('Descarga completada.', 'exito');
    return true;
  } catch (error) {
    mostrarMensaje(`Error durante la descarga o escritura del archivo: ${error.message}`, 'error');
    return false;
  }
};

export { descargarArchivoConBarraProgreso };

