import Loader from "./Modules/Loader.js";
import Crud from "./Modules/Crud.js";
import { config } from "../config.js";
import Pizza from "./class/Pizza.js";

export default class CreatePizza {

    private send!:HTMLButtonElement;

    constructor(selector:string){
        this.getButtonElement(selector);
        this.init()
    }

    private getButtonElement(selector:string){
        const send = <HTMLButtonElement|null> document.getElementById(selector);
        if(!send) throw new Error('Impossibile trovate bottone');
        
        this.send = send;
    }

    async init(){

        this.send.addEventListener('click', async (e) => {
            e.preventDefault();//blocco il form
            
            let fields:NodeListOf<HTMLInputElement> = document.querySelectorAll('input');
            
            const [gusto, prezzo, disp] = fields;
            
            const newPizza:Partial<Pizza> = {
                gusto: gusto.value,
                prezzo: parseInt(prezzo.value),
                disp: disp.checked                
            }

            Loader.start();
            try {

              await Crud.create<Partial<Pizza>, Pizza>(config.apiURl,newPizza);
      
            } catch (error) {

              console.error(error);

            }finally{

              Loader.stop();

            }
      
          })
    }

}
