package test;

import static org.junit.Assert.assertEquals;

import org.junit.jupiter.api.Test;

import br.com.estudos.CalculadorDeImpostos;
import br.com.estudos.ICMS;
import br.com.estudos.ISS;
import br.com.estudos.Imposto;
import br.com.estudos.Orcamento;

public class ImpostoTest {
	
	private CalculadorDeImpostos calculadora;
	private Orcamento orcamento;
	private Imposto iss;
	private Imposto icms;

	public ImpostoTest() {
		icms = new ICMS();
		iss = new ISS();
		
		orcamento = new Orcamento(500.0);
		
		calculadora = new CalculadorDeImpostos(); 
		
	}
	
	@Test
	public void testaICMS() {
		double valor = calculadora.realizaCalculo(orcamento, icms);
		assertEquals(50.0, valor, 0);
	}
	
	@Test
	public void testaISS() {
		double valor = calculadora.realizaCalculo(orcamento, iss);
		assertEquals(300.0, valor, 0);
	}

}
