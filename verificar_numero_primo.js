let numero = 1;
let regraPrimo; 
let arrNaoPrimo = [];

for(let i = 2; i <= numero; i++) {
    regraPrimo = (numero%i != 0 && numero != i);
    if(!regraPrimo && numero != i) {
        arrNaoPrimo.push(i);
    }
}

if(numero == 1) {
    console.log(numero + " não é primo!");
} else if(arrNaoPrimo.length == 0) {
    console.log(numero + " é primo!");
} else {
    console.log(numero + " não é primo!");
}