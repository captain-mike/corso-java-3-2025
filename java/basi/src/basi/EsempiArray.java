package basi;

public class EsempiArray {

	public static void main(String[] args) {
		
//Avere una serie di variabili per rappresentare una lista di elementi, ci porta ad avere un codice
//troppo statico, nonché complesso da mantenere
//		String pizza1 = "Margherita";
//		String pizza2 = "Diavola";
//		String pizza3 = "Capricciosa";
				
		//posaso peròp salvare tutti i valori in un array
		String[] pizze = {"Margherita","Diavola","Capricciosa"};
		
		System.out.println("Ci sono n°" + pizze.length + " pizze");
		//ecco come leggere i valori presenti in un array(abbiamo bisogno dell'indice)		
		System.out.println(pizze[0]);
		System.out.println(pizze[1]);
		System.out.println(pizze[2]);
//		System.out.println(pizze[3]);
		
		String primaPizza = pizze[0];		
		
		
		//Creo un array vuoto definendo il tipo di dato accettato e la lunghezza
		String[] mesi = new String[12];
		
		mesi[0] = "Gennaio";
		mesi[1] = "Febbraio";
		System.out.println(mesi[2]);//null attenzione
		
		int[][] matrice = new int[3][3];
		
		System.out.println(matrice[0][0]);//0 gli array numerici si inizializzano automaticamente a zero
		
		
		
		
		
	}

}
