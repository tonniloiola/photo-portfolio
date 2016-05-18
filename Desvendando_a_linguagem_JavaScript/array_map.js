var carros = [
	{marca: 'Toyota', modelo: 'Corolla'},
	{marca: 'Honda', modelo: 'Civic'},
	{marca: 'Ford', modelo: 'Fusion'}
];

var mapMarcas = carros.map(function(carros) {
	return carros.marca;
})
console.log(mapMarcas);
