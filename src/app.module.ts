import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { UserController } from './user/user.controller';
import { ProductService } from './product/product.service';
import { ProductController } from './product/product.controller';
import { EmployeeModule } from './employee/employee.module';
import { CategoryModule } from './category/category.module';
import { CustomerController } from './customer/customer.controller';
import { CustomerService } from './customer/customer.service';
import { CustomerModule } from './customer/customer.module';
import { StudentController } from './student/student.controller';
import { StudentModule } from './student/student.module';
import { MynameController } from './myname/myname.controller';
import { RolesauthController } from './rolesauth/rolesauth.controller';

@Module({
  imports: [EmployeeModule, CategoryModule, CustomerModule, StudentModule],
  controllers: [AppController, UserController, ProductController, CustomerController, StudentController, MynameController, RolesauthController],
  providers: [AppService, ProductService, CustomerService],
})
export class AppModule {}
