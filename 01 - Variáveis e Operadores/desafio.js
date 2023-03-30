/*Desafio1 
    Faça um programa para calcular o valor de uma viagem

    Você terá 3 váriáveis. Sendo elas:
    1 - Preço do combustível;
    2 - Consumo do veículo por Km;
    3 - Distância da viagem em Km;

    Imprima no console o valor que será gasto para realizar esta viagem.
*/


function consumoCombustivel(precoPorLitro, consumoPorLitro, distanciaViagem) {
    var precoPorLitro;
    var consumoPorLitro;
    var distanciaViagem;

    var consumo = (distanciaViagem / consumoPorLitro) * precoPorLitro;

    console.log("O valor gasto nessa viagem é de: R$" + consumo.toFixed(2));
}

consumoCombustivel(5.09, 12, 250);
