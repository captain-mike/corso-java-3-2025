package models;

import java.util.Objects;

public class Pizza {

	public String gusto;
	public int prezzo;
	
	//questo è il costruttore
	public Pizza(String gusto, int prezzo) {
		this.gusto = gusto;
		this.prezzo = prezzo;
//		System.out.println(info());
	}
	
	
	
	@Override
	public boolean equals(Object o) {
	
		if(this == o) return true;
		if(o == null || getClass() != o.getClass()) return false;
		
		Pizza pizza = (Pizza) o;
		return prezzo == pizza.prezzo && Objects.equals(gusto,pizza.gusto);
	}
	
//	public Pizza(int id) {
//		
//	}
	
	public String info() {
		return "La pizza " + gusto + " costa " + prezzo + "€";
	}
	
	

}
