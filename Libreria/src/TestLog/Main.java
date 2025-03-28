package TestLog;

import org.slf4j.Logger;
import org.slf4j.LoggerFactory;

public class Main {

	private static final Logger LOGGER = LoggerFactory.getLogger(Main.class);
	
	public static void main(String[] args) {
		
		LOGGER.info("Programma iniziato");
		LOGGER.debug("Debug del programma");
		LOGGER.error("Error");
		
		System.out.println("fsdfdsfds");
		
		for(int i = 0; i < 10; i++) {
			System.out.println(i);
		}
		
		
	}

}
