package incapsulamento;

public class TestPackageFriendly {

	public static void main(String[] args) {
		
		Veicolo veicolo1 = new Veicolo("AB 123 CD");
		
		System.out.println(veicolo1.propPackageFriendly);
		//funziona perchè Veicolo è nello stesso package
		
		System.out.println(veicolo1.propProtected);

	}

}
