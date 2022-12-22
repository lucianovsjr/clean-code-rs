/**
 * Causa vs Efeito
 * Problema: Utilizar uma informação para diversos comportamentos.
 * Não criar uma variável com base no seu efeito e sim pela causa, seu motivo.
 * Pode ser criado outras varáveis auxiliares com o mesmo conteúdo
 */

function Button() {
    // errado
    const isButtonDisabled = true
    // certo
    const isFormSubmitting = true

    // Eu vou desabilitar o button e exibir carregando quando o formulário estiver sendo enviado
    return (
        <button disabled={isFormSubmitting}>
            <span></span>
            Enviar
            {isFormSubmitting ? 'Carregando' : 'Enviar'}
        </button>
    )
}