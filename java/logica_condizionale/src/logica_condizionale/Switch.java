package logica_condizionale;

public class Switch {

	public static void main(String[] args) {

		String pizza = "Capricciosa";
		
		switch(pizza) {		
			case "Margherita":
				System.out.println("La pizza Margherita costa 5€");
				break;
			case "Diavola":
				System.out.println("La pizza Diavola costa 1€");
				break;
			case "Capricciosa":
			case "4 stagioni":
				System.out.println("La pizza " + pizza + " costa 7€");
				break;
			default:			
				System.out.println("La pizza " + pizza + " non è disponibile");
		}

	}

}
