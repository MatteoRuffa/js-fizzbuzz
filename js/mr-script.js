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
bigSquare.setAttribute('id','boxes');
console.log(bigSquare);

const numSquare = 100;
let square = '';

for (let i= 1; i <= numSquare; i++) {
    if ((i % 3 === 0) && (i % 5 === 0)) {
        square += `<div class="box fizzbuzz">${'fizzbuzz'}</div>`;
    } else if (i % 3 === 0) {
        square += `<div class="box fizz">${'fizz'}</div>`;
    } else if (i % 5 === 0) {
        square += `<div class="box buzz">${'buzz'}</div>`;
    } else {
        square += `<div class="box">${i}</div>`;
    }
}

bigSquare.innerHTML = square;

console.dir(bigSquare);

const container = document.querySelector('.container');
container.append(bigSquare);

// const title = document.createElement('h1');
// title.classList = 'text-center fw-bold fs-1 text-white';
// title = 'FizzBuzzDOM'

// bigSquare.appendChild(title);