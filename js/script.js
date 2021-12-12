// Visualizzare con degli alert 5 numeri casuali. Da lì parte un timer di 30 secondi.
// Dopo 30 secondi l'utente deve inserire, uno alla volta, i numeri che ha visto precedentemente, tramite il prompt().
// Dopo che sono stati inseriti i 5 numeri, il software dice quanti e quali dei numeri da indovinare sono stati individuati.


// Visualizzare con degli alert 5 numeri casuali.

// Creare un timer di 30 secondi mediante il ciclo WHILE
let i = 0;
const randomNumber = [];
while(i < 5) {
    let randomNum = getRndInteger(1, 100);
    alert(randomNum);
    randomNumber.push(randomNum);
    i++;
}
console.log(randomNumber);


setTimeout(userInput, 30000);

// Facciamo inserire i numeri all'utente 1 alla volta