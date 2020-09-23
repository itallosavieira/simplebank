import { Customer } from './Customer/Customer.js'
import { CheckingAccount } from './Account/CheckingAccount.js'
import { SavingAccount } from './Account/SavingAccount.js'
import { Director } from './Employee/Director.js'
import { Manager } from './Employee/Manager.js'
import { AuthenticationSystem } from './AuthenticationSystem.js'


/*
#####   Account TESTS   #####
*/
const customer01 = new Customer("Itallo", 12345678900);
const checkingAccount01 = new CheckingAccount(1001, customer01);
const savingAccount01 = new SavingAccount(1001, customer01);

checkingAccount01.deposit(1000);
savingAccount01.deposit(1000);
savingAccount01.transfer(100, checkingAccount01);

console.log(checkingAccount01);
console.log(savingAccount01);


/*
#####   Emloyee TESTS / AUTHENTICATION  #####
*/
const director = new Director("John", 32165498700);
director.createPassword(123456);

const manager = new Manager("Mary", 98765412388);
manager.createPassword(123)

const managerIsLoggedIn = AuthenticationSystem.login(manager, 123); //true
const directorIsLoggedIn = AuthenticationSystem.login(director, 123456); //true

console.log(managerIsLoggedIn, directorIsLoggedIn);