package libreria.libri;

import org.slf4j.Logger;


import org.slf4j.LoggerFactory;

import libreria.exceptions.AutoreNonValidoException;
import libreria.exceptions.LibroNonDisponibileException;
import libreria.exceptions.TitoloNonValidoException;

public class Libro {

	private String titolo;
	private String autore;
	private boolean disponibile = true;
	
	private final static Logger LOGGER = LoggerFactory.getLogger(Libro.class);
	
	public Libro(String titolo, String autore) throws TitoloNonValidoException, AutoreNonValidoException {
		LOGGER.debug("Inizializzazione libro");
		
		LOGGER.debug("Controllo del titolo");
		if(titolo == null || titolo.isEmpty()) {
			throw new TitoloNonValidoException("Il titolo è obbligatorio");
		}
		LOGGER.debug("Controllo dell'autore");
		if(autore == null || autore.isEmpty()) {
			throw new AutoreNonValidoException("L'autore è obbligatorio");
		}
		
		this.titolo = titolo;
		this.autore = autore;

	}

	public String getTitolo() {
		return titolo;
	}

	public void setTitolo(String titolo) {
		this.titolo = titolo;
	}

	public String getAutore() {
		return autore;
	}

	public void setAutore(String autore) {
		this.autore = autore;
	}

	public boolean isDisponibile() {
		return disponibile;
	}
	
	public void setDisponibile(boolean disponibile) {
		this.disponibile = disponibile;
	}
	
	public void prendiInPrestito() throws LibroNonDisponibileException {
		//controllo se il libro è disponibile
		if(!disponibile) {
			throw new LibroNonDisponibileException("Il libro non è disponibile");
		}
		//Lancio un'eccezione se non lo è
		disponibile=false;
	}
	
	
	
}
