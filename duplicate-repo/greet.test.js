const greet = require('./greet');

test('greets the user by name', () => {
  expect(greet('Aaditya')).toBe('Hello, Aaditya!');
});

test('handles empty string', () => {
  expect(greet('')).toBe('Hello, !');
});
