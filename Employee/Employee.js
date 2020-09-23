export class Employee{
    constructor(name, salary, cpf) {
        this._name = name;
        this._salary = salary;
        this._cpf = cpf; //Individual registry number

        this._password;
    }

    authenticate(password) {
        return password == this._password;
    }

    createPassword(password) {
        this._password = password;
    }
}