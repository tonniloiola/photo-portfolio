//function declaration
function soma(a, b){
	return a + b;
}

//function expression
var soma = function(a, b){
	return a + b;
}

//Named function expression
//o nome da função pode ser util pois aparece no
//stack trace, listas de breakpoints e demais ferramentas
//de debbuging
var soma = function soma(a, b){
	return a + b;
}