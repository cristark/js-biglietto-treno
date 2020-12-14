/* Il programma dovrà chiedere all'utente il numero di chilometri che vuole percorrere e l'età del passeggero.
Sulla base di queste informazioni dovrà calcolare il prezzo totale del viaggio, secondo queste regole:
il prezzo del biglietto è definito in base ai km (0.21 € al km)
va applicato uno sconto del 20% per i minorenni
va applicato uno sconto del 40% per gli over 65 */

// VARIABILI
var name, surname, age, km, rate, finalPrice, discount1, discount2, coupon1, coupon2;

// Input da inserire
name = prompt('Inserisci il tuo nome');
surname = prompt('Inserisci il tuo cognome');
age = parseInt(prompt('Inserisci la tua età'));
km = parseInt(prompt('Inserisci il numero di chilometri da percorrere'));

// Variabile standard per capire il costo per km
rate = 0.21;

// Calcolo prezzo biglietto di listini - senza sconto
basePrice = km * rate;

// Sconto + COUPON UNDER 18
discount1 = basePrice - (basePrice * 20 / 100);
coupon1 = 'DHE1PB';
// Sconto + COUPON OVER 65
discount2 = basePrice - (basePrice * 40 / 100);
coupon2 = 'EPT6YF';

// Condizione per capire quale percentuale di sconto applicare
if (age < 18) {
    finalPrice = discount1;
    document.getElementById('coupon').innerHTML = coupon1;
} else if (age >= 65) {
    finalPrice = discount2
    document.getElementById('coupon').innerHTML = coupon2;
} else {
    finalPrice = basePrice;
}

// Visualizzazione su documento HTML
document.getElementById('price').innerHTML = finalPrice.toFixed(2);
document.getElementById('name').innerHTML = name;
document.getElementById('surname').innerHTML = surname;
document.getElementById('age').innerHTML = age;
document.getElementById('km').innerHTML = km;
