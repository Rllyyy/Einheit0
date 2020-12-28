const account = class Account {
    constructor(owner){
        this.owner = owner;
        this.balance = 0;
    }
    credit(amount) {
        this.balance = this.balance + amount;
    }
    describe() {
        return console.log(`Owner:${this.owner}, Balance:${this.balance}`);
    }
    myOwnerName(){
        return this.owner;
    }
    myOwnerBalance(){
        return this.balance;
    }
}

module.exports = account;