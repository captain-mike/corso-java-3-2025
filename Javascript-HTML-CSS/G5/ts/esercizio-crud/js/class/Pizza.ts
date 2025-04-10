export default class Pizza{

    constructor(
        public gusto:string, 
        public prezzo:number, 
        public disp:boolean,
        public readonly id:number
    ){}

}