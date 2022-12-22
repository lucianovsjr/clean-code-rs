export class Order {
    public customerDocument: string;
    public total: number;
    public createdAt: Date;

    constructor(total: number, customerDocument: string) {
        this.total = total;
        this.createdAt = new Date();
        this.customerDocument = customerDocument;
    }
}