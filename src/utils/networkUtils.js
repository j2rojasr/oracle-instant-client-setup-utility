import axios from 'axios';

const esURLValida = (url) => {
  try {
    new URL(url);
    return true;
  } catch (error) {
    return false;
  }
};

const verificarURL = async (url, opciones = {}) => {
  if (!esURLValida(url)) {
    console.error('URL inválida.');
    return false;
  }

  try {
    const config = { ...opciones, url, method: 'head', timeout: 5000, maxRedirects: 5 };
    const respuesta = await axios(config);
    return respuesta.status >= 200 && respuesta.status < 400;
  } catch (error) {
    console.error(`Error al verificar URL: ${error.message}`);
    return false;
  }
};

export { verificarURL };

