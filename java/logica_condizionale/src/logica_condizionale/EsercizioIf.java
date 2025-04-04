package logica_condizionale;

public class EsercizioIf {

	public static void main(String[] args) {
		
		int anni = 30;
		
		if(anni >= 18 && anni <= 121) {
			System.out.println("Sei maggiorenne");					
		}else if(anni > 121 || anni < 0) {
			if(anni > 121) {
				System.out.println("Sei antico");
			}
			
			if(anni < 0) {
				System.out.println("non sei ancora nato");
			}
		}else {
			System.out.println("Sei minorenne");		
		}
		
		//continua l'esecuzione

	}

}
