package basi;

public class Confronti {

	public static void main(String[] args) {

		int anni = 18;
		boolean test = anni > 18;//il risultato dell'operazione è un boolean
		
		System.out.println(anni > 18);//false, 18 è uguale a 18
		System.out.println(anni < 18);//false, 18 è uguale a 18
		System.out.println(anni >= 18);//true se il numero è da 18 in su
		System.out.println(anni <= 17);//true se il numero è da 18 in su
		System.out.println(anni == 18);//true se il numero esattamente 18	
		System.out.println(anni != 18);//true se il numero è diverso da 18
		
		
		//con l'operatore && entrambe le condizioni devono essere true, se una è false l'intera operazione restituirà false
		System.out.println(anni >= 18 && anni <= 121);//vero se il numero è tra 18 e 121 (compresi)
		
		//con l'operatore || almeno una delle due condizioni deve essere true
		int numero = 2;
		System.out.println(numero == 2 || numero < 0);//true perchè lòa prima condizione è vera
		
		System.out.println("================");
		System.out.println(!true);
		
	}

}
