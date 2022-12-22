/**
 * condicionais (ifs)
 * Evitar sempre que possível as negações. São mais dificeis de ler.
 */

// errado
const isUserOlderThan18Years = true
const isUserLivesOnBrazil = true
if (!isUserOlderThan18Years && !isUserLivesOnBrazil) {

}

// certo
const isUserYoungerThan18Years = true
const isUserLivesOutsideBrazil = true
if (isUserYoungerThan18Years && isUserLivesOutsideBrazil) {

}

/**
 * Early return vs else
 * Quando o Early return não é facilmente de ser visto no código podemos usar o else para deixar mais legivel
 */

// errado
function isUserOlderThan18Years(user) {
    if (!user) {
        return { error: true }
    } else {
        return user.age >= 18
    }
}
// certo
function isUserOlderThan18Years(user) {
    if (!user) {
        return { error: true }
    }

    return user.age >= 18
}

/**
 * Evite condicionais aninhadas (uma dentro da outra).
 * Prefira deixar o if abaixo ou juntar em um único (se continuar legivel).
 * Isso se aplica também a short sintax.
 * É dificil de ler o código quando tem ifs dentros de ifs
 */
