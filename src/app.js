/**
 * Encontra um elemento na página e insere uma mensagem de boas-vindas.
 * @param {string} selector - O seletor CSS do elemento onde a mensagem será inserida.
 * @param {string} message - A mensagem a ser exibida.
 */
export function displayWelcomeMessage(selector, message) {
  const appElement = document.querySelector(selector);
  if (appElement) {
    const messageElement = document.createElement('p');
    messageElement.className = 'welcome-message';
    messageElement.textContent = message;
    appElement.appendChild(messageElement);
  } else {
    console.error(`Elemento com seletor "${selector}" não encontrado.`);
  }
}