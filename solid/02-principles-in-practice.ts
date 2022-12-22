/**
 * A maioria dos exemplos vieram da OO.
 */

// SRP - Separando em funções menores

class CalculateOrderDiscount {
    public execute() {
        // Cálculo do desconto
    }
}

class SubmitOrderInvoice {
    public execute() {
        // eEmissão da nota   
    }
}

class CreateOrder {
    public execute() {
        const discount = new CalculateOrderDiscount()
        discount.execute()
        const invoice = new SubmitOrderInvoice()
        invoice.execute()
    }
}

// --------------
// OCP

// Essa classe fere o OCP por precisar alterar execute sempre que precisa alterar os metodos ou parcelas do credito
class CalculateOrderDiscount2 {
    public execute(amount: number, installments: number, paymentMethod: string) {
        if (paymentMethod === 'billet') {
            return amount * 0.05;
        }

        if (paymentMethod === 'credit') {
            if (installments === 1) {
                return amount * 0.05;
            }

            if (installments <= 6) {
                return amount * 0.02;
            }

            return 0;
        }

        if (paymentMethod === 'debit') {
            return amount * 0.05;
        }

        return 0;
    }
}

// Resolvendo com OCP
// Está totalmente aberta para a extensão e fechada para alteração
// Para criar um novo método basta criar uma nova classe
// Não é preciso alterar o cálculo de desconto
// Também foi resolvido o LSP, a dependencia pode ser substituida. Resolvido com parametro de função paymentMethod
// Também foi resolvido o DIP, quem chama que o método que passa a dependência. Resolvido passando a dependencia no constructor.
// Aqui ainda fere o ISP pois o Billet, Credit e Debit tem o cardNumber como opção, ele é obrigatório em Credit e Debit
interface PaymentMethod {
    getDiscountAmount: (amount: number) => number;
    cardNumber?: number;
}

class Billet implements PaymentMethod {
    getDiscountAmount(amount: number): number {
        return amount * 0.1;
    }
}

class Credit implements PaymentMethod {
    private installments: number;

    constructor(installments: number) {
        this.installments = installments;
    }

    getDiscountAmount(amount: number): number {
        if (this.installments === 1) {
            return amount * 0.05;
        }

        if (this.installments <= 6) {
            return amount * 0.02;
        }

        return 0;
    }
}

class Debit implements PaymentMethod {
    getDiscountAmount(amount: number): number {
        return amount * 0.05;
    }
}

class CalculateOrderDiscount3 {
    private paymentMethod: PaymentMethod;

    constructor(paymentMethod: PaymentMethod) {
        this.paymentMethod = paymentMethod;
    }

    public execute(amount: number) {
        return this.paymentMethod.getDiscountAmount(amount);
    }
}

const calculateOrderDiscount1 = new CalculateOrderDiscount3(new Debit())
calculateOrderDiscount1.execute(2000)
const calculateOrderDiscount2 = new CalculateOrderDiscount3(new Credit(4))
calculateOrderDiscount2.execute(2000)
const calculateOrderDiscount3 = new CalculateOrderDiscount3(new Billet())
calculateOrderDiscount3.execute(2000)

//Resolvendo com ISP - Separar as interfaces para adicionar comportamentos
interface Card {
    number: number;
}

interface PaymentMethod2 {
    getDiscountAmount: (amount: number) => number;
}

class Billet2 implements PaymentMethod2 {
    getDiscountAmount(amount: number): number {
        return 0;
    }
}

class Credit2 implements PaymentMethod2, Card {
    constructor(public number) {

    }

    getDiscountAmount(amount: number): number {
        return 0;
    }
}

class Debit2 implements PaymentMethod2, Card {
    constructor(public number) {

    }

    getDiscountAmount(amount: number): number {
        return 0;
    }
}