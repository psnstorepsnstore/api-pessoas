const express = require('express');
const cors = require('cors');
const fs = require('fs');

const app = express();
const PORT = process.env.PORT || 3000;

// Lê o arquivo JSON uma vez, na inicialização
const rawData = fs.readFileSync('dados.json');
const dados = JSON.parse(rawData);

let currentIndex = 0;

app.use(cors());
app.use(express.json());

app.get('/dados', (req, res) => {
  const pessoa = dados.pessoa[currentIndex];
  currentIndex = (currentIndex + 1) % dados.pessoa.length;
  
  res.json({
    cpf: pessoa.cpf,
    name: pessoa.nome
  });
});

app.listen(PORT, () => {
  console.log(`API rodando na porta ${PORT}`);
});
