package abstract_interface;

public interface Stampabile {

	void stampa();//metodo astratto (implicitamente public e abstract)
	
	int COSTANTE = 1;//static
	
	static void info() {
		//metodo statico
		//serve per funzionalità di utilità, legate all'interfaccia, ma non alle istanze
		//si chiama tramite il nome dell'interfaccia, non tramite oggetto
		System.out.println("Questa è un'interfaccia per oggetti stampabili");
	}
	
	default void descrizione() {
		//fornisce un'implementazione di base che le classi possono usare, senza obbligo di riscriverla
		//serve per non rompere il codice esistente quando un'interfaccia viene aggiornata con nuovi metodi
		System.out.println("Oggetto stampabile");
	}
	
}
