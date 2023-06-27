var valores = [8,1,7,2,9];

console.log(valores[3]);

console.log("Array invertido: " + valores.reverse());

for (var pos = 0 ; pos < valores.length; pos++){
    console.log("Posição: " + pos + " Valor: " + valores[pos]);
}

//Outras formas de criar um array
var carros = [];
carros[0] = "Volvo";
carros[1] = "Jeep";

var motos = new Array("BMW","Yamaha","Honda");

//Calcular a média de todos os números do primeiro array
var soma = 0;

for (var pos = 0 ; pos < valores.length; pos++){
soma += valores[pos];
 }

var media = soma/valores.length;
console.log(media);

//Join
var arr1 = [1,2,3,4,5,6];

console.log(arr1.join('|'));

//Shift - Retirar o primeiro elemento de um array
var retirado = arr1.shift();

console.log(retirado);
console.log(arr1);

//Descobrir a posição de um elemento do array

console.log("Posição do número 3: " + arr1.indexOf(3));

//Acrescentar um item no array

arr1.push(7);
console.log(arr1);

//Remover o último elemento do array

arr1.pop();
console.log(arr1);

//Retirar elementos do array usando splice
var arr2 = [1,2,3,4,5,6,7];
arr2.splice(1,2);
console.log(arr2);

//Substituir elementos usando splice

var nomes = ["Maria", "João", "Lucas", "Pedro"];
var novos = nomes.splice(1,1,"Luiz");
console.log(nomes);

//Adicionar elementos no início do array usando unshift

var pais = ["Brasil","Argentina","Colômbia"];
pais.unshift("Uruguai");
console.log(pais);

//Slice

var pessoa = ["Eduardo","Joana","Wallace","Rosana"];
var pessoa1 = pessoa.slice(1,3);

console.log(pessoa);
console.log(pessoa1);

//Concatenar arrays usando concat

var pessoa = ["Eduardo","Joana","Wallace","Rosana"];
var gerente = ["Davi","Manuela"];
var empresa = pessoa.concat(gerente);

console.log(empresa);

//Método filter - in line

var numeros = [1,2,3,4,5,6,7,8,9,10];
var resultado = numeros.filter(item => item % 2 ==0);
console.log(resultado);

//Função dentro do método filter

var numeros = [1,2,3,4,5,6,7,8,9,10];
var numerosFiltrados = numeros.filter(
    function(valor){
        return valor > 5;
    }
);

console.log(numerosFiltrados);


//Criar função fora e depois colocar dentro do filter
var numeros = [1,2,3,4,5,6,7,8,9,10];
function buscarValores(valor){
    return valor > 5;
}

var numerosEncontrados = numeros.filter(buscarValores);
console.log(numerosEncontrados);

//Utilizando o filter de forma mais simples

var numeros = [1,2,3,4,5,6,7,8,9,10];
var r1 = numeros.filter((valor) =>{
    return valor < 5;
} );

console.log(r1);

var funcionarios = [
    {nome: "Luiz", idade: 62},
    {nome: "Davi", idade: 22},
    {nome: "Arthur", idade: 18},
    {nome: "Lucas", idade: 40},
]

var pessoasListagem = funcionarios.filter(
    function(valor){
    console.log(valor.nome);
});

var pessoasListagem = funcionarios.filter(
    function(valor){
    return valor.nome.length <5
});
console.log(pessoasListagem);