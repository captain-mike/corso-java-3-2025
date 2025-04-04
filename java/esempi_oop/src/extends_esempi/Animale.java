package extends_esempi;

public class Animale {

	private String verso;
	
	public Animale(String verso) {
		this.verso = verso;
	}
	
	public void mangia() {
		System.out.println("L'animale mangia qualcosa");
	}
	
	
	
	public void faVerso() {
		System.out.println(verso);
	}
	
}
