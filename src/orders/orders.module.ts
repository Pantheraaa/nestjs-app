import { Module } from '@nestjs/common';
import { OrdersController } from './orders.controller';
import { OrderService } from './orders.services';

@Module({
    controllers: [OrdersController],
    providers: [OrderService]
})
export class OrdersModule {
    constructor() {
        console.log("Orders module");
    }
}
