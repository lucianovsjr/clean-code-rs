/**
 * Números magicos
 * Cáculos que são feitos no código que são dificeis de ser compreendidos
 */

// errado
setInterval(() => {

}, 2592000000) // 2592000000 é um magic number

// certo 1
setInterval(() => {

}, 1000 * 60 * 60 * 24 * 30) // 30 days
// const a = 1_000_000 (Pode ser separado por underscore)

// certo 2
const INTERVAL_30_DAYS = 1000 * 60 * 60 * 24 * 30
setInterval(() => {

}, INTERVAL_30_DAYS)

// ------------
// Deixar claro na variavel o formato que é compreendido

// errado
function calculateDiscount(price, discountAmount) {

}

// certo
function calculateDiscount2(priceInCents, discountAmountInPercentage) {

}