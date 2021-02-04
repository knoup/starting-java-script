/* ### Transformar notas escolares

Crie um algoritmo que transforme as notas do sistema numérico para sistema de notas em caracteres tipo A B C

    * de 9.0 para cima   A
    * entre 8.0 - 8.9     B
    * entre 7.0 - 7.9     C
    * entre 6.0 - 6.9     D
    * menor que 6.0      F

*/
let score


function getScore(score) {
let A = score >= 9 && score <= 10
let B = score >= 8 && score <= 8.9
let C = score >= 7 && score <= 7.9
let D = score >= 6 && score <= 6.9
let F = score < 6 && score >= 0
    if (A) {
        finalScore = "A"
    } else if (B) {
        finalScore = "B"
    } else if (C) {
        finalScore = "C"
    } else if (D) {
        finalScore = "D"
    } else if (F){
        finalScore = "F"
    } else {
        finalScore = "Nota inválida"
    }
    
    return finalScore
}
