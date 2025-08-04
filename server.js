const express = require('express');
const cors = require('cors');

const app = express();
const PORT = process.env.PORT || 3000;

app.use(cors());
app.use(express.json());

const pessoas = [
  { cpf: "03200833491", nome: "LENIRA BONIFACIO DE BRITO" },
  { cpf: "38915766172", nome: "JOAO ALVES BARROS" },
  { cpf: "54204690904", nome: "MOACIR CRESPI" },
  { cpf: "06330478805", nome: "IDALINA MARTINS VEIGA" },
  { cpf: "09327919564", nome: "LAURA SOPHIA DE SOUSA GARCIA" },
  { cpf: "35918144234", nome: "ANGELINA DA SILVA SOUZA" },
  { cpf: "63900416087", nome: "LACI ERONI ALBERT CALONI" },
  { cpf: "19206681877", nome: "ISMAEL GONCALVES" },
  { cpf: "16192889740", nome: "TAYNARA DA SILVA MACHADO" },
  { cpf: "04116220485", nome: "MARIA GREGORIO LOPES" },
  { cpf: "07701084746", nome: "JAQUELINE SILVA DE JESUS CAMILO" },
  { cpf: "18409434830", nome: "ALEKSANDRA GUIMARAES BARBOSA" }
];

let currentIndex = 0;

app.get('/dados', (req, res) => {
  const pessoa = pessoas[currentIndex];
  currentIndex = (currentIndex + 1) % pessoas.length;
  
  res.json({
    cpf: pessoa.cpf,
    name: pessoa.nome
  });
});

app.listen(PORT, () => {
  console.log(`API rodando na porta ${PORT}`);
});
