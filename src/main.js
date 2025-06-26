import { displayWelcomeMessage } from './app.js';
import { logMessage } from './utils.js';

import './style.css'; 

document.addEventListener('DOMContentLoaded', () => {
  displayWelcomeMessage('#app', 'A automação está funcionando!');
  logMessage('Aplicação inicializada com sucesso.');
});