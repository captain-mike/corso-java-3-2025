package incapsulamento;

public class Veicolo {

	//targa potrebbe essere un dato sensibile, si è deciso di proteggerlo
	//proteggere potrebbe però essere fatto anche per motivi differenti
	//ad esempio : ti accorgi di avere proprietà o metodi il cui scopo è il solo utilizzo interno alla classe
	private String targa;
	public String marca;
	public String modello;
	
	String propPackageFriendly = "Accessibile solo dal package";
	protected String propProtected = "Accessibile solo dal package oppure in classi estese(anche fuori dal package)";
	
	private int prezzo = 0;
	
	public Veicolo(String targa) {
		this.targa = targa;
	}
	
	public Veicolo(String targa, String marca, String modello) {
		this(targa);
		this.marca = marca;
		this.modello = modello;
	}
	
	//getter è un metodo che restituisce un dato, e non accetta alcun parametro in ingresso
	public String getTarga() {
		//qui posso prevedere modifiche temporanee alla targa pèrima di mostrarla
		return "Targa: " + targa;
	}
	
	
	public void setPrezzo(int prezzo) {
		if(prezzo > 0) {
			this.prezzo = prezzo;			
		}		
	}
	
}
