/**
 * Problema: Uma informação ser repassada por diversas funções
 * Esse problema é corrigido com ts, mas mesmo com o ts pode ser passado props adicionais, a segurança está só no ambiente de desenvolvimento.
 * Prefira sempre receber como parâmetros objetos, parametros nomeados
 */

// Rota para criação do usuário (name, email, password)
// Controller (name, email, password)
// Respoistory (name, email, password)

// Errado
function createUserRoute(body) {
    // validações
    // ...

    createUserController(body)
}

function createUserController(data) {
    usersRepository.create(data)
}

const usersRepository = {
    create(data) {
        // Cria o usuário (name, email, password)
    }
}


// Certo
function createUserRoute2(body) {
    const { name, email, password } = body
    // validações
    // ...

    createUserController2({
        name,
        email,
        password,
    })
}

function createUserController2(data) {
    const { name, email, password } = data
    usersRepository2.create({
        name,
        email,
        password,
    })
}

const usersRepository2 = {
    create(data) {
        // Cria o usuário (name, email, password)
        const user = createUserOnDatabase()
        return {
            user,
        }
    }
}

// ------------

// errado
createSuperUserRoute({ name: 'teste' }, { id: 1 })
createSuperUserRoute(null, { id: 1 }) // não iria saber qual é o primeiro parametro
function createSuperUserRoute(body, params) {
    const { name, email, password } = body
    // validações
    // ...

    createUserController2({
        name,
        email,
        password,
    })
}

// certo
createSuperUserRoute2({
    body: { name: 'teste' },
    params: { id: 1 },
})
createSuperUserRoute2({ params: { id: 1 } })
function createSuperUserRoute2({ body, params }) {
    const { name, email, password } = body
    // validações
    // ...

    createUserController2({
        name,
        email,
        password,
    })
}