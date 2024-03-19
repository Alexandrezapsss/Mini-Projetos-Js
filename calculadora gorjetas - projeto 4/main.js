//criar uma variavel referente ao evento de botão
const calculateBtn = document.querySelector("#calculateBtn")

function calculateTip(){
    //selecionar os elemento e já aproveitar e pegar o valor
    const billAmount = parseFloat(document.querySelector("#billAmount").value)
    const serviceQuality = parseFloat(document.querySelector("#serviceQuality").value)
    //fazer uma validação para caso o valor da conta esteja vázio
    if(billAmount == "") {
        alert('Favor preencher o valor da conta')
        return
    }
    //calcular o valor da gorjeta e total da conta com a gorjeta
    const tipAmount = billAmount * serviceQuality
    const totalAmount = billAmount + tipAmount
    //com os valores pegos agora vamos setar nos inputs de saída para o usuário
    const tipAmountInput = document.querySelector("#tipAmount")
    const totalAmountInput = document.querySelector("#totalAmount")

    tipAmountInput.value = `R$${tipAmount.toFixed(2)}`//dica: cuidado na propriedade do input se tiver "number" no html vai dar errado
    totalAmountInput.value = `R$${totalAmount.toFixed(2)}`//continuando -> pois o que estamos setando são strings e não numbers
}

calculateBtn.addEventListener("click", calculateTip)