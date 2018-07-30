package br.com.estudos;

public class CalculadorDeImpostos {
	
	public double realizaCalculo(Orcamento orcamento, Imposto imposto) {
		return imposto.calcula(orcamento);
	}

}
