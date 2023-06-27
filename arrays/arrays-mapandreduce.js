//Map

var numeros = [1,2,3,4,5,6,7,8,9,10];
var num = numeros.map(function(valor){
    return valor * 2;
});

console.log(num);

var funcionarios = [
    {nome: "Luiz", idade: 62},
    {nome: "Davi", idade: 22},
    {nome: "Arthur", idade: 18},
    {nome: "Lucas", idade: 40},
]

nomes = funcionarios.map(pessoa => pessoa.nome);
console.log(nomes);

//Reduce

var numeros = [1,2,3,4,5,6,7,8,9,10];
var tot = numeros.reduce(function(total,numero){
    return total + numero;
},0);
console.log(tot);

//forEach

var a = [10,20,30,40,50,60];

for(let valor of a){
    console.log(valor);
}

a.forEach(valor => console.log(valor));

//Soma com forEach

var tot = 0;
a.forEach(valor => {
    tot += valor;
})

console.log(tot);

a.forEach(function(valor,indice,array){
    console.log(array[indice]);
})
