package esempi_queue;

import java.util.LinkedList;
import java.util.PriorityQueue;
import java.util.Queue;

public class EsempiQueue {

	public static void main(String[] args) {
		
		//FIFO : First In First Out
		//implementa l'interfaccia Queue e permette operazioni tipiche di una coda
		Queue<String> linkedQueue = new LinkedList<>();
		
		linkedQueue.offer("Margherita");//primo inserimento
		linkedQueue.offer("Diavola");//secondo inserimento
		linkedQueue.offer("Capricciosa");//terzo inserimento
		
		
		System.out.println("LinkedList come Queue (FIFO)");
		while(!linkedQueue.isEmpty()) {
			String next = linkedQueue.poll();//estrae l'elemento e lo rimuove dalla lista
			System.out.println("Rimosso: " + next + " | Rimanenti: " + linkedQueue);
		}

		//restituisce il dato senza modificare la coda
		System.out.println(linkedQueue.peek());//null perchè ho svuotato la coda usando poll() alla riga 21
		
		
		System.out.println("---");
		
		//Gli elementi vengono ordinati secondo l'ordinamento naturale(Per ordine alfabetico)
		PriorityQueue<String> priorityQueue = new PriorityQueue<String>();
		priorityQueue.offer("Margherita");//primo inserimento
		priorityQueue.offer("Diavola");//secondo inserimento
		priorityQueue.offer("Capricciosa");//terzo inserimento
		
		//System.out.println("Coda: " + priorityQueue);
		
		while(!priorityQueue.isEmpty()) {
			String next = priorityQueue.poll();//estrae l'elemento e lo rimuove dalla lista
			System.out.println("Rimosso: " + next + " | Rimanenti: " + priorityQueue);
		}
		
		
	}

}
