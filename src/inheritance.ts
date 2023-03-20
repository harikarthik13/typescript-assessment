interface SavingAccount{
balance(balance:number):void;
}
interface CurrentAccount{
    balance(balance:number):void;
}
class Account implements SavingAccount,CurrentAccount{
    CustID : number;
    CustName : string;
    widthdrawamt : number;
    acctype : string;
    
    constructor(CustID : number,CustName : string, widthdrawamt : number,acctype : string){
       this.CustID = CustID;
       this.CustName = CustName;
       this.widthdrawamt=widthdrawamt;
       this.acctype=acctype;

       
    }

    balance(balance: number): void {
        console.log("The customer id is :"+  this.CustID ); 
        console.log("The customer name is :"+this.CustName); 
        console.log("The account type :"+this.acctype); 
       console.log("The available bank balance is :"+(balance-this.widthdrawamt)); 
    }
}

let b=new Account(1,'hari',2000,'savings')
b.balance(100000)


  
