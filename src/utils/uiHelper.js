import chalk from 'chalk';
import inquirer from 'inquirer';

/**
 * Muestra un mensaje en la consola con el color correspondiente al tipo de mensaje.
 * @param {string} mensaje El mensaje a mostrar.
 * @param {string} tipo El tipo de mensaje ('info', 'exito', 'error', 'advertencia').
 */
const mostrarMensaje = (mensaje, tipo = 'info') => {
  const colores = {
    info: 'blue',
    exito: 'green',
    error: 'red',
    advertencia: 'yellow',
  };

  const color = colores[tipo] || 'white';
  console.log(chalk[color](mensaje));
};

const capturaPrompt = async ({ type, name, message, choices, defaultAnswer = true }) =>{
  try {
    const question = {
      type,
      name,
      message,
      choices,
      default: defaultAnswer,
    };

    const answer = await inquirer.prompt([question]);
    return answer[name];
  } catch (error) {
    console.error(`Ocurrió un error: ${error}`, 'error');
  }
};

export { capturaPrompt, mostrarMensaje };

