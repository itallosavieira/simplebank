export class Account{
    /*  
    #####   Account CONSTRUCTOR   ######
    */
    constructor(branch, customer, balance){
        this._branch = branch;
        this._customer = customer;
        this._balance = balance;
    }


    /* 
    #####   Account ACCESSORS   #####
    */
    
    
    
    /* 
    #####   Account METHODS   #####
    */
    deposit(value){
        if (value <= 0 || typeof value != 'number') {
            console.error('\n# depositError\n');
            return;
        }
        this._balance += value;
    }

    _withdraw(value, tax){
        if (value >= this._balance || typeof value != 'number') {
            console.error('\n# withdrawError\n')
            return;
        }
        
        value *= tax;
        this._balance -= value;
    }

    _transfer(value, account, tax){
        if (value >= this._balance || typeof value != 'number') {
            console.error('\n# transferError\n')
            return;
        }
        
        value *= tax;
        this._balance -= value;
        account._balance += value;
    }

}