import fs, { promises as fsPromises } from 'fs';
import path from "path";

/**
 * Valida si una ruta es segura y bien formada.
 * @param {string} ruta La ruta a validar.
 * @returns {boolean} Verdadero si la ruta es válida; falso de lo contrario.
 */
const esRutaValida = (ruta) => {
  if (typeof ruta !== 'string' || ruta.trim() === '') {
    console.error('La ruta proporcionada está vacía o no es una cadena.');
    return false;
  }

  if (/(\.\.(\\|\/))|((\\|\/)\.\.)/.test(ruta)) {
    console.error('La ruta no debe contener referencias a directorios superiores.');
    return false;
  }

  return true;
};

const verificarExistenciaArchivo = async (ruta) => {
  try {
    if (!esRutaValida(ruta)) {
      return false;
    }

    return await fsPromises.access(ruta, fs.constants.F_OK).then(() => true).catch(() => false);
  } catch (error) {
    console.error(`Error al verificar existencia de archivo: ${error.message}`);
  }
};

/**
 * Crea una carpeta en la ruta especificada si no existe.
 *
 * @param {string} ruta La ruta donde se creará la carpeta.
 */
const crearCarpetaSiNoExisteAsync = async (ruta) => {
  try {
    const existe = await verificarExistenciaArchivo(ruta);

    if (!existe) {
      await fsPromises.mkdir(ruta, { recursive: true });
    }
  } catch (error) {
    console.error(`Error al crear la carpeta: ${error.message}`);
  }
};

/**
 * Filtra y retorna los nombres de los directorios o archivos en una ruta específica.
 * @param {string} ruta La ruta a leer.
 * @param {Function} filtro La función de filtrado para aplicar a los elementos.
 * @returns {Promise<string[]>} Promesa que resuelve a una lista de nombres de elementos.
 */
const filtrarDirents = async (ruta, filtro) => {
  if (!esRutaValida(ruta)) {
    return [];
  }

  try {
    const dirents = await fsPromises.readdir(ruta, { withFileTypes: true });
    return dirents.filter(filtro).map(dirent => dirent.name);
  } catch (error) {
    console.error(`Error al leer ${filtro === dirent.isDirectory ? 'directorios' : 'archivos'} en la ruta ${ruta}: ${error}`);
    return [];
  }
};

const leerCarpetas = async (ruta) => {
  return filtrarDirents(ruta, dirent => dirent.isDirectory());
}

const leerArchivos = async (ruta) => {
  return filtrarDirents(ruta, dirent => dirent.isFile());
}

const obtenerOraclePath = (particion) => {
  return path.join(particion, 'Oracle');
};

const unirRutas = (base, ruta) => {
  if (!esRutaValida(ruta)) {
    return null;
  }

  const esRutaAbsoluta = path.isAbsolute(ruta);
  if (esRutaAbsoluta) {
    return ruta;
  }

  return path.join(base, ruta);
};

export { crearCarpetaSiNoExisteAsync, esRutaValida, leerArchivos, leerCarpetas, obtenerOraclePath, unirRutas, verificarExistenciaArchivo };

