import { Employee } from './Employee.js'

export class Director extends Employee{
    constructor(name, cpf) {
        super(name, 10000, cpf);
    }
}