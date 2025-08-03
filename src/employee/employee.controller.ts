import { Controller, Get } from '@nestjs/common';

@Controller('employee')
export class EmployeeController {
    @Get()
    getEmploye() {
        return 'Employee data fetched successfully'
    }
}
