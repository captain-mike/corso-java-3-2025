package extends_esempi;

public class Main {

	public static void main(String[] args) {
		
		Animale animale = new Animale("Hello World!");
		Gatto gatto = new Gatto();
		Cane cane = new Cane();
		
		//le prop private non sono accessibili
//		System.out.println(animale.verso);
//		System.out.println(gatto.verso);
//		System.out.println(cane.verso);
		
		animale.faVerso();
		gatto.faVerso();
		gatto.setFusa(true);
		
		//Operatore ternario
		//In base al valore booleano ottenuto da getFusa() la variabile statoGatto
		//potrebbe ricevere 2 valori possibili
		//in caso di risultato true viene assegnato il valore dopo il simbolo ?
		//altrimenti viene assegnato il valore dopo il simbolo :
		String statoGatto = gatto.getFusa() ? "Il gatto sta facendo le fusa" : "Il gatto non fa le fusa";		
		
		System.out.println(statoGatto);
		
		gatto.faVerso(30);
		gatto.mangia();
		
		cane.mangia();
		
		cane.faVerso();
		
		//C'è la possibilità di utilizzare la superclasse
		//come tipizzazione di un oggetto esteso a partire
		//da quest'ultima
		Animale gatto2 = new Gatto();
		
		gatto2.faVerso();//apopartiene alla classe Animale
		
		//se in realtà la variabile (Tipizzata come animale è un'istanza di gatto)
		if(gatto2 instanceof Gatto) {
			//tratta momentaneamente questa variabile come gatto
			//questo mi permette di accedere a metodi e proprietà
			//specifiche di questa classe
			((Gatto) gatto2).getFusa();
		}

	}

}
