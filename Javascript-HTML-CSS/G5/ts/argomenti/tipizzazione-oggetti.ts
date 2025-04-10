let pizza:{ gusto:string, prezzo:number } = {
    gusto: "Margherita",
    prezzo: 5
}

interface Pizza{
    gusto:string
    prezzo:number
}

let diavola:Pizza = {
    gusto: "Diavola",
    prezzo: 1
}

type pizzaType = {
    gusto:string, 
    prezzo:number
}

let capricciosa:pizzaType = {
    gusto: "Capricciosa",
    prezzo: 8
}

type persona = {
    nome : string,
    cognome : string,
    indirizzo: indirizzo
}

type indirizzo = {
    citta : string,
    cap: number,
    via: string
}