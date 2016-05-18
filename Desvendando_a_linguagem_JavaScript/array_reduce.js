var carros = [
	{marca: 'Toyota', modelo: 'Corolla', preco: 56000},
	{marca: 'Honda', modelo: 'Civic', preco: 54000},
	{marca: 'Ford', modelo: 'Fusion', preco: 88000}
];

//prev é o elemento anterior
//e cur é o elemento atual
var total = carros.reduce(function(prev, cur) {
	return prev + cur.preco;
}, 0);

console.log(total);
