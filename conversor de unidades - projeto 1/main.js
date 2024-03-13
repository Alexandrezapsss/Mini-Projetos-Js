//Vamos Selecionar Elementos

const inputElement = document.querySelector("#input");
const fromElement = document.querySelector("#from");
const toElement = document.querySelector("#to");
const outputElement = document.querySelector("#output");
const convertButton = document.querySelector("#convert-btn");
const messageElement = document.querySelector("#message");

//função para converter as unidades

function convert() {
    //captar os valores escolhidos para as variaveis abaixo
    const fromValue = fromElement.value;
    const toValue = toElement.value;

    //lógica para a conversão
    if(fromValue === toValue){
        outputElement.value = inputElement.value;
        messageElement.textContent = "Você escolheu unidades iguais de medida"
        return;
    }

    //converter a entrada para metros para facilitar a conversão
    let meters
    switch (fromValue) {
        case "m":
            meters = inputElement.value
            break;
        case "km":
            meters = inputElement.value * 1000;
            break;
        case "cm":
            meters = inputElement.value / 100;
            break;
        case "mm":
            meters = inputElement.value / 1000;
            break;
        default:
            break;
    }

    //converter metros para a undade de saída
    let result
    switch (toValue) {
        case "m":
            result = meters
            break;
        case "km":
            result = meters / 1000;
            break;
        case "cm":
            result = meters * 100;
            break;
        case "mm":
            result = meters * 1000;
            break;
        default:
            break;
    }

    //exibir o resultado
    outputElement.value = result;
    //mensagem de resultado
    messageElement.textContent = `De ${inputElement.value}${fromValue} para ${toValue} fica: ${result}${toValue}`
}

//chamar a função convert -> vamos usar o botão pra isso
convertButton.addEventListener("click", convert);