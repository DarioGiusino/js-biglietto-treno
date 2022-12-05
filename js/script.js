/* Steps (prima analisi)
1- chiedere utente l'età e chilometraggio
1b- definire prezzo al km (0.21€)
// // 2- calcolo prezzo biglietto (statico)
2. definire sconti -20% e -40%
se utente minorenne
3- calcolo prezzo -20%
se utente over 65
4- calcolo prezzo -40%
5* gestire casistiche (validazione)
6- stampa in pagina
*/

// Chiedo utente età e km e prendo elemento da riempire
const userFinalPrice = document.getElementById('default-price');
const userAge = parseInt(prompt(`Inserisci la tua età:`).trim());
const travelKm = parseInt(prompt(`Inserisci adesso i km che devi percorrere:`).trim());
// // console.log(userAge, travelKm);

// !Validazione
// età o km non validi
if (isNaN(userAge) || isNaN(travelKm)){
    alert(`Per favore, inserisci numeri validi`)
}
// // console.log(userAge, travelKm);

// prezzo al km standard del biglietto
let defaultPrice = (travelKm * 0.21).toFixed(2);
// // console.log(defaultPrice);

// sconti relativi all'età
const littleDiscount = defaultPrice * 20 / 144;
const underAge = 18;
const bigDiscount = defaultPrice * 40 / 144;
const overAge = 65;
// // console.log(littleDiscount, bigDiscount);

// calcoli utente minorenne/over 65
if (userAge <= underAge){
    defaultPrice = (defaultPrice - littleDiscount).toFixed(2);
} else if (userAge >= overAge){
    defaultPrice = (defaultPrice - bigDiscount).toFixed(2);
}
// // console.log(defaultPrice);

// stampo su pagina
userFinalPrice.innerText = `€ ${defaultPrice}`;