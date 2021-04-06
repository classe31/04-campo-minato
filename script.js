/*
Il computer deve generare 16 numeri casuali tra 1 e 100.
I numeri non possono essere duplicati.
In seguito deve chiedere all’utente (100 - 16) volte di inserire un numero alla volta, sempre compreso tra 1 e 100.
L’utente non può inserire più volte lo stesso numero.
Se il numero è presente nella lista dei numeri generati, la partita termina, altrimenti si continua chiedendo all’utente un altro numero.
La partita termina quando il giocatore inserisce un numero “vietato” o raggiunge il numero massimo possibile di numeri consentiti.
Al termine della partita il software deve comunicare il punteggio, cioè il numero di volte che l’utente ha inserito un numero consentito.
*/

// 1. generazione bombe
var bombe = [];

var NUMERI_MASSIMI = 5;
var NUMERO_BOMBE = 2;

// finchè il contenitore delle bombe non è popolato di 16 elementi
while(bombe.length < NUMERO_BOMBE) {

    var numeroGenerato = generaBomba(NUMERI_MASSIMI);

    if (bombe.includes(numeroGenerato) == false) {

        bombe.push(numeroGenerato);
    }
}

function generaBomba(max) {

    return Math.floor(Math.random() * max) + 1;
}

// le bombe generate
console.log('\n\n\n\n\n\n\n\n\nbombe', bombe);

// 2. chiediamo i numeri all'utente
// condizioni : tutti numeri esatti, non sbaglia

var numeriInseriti = [];
var bombaTrovata = false;

while(numeriInseriti.length < (NUMERI_MASSIMI - NUMERO_BOMBE) && bombaTrovata == false) {

    var numero = parseInt(prompt('Inserisci numero'));

    // il numero è una bomba?
    var isNumeroBomba = isBombaTrovata(numero, bombe);

    // se SI : abbiamo trovato una bomba. bombaTrovata deve diventare true
    // se NO : verifichiamo che il numero non sia compreso tra quelli già inseriti
    // se è compreso : andiamo avanti col prossimo numero
    // se non è compreso : lo aggiungiamo

    if (isNumeroBomba == false) {

        if (numeriInseriti.includes(numero) == false) {

            numeriInseriti.push(numero);

        } else {

            alert('il numero è già presente');
        }

    } else {

        alert('Hai trovato una bomba');
        bombaTrovata = true;
    }

    console.log('numeri inseriti', numeriInseriti);
}

function isBombaTrovata(numeroInserito, listaBombe) {

    // i = 0, listaBombe.length = 2
    /*
    var found = false;

    for(var i = 0; i < listaBombe.length; i++) {

        // numeroInserito = 2

        //0 => 2
        // 1 => 3        

        var numeroArray = listaBombe[i];

        if (numeroInserito == numeroArray) {

            found = true;
        }

        console.log('ho controllato indice', i);
    }

    return found;
    */

    var found = false;

    var i = 0;

    while(i < listaBombe.length && found == false) {

        var numeroArray = listaBombe[i];

        if (numeroInserito == numeroArray) {

            found = true;
        }  
        
        i++;

        console.log('ho controllato indice', i);
    }

    return found;
}


// esito della giocata

// 3. stampiamo l'esito della giocata

var totaleNumeriInseriti = numeriInseriti.length;

var messaggio = '';

if (bombaTrovata) {

    //alert('Abbiamo perso!! Punteggio ottenuto : ' + totaleNumeriInseriti);

    messaggio = 'perso';

} else {

    //alert('Abbiamo vinto!! Punteggio ottenuto : ' + totaleNumeriInseriti);

    messaggio = 'vinto';
}

alert('Abbiamo ' + messaggio + '!! Punteggio ottenuto : ' + totaleNumeriInseriti);