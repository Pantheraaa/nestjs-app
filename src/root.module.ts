import { MiddlewareConsumer, Module, NestModule } from '@nestjs/common';
import { UsersModule } from './users/users.module';
import { OrdersModule } from './orders/orders.module';
import { ChatsModule } from './chats/chats.module';
import { SharedModule } from './shared/shared.module';
import { TestMiddleware } from './middlewares/test';

@Module({
  imports: [UsersModule, OrdersModule, ChatsModule, SharedModule],
  controllers: [],
  providers: [],
})
export class RootModule implements NestModule{
  configure(consumer: MiddlewareConsumer) {
    // consumer.apply(cors(), helmet(), logger).forRoutes('users'); // To implement multiple middlewares
    consumer.apply(TestMiddleware).forRoutes('users');
  }
  constructor() {
    console.log("Root module");
  }
}
