import { Account } from './Account.js';

export class CheckingAccount extends Account{
    /*  
    #####   CheckingAccount CONSTRUCTOR   ######
    */
    constructor(branch, customer) {
        super(branch, customer, 0);
    }


    /*  
    #####   CheckingAccount METHODS   ######
    */
    withdraw(value){
        let tax = 1.10;
        return this._withdraw(value, tax);
    }

    transfer(value, account) {
        let tax = 1.15;
        return this._transfer(value, account, tax);
    }
}