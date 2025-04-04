package logica_condizionale;

public class Esercizioif2 {

	public static int anni = -1;
	
	public static void main(String[] args) {

		
		if(isMaggiorenne()) {
			
			System.out.println("Sei maggiorenne");		
			
		}else if(isImpossible()) {
			if(anni > 121) {
				System.out.println("Sei antico");
			}
			
			if(anni < 0) {
				System.out.println("non sei ancora nato");
			}
		}else {
			System.out.println("Sei minorenne");		
		}

	}
	
	
	public static boolean isMaggiorenne() {
		return anni >= 18 && anni <= 121;
	}
	
	public static boolean isImpossible() {
		return anni > 121 || anni < 0;
	}
	

}
