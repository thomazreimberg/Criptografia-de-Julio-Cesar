const alpha = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ';
let letterPosition = new Array <number>();
let indiceLetter = new Array <number | string>();
let wordConverted = new Array <string>();
let phraseComplete = '';
let specialLetters = new Array<string>();
let specialLettersPosition = new Array<number>();


function alphaIndex(phrase: string, numberOfJumps : number) {
    let arrayLetters = convertPhrase(phrase);

    separateLetters(phrase, numberOfJumps);
    cryptoPhrase(arrayLetters);
    joinLetters();

    console.log('input: ' + phrase);
    return phraseComplete;
};

function convertPhrase(phrase: string) {
    return phrase.toUpperCase().split('');
}

function separateLetters(phrase: string, numberOfJumps : number) {
    let arrayLetters = phrase.toUpperCase().split('');
    let n = 0;

    arrayLetters.forEach(letter => {
        let postion = Number(alpha.indexOf(letter)); 
        if (postion == -1) {
            specialLetters.push(letter);
            specialLettersPosition.push(n);
            indiceLetter.push(letter);
            return letterPosition.push(-1);
        } else {
            let indexVerification = Number(alpha.indexOf(letter) - numberOfJumps);
            indexLetter(indexVerification, letterPosition, indiceLetter, letter);
        }
        n++
    });
}

function indexLetter(indexVerification: number, letterPosition: Array<number>, indiceLetter: Array<string | number>, letter: string) {
    let alphaIndex = indexVerification <= -1 ? Math.abs(indexVerification) : indexVerification;
    if(indexVerification <= -1){
        let index = alpha.length - alphaIndex;
        indiceLetter.push(index);

        return letterPosition.push(index);
    } else if (letter != ' ' || alphaIndex >= 0) {
        indiceLetter.push(alphaIndex);

        return letterPosition.push(alphaIndex);
    } else {
        indiceLetter.push(letter);

        return letterPosition.push(alphaIndex);
    }
}

function cryptoPhrase(arrayLetters: Array<string>) {
    let n = 0;

    letterPosition.forEach(index => {
        if (index < 0) {
            let position = String(specialLetters.shift());

            return wordConverted.push(position);
        } else {
            let letter = alpha[index];

            return wordConverted.push(letter);
        }
    });
}

function joinLetters() {
    phraseComplete = wordConverted.join('').replace(',', '').toLowerCase();
}

module.exports = alphaIndex;