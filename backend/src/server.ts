import express from 'express';
const app = express();
const fs = require('fs');
const axios = require('axios').default;

const token = require('./others/token.ts').token;
const sha1 = require('./utils/sha1.ts');
const decode3 = require('./utils/decode3.ts');

interface AxiosResponse {
    numero_casas : number
    token: string
    cifrado: string
    decifrado : string
    resumo_criptografico: string
}

app.get('/crypto', () => {
    axios.get<AxiosResponse>(
        `https://api.codenation.dev/v1/challenge/dev-ps/generate-data?token=${token}`)
        .then( response => {
        let { numero_casas, cifrado, resumo_criptografico } = response.data;
        console.log(numero_casas);
        let message = decode3(cifrado, numero_casas);
        console.log('output: ' + message);
        
        let resumo = sha1(message);

        const answer = {
            numero_casas,
            cifrado,
            decifrado: message,
            resumo_criptografico: resumo,
        };

        console.log(answer);

        fs.writeFile(__dirname + "/anser.json"), JSON.stringify(answer), (error: String) => {
            console.log(error || 'Saved file.');
        };
        console.log(response);
    });
});

app.listen(3333);