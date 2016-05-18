var getIdade = function(){
	return this.idade;
};

var pessoa = {
	nome: 'Antonio',
	idade: 21,
	getIdade: getIdade
};

console.log(pessoa);
console.log('idade: ' + getIdade());
console.log('idade: ' + pessoa.getIdade());
console.log('idade: ' + getIdade.call(pessoa));