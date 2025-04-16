class BankAccount {
    #balance;

    constructor(initialBalance) {
        this.#balance = initialBalance;
    }

    deposit(amount) {
        this.#balance += amount;
    }

    getBalance() {
        return this.#balance;
    }
}

const myAccount = new BankAccount(10000000000000);
myAccount.deposit(5000000000000000);
console.log(myAccount.getBalance()); // Output: 1500
// console.log(myAccount.#balance); // Error: Private field cannot be accessed