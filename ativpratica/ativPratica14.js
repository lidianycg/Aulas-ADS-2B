// Criação da matriz de múltiplos de 2,3,4 e 5
const matrizAtiv = [];

// Preenchimento da matriz com os múltiplos
for (let i = 2; i <= 5; i++) {
  const linha = [];
  for (let j = 1; j <= 5; j++) {
    linha.push(i * j);
  }
  matrizAtiv.push(linha);
}

// Exibindo a matriz no terminal
for (let i = 0; i < matrizAtiv.length; i++) {
  console.log(matrizAtiv[i].join('\t'));
}