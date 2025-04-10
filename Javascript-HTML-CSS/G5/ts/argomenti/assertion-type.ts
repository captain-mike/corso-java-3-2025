function sommaConcatena(a:number|string, b:number|string){
    return a + (b as any)
}

const res = <string> sommaConcatena('a','b');

res.split('');

const res2 = <number> sommaConcatena(4,5);