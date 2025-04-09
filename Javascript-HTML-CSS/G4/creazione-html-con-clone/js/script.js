const articoli = [
    {
        titolo: "Esplorando la Natura",
        descrizioneBreve: "Un viaggio attraverso paesaggi mozzafiato e sentieri nascosti.",
        immagine: "https://picsum.photos/seed/natura/400/300"
    },
    {
        titolo: "Tecnologia del Futuro",
        descrizioneBreve: "Scopri le ultime innovazioni che stanno cambiando il mondo.",
        immagine: "https://picsum.photos/seed/tecnologia/400/300"
    },
    {
        titolo: "Cucina Creativa",
        descrizioneBreve: "Ricette facili e gustose per stupire i tuoi ospiti.",
        immagine: "https://picsum.photos/seed/cucina/400/300"
    },
    {
        titolo: "Architettura Moderna",
        descrizioneBreve: "Design e funzionalità nelle costruzioni di oggi.",
        immagine: "https://picsum.photos/seed/architettura/400/300"
    },
    {
        titolo: "Viaggi da Sogno",
        descrizioneBreve: "Le mete più belle da visitare almeno una volta nella vita.",
        immagine: "https://picsum.photos/seed/viaggi/400/300"
    }
];

articoli.forEach(el => {

    const target = document.getElementById('target');//area in cui inserirò il contenuto dinamico
    const tempDiv = getClone('#card-template');


    tempDiv.querySelector('.card-img-top').src = el.immagine;
    tempDiv.querySelector('.card-title').innerText = el.titolo;
    tempDiv.querySelector('.card-text').innerText = el.descrizioneBreve
   
    target.append(...tempDiv.children);

})

function getClone(templateSelector){
    const clone = document.querySelector(templateSelector).content.cloneNode(true);//clone dell'html contenuto nel tag template

    //Creo un elemento di momentaneo solo per effettuare la conversione del clone da document fragment a elemento DOM
    const tempDiv = document.createElement('div');
    tempDiv.append(clone)

    return tempDiv
}

