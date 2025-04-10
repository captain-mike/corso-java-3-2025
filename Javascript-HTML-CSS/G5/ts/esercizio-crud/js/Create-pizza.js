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
export default class CreatePizza {
    constructor(selector) {
        this.getButtonElement(selector);
        this.init();
    }
    getButtonElement(selector) {
        const send = document.getElementById(selector);
        if (!send)
            throw new Error('Impossibile trovate bottone');
        this.send = send;
    }
    init() {
        return __awaiter(this, void 0, void 0, function* () {
            this.send.addEventListener('click', (e) => __awaiter(this, void 0, void 0, function* () {
                e.preventDefault(); //blocco il form
                let fields = document.querySelectorAll('input');
                const [gusto, prezzo, disp] = fields;
                const newPizza = {
                    gusto: gusto.value,
                    prezzo: parseInt(prezzo.value),
                    disp: disp.checked
                };
                Loader.start();
                try {
                    yield Crud.create(config.apiURl, newPizza);
                }
                catch (error) {
                    console.error(error);
                }
                finally {
                    Loader.stop();
                }
            }));
        });
    }
}
