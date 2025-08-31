function incrementString (strng) {
    if (!/\d$/.test(strng)){
        return strng + 1;
    }  let ultimoChar = strng.slice(-1);
    if (!isNaN(ultimoChar)) {
    return parseInt(ultimoChar) + 1;
    }
    return incrementString;
}