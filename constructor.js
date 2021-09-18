
class Bank_cust{
    min_bal=500;
    constructor(a,b,c,d){
    this.bank_id=a;
    this.name=b;
    this.phone=c;
    this.dep=d;
console.log("constuctor is automatically execute")
    }
    open_account(){
        console.log( this.name,"acount opened sucessfully")
    }
    get_Balance(){
        console.log(this.name,"balance", this.dep-this.min_bal)
    }
    withdraw_amount()
    {
        console.log(this.name,"withdraw amount",this.dep-this.min_bal-2000)
}
close_account(){
    console.log("account colsed sucessfully")
}
}
//object created//
 var c1 = new Bank_cust(100,"rama",8374455566,2000)
console.log(c1)
console.log(c1.min_balance)
c1.open_account()
c1.get_Balance()
c1.withdraw_amount()
c1.close_account()
var c2=new Bank_cust(102,"kala",6543784324,4000)
console.log(c2)
c2.open_account()
c2.get_Balance()
c2.withdraw_amount()
c2.close_account()
