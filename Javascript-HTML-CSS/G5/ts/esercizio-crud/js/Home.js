var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
import Loader from "./Modules/Loader.js";
import Crud from "./Modules/Crud.js";
import { config } from "../config.js";
export class Home {
    constructor() {
        this.pizze = [];
        this.init();
    }
    init() {
        return __awaiter(this, void 0, void 0, function* () {
            this.pizze = yield Crud.getAll(config.apiURl);
            this.buildTable();
        });
    }
    delete(id, el) {
        return __awaiter(this, void 0, void 0, function* () {
            if (!confirm('Sei sicuro?'))
                return;
            Loader.start();
            try {
                yield Crud.delete(config.apiURl, id);
                el.remove();
            }
            catch (error) {
                console.error(error);
            }
            finally {
                Loader.stop();
            }
        });
    }
    buildTable() {
        return __awaiter(this, void 0, void 0, function* () {
            this.pizze.forEach(p => {
                var _a;
                const { id, gusto, prezzo, disp } = p;
                //creo tutti gli elementi
                const tr = document.createElement('tr');
                const tdId = document.createElement('td');
                const tdGusto = document.createElement('td');
                const tdPrezzo = document.createElement('td');
                const tdDisp = document.createElement('td');
                const tdAzioni = document.createElement('td');
                const deleteBtn = document.createElement('button');
                const editLink = document.createElement('a');
                //assegno attributi
                deleteBtn.classList.add('btn', 'btn-danger');
                editLink.classList.add('btn', 'btn-warning');
                editLink.href = `/update-pizza.html?id=${id}`;
                //assegno eventi
                deleteBtn.addEventListener('click', () => __awaiter(this, void 0, void 0, function* () {
                    this.delete(id, tr);
                }));
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
                (_a = document.getElementById('target')) === null || _a === void 0 ? void 0 : _a.append(tr);
            });
        });
    }
}
