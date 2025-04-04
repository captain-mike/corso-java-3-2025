package logica_condizionale;

public class EsercizioIf3 {

public static int anni = 30;
	
	public static void main(String[] args) {

		if(!isImpossible()) { 
			System.out.println("Età valida, elaborazione in corso...");
			return;
		}
		//se si va oltre sei maggiorenne o minorenne
		
		if(!isMaggiorenne()) return;
		//se superi questa riga non sei nemmeno maggiorenne
		
		
		System.out.println("Sei minorenne");
		

		

	}
	
	
	public static boolean isMaggiorenne() {
		return anni >= 18 && anni <= 121;
	}
	
	
	public static boolean isImpossible() {
		return anni > 121 || anni < 0;
	}

}
