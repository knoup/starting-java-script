/* ### Sistema de gastos familiar


Crie um objeto que possuirá duas propriedades, ambas do tipo array:
    * receitas: []
    * despesas: []

Agora, crie uma função que irá calcular o total de receitas e despesas e irá mostras uma mensagem se a família está com saldo positivo ou negativo, seguido do valor do saldo

*/

var balance = {
    receitas: [100, 200, 300, 400, 500, 600],
    despesas: [10, 20, 30, 40, 50, 60]
}

function calculate(balance) {
let r_total = 0
let d_total = 0

    // Somando o total de receita
    for (let amount of this.balance.receitas) {
        r_total += amount
    
    }

    // Somando o total de despesas
    for (let amount of this.balance.despesas) {
        d_total += amount
    }
    // Calculando o balanço final
    let saldo = r_total - d_total

    // Mostrando o saldo final
    if (saldo > 0) {
        return 'O saldo é positivo, com valor de R$' + saldo.toFixed(2) + ' reais.'
    } else {
        return 'O saldo é negativo, com valor de R$' + saldo.toFixed(2) + ' reais.'
    }
}

console.log(calculate())