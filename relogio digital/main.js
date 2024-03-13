//comecar a estudar datas e hora e ficar retornando isso constantemente no html contar os segundos
//criar uma função para o relogio
function updaterClock() {
    const hoursElement = document.querySelector(".hours")
    const minutesElement = document.querySelector(".minutes")
    const secundsElement = document.querySelector(".seconds")

    //instanciar o modulo de Date no Js -> armazenar valores nas variaveis hours minutes e secunds
    const now = new Date();
    const hours = now.getHours().toString().padStart(2, "0")
    const minutes = now.getMinutes().toString().padStart(2, "0")
    const seconds = now.getSeconds().toString().padStart(2, "0")

    //aplicar as horas minutos e segundos nos meus elementos html
    hoursElement.textContent = hours
    minutesElement.textContent = minutes
    secundsElement.textContent = seconds

    //teste no console -> em caso de erro é muito bom ter esse console
    console.log(now, hours,minutes,seconds)
}

setInterval(updaterClock, 1000)
