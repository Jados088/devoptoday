
const test = require('node:test');
const assert = require('node:assert/strict');
const app = require('../server');

test('Health endpoint should return success', async (t) => {
    const server = app.listen(0);

    t.after(() => {
        server.close();
    });

    const port = server.address().port;

    const response = await fetch(
        `http://127.0.0.1:${port}/health`
    );

    const message = await response.text();

    assert.equal(response.status, 200);
    assert.equal(message, 'Application is running!');
});
