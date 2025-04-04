package metodi;

public class Metodi {

	public static void main(String[] args) {
		
		String saluto1 = saluto();//ciao
		
		System.out.println( saluto1 );
		System.out.println( saluto1 );
		System.out.println( saluto1 );
		
		System.out.println( salutoCustom("Michele") );
		
		salutoCustomVoid("Edoardo");
		
		System.out.println("=======metodi della classe Matematica========");
		
		float res = Matematica.somma(4, 67);
		
		System.out.println( res );
		
		System.out.println("=======Pizze========");
		
		Pizza pizza1 = new Pizza();
		pizza1.gusto = "Margherita";
		pizza1.prezzo = 5;
		pizza1.info();
		
		Pizza pizza2 = new Pizza();
		pizza2.gusto = "Diavola";
		pizza2.prezzo = 1;
		pizza2.info();
		

	}
	
	
	public static String saluto() {		
		return "Ciao";
	}
	
	public static String salutoCustom(String nome) {
		return "Ciao " + nome;
	}
	
	public static void salutoCustomVoid(String nome) {
		System.out.println("Ciao " + nome);
	}

}
