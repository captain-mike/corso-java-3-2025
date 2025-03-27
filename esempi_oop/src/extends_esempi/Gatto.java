package extends_esempi;

public class Gatto extends Animale {
	
	protected boolean faFusa = false;
	
	public Gatto() {
		super("Miao");
	}
	
	public void setFusa(boolean faFusa) {
		this.faFusa = faFusa;
	}
	
	public boolean getFusa() {
		return faFusa;
	}
	
	public void faVerso(int numero) {
		for(int i = 0; i < numero; i++) {
			super.faVerso();
		}
	}
	
	@Override
	public void mangia() {
		System.out.println("Il gatto mangia le crocchette");
	}
	
	
}
