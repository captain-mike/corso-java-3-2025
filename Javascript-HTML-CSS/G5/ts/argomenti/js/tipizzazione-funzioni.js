"use strict";
function somma(...numeri) {
    return numeri.reduce((a, b) => a + b);
}
console.log(somma(3, 4, 5, 6, 7, 8, 9));
function sommaConcatena(a, b) {
    if (typeof a === "string" && typeof b === "string") {
        return a + b;
    }
    if (typeof a === "number" && typeof b === "number") {
        return a + b;
    }
    return '';
}
const div = document.querySelector('div');
if (div)
    div.innerHTML;
//# sourceMappingURL=tipizzazione-funzioni.js.map