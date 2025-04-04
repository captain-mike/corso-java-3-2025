package libreria;

import org.slf4j.Logger;

import org.slf4j.LoggerFactory;

import libreria.exceptions.AutoreNonValidoException;
import libreria.exceptions.LibroNonDisponibileException;
import libreria.exceptions.TitoloNonValidoException;
import libreria.libri.Libro;


public class Main {

	private static final Logger LOGGER = LoggerFactory.getLogger(Main.class);
	
	public static void main(String[] args) {
		
		try {
			Libro libro = new Libro("","");		
			libro.prendiInPrestito();
		}catch(TitoloNonValidoException | AutoreNonValidoException e) {
			LOGGER.error(e.getMessage());
		}catch(LibroNonDisponibileException e) {
			LOGGER.error(e.getMessage());
		}
		

	}

}
