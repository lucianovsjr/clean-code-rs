/**
 * Existem diversas interpretações.
 * Os principios estão conectados.
 * 
 * SRP - Single Responsibility Principle (Princípio responsabilidade única)
 *  Cada classe/entidade/método(qualquer coisa) deve ser responsável por uma única ação.
 *  Se o método cria um usuário e envia um email por exemplo, esse método está feriando esse principio.
 * 
 * OCP - Open/Closed Principle (Princípio de aberto/fechado)
 *  As classes/entidades/métodos(qualquer coisa) devem estar abertas para extensão e nunca para alteração.
 *  Deve ser possível adicionar um comportamento mas nunca modificar um existente.
 *  Locais onde existe condicionais e que possívelmente deverá ser adicionado ifs no futuro, esse exemplo está ferindo o príncipio.
 * 
 * LSP - Liskov substitution principle (Princípio da substituição de Liskov)
 *  Deve ser possível substituir uma dependência de uma classe desde que elas tenham o mesmo formato.
 *  Se uma classe utiliza um repository que está conecetando ao mysql, se substituirmos esse repository por um outro que acessa o
 *  sqlite, a classe deve continuar funcionando.
 * 
 * ISP - Interface segregation principle (Princípio da Segregação de interface)
 *  Instrui a deixar o código mais manutenivel, sepando as interfaces.
 * 
 * DIP - Dependency Inversion Principle (Princípio da inversão de dependência)
 *  As dependencias de uma classe devem ser passadas por parâmetros.
 * 
 */

// ISP
interface PrinterWithScan {
    scan: () => void
}

interface BasicPrinter {
    print: () => void
}

class Printer implements BasicPrinter, PrinterWithScan {
    print: () => void
    scan: () => void
}

// Sem DIP
import { createUserOnDatabase } from 'db'
function createUser() {
    createUserOnDatabase()
}
// Com DIP
function createUser(createUserOnDatabase: () => void) {
    createUserOnDatabase()
}
createUser(createUserOnDatabase)
