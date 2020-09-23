import { Account } from './Account.js';

export class SavingAccount extends Account{
    /*  
    #####   SavingAccount CONSTRUCTOR   ######
    */
    constructor(branch, customer) {
        super(branch, customer, 0);
    }

    /*  
    #####   SavingAccount METHODS   ######
    */
    withdraw(value){
        let tax = 1.05;
        return this._withdraw(value, tax);
    }

    transfer(value, account) {
        let tax = 1.07;
        return this._transfer(value, account, tax);
    }

}