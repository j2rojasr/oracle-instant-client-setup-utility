import { appVariables, oracleVersionInfo } from './config/index.js';
import DownloadController from './controllers/downloadController.js';
import { extraerZip } from './services/extractionService.js';
import { promptElegirParticionWindows, promptElegirVersionOracleInstantClient, promptMostrarOpcionesCarpetas, promptPresionarCualquierTeclaParaContinuar } from './services/promptService.js';
import { leerCarpetas, obtenerOraclePath, unirRutas } from './utils/fileSystemUtils.js';
import { mostrarMensaje } from './utils/uiHelper.js';

async function main() {
  try {
    const downloadCtrl = new DownloadController();

    const versionOracleInstant = await promptElegirVersionOracleInstantClient(oracleVersionInfo);

    await promptElegirParticionWindows();

    const { pathBasicPackage, pathSdkPackage } = await downloadCtrl.descargarOracleInstantClient(versionOracleInstant);

    const oraclePath = obtenerOraclePath(appVariables.getConfig().particion);

    await Promise.all([
      extraerZip(pathBasicPackage, oraclePath),
      extraerZip(pathSdkPackage, oraclePath)
    ]);

    const carpetasRutaOracle = await leerCarpetas(oraclePath);
    const carpetaSeleccionada = await promptMostrarOpcionesCarpetas(carpetasRutaOracle);

    // TODO setear valor en PATH usando la terminal, sin expandir valores ya existentes
    mostrarMensaje(`Agregue este directorio a la variable de entorno PATH: ${unirRutas(oraclePath, carpetaSeleccionada)}`, 'advertencia');

    await promptPresionarCualquierTeclaParaContinuar();

    await downloadCtrl.descargarVisualStudioRedistributable(versionOracleInstant.version);

    await promptPresionarCualquierTeclaParaContinuar();

  } catch (error) {
    mostrarMensaje('Error al ejecutar la aplicación. ' + error, 'error');
    process.exit(1);
  }
}

main();
