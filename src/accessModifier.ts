// access modifier

class BankAccount {
    public readonly id: number;      // readonly is an access modifier
    public userName: string;
    private userBalance: number;     // private is an access modifier -> when we use it in any property then the property can't be access out side the class
    constructor(id: number, userName: string, userBalance: number) {
        this.id = id;
        this.userName = userName;
        this.userBalance = userBalance;
    }

    addBalance(addedAmount: number) {
        this.userBalance = this.userBalance + addedAmount;
    }
}

// ? protected is also a modifier but we use this when a data can access by his child but not in outside the class

const alaminBankAccount = new BankAccount(123, 'alamin', 50);

// alaminBankAccount.userid = 222;
alaminBankAccount.addBalance(50)
alaminBankAccount.addBalance(50)
console.log(alaminBankAccount)