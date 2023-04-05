function verificarChute(chute) {
    const numero = +chute;

    if (chuteInvalido(numero)) {
        elChute.innerHTML += '<div>Valor inválido!</div>'

        return
    }

    if (numeroMaior(numero)) {
        elChute.innerHTML += `
        <div>Valor inválido: o número precisa estar entre ${menorValor} e ${maiorValor}.</div>
        `

        return
    }

    if (numero === numeroSecreto) {
        document.body.innerHTML = `
        <h2>Você acertou!</h2>
        <h3>O número secreto era ${numeroSecreto}</h3>
        
        <button id="jogar-novamente" class="btn-jogar">Jogar novamente</button>`
    } else if (numero > numeroSecreto) {
        elChute.innerHTML += `
        <div>O número secreto é menor <i class="fa-solid fa-arrow-down-long"></i></div>
        `
    } else {
        elChute.innerHTML += `
        <div>O número secreto é maior <i class="fa-solid fa-arrow-up-long"></i></div>
        `
    }

    function chuteInvalido(numero) {
        return Number.isNaN(numero);
    }

    function numeroMaior(numero) {
        return numero > maiorValor || numero < menorValor;
    }
}

document.body.addEventListener('click', e => {
    if (e.target.id == 'jogar-novamente') {
        window.location.reload()
    }
})