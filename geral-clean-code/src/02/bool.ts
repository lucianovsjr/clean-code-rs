// booleans

/**
 * Sempre escrever como se fosse uma pergunta que possua uma resposta sim/não
 * palavras que podem ser usadas na frente: is, does, has...
 */

// errado
const userMajority = true
// certo
const isUserOnMajority = true

// errado
const disable = true
// certo
const isDisable = true

// errado
const userGroup = true
// certo
const userHasGroup = true

// errado
if (disable) {}
// certo
if (isDisable) {}

// errado
const loading = true
// certo
const isLoading = true

const isUserProfileLoading = true

/**
 * Booleans sempre como perguntas, máximo semâmtico possível.
 * Evite váriaveis genericas.
 * Leia variaveis booleans com o if na frente
 * if loading (errado), if is loading (certo)
 */