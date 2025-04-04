package incapsulamento_parallelo;

import incapsulamento.Veicolo;

public class MainIncapsulamento {

	public static void main(String[] args) {
		
		Veicolo veicolo1 = new Veicolo("AB 123 CD");		
		veicolo1.marca = "Fiat";
		veicolo1.modello = "500";
		
		System.out.println("Marca: " + veicolo1.marca + "\nModello: " + veicolo1.modello);
		
		System.out.println(veicolo1.getTarga());

//le proprietà package friendly (senza modificatore di visibilità) non sono accessibili fuori dal loro package di appartenenza
//		System.out.println(veicolo1.propPackageFriendly);
//		Errore: The field Veicolo.propPackageFriendly is not visible
		
//le proprietà protected non sono accessibili fuori dal loro package di appartenenza
//a meno che non si estenda la classe in cui si trovano
//		System.out.println(veicolo1.propProtected);
//		Errore: The field Veicolo.propProtected is not visible
		
	}

}
