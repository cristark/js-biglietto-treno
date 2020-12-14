/* Il programma dovrà chiedere all'utente il numero di chilometri che vuole percorrere e l'età del passeggero.
Sulla base di queste informazioni dovrà calcolare il prezzo totale del viaggio, secondo queste regole:
il prezzo del biglietto è definito in base ai km (0.21 € al km)
va applicato uno sconto del 20% per i minorenni
va applicato uno sconto del 40% per gli over 65 */

var name, surname, age, km, rate;

// name = prompt('Inserisci il tuo nome');
// surname = prompt('Inserisci il tuo cognome');
age = parseInt(prompt('Inserisci la tua età'));
km = parseInt(prompt('Inserisci il numero di chilometri da percorrere'));
rate = 0.21;

console.log(name);
console.log(surname);
console.log(age);
console.log(km);

basePrice = km * rate;

console.log(basePrice + '€');

var discount1 = basePrice - (basePrice * 20 / 100);
var discount2 = basePrice - (basePrice * 40 / 100);

console.log(discount1.toFixed(2));
console.log(discount2.toFixed(2));
