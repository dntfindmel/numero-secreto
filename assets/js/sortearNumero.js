const menorValor = 1;
const maiorValor = 1000;
const numeroSecreto = gerarNumero();

function gerarNumero() {
    return parseInt(Math.random() * maiorValor + 1);
}

const elMenorValor = document.getElementById('menor-valor');
elMenorValor.innerHTML = menorValor;

const elMaiorValor = document.getElementById('maior-valor');
elMaiorValor.innerHTML = maiorValor;

console.log(numeroSecreto)