class BankAccount {
    constructor(accountHolder, balance = 0) {
        this.accountHolder = accountHolder;
        this.balance = balance;
    }

    deposit(amount) {
        this.balance += amount;
    }

    withdraw(amount) {
        if (this.balance >= amount) {
            this.balance -= amount;
        } else {
            console.log("Insufficient balance");
        }
    }
}

function transfer(account1, account2, amount) {
    if (account1.balance >= amount) {
        account1.withdraw(amount);
        account2.deposit(amount);
    } else {
        console.log("Insufficient balance for transfer");
    }
}

let account1 = new BankAccount("Alice", 1000);
let account2 = new BankAccount("Bob", 500);

transfer(account1, account2, 200);

console.log(account1.balance);
console.log(account2.balance);
