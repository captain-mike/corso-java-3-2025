package extends_esempi;

public class Libro {
	String titolo;
	String autore;

	public static void main(String[] args) {
		
		Libro libro1 = new Libro("test","pippo");
		
		System.out.println(libro1.toString());

	}
	
	
	public Libro(String titolo, String autore) {
		this.titolo = titolo;
		this.autore = autore;
	}


	@Override
	public String toString() {
		return "Libro : " + titolo + "\ndi " + autore;
	}
	
		
	

}
