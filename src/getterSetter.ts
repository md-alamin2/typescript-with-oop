// getter
// setter

class BankAccount {
    public readonly id: number;
    public userName: string;
    private userBalance: number;
    constructor(id: number, userName: string, userBalance: number) {
        this.id = id;
        this.userName = userName;
        this.userBalance = userBalance;
    }

    // set 
    // addBalance(addedAmount: number) {
    //     this.userBalance = this.userBalance + addedAmount;
    // }

    set addBalance(addedAmount: number) {
        this.userBalance += addedAmount;
    }

    // get user balance
    // getBalance(){
    //     return this.userBalance
    // }

    get balance() {
        return this.userBalance;
    }
}

const alaminBankAccount = new BankAccount(123, 'alamin', 50);

alaminBankAccount.addBalance = 150;
console.log(alaminBankAccount.balance)


// alaminBankAccount.userid = 222;
// alaminBankAccount.addBalance(50)
// console.log(alaminBankAccount.getBalance())