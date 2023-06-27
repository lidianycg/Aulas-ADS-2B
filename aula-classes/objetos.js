//Criar objeto - 1

var pessoa = {
    nome: 'Luiz',
    sobrenome: 'Otávio'
};

console.log(pessoa['sobrenome']);

//Criar objeto - 2

var pessoa1 = new Object();
pessoa1.nome = "Angela";
pessoa1.sobrenome = "Silva";
pessoa1.falarNome = function(){
    console.log("Nome é:" + this.nome);
}

//Criar objeto - 3

pessoa1.falarNome();

function criarPessoa(nome, sobrenome){
    return{nome, sobrenome}
}

var p1 = criarPessoa("John","Marston");
var p2 = criarPessoa("Arthur","Morgan");

console.log(p1);