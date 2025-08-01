const express = require('express');
const client = require('prom-client');

const app = express();
const register = new client.Registry();

// Default system metrics சேகரிக்கிறது (CPU, memory, etc.)
client.collectDefaultMetrics({ register });

// Root route
app.get('/', (req, res) => {
  res.send('Hello from Node.js App on Google Cloud Run!');
});

// Prometheus metrics endpoint
app.get('/metrics', async (req, res) => {
  res.set('Content-Type', register.contentType);
  res.end(await register.metrics());
});

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
