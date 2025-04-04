package abstract_interface;

public class Auto extends Veicolo {

	public Auto(String marca, String modello) {
		super(marca, modello, 4);
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
