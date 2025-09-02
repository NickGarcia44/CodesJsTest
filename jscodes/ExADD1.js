function incrementString(str) {
    // Encontra a parte numérica no final da string
    let match = str.match(/(\d*)$/);
    let numberPart = match[0]; // parte numérica no final
    let stringPart = str.slice(0, -numberPart.length); // parte antes do número

    if (numberPart === "") {
        // se não houver número no final, adiciona 1
        return str + "1";
    } else {
        // incrementa o número
        let incremented = (parseInt(numberPart, 10) + 1).toString();

        // mantém zeros à esquerda
        while (incremented.length < numberPart.length) {
            incremented = "0" + incremented;
        }

        return stringPart + incremented;
    }
}
