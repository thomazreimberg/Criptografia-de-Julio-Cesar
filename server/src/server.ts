import express from 'express';
const app = express();
const fs = require('fs');

const token = require('./others/token.ts').token;

const sha1 = require('./functionalities/sha1.ts');
const decode = require('./functionalities/decode.ts');
const decode2 = require('./functionalities/decode2.ts');
const decode3 = require('./functionalities/decode3.ts');

app.get('/crypto', async () => {
    /*
    const url = `https://api.codenation.dev/v1/challenge/dev-ps/generate-data?token=/${token}`;
    let res = await fetch(url);
    let { numero_casas, cifrado, resumo_criptografico } = await res.json();
    */
   //dpnnpo tfotf hfut b mpu pg dsfeju uibu cfmpoht up dpme gffu. bsuivs hpegsfz
    let res = decode3('1 - d oljhlud udsrvd pduurp vdowrx vreuh r fdfkruur fdqvdgr.', 3);
    console.log('output: ' + res);

    //const message = decode('abacaxi', 3);
    //console.log('Input: '+ 'abacaxi')
    //const resumo = sha1(message);
    //console.log('Message de output: ' + message);
    /*const answer = {
        numero_casas,
        cifrado,
        decifrado: message,
        resumo_criptografico: resumo,
    };

    console.log(answer);
    
    fs.writeFile(__dirname + "/anser.json"), JSON.stringify(answer), (error: String) => {
        console.log(error || 'Saved file.');
    };

    return res; */
});

app.listen(3333);