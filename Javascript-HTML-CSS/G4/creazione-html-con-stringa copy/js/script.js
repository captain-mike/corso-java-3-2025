/* <div class="col col-lg-3">
                <div class="card">
                    <img src="https://picsum.photos/id/237/200/300" class="card-img-top">
                    <div class="card-body">
                      <h5 class="card-title">Card title</h5>
                      <p class="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
                      <a href="#" class="btn btn-primary">Go somewhere</a>
                    </div>
                  </div>
            </div> */

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

    const target = document.getElementById('target');

    target.innerHTML += `<div class="col col-lg-3">
                <div class="card">
                    <img src="${el.immagine}" class="card-img-top">
                    <div class="card-body">
                      <h5 class="card-title">${el.titolo}</h5>
                      <p class="card-text">${el.descrizioneBreve}</p>
                      <a href="#" class="btn btn-primary">Go somewhere</a>
                    </div>
                  </div>
            </div>`;
        

})

