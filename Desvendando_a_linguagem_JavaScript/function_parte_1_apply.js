var getIdade = function(extra){
	// console.log(arguments)
	return this.idade + extra;
};

var pessoa = {
	nome: 'Antonio',
	idade: 21,
	getIdade: getIdade
};

console.log(pessoa);
console.log('idade: ' + getIdade(2));
console.log('idade: ' + pessoa.getIdade(2));
console.log('idade: ' + getIdade.call(pessoa, 2));
console.log('idade: ' + getIdade.apply(pessoa, [2]));
//Diferença de call e apply é que call recebe todos os parametros em ordem e o apply
//recebe um array