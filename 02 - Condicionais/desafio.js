/*Desafio1 
    Faça um programa para calcular o valor de uma viagem

    Você terá 5 váriáveis. Sendo elas:
    1 - Preço do etanol;
    1 - Preço da gasolina;
    1 - O tipo de combustivel que está no seu carro;
    2 - Consumo do veículo por Km;
    3 - Distância da viagem em Km;

    Imprima no console o valor que será gasto para realizar esta viagem.
*/

function consumoCombustivel(tipoCombustivel, consumoPorLitro, distanciaViagem) {
    var tipoCombustivel;
    const precoPorLitroEtanol = 4.05;
    const precoPorLitroGasolina = 5.09;
    var consumoPorLitro;
    var distanciaViagem;

    if (tipoCombustivel === 'Etanol') {
        var consumo = (distanciaViagem / consumoPorLitro) * precoPorLitroEtanol;
    } else {
        var consumo = (distanciaViagem / consumoPorLitro) * precoPorLitroGasolina;
    }

    console.log("O valor gasto nessa viagem é de: R$" + consumo.toFixed(2));
}

consumoCombustivel('Etanol', 12, 250);