class BankAccount {
  // Private field
  #balance;

  constructor(initialBalance = 0) {
    this.#balance = initialBalance;
  }

  // Method to deposit money
  deposit(amount) {
    if (amount > 0) {
      this.#balance += amount;
      console.log(`Deposited: $${amount}`);
    } else {
      console.log("Deposit amount must be positive.");
    }
  }

  
  withdraw(amount) {
    if (amount > 0 && amount <= this.#balance) {
      this.#balance -= amount;
      console.log(`Withdrew: $${amount}`);
    } else {
      console.log("Invalid withdraw amount.");
    }
  }

  // Method to get current balance
  getBalance() {
    return this.#balance;
  }
}


const account = new BankAccount(100);
account.deposit(50);     
account.withdraw(20);    
console.log(account.getBalance()); 



console.log(account.balance); 

