package cicli;

public class EsercizioFor {

	public static void main(String[] args) {
		
		for(int count = 0; count < 10; count++) {
			
			System.out.println(count);

		}
		
		//System.out.println(count); non esiste
		
		String[] pizze = {"Margherita","Diavola","Marinara","4 Formaggi"};
		
		for(int i = 0; i < pizze.length; i++) {
			
			System.out.println(pizze[i]);
		}
		

	}

}
