/* Il programma dovrà chiedere all'utente il numero di chilometri che vuole percorrere e l'età del passeggero.
Sulla base di queste informazioni dovrà calcolare il prezzo totale del viaggio, secondo queste regole:
il prezzo del biglietto è definito in base ai km (0.21 € al km)
va applicato uno sconto del 20% per i minorenni
va applicato uno sconto del 40% per gli over 65 */

var name, surname, age, km, rate;

name = prompt('Inserisci il tuo nome');
surname = prompt('Inserisci il tuo cognome');
age = parseInt(prompt('Inserisci la tua età'));
km = parseInt(prompt('Inserisci il numero di chilometri da percorrere'));
rate = 0.21;

document.getElementById('name').innerHTML = name;
document.getElementById('surname').innerHTML = surname;
document.getElementById('age').innerHTML = age;
document.getElementById('km').innerHTML = km;

basePrice = km * rate;

console.log(basePrice.toFixed(2) + '€');


var discount1 = basePrice - (basePrice * 20 / 100);
var discount2 = basePrice - (basePrice * 40 / 100);

var coupon1 = 'DHE1PB';
var coupon2 = 'EPT6YF';


if (age < 18) {
    document.getElementById('price').innerHTML = discount1;
    document.getElementById('coupon').innerHTML = coupon1;
} else if (age > 65) {
    document.getElementById('price').innerHTML = discount2;
    document.getElementById('coupon').innerHTML = coupon2;
} else {
    document.getElementById('price').innerHTML = basePrice;
}