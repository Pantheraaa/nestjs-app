import { MiddlewareConsumer, Module, NestModule } from '@nestjs/common';
import { UsersController } from './users.controllers';
import { UserService } from './users.services';
import { TestMiddleware } from 'src/middlewares/test';

@Module({
    controllers: [UsersController],
    providers: [UserService]
})
export class UsersModule implements NestModule {
    configure(consumer: MiddlewareConsumer) {
        consumer.apply(TestMiddleware).forRoutes('users');
    }
    constructor() {
        console.log("Users module");
    }
}
