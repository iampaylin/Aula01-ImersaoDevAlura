// transformar valores de entrada em número

let notaUm = document.getElementById("primeiraNota")
let notaDois = document.getElementById("segundaNota")
let notaTres = document.getElementById("terceiraNota")
let notaQuatro = document.getElementById("quartaNota")



// Calcular média

let situacao = document.getElementById("situacao")
let nota = document.getElementById("nota")
let calcular = document.getElementById("calcular")

calcular.addEventListener("click", () => {

    let numberNotaUm = Number(notaUm.value)
    let numberNotaDois = Number(notaDois.value)
    let numberNotaTres = Number(notaTres.value)
    let numberNotaQuatro = Number(notaQuatro.value)

    let notaFinal = (numberNotaUm + numberNotaDois + numberNotaTres + numberNotaQuatro) / 4

    let notaFixada = notaFinal.toFixed(1)

    if ( notaFinal >= 6 ) {
        situacao.innerText = 'Situação: aprovado'
        nota.innerText = `Nota final: ${notaFixada}`
    } else {
        situacao.innerText = 'Situação: reprovado'
        nota.innerText = `Nota final: ${notaFixada}`
    }


})