
function somma(...numeri:number[]):number{
    return numeri.reduce((a:number, b:number) => a + b)
}

console.log( somma(3,4,5,6,7,8,9) );


function sommaConcatena(a:number|string, b:number|string):string|number{
    if(typeof a === "string" && typeof b === "string" ){
        return a + b
    }
    if(typeof a === "number" && typeof b === "number" ){
        return a + b
    }
    return '';
}

const div = document.querySelector('div');

if(div) div.innerHTML