class Bank {
    constructor(balance, type){
        this.balance = balance
        this.type = type
    }

    deposit(amount){
        this.balance  += amount
        return console.log(this.balance)
    }

    withdraw(amount){
        this.balance  -= amount
        return console.log(this.balance)
    }
}

let me = new Bank(1000, 'checkings')

me.deposit(100)
me.withdraw(400)