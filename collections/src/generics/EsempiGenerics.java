package generics;

public class EsempiGenerics {
	
	
	//questa classe "interna statica" definita internamente alla classe EsempiGenerics
	//si trova qui solo per semplificare la fase didattica
	//questa classe ha una visibilità solo all'interno del contenitore
	//potrebbe essere adoperata in un progetto per raggruppare classi strettamente 
	//correlate o comunque per motivi organizzativi
	static class Box<T>{
		
		private T value;
		
		public void set(T value) {
			this.value = value;
		}
		
		public T get() {
			return value;
		}
	}

	public static void main(String[] args) {
		
		//Esempio1: Uso di una classe generica di tipo string
		//il T è una stringa
		Box<String> stringBox = new Box<String>();
		//Esempio2: Uso di una classe generica di tipo int
		//il T è un intero
		Box<Integer> intBox = new Box<Integer>();
		
		stringBox.set("Ciao");
		System.out.println(stringBox.get());
		
		
		
		

	}

}
