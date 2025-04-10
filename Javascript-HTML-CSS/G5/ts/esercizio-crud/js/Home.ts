import Loader from "./Modules/Loader.js";
import Crud from "./Modules/Crud.js";
import { config } from "../config.js";
import Pizza from "./class/Pizza.js";

export class Home {

    public pizze: Pizza[] = [];

    constructor() {
        this.init();
    }
    public async init() {
        this.pizze = await Crud.getAll<Pizza[]>(config.apiURl);
        this.buildTable();
    }

    public async delete(id:number, el:HTMLElement):Promise<void> {
        if (!confirm('Sei sicuro?')) return

        Loader.start()
        try {
            await Crud.delete(config.apiURl, id);
            el.remove()
        } catch (error) {
            console.error(error);
        } finally {
            Loader.stop();
        }
    }

    public async buildTable() {
        this.pizze.forEach(p => {

            const { id, gusto, prezzo, disp } = p;


            //creo tutti gli elementi
            const tr = document.createElement('tr');

            const tdId = document.createElement('td');
            const tdGusto = document.createElement('td');
            const tdPrezzo = document.createElement('td');
            const tdDisp = document.createElement('td');
            const tdAzioni = document.createElement('td');

            const deleteBtn = document.createElement('button')
            const editLink = document.createElement('a')

            //assegno attributi
            deleteBtn.classList.add('btn', 'btn-danger');
            editLink.classList.add('btn', 'btn-warning');
            editLink.href = `/update-pizza.html?id=${id}`;

            //assegno eventi
            deleteBtn.addEventListener('click', async () => {
                this.delete(id, tr);
            })

            //inserisco testi
            tdId.innerText = String(id);
            tdGusto.innerText = gusto;
            tdPrezzo.innerText = String(prezzo);
            tdDisp.innerText = disp ? 'Si' : 'No';
            deleteBtn.innerText = 'Elimina';
            editLink.innerText = 'Modifica';

            //uso append per innestare gli elementi
            tdAzioni.append(deleteBtn, editLink);
            tr.append(tdId, tdGusto, tdPrezzo, tdDisp, tdAzioni);

            document.getElementById('target')?.append(tr)

        });
    }

}