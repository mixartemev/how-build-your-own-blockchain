export type Address = string;

export class Transaction {
    public senderAddress: Address;
    public recipientAddress: Address;
    public value: number;

    constructor(senderAddress: Address, recipientAddress: Address, value: number) {
        this.senderAddress = senderAddress;
        this.recipientAddress = recipientAddress;
        this.value = value;
    }
}

export class Block {
    public blockNumber: number;
    public transactions: Array<Transaction>;
    public timestamp: number;
    public nonce: number;
    public prevBlock: string;
}

export class Blockchain {
    public nodeId: string;
    public blocks: Array<Block>;
    public transactionPool: Array<Transaction>;

    constructor(nodeId: string) {
        this.nodeId = nodeId;
        this.blocks = [];
        this.transactionPool = [];
    }

    // Submits new transaction
    public submitTransaction(senderAddress: Address, recipientAddress: Address, value: number) {
        this.transactionPool.push(new Transaction(senderAddress, recipientAddress, value));
    }

    // Creates new block on the blockchain.
    public createBlock() {
        // TBD
    }
}
