/*
Scrivi un programma che stampi in console i numeri da 1 a 100,
ma che per i multipli di 3 stampi “Fizz” al posto del numero e per i multipli di 
5 stampi “Buzz”.
Per i numeri che sono sia multipli di 3 che di 5 stampi “FizzBuzz”.
*Prima di partire a scrivere codice poniamoci qualche domanda:*
Come faccio a sapere se un numero è divisibile per un altro?
Abbiamo visto qualcosa di particolare che possiamo usare?

*BONUS 1:*
Crea un container nel DOM , aggiungendo (attraverso la funzione append()) 
un elemento html con il numero o la stringa corretta da mostrare.
*BONUS 2:*
Applica stili differenti agli elementi aggiunti al DOM nel BONUS 1, a seconda che 
il valore inserito sia un numero, un fizz, un buzz o un fizzbuzz.
Se sei a corto di idee per lo stile, potresti prendere spunto dallo screenshot 
fornito in consegna.
*/

/* SCRIVO PROGRAMMA CHE STAMPA IN CONSOLE I NUMERI DA 1 A 100  */

const bigSquare = document.createElement('div');
bigSquare.classList = 'd-flex justify-content-between align-content-between flex-wrap';
console.log(bigSquare);

let square = document.createElement('div');
square.classList = 'd-flex justify-content-center align-items-center';
square.style.width = '100px';
square.style.height = '100px';
console.log(square);

bigSquare.appendChild(square);

const numSquare = 100;

for (let i= 1; i <= numSquare; i++) {
    if ((i % 3 === 0) && (i % 5 === 0)) {
        console.log('FizzBuzz');
    } else if (i % 3 === 0) {
        console.log('Fizz');
    } else if (i % 5 === 0) {
        console.log('Buzz');
    } else {
        console.log(i);
    }
}

