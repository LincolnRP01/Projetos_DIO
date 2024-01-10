let SaldoTotal = Saldo(143, 67)

function Saldo(QuantVit, QuantDer){
    let calculo = QuantVit - QuantDer;
    return calculo


}

let nivel = "";

if( SaldoTotal <= 10){
    nivel = "Ferro"
}else if(SaldoTotal >= 11 && SaldoTotal <= 20){
    nivel = "Bronze"
}else if(SaldoTotal >= 21 && SaldoTotal <= 50){
    nivel = "Prata"
}else if(SaldoTotal >= 51 && SaldoTotal <= 80){
    nivel = "Ouro"
}else if(SaldoTotal >= 81 && SaldoTotal <= 90){
    nivel = "Diamante"
}else if(SaldoTotal >= 91 && SaldoTotal <= 100){
    nivel = "Lendario"
}else{
    nivel = "Imortal"
}

console.log(`O Herói tem de saldo de ${SaldoTotal} está no nível de ${nivel}`)


/*
Instruções para entrega
**O Que deve ser utilizado**

- Variáveis
- Operadores
- Laços de repetição
- Estruturas de decisões
- Funções

## Objetivo:

Crie uma função que recebe como parâmetro a quantidade de vitórias e derrotas de um jogador,
depois disso retorne o resultado para uma variável, o saldo de Rankeadas deve ser feito através do calculo (vitórias - derrotas)

Se vitórias for menor do que 10 = Ferro
Se vitórias for entre 11 e 20 = Bronze
Se vitórias for entre 21 e 50 = Prata
Se vitórias for entre 51 e 80 = Ouro
Se vitórias for entre 81 e 90 = Diamante
Se vitórias for entre 91 e 100= Lendário
Se vitórias for maior ou igual a 101 = Imortal

## Saída

Ao final deve se exibir uma mensagem:
"O Herói tem de saldo de **{saldoVitorias}** está no nível de **{nivel}**
*/