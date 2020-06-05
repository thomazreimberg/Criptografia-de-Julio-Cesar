import express from 'express';
const app = express();
import fs from 'fs';
import axios from 'axios';

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
        .then( (response) => {
        let { numero_casas, cifrado, resumo_criptografico } = response.data;
        let message = decode3(cifrado, numero_casas);
        let resumo = sha1(message);
        console.log('resumo: ' + resumo);

        const answer = {
            numero_casas,
            cifrado,
            decifrado: message,
            resumo_criptografico: resumo
        };
        saveFile(answer);
    });
});

function saveFile(answer: object) {
        console.log(answer);
        fs.writeFile(__dirname + "/others/answer.json", JSON.stringify(answer), (error) => {
            console.log(error || "Saved file.");
          });
}

app.listen(3333);