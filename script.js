// Desafio: https://efficient-sloth-d85.notion.site/Exerc-cio-01-e6474ddfeb70412b9980d3a8f3327256

let numberOne = Number(prompt(`Digite o primeiro número`))
let numberTwo = Number(prompt(`Digite o segundo número`))

let sum = numberOne + numberTwo
let subtract = numberOne - numberTwo
let multiplication = numberOne * numberTwo
let division = numberOne / numberTwo
let restDivision = numberOne % numberTwo

if(sum.length > 1){
    alert(`A soma do número ${numberOne} com o número ${numberTwo} é ${sum.toFixed(2)}.`)
} else{
    alert(`A soma do número ${numberOne} com o número ${numberTwo} é ${sum}.`)
}
if(subtract.length > 1){
    alert(`A subtração do número ${numberOne} com o número ${numberTwo} é ${subtract.toFixed(2)}.`)
}else{
    alert(`A subtração do número ${numberOne} com o número ${numberTwo} é ${subtract}.`)
}
if(multiplication.length > 1){
    alert(`A multiplicação do número ${numberOne} com o número ${numberTwo} é ${multiplication.toFixed(2)}.`)
} else{
    alert(`A multiplicação do número ${numberOne} com o número ${numberTwo} é ${multiplication}.`)
}
if(division.length > 1){
    alert(`A divisão do número ${numberOne} com o número ${numberTwo} é ${division.toFixed(2)}.`)
}else{
    alert(`A divisão do número ${numberOne} com o número ${numberTwo} é ${division}.`)
}
if(restDivision.length > 1){
    alert(`O resto da divisão do número ${numberOne} com o número ${numberTwo} é ${restDivision.toFixed(2)}.`)
}else{
    alert(`O resto da divisão do número ${numberOne} com o número ${numberTwo} é ${restDivision}.`)
}

    if(sum % 2 == 0){
        alert(`O soma entre o número ${numberOne} e o número ${numberTwo} é ${sum}. O resultado é um número par.`)
    } else{
        alert(`O soma entre o número ${numberOne} e o número ${numberTwo} é ${sum}. O resultado é um número impar.`)
    }

    if(numberOne === numberTwo){
        alert(`O numero ${numberOne} e o número ${numberTwo} são iguais!!`)
    } else{
        alert(`O numero ${numberOne} e o número ${numberTwo} são diferentes!!`)
    }
