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