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