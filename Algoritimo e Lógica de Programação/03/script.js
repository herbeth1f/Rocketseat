let firstNumber = prompt('Digite O primeiro número')
let secondNumber = prompt('Digite o segundo número')

firstNumber = Number(firstNumber)
secondNumber = Number(secondNumber)
 
const sum = firstNumber + secondNumber
const sub = firstNumber - secondNumber
const multi =  firstNumber * secondNumber
const div = firstNumber / secondNumber
const restDiv = firstNumber % secondNumber

alert ('Soma: ' + sum)
alert ('Subtração: ' + sub)
alert ('Multiplicação: ' + multi)
alert ('Divição: ' + div)
alert ('Resto da Divição: ' + restDiv)
