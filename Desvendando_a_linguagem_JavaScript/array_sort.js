var carros = [
	{modelo: 'Gol', preco: 34000},
	{modelo: 'Fusion', preco: 88000},
	{modelo: 'Corolla', preco: 56000}
];
carros.sort(compare);
console.log('ordenado por modelos:');
console.log(carros);

function compare(a,b) {
  if (a.modelo > b.modelo) {
    return 1;
  }
  if (a.modelo < b.modelo) {
    return -1;
  }
  // a must be equal to b
  return 0;
}

carros.sort(function(a, b){
	return a.preco - b.preco;
});

console.log('ordenado por precos:');
console.log(carros);
