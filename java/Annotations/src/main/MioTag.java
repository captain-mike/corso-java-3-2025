package main;
//creo una annotation personalizzata chiamata @MioTag che contiene informazioni sull'autore di un metodo.
//Poi la userò per leggerla e stampare queste info a runtime


import java.lang.annotation.Retention;
import java.lang.annotation.RetentionPolicy;

@Retention(RetentionPolicy.RUNTIME)//indispensabile per leggere a runtime i valori (solo ai fini dell'esempio didattico)
public @interface MioTag {

	String autore();//devi specificare il nome dell'autore
	int versione() default 1;//facoltativo definire la versione
	
}
