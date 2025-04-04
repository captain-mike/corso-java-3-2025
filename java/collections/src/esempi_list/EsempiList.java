package esempi_list;

import java.util.ArrayList;
import java.util.LinkedList;
import java.util.List;
import java.util.Vector;
import java.util.stream.Collectors;

public class EsempiList {

	public static void main(String[] args) {
		
		//è veloce per l'accesso casuale (con get() ) ma lento per inserimenti/rimozioni nel mezzo
		List<String> arrayList = new ArrayList<String>();

		arrayList.add("Margherita");//0
		arrayList.add("Diavola");//1
		arrayList.add("Capricciosa");//2
		
		System.out.println(arrayList.get(0));//Margherita
		
		System.out.println("---");
		System.out.println("ArrayList:");
		
		for(String item : arrayList) {
			System.out.println(item);
		}
		
		
		System.out.println("---");
		
		if(!arrayList.contains("Margherita")) {
			//faccio qualcosa se il valore margherita fosse assente
		}
		
		arrayList.add("Ananas");
		arrayList.remove("Ananas");
		
		/*
		 * 
		 * item -> item * 2;
		 * 
		 * item -> {
		 * 	return item * 2
		 * }
		 * 
		 * */	
		
		List<String> filtered = arrayList
				.stream()
				.filter(p -> p.startsWith("M"))
				.map(p -> p + "#")
				.toList();
		
		for(String item : filtered) {
			System.out.println(item);
		}
		
		
		//LinkedList
		//LinkedList più veloce per inserimenti/rimozioni alle estremità, più lento per accessi casuali
		List<String> linkedList =  new LinkedList<String>();
				
		linkedList.add("Margherita");//0
		linkedList.add("Diavola");//1
		linkedList.add("Capricciosa");//2
		
		System.out.println(linkedList.get(0));//Margherita
		
		System.out.println("---");
		System.out.println("LinkedList:");
		
		for(String item : linkedList) {
			System.out.println(item);
		}
		
		
		
		//vector è simile ad ArrayList ma è sincronizzato(thread-safe)
		//Thread-safe: Significa che può essere usato in modo sicuro da più thread contemporaneamente
		//senza causa inconsistenze nei dati.
		//previene problemi dove più thread accedono o modificano la lista simultaneamente 
		//causando risultati imprevedibili, o errori a runtime
		List<String> vector = new Vector<String>();
		vector.add("Margherita");//0
		vector.add("Diavola");//1
		vector.add("Capricciosa");//2
		
		for(String item : vector) {
			System.out.println(item);
		}
		
		
		
		
	}

}
