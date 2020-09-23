import { Customer } from './Customer.js'
import { CheckingAccount } from './Account/CheckingAccount.js'
import { SavingAccount } from './Account/SavingAccount.js'

const customerFirst = new Customer("Itallo", 12345678900);
const checkingAccountFirst = new CheckingAccount(1001, customerFirst);
const savingAccountFirst = new SavingAccount(1001, customerFirst);

checkingAccountFirst.deposit(1000);

savingAccountFirst.deposit(1000);
savingAccountFirst.transfer(100, checkingAccountFirst);


console.log(checkingAccountFirst);
console.log(savingAccountFirst);