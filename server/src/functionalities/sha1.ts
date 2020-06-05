import {SHA1} from "crypto-js";

function sha1(message: String) {

    const generator = (SHA1(message.toString()));
    return generator;
}

module.exports = sha1;