const alpha = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ';
let letterPosition = new Array <number>();
let indiceLetter = new Array <number | string>();
let wordConverted = new Array <string>();
let specialLetters = new Array<string>();
let phraseComplete = '';
let specialLettersPosition = new Array<number>();

function alphaIndex(phrase: string, numberOfJumps : number) {
    let arrayLetters = convertPhrase(phrase);
    separateLetters(numberOfJumps, arrayLetters);

    cryptoPhrase();
    verifyLenght(arrayLetters);

    joinLetters();

    return phraseComplete;
};

function verifyLenght(arrayLetters: Array<string>) {
    let arrayLettersVerify = arrayLetters;
    if(phraseComplete.length > arrayLettersVerify.length) {
        let removeCount = phraseComplete.length - arrayLettersVerify.length;
        phraseComplete = phraseComplete.substring(0, removeCount);
    }
}

function convertPhrase(phrase: string) {
    return phrase.toUpperCase().split('');
}

function separateLetters(numberOfJumps : number, arrayLetters: Array<string>) {
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

function cryptoPhrase() {
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

/*

const alfabeto = 'abcdefghijklmnopqrstuvwxyz';

function convertCifrado(message: String) {
    let code = message;

    code = code.toLowerCase();
    code.split("");

    return code;
}

function desencryptaString (cifrado: String, numero_casas: Number) {
    cifrado = convertCifrado(cifrado);
    let output = cifrado;
    let sub = 0;
    for(let x = 0; x < cifrado.length; x ++){
    let indexAlfabeto= alfabeto.indexOf(cifrado[x]);
    sub = indexAlfabeto + Number(numero_casas);
    let index = 0;
    if(cifrado[x].includes(alfabeto[indexAlfabeto])){
      if(sub < 0 ){
        index = (alfabeto.length) + Math.abs((indexAlfabeto + Number(numero_casas)) % alfabeto.length);
      } else {
        
        index = Math.abs((indexAlfabeto + Number(numero_casas)) % alfabeto.length);
      }

      index[x] = Number(alfabeto[index]);
    } 
  }
  output = output.join('').replace(',',' ');
  return output;
}

module.exports = desencryptaString;
*/

//-----------------------------------------------------------------------------------------------------------------------------------------------------------
//-----------------------------------------------------------------------------------------------------------------------------------------------------------
//-----------------------------------------------------------------------------------------------------------------------------------------------------------
//-----------------------------------------------------------------------------------------------------------------------------------------------------------
//-----------------------------------------------------------------------------------------------------------------------------------------------------------


/*
const alpha = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ';

function cript( phrase : string, numberOfJumps : number  ){ 
    let arrayLetters = phrase.toUpperCase().split('');
    let rawCript = new Array<string | number>();
    
    arrayLetters.forEach( letter => {
        if( letter != ' '){
            let indiceLetter = Number(alpha.indexOf(letter) + numberOfJumps);
            return rawCript.push( indiceLetter > 26 ? indiceLetter % 26 : indiceLetter );
        }
        rawCript.push(letter);
    });
    console.log('rawCript: ' + rawCript);

    return decript(rawCript, numberOfJumps);
};

function decript( ArrayLetters : Array<number | string >, numberOfJumps : number){
    let phrase = '';
    console.log('ArrayLetters: ' + ArrayLetters);
    ArrayLetters.forEach( letter =>{
        if( letter != ' '){

            let indexOrigin = Number(letter) - numberOfJumps;
            let alphaIndex = ( indexOrigin < 0 ) ? (26 + indexOrigin) : indexOrigin;
            phrase += alpha[alphaIndex];
        }else{
            phrase += letter;
        }
    })
    return phrase.toLowerCase();
};

module.exports = cript;
*/





/*const alpha = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ';

function cript( phrase : string, numberOfJumps : number  ){ 
    let arrayLetters = phrase.toUpperCase().split('');
    let teste = arrayLetters;
    let rawCript = new Array<string | number>();
    let sub = 0;
    let indiceLetter = Number(0);
    arrayLetters.forEach( letter => {
        let indexAlpha = Number(alpha.indexOf(letter));
        console.log('letter ' + letter + ' = ' + indexAlpha)
        sub = Number(alpha.indexOf(letter) - numberOfJumps)
        if( letter != ' ' || indexAlpha >= 0 ) {
            if(sub < 0 ){
                indiceLetter = (alpha.length) - Math.abs((indexAlpha - numberOfJumps) % alpha.length);
            } else {
                indiceLetter = Math.abs((indexAlpha - numberOfJumps) % alpha.length);
                console.log('indiceLetter: ' + indiceLetter)
             }
            //let indiceLetter = Number(alpha.indexOf(letter) - numberOfJumps);
            //return rawCript.push( indiceLetter > 26 ? indiceLetter % 26 : indiceLetter );
            rawCript.push(indiceLetter > 26 ? indiceLetter % 26 : indiceLetter );
            console.log('----------------------------------');
        }
        //output[x] = alfabeto[elemento];
        teste[indexAlpha] = alpha[indiceLetter].toLowerCase();
        rawCript.push(letter);
    });
    console.log('rawCript: ' + rawCript);

    return teste;
};

function decript( ArrayLetters : Array<number | string >, numberOfJumps : number){
    let phrase = '';
    console.log('ArrayLetters: ' + ArrayLetters);
    ArrayLetters.forEach( letter =>{
        if( letter != ' '){

            let indexOrigin = Number(letter) - numberOfJumps;
            let alphaIndex = ( indexOrigin < 0 ) ? (26 + indexOrigin) : indexOrigin;
            phrase += alpha[alphaIndex];
        }else{
            phrase += letter;
        }
    })
    return phrase.toLowerCase();
};

module.exports = cript; */