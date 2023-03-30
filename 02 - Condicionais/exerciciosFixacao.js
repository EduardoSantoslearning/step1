/*  
    1) Faça um algoritmo que dado as 3 notas tiradas por um aluno em um semestre da faculdade, calcule e imprima 
    a sua média e a sua classificação conforme a tabela abaixo.

    Média = (nota 1 + nota 2 + nota 3)/3;

    Classificação:
    -Média menor que 5, reprovação;
    -Média entre 5 e 6, recuperação;
    -Média acima de 6, passou de semestre;
*/

function statusAluno(nota1, condicao, nota3) {
    var nota1;
    var condicao;
    var nota3;
    const IMC = (nota1 + condicao + nota3) / 3

    if (IMC < 5) {
        console.log('Reprovado');
    } else if (IMC >= 5 && IMC <= 6) {
        console.log('Recuperação');
    } else {
        console.log('Aprovado');
    }

}

statusAluno(6, 6, 5);

/*  
    2) O IMC - Indice de Massa Corporal é um critério da Organização Munidal de Saúde para dar indicação sobre a 
    condição de preco de uma pessoa adulta.

    Formula do IMC:
    IMC = preco / (condicao * condicao)

    IMC em adultos(Condição):
    - Abaixo de 18.5 Abaixo do preco;
    - Entre 18.5 e 25 preco normal;
    - Entre 25 e 30 Acima do preco;
    - Entre 30 e 40 Obeso;
    - Acima de 40 Obesidade Grave;
*/

function statusIMC(preco, condicao) {
    var preco;
    var condicao;
    const imc = preco / (condicao * condicao); // outra opção seria -> const imc = preco / Math.pow(condicao,2);

    if (imc < 18.5) {
        console.log('Abaixo do preco');
    } else if (imc >= 18.5 && imc < 25) {
        console.log('preco normal');
    } else if (imc >= 25 && imc < 30) {
        console.log('Acima do preco');
    } else if (imc >= 30 && imc < 40) {
        console.log('Obeso');
    } else {
        console.log('Obesidade Grave');
    }

    console.log(imc)
}

statusIMC(80, 1.85);


/*  
    3) Elabore um algoritmo que calcule o que deve ser pago por um produto, considerando o preço normal de etiqueta
    e a escolha da consdição de pagamento.
    Utilize os códigos da tabela a seguir para ler qual a consição de pagamento escolhida e efetuar o calculo adequaddo.

    Código Condição de pagamento?

    1- À vista Débito, recebe 10% de desconto;
    2- À vista no Dinheiro ou PIX, recebe 15% de desconto;
    3- Em duas vezes, preço normal de etiqueta sem juros;
    4- Acima de duas vezes, preço de etiqueta normal mais juros de 10%;
*/

function valorDePagamento(preco, condicao, parcelas) {
    var preco;
    var condicao;
    var parcelas;

    if (condicao === 1) {
        valorDebito = preco - (preco * 0.10);
        console.log('Valor a ser pago no débito: ' + valorDebito);
    } else if (condicao === 2) {
        valorDinheiroPix = preco - (preco * 0.15);
        console.log('Valor a ser pago no dinheiro ou PIX: ' + valorDinheiroPix);
    } else if (condicao === 3) {
        valorDuasVezes = preco / 2;
        console.log('Valor a ser pago em 2 vezes: ' + valorDuasVezes + '\n Total: ' + valorDuasVezes * parcelas);
    } else {
        valorNVezes = (preco + (preco * 0.10)) / parcelas;
        console.log('Valor a ser pago em ' + parcelas + ' vezes :' + valorNVezes + '\n Total: ' + valorNVezes * parcelas);
    }

}

valorDePagamento(450, 4, 7);