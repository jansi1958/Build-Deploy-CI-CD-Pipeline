const test = require('node:test');
const assert = require('node:assert/strict');
const app = require('../app');

const server = app.listen(0);
const baseUrl = () => `http://127.0.0.1:${server.address().port}`;

test('GET / returns the application welcome message', async () => {
  const response = await fetch(baseUrl());
  assert.equal(response.status, 200);
  assert.match(await response.text(), /CI\/CD Pipeline Project Running Successfully/);
});

test('GET /health returns a healthy status', async () => {
  const response = await fetch(`${baseUrl()}/health`);
  assert.equal(response.status, 200);
  assert.deepEqual(await response.json(), { status: 'UP' });
});

test.after(() => new Promise((resolve, reject) => {
  server.close(error => error ? reject(error) : resolve());
}));
