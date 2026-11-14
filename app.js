const express = require('express');
const app = express();

app.get('/', (req, res) => {
  res.send('CI/CD Pipeline Project Running Successfully!');
});

app.get('/health', (req, res) => {
  res.status(200).json({ status: 'UP' });
});

const PORT = process.env.PORT || 3000;

if (require.main === module) {
  app.listen(PORT, () => {
    console.log(`Server running on port ${PORT}`);
  });
}

module.exports = app;
