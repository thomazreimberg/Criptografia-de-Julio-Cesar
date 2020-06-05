function sha1(message: String) {
    return require("crypto")
    .createHash("sha1")
    .update(message)
    .digest("hex");
}

module.exports = sha1;