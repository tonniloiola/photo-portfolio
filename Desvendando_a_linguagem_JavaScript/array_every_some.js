var carros = [
	{marca: 'Toyota', modelo: 'Corolla'},
	{marca: 'Honda', modelo: 'Civic'},
	{marca: 'Ford', modelo: 'Fusion'}
];

var todosSaoToyota = carros.every(function(carro) {
	return carro.marca === 'Toyota';
});
console.log('Todos carros sao Toyota: ' + todosSaoToyota);


var temAlgumToyota = carros.some(function(carro) {
	return carro.marca === 'Toyota';
});
console.log('Tem algum carro Toyota: ' + temAlgumToyota);

