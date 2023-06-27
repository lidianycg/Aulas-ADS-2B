// Gerar dois números aleatórios entre 1 e 45
var numero1 = Math.floor(Math.random() * 45) + 1;
var numero2 = Math.floor(Math.random() * 45) + 1;

// Calcular a raiz quadrada do menor número
var menor = Math.min(numero1, numero2);
var raizQuadrada = Math.sqrt(menor);

// Encontrar o maior número
var maior = Math.max(numero1, numero2);

console.log("Número 1:", numero1);
console.log("Número 2:", numero2);
console.log("Menor número:", menor);
console.log("Raiz quadrada do menor número:", raizQuadrada);
console.log("Maior número:", maior);