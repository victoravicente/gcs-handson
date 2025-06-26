import { test, expect } from 'vitest';

function somar(a, b) {
  return a + b;
}

test('Deve somar 2 + 3 e resultar 5', () => {
  expect(somar(2, 3)).toBe(5);
});