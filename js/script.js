// // console.log("js ok");

// Il programma dovrà chiedere all'utente il numero di chilometri che vuole percorrere e l'età del passeggero.
// Sulla base di queste informazioni dovrà calcolare il prezzo totale del viaggio, secondo queste regole:
// il prezzo del biglietto è definito in base ai km (0.21 € al km)
// va applicato uno sconto del 20% per i minorenni
// va applicato uno sconto del 40% per gli over 65.
// L'output del prezzo finale va messo fuori in forma umana (con massimo due decimali, per indicare centesimi sul prezzo). Questo richiederà un minimo di ricerca.

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

// Chiedo utente età e km
const userAge = prompt(`Inserisci la tua età:`);
const travelKm = prompt(`Inserisci adesso i km che devi percorrere:`);
// // console.log(userAge, travelKm);

// prezzo al km standard del biglietto
let defaultPrice = (travelKm * 0.21).toFixed(2);
// // console.log(defaultPrice);

// sconti
const littleDiscount = defaultPrice * 20 / 144;
const bigDiscount = defaultPrice * 40 / 144;
// // console.log(littleDiscount, bigDiscount);

// calcoli utente minorenne/over 65
if (userAge <= 18){
    defaultPrice = (defaultPrice - littleDiscount).toFixed(2);
} else if (userAge >= 65){
    defaultPrice = (defaultPrice - bigDiscount).toFixed(2);
}
// // console.log(defaultPrice);