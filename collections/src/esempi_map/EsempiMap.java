package esempi_map;

import java.util.HashMap;
import java.util.Map;
import java.util.Objects;

public class EsempiMap {

	static class Persona{
		String nome;
		String cognome;
		
		public Persona(String nome, String cognome) {
			this.nome = nome;
			this.cognome = cognome;
		}
		
		
		@Override
		public int hashCode() {
			//definisco che l'hash deve essere prodotto in base a nome e cognome
			return Objects.hash(nome, cognome);
		}
		
		@Override
		public boolean equals(Object o) {
			if (this == o) return true;
			if (o == null) return false;
			if (getClass() != o.getClass())	return false;
			
			Persona other = (Persona) o;
			return Objects.equals(cognome, other.cognome) && Objects.equals(nome, other.nome);
		}

		@Override
		public String toString() {
			return "Persona [nome=" + nome + ", cognome=" + cognome + "]";
		}
		
		
	}
	
	
	public static void main(String[] args) {
		
		//non garantisce l'ordine degli elementi
		//è molto veloce per operazioni di accesso ed inserimento
		Map<String, Integer> hashMap = new HashMap<>();
		hashMap.put("Margherita", 5);
		hashMap.put("Diavola", 1);
		hashMap.put("Capricciosa", 7);
		
		System.out.println("HashMap");
		for(Map.Entry<String, Integer> entry : hashMap.entrySet() ) {
			System.out.println(entry.getKey() + ": " + entry.getValue());
		}
		
		//il metodo hashCode() restituisce un intero
		//il quale rappresenta l'identità hash dell'oggetto
		//In una hashMap, il valore di hashCode si usa per determinare il "bucket" salvare la chiave
		//In pratica permette un accesso rapido ai dati
		//due oggetti uguali(se confrontati con euquals()) abbiano lo stesso hashCode(),
		//altrimenti la hashMap potrebbe non comportarsi correttamente(chiavi duplicate possibili9)
		System.out.println("Hashcode delle chiavi in hashMap");
		for(String key : hashMap.keySet() ) {
			//con questo output è possibile osservare come ogni elemento abbia il suo hashCode
			System.out.println("Key: " + key + " - hashCode(): " + key.hashCode());
		}
		
		
		Map<Persona, String> personeMap = new HashMap<>();
		//inserisco volutamente 2 oggetti diversi che abbiano gli stessi valori
		//all'occhio umano la persona Mario Rossi è una unica
		Persona p1 = new Persona("Mario","Rossi");
		Persona p2 = new Persona("Mario","Rossi");
		
		//per errore potremmo aver prodotto due volte un oggetto per gestire i dati di Mario Rossi
		//questi due coggetti, se inseriti nella mappa finiranno per coesistere
		//a meno che non si utilizzi un sistema per far assegnare ad entrambi lo stesso hashCode
		//All'interno della malla l'hashcode è univoco, quindi inserendo due oggetti con lo stesso hashcode
		//l'ultimo inserito sovrascrive il primo
		personeMap.put(p1, "Impiegato");
		personeMap.put(p2, "Manager");//sostituisce il valore se equals() e hashCode() sono implementati nella classe Persona
		
		for(Map.Entry<Persona, String> entry : personeMap.entrySet()) {
			System.out.println(entry.getKey() + " -> " + entry.getValue());
		}
		
		
		

	}

}
