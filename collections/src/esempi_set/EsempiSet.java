package esempi_set;

import java.util.HashSet;
import java.util.LinkedHashSet;
import java.util.Set;
import java.util.TreeSet;

public class EsempiSet {

	public static void main(String[] args) {
		
		//Non garantisce ordine sugli elementi
		//molto velose su aggiunta, rimozione, ricerca
		Set<String> hashSet = new HashSet<String>();
		hashSet.add("Capricciosa");
		hashSet.add("Margherita");
		hashSet.add("Diavola");
		hashSet.add("Diavola");//duplicato, non verrà aggiunto
		
		System.out.println("HashSet:");
		for(String item : hashSet) {
			System.out.println(item);
		}
		//esempio di possibile output:
		//Margherita
		//Diavola
		//Capricciosa
		
		System.out.println("---");
		
		//ordina gli elementi automaticamente secondo ordinamento naturale
		//più lento di hashset ma utile se mi serve una collection ordinata
		Set<String> treeSet = new TreeSet<String>();
		treeSet.add("Capricciosa");
		treeSet.add("Margherita");
		treeSet.add("Diavola");
		treeSet.add("Diavola");//duplicato, non verrà aggiunto
		
		System.out.println("TreeSet:");
		for(String item : treeSet) {
			System.out.println(item);
		}
		
		System.out.println("---");
		
		//Mantiene l'ordine di inserimento
		//ha performance leggermente inferiori ad hashSet
		Set<String> linkedHashSet = new LinkedHashSet<String>();
		linkedHashSet.add("Diavola");
		linkedHashSet.add("Capricciosa");
		linkedHashSet.add("Margherita");
		linkedHashSet.add("Diavola");//Duplicato, non verrà aggiunto
		
		System.out.println("LinkedHashSet:");
		for(String item : linkedHashSet) {
			System.out.println(item);
		}
		
	}

}
