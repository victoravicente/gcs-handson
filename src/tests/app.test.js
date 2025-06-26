import { beforeEach, afterEach, test, expect } from 'vitest';
import { displayWelcomeMessage } from '../app.js';

beforeEach(() => {
  document.body.innerHTML = '<div id="app"></div>';
});

afterEach(() => {
  document.body.innerHTML = '';
});

test('deve adicionar a mensagem de boas-vindas ao elemento #app', () => {
  const message = 'Teste de Mensagem!';
  const selector = '#app';

  displayWelcomeMessage(selector, message);

  const messageElement = document.querySelector('.welcome-message');

  expect(messageElement).not.toBeNull(); // O elemento deve existir
  expect(messageElement.textContent).toBe(message); // O conteúdo deve ser o correto
});

test('não deve fazer nada se o seletor não for encontrado', () => {
    const message = 'Isso não deve aparecer';
    const selector = '#nao-existe';

    displayWelcomeMessage(selector, message);

    const messageElement = document.querySelector('.welcome-message');
    expect(messageElement).toBeNull(); // O elemento NÃO deve existir
  });