var carros = [
	{marca: 'Toyota', modelo: 'Corolla'},
	{marca: 'Honda', modelo: 'Civic'},
	{marca: 'Ford', modelo: 'Fusion'}
];

var carrosToyota = carros.filter(function(carro) {
	return carro.marca === 'Toyota';
});

console.log(carrosToyota);
