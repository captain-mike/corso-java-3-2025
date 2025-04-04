package abstract_interface;

public class Bici extends Veicolo {
	
	public Bici(String marca, String modello) {
		super(marca, modello, 2);
	}

	@Override
	public void accelera(int n) {
		setVel(n);
	}

	@Override
	public void frena(int n) {
		setVel(n);
	}
}
