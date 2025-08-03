import { Injectable } from '@nestjs/common';
import { Customer } from './interfaces/customer.interface';
import { CreateCustomerDto } from './dto/create-customer.dto';

@Injectable()
export class CustomerService {
    private Customers: Customer[] = [];

    getAllCustomers(): Customer[] {
        return this.Customers;
    }

    addCustomer(CreateCustomerDto: CreateCustomerDto): Customer {
        const newCustomer: Customer = {
            id: Date.now(),
            ...CreateCustomerDto,
        };

        this.Customers.push(newCustomer)
        return newCustomer
    }
}
