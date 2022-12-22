/**
 * Coisas especificas de uma tecnologia.
 * Existem syntatic sugars que podem ser substituidas por uma sintaxe mais comum
 * 
 */

// errado
const numberInString = '12373'
const number = +numberInString
const number2 = parseInt(numberInString)
const isNumberNotNull = !!number
const numberAsString = `${number}`

//certo
const number = Number(numberInString)
const isNumberNotNull = Boolean(number)
const numberAsString = String(number)
