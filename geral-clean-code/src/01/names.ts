// Nomenclatura de variáveis
const users = ['Diego', 'Mayk', 'Rodrigo']

/**
 * Evite diminuitivos
 * Clean code é dificil quando o projeto cresce.
 * Não tenha nada avê com o tamanho do código, variavel ...
 */
// errado
const fitered = users.filter(u => {
    return u.startsWith('D')
})
// Certo
const usersStartingWithLetterD = users.filter(user => {
    return user.startsWith('D')
})

/**
 * Nomemclatura
 * Evite nomes genéricos.
 * Exemplos: data, response, list, args, params ...
 */
const getUsersFromDatabase = () => { }
// errado
function getUsers() {
    const data = getUsersFromDatabase()
    return data
}
// certo
function getUsers2() {
    const users = getUsersFromDatabase()
    return users
}