class Bank{
    constructor(firstName, lastName, middleName, accountType){
        this.firstName = firstName
        this.lastName = lastName
        this.middleName = middleName
        this.accountType = accountType
        this.balance = 100
        this.status = 'open'
    }

    //deposit
    deposit(amount){
        this.balance += amount
        console.log(`${this.firstName}s new balance is $${this.balance}`)
    }
    //withdraw
    withdraw(amount){
        this.balance -= amount
        console.log(`You have withdrawn $${amount}`)
        if (this.balance<= 0){
            this.balance -= 35
            console.log('`${this.firstName} has been charged $35 for being below $0')
        }
    }

    //transfer
    transfer(amount,account){
        this.balance -= amount
        account.deposit(amount)
        console.log(`${this.firstName} has transfered $${amount}`)
    }

}

let Luigi = new Bank('Luigi','Siopongco','P.','checkings')
let John = new Bank('John','Smith','P.','checkings')


console.log(Luigi)
console.log(John)

Luigi.deposit(2000)
Luigi.withdraw(100)

Luigi.transfer(100,John)

/*
status = open close freeze
- A user should be able to open a bank account provided they have the initial balance of $100

- User should be able to transfer money from one bank account to another  

- A user should be able to withdraw money from the bank account 

- The app should charge $-35 fees if the bank account is below $0*/