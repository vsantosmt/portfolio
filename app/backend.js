const express = require('express');
const cors = require('cors');
const bodyParser = require('body-parser');
const axios = require('axios'); // Biblioteca para requisições HTTP
const app = express();

// Habilitando CORS para o frontend
app.use(cors());

// Usando o body-parser para entender dados JSON
app.use(bodyParser.json());

// Exemplo de endpoint
app.get('/', (req, res) => {
  res.send('Bem-vindo ao EasyPanel!');
});

// Configurando a comunicação com o backend Python (API Flask)
const backendUrl = process.env.BACKEND_URL || 'http://localhost:5000'; // URL do backend Python

// Requisição para o backend Python
app.get('/backend-data', async (req, res) => {
  try {
    // Enviando uma requisição para o seu backend Python
    const response = await axios.get(`${backendUrl}/api/some-endpoint`);
    res.json(response.data);
  } catch (error) {
    console.error('Erro ao se comunicar com o backend Python:', error);
    res.status(500).send('Erro ao acessar o backend');
  }
});

// Inicia o servidor na porta 5174, já que 5173 está ocupada pelo frontend
app.listen(5174, () => {
    console.log('EasyPanel rodando na porta 5174');
  });