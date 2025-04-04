package basi;

public class OperatoriAritmetici {

	public static void main(String[] args) {
		
		int a = 2;
		int b = 4;
		int somma = a + b;//6
		int moltiplicazione = a * b;//8
		
		
		System.out.println(somma);
		System.out.println(moltiplicazione);
		System.out.println(2 + "2");//22 perché il numero viene convertito in stringa
		
		
		int numeroStudenti = 10;

		//numeroStudenti = numeroStudenti + 2;
		numeroStudenti += 2;
		
		numeroStudenti++;//incrementa il valore di 1
		numeroStudenti--;//decrementa il valore di 1
		
		
	}

}
