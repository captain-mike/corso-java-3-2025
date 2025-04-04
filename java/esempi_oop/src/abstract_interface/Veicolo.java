package abstract_interface;

public abstract class Veicolo {

	private int vel = 0;
	int maxVel;
	int nRuote;
	String marca;
	String modello;
	
	public Veicolo(String marca, String modello) {
		this.marca = marca;
		this.modello = modello;
	}
	
	public Veicolo(String marca, String modello, int nRuote) {
		this(marca, modello);
		this.nRuote = nRuote;
	}
	
	public abstract void accelera(int n);
	public abstract void frena(int n);
	
	public void ferma() {
		this.vel = 0;
	}
	
	public int getVel() {
		return vel;
	}
	
	public void setVel(int vel) {
		if(vel > 0 && vel < maxVel) {
			this.vel = vel;			
		}
	}
	
}
