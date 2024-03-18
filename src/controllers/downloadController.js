import path from "path";
import { appConstants, appVariables, visualStudioInfo } from '../config/index.js';
import { descargarArchivoConBarraProgreso } from '../services/downloadService.js';
import { preguntarYAbrirEnNavegador, promptMostrarOpcionesDescargaVisualStudio } from '../services/promptService.js';
import { crearCarpetaSiNoExisteAsync } from '../utils/fileSystemUtils.js';
import { mostrarMensaje } from '../utils/uiHelper.js';

class DownloadController {
  /**
  * Descarga los archivos necesarios para el Oracle Instant Client.
  * @param {Object} versionOracleInstant - Objeto que contiene las URLs de descarga.
  * @returns {Promise<Object>} Un objeto con las rutas de los archivos descargados.
  */
  async descargarOracleInstantClient(versionOracleInstant) {
    try {
      const { base, developmentAndRuntime } = versionOracleInstant;

      const pathTemporalDependencias = path.join(appVariables.getConfig().particion, appConstants.DIR_TEMP_DEPENDENCIAS);
      await crearCarpetaSiNoExisteAsync(pathTemporalDependencias);

      const urlBasicPackage = base.basicPackage.url;
      const urlSdkPackage = developmentAndRuntime.sdkPackage.url;

      const pathBasicPackage = path.join(pathTemporalDependencias, path.basename(urlBasicPackage));
      const pathSdkPackage = path.join(pathTemporalDependencias, path.basename(urlSdkPackage));

      await Promise.all([
        descargarArchivoConBarraProgreso(urlBasicPackage, pathBasicPackage),
        descargarArchivoConBarraProgreso(urlSdkPackage, pathSdkPackage)
      ]);

      mostrarMensaje('Descarga de Oracle Instant Client completada.', 'exito');

      return {
        pathBasicPackage,
        pathSdkPackage
      };
    } catch (error) {
      console.error(`Error durante la descarga: ${error.message}`);
    }
  }

  async descargarVisualStudioRedistributable(versionOracleInstant) {
    try {
      const opciones = visualStudioInfo[versionOracleInstant];
      const descargaElegida = await promptMostrarOpcionesDescargaVisualStudio(opciones);

      // TODO instalar Visual Studio Redistributable por terminal
      await preguntarYAbrirEnNavegador(descargaElegida.url);

      mostrarMensaje('Proceder con instalación de Visual Studio Redistributable');
    } catch (error) {
      console.error(`Error durante la descarga: ${error.message}`);
    }
  }
}

export default DownloadController;
