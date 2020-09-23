import { Employee } from './Employee.js'

export class Manager extends Employee{
    constructor(name, cpf) {
        super(name, 5000, cpf);
    }
}