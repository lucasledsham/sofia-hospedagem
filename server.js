// server.js
const express = require('express');
const path = require('path');
const app = express();
const port = process.env.PORT || 3000;

// Servir arquivos estáticos da pasta 'public'
app.use(express.static(path.join(__dirname, 'public')));

// Servir arquivos da pasta 'data'
app.use('/data', express.static(path.join(__dirname, 'data')));

app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});
