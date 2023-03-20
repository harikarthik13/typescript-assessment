"use strict";
class Account {
    constructor(CustID, CustName, widthdrawamt, acctype) {
        this.CustID = CustID;
        this.CustName = CustName;
        this.widthdrawamt = widthdrawamt;
        this.acctype = acctype;
    }
    balance(balance) {
        console.log("The customer id is :" + this.CustID);
        console.log("The customer name is :" + this.CustName);
        console.log("The account type :" + this.acctype);
        console.log("The available bank balance is :" + (balance - this.widthdrawamt));
    }
}
let b = new Account(1, 'hari', 2000, 'savings');
b.balance(100000);
