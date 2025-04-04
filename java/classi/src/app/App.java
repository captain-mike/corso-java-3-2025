package app;

import models.Pizza;

public class App {

	public static void main(String[] args) {
		
		Pizza pizza = new Pizza("Margherita",5);
		Pizza pizza1 = new Pizza("Diavola",1);
		Pizza pizza2 = new Pizza("Capricciosa",8);
		
		Pizza pizza3 = new Pizza("Marinara",5);
		Pizza pizza4 = new Pizza("Marinara",5);
		
		System.out.println(pizza3);
		System.out.println(pizza4);
		System.out.println(pizza3 == pizza4);
		
		Pizza pizza5 = pizza4;
		System.out.println(pizza5);
		
		System.out.println(pizza3.equals(pizza4));
		

	}

}
