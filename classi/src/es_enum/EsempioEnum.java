package es_enum;

public class EsempioEnum {

	public static void main(String[] args) {
		
		Giorni oggi = Giorni.LUNEDI;
//		String oggiStringa = "Lunedì";
		
		if(oggi == Giorni.LUNEDI) {
				System.out.println("Inizio settimana");	
		}

		test(Giorni.DOMENICA);
		
	}
	
	public static void test(Giorni pippo) {
		
	}

}
