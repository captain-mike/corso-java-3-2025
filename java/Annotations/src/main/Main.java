package main;

import java.lang.reflect.Method;

public class Main {

	public static void main(String[] args) throws Exception {
		
		Method metodo = Prova.class.getMethod("saluta");
		
		if(metodo.isAnnotationPresent(MioTag.class)) {
			MioTag annotazione = metodo.getAnnotation(MioTag.class);
			
			System.out.println(annotazione.autore());
			System.out.println(annotazione.versione());
		}

	}

}
