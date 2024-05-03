import { Controller, Get, Post } from "@nestjs/common";
import { GenerateOrder } from "./dto/generate-order.dto";
import { OrderService } from "./orders.services";

@Controller('orders')
export class OrdersController {
    constructor(
        private orderService: OrderService
    ){}

    @Get()
    getOrders(): GenerateOrder[] {
        return this.orderService.findAll();
    }

    @Post()
    createOrder(data: GenerateOrder): {} {
        return this.orderService.insertOrder(data);
    }
}