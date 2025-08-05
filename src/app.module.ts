import { MiddlewareConsumer, Module, NestModule } from '@nestjs/common';
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
import { ExceptionController } from './exception/exception.controller';
import { DatabaseService } from './database/database.service';
import { DatabaseController } from './database/database.controller';
import { ConfigModule } from '@nestjs/config';
import { EvService } from './ev/ev.service';
import { EvController } from './ev/ev.controller';
import { Mongoose } from 'mongoose';
import { MongooseModule } from '@nestjs/mongoose';
import { LoggerMiddleware } from './middleware/logger/logger.middleware';

@Module({
  imports: [EmployeeModule, CategoryModule, CustomerModule, StudentModule, ConfigModule.forRoot({
    isGlobal: true,
  }),
    MongooseModule.forRoot(process.env.MONGO_URI!)
  ],
  controllers: [AppController, UserController, ProductController, CustomerController, StudentController, MynameController, RolesauthController, ExceptionController, DatabaseController, EvController],
  providers: [AppService, ProductService, CustomerService, DatabaseService, EvService],
})
export class AppModule implements NestModule {
  configure(consumer: MiddlewareConsumer) {
    consumer.apply(LoggerMiddleware).forRoutes('*');
  }
}